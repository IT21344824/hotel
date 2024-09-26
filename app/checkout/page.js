"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
// import { Elements } from "@stripe/react-stripe-js";

const Page = () => {
  const { cart, addItem, removeItem, updateQuantity } = useCartStore(); // Zustand cart store
  const [transportMethod, setTransportMethod] = useState("");
  const [subtotal, setSubtotal] = useState(0); // Initialize total to 0 (default)
  const [total, setTotal] = useState(0); // Initialize total to 0 (default)

  const inputFiledData = [
    { Name: "First name", type: "text", placeholder: "First name", value: "" },
    { Name: "Last name", type: "text", placeholder: "Last name", value: "" },
    { Name: "Address line 1", type: "text", placeholder: "line 1", value: "" },
    { Name: "Address line 2", type: "text", placeholder: "line 2", value: "" },
    { Name: "City", type: "text", placeholder: "City", value: "" },
  ];

  const handleTransportChange = (value) => {
    setTransportMethod(value);
    if (value == "delivery") {
      window.open("https://www.google.com/maps", "_blank");
    }
  };

  useEffect(() => {
    const subTotal = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
    const total = subTotal + 20; // Assuming delivery fee is fixed at $20, add it to the total
    setSubtotal(subTotal);
    setTotal(total);
  }, [cart]);

  return (
    <div className="mx-20 mt-20">
      <div className="flex w-full items-start justify-center gap-9 ">
        <div className="w-2/3 ">
          <div className="mt-10 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2 className="mb-4">User Details</h2>
            {inputFiledData.map((category, index) => (
              <div key={index} className="ml-10">
                {category.Name}
                <Input
                  type={category.type}
                  placeholder={category.placeholder}
                  className="mb-5 w-[80%]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 h-full w-1/3">
          <div className="mb-10 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2>Transport methods</h2>
            <div className="mx-10 mt-5">
              <RadioGroup
                defaultValue={transportMethod}
                onValueChange={handleTransportChange}
                className="gap-4 "
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

          <div className=" rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2>Total</h2>
            <div className="mx-6 mt-3">
              <div className="flex items-center justify-between">
                <p>Sub total</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Delivery</p>
                <p> $20</p>
              </div>

              <div className="flex items-center justify-between">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <Button
                className="mt-5 w-full rounded-md bg-amber-400 px-6 py-3 text-white hover:bg-amber-500"
                // className=""
              >
                {" "}
                Check out{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
