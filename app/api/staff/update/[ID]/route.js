import { db } from "@/lib/db";
import { auth } from "@/lib/NextAuth";

export const PUT = async (req, { params }) => {
  // Ensure that only PUT requests are handled
  if (req.method !== "PUT") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Ensure params is properly destructured
  const { ID: staffID } = params;

  // Authenticate the user
  const session = await auth();

  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    // Get the request body (staff data)
    const body = await req.json();

    // Log the incoming request data for debugging purposes
    console.log("Request Data:", body);

    // Attempt to update the staff member's details in the database
    const updatedStaff = await db.staff.update({
      where: {
        id: staffID, // Find the staff by ID
      },
      data: {
        userId: session.user.id, // Connect the staff to the authenticated user
        Name: body.Name,
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

    // Return a success response
    return new Response(
      JSON.stringify({
        message: "Staff updated successfully",
        staff: updatedStaff, // Optionally, return the updated staff details
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating staff:", error);
    return new Response(`Failed to update staff: ${error.message}`, {
      status: 500,
    });
  }
};
