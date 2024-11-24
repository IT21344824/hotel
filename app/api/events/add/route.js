import { auth } from "@/lib/NextAuth";
import { db } from "@/lib/db";

export const POST = async (req) => {
  // Authenticate the user
  const session = await auth();

  // Redirect to /sign-in if not authenticated
  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  // to check who is user
  console.log("user id:", session.user.id);

  try {
    // get details as json
    const body = await req.json();

    // Log the incoming request data

    console.log("Request Data:", body);

    // Create a new event with Event_Details, Task_description, Table_Arrangements, File_Uploads stored as a JSON object
    const newEvent = await db.event.create({
      data: {
        // user: { connect: { id: session.user.id } }, // Connect to the authenticated user
        userId: session.user.id,
        Event_Details: body.Event_Details, // Pass Event_Details as it is
        Music: body.Music,
        Meal_Plan: body.Meal_Plan,
        Task_description: body.Task_description,
        Additional_Details: body.Additional_Details,
        Table_Arrangements: body.Table_Arrangements,
        File_Uploads: body.File_Uploads,
      },
    });

    return new Response(JSON.stringify(newEvent), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding order:", error);
    return new Response(`Internal server error: ${error.message}`, {
      status: 500,
    });
  }
};
