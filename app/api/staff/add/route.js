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

    // Create a new staff with Details, Task_description, Table
    const newEvent = await db.staff.create({
      data: {
        // user: { connect: { id: session.user.id } }, // Connect to the authenticated user
        userId: session.user.id,
        Name: body.Name, // Pass staff Details as it is
        Contact: body.Contact,
        Email: body.Email,
        Company: body.Company,
        JobTitle: body.JobTitle,
        Street: body.Street,
        City: body.City,
        State: body.State,
        Country: body.Country,
        Website: body.Website,
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
