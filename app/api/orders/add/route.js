import { auth } from "@/lib/NextAuth";
import { db } from "@/lib/db";

export const POST = async (req) => {
  // Authenticate the user
  const session = await auth();

  // Redirect to /sign-in if not authenticated
  if (!session || !session.user) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    // get details as json
    const body = await req.json();
    const {
      cart, // Cart items to be stored as JSON
      subtotal,
      delivery_fee,
      total,
      transportMethod,
      userDetails,
    } = body;

    // Log the incoming request data
    console.log("Request Data:", body);

    // Create a new order with cartItems stored as a JSON object
    const newOrder = await db.order.create({
      data: {
        user: { connect: { id: session.user.id } }, // Connect to the authenticated user
        cartItems: cart, // Store the cart items directly in the orders table
        subtotal: parseFloat(subtotal), // Ensure subtotal is a number
        deliveryFee: parseFloat(delivery_fee), // Ensure delivery fee is a number
        total: parseFloat(total), // Ensure total is a number
        transportMethod: transportMethod,
        userDetails: userDetails.firstName, // Make sure this matches your schema
        address: userDetails.addressLine1, // Make sure this matches your schema
      },
    });

    return new Response(JSON.stringify(newOrder), {
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
