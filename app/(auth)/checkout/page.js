"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/hooks/cartStore";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ORDERS_API_ROUTES } from "@/config/RouteConfig";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  addressLine1: z.string().min(2, {
    message: "Please enter Address Line 1.",
  }),
  addressLine2: z.string().min(2, {
    message: "Please enter Address Line 2.",
  }),
  city: z.string().min(2, {
    message: "Please enter City.",
  }),
});

const CheckoutPG = () => {
  const { data: session } = useSession();
  const { cart } = useCartStore(); // Zustand cart store
  const [transportMethod, setTransportMethod] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(10);
  const [total, setTotal] = useState(0);

  // console.log("Session data:", session); // Inspect the session data

  useEffect(() => {
    const subTotal = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
    const totalAmount = subTotal + delivery; // Updated to use the delivery fee from state
    setSubtotal(subTotal);
    setTotal(totalAmount);
  }, [cart, delivery]);

  const handleTransportChange = (value) => {
    setTransportMethod(value);
    if (value === "delivery") {
      window.open("https://www.google.com/maps", "_blank");
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
    },
  });

  const onSubmit = async (values) => {
    const checkoutData = {
      cart,
      userDetails: values,
      transportMethod,
      subtotal,
      delivery_fee: delivery,
      total,
    };

    const response = await fetch(ORDERS_API_ROUTES.ADD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to submit data: ${errorData}`);
    }

    alert("Order placed successfully");
    const result = await response.json();
    // You can handle success notification here, e.g., with toast
    console.log(checkoutData);
    router.push("/orders");
    // Redirect to /orders after successful submission
    // router.push("/orders");
  };

  return (
    <div className="mt-32">
      {session ? (
        <div className="mx-20 mt-20">
          <div className="bg- flex w-full items-start justify-center gap-9">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full gap-10 "
              >
                <div className="w-2/3 ">
                  <div className="mt-10 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
                    <h2 className="mb-4">User Details</h2>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="addressLine1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address Line 1</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="addressLine2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address Line 2</FormLabel>
                          <FormControl>
                            <Input placeholder="Apt 4B" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* <Button type="submit">Submit</Button> */}

                    {/* </Form> */}
                  </div>
                </div>

                <div className="mt-10 h-full w-1/3">
                  <div className="mb-10 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
                    <h2>Transport Methods</h2>
                    <div className="mx-10 mt-5">
                      <RadioGroup
                        defaultValue={transportMethod}
                        onValueChange={handleTransportChange}
                        className="gap-4"
                      >
                        <div className="flex items-center justify-between rounded-md bg-gray-100 p-2 shadow-md hover:bg-gray-200">
                          <Label htmlFor="r1">Take Away</Label>
                          <RadioGroupItem value="Take_Away" id="r1" />
                        </div>
                        <div className="flex items-center justify-between rounded-md bg-gray-100 p-2 shadow-md hover:bg-gray-200">
                          <Label htmlFor="r2">Delivery</Label>
                          <RadioGroupItem value="delivery" id="r2" />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
                    <h2>Total</h2>
                    <div className="mx-6 mt-3">
                      <div className="flex items-center justify-between">
                        <p>Sub total</p>
                        <p>${subtotal}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Delivery</p>
                        <p>${delivery}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>Total</p>
                        <p>${total}</p>
                      </div>
                      <Button
                        className="mt-5 w-full rounded-md bg-amber-400 px-6 py-3 text-white hover:bg-amber-500"
                        // onClick={handleCheckout}
                        type="submit"
                      >
                        Check out
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        "Not logged in"
      )}
    </div>
  );
};

export default CheckoutPG;
