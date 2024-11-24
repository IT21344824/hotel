import { auth } from "@/lib/NextAuth";
import { db } from "@/lib/db";

export const DELETE = async (req, { params }) => {
  // Authenticate the user
  const session = await auth();

  // Redirect to /sign-in if not authenticated
  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  console.log("Parameters received:", params);

  try {
    // Extract event ID from request parameters and Renamed as eventID
    const { ID: eventID } = params;

    // Find the event to delete
    const eventToDelete = await db.event.findUnique({
      where: {
        id: eventID,
      },
    });

    // Check if the event exists and belongs to the authenticated user
    if (!eventToDelete || eventToDelete.userId !== session.user.id) {
      return new Response("Event not found or not authorized to delete", {
        status: 403,
      });
    }

    // Delete the event
    await db.event.delete({
      where: {
        id: eventID,
      },
    });

    // Inside your DELETE handler
    return new Response("Event deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting event:", error);
    return new Response(`Internal server error: ${error.message}`, {
      status: 500,
    });
  }
};
