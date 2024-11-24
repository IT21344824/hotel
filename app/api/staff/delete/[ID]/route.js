import { db } from "@/lib/db";
import { auth } from "@/lib/NextAuth";

export const DELETE = async (req, { params }) => {
  // Ensure params is awaited and properly destructured
  const { ID: staffID } = params;

  // Authenticate the user
  const session = await auth();

  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    // Attempt to delete the staff by ID
    await db.staff.delete({
      where: { id: staffID },
    });

    return new Response("Staff deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting staff:", error);
    return new Response(`Failed to delete staff: ${error.message}`, {
      status: 500,
    });
  }
};
