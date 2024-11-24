import { auth } from "@/lib/NextAuth";
import { db } from "@/lib/db";

export const GET = async (req) => {
  // Authenticate the user
  const session = await auth();

  // Redirect to /sign-in if not authenticated
  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    // Fetch all events for the authenticated user
    const events = await db.event.findMany({
      where: { userId: session.user.id },
      include: {
        // Include related entities if needed (e.g., cartItems)
      },
    });

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new Response(`Internal server error: ${error.message}`, {
      status: 500,
    });
  }
};