"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore"; // Zustand cart store

const FoodItemPG = () => {
  const params = useParams(); // For dynamic route parameters
  const searchParams = useSearchParams(); // For query parameters
  const { addItem } = useCartStore(); // Use Zustand store for adding items to the cart
  const [quantity, setQuantity] = useState(1);

  const item = {
    id: params.id, // Get the id from dynamic route
    name: searchParams.get("name"), // Get the name from the query
    price: searchParams.get("price"),
    img: searchParams.get("img"),
    description: searchParams.get("description"),
  };

  const handleQtyIncrement = () => {
    setQuantity((previousCount) => previousCount + 1);
  };
  const handleQtyDecrement = () => {
    // Ensure quantity doesn't go below 1
    setQuantity((previousCount) => {
      if (previousCount > 1) {
        return previousCount - 1;
      }
      return 1; // If the quantity is already 1, keep it at 1
    });
  };

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <div className="mt-32 flex items-center justify-center  ">
      <div className="flex gap-10 p-10 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)] ">
        <div className="">
          <Image
            src={item.img}
            alt={item.name}
            className={`h-full w-full rounded-sm`}
            width={400}
            height={400}
          />
        </div>
        <div>
          <h1>{item.name}</h1>
          <h4 className="text-red-500">LKR : {item.price}</h4>
          <p>
            <span className="font-bold">Description :</span> {item.description}
          </p>
          <div>
            <span className="font-bold">Quantity :</span>{" "}
            <div className="relative mb-8 ml-10 mt-2 flex items-center">
              <Button
                variant="secondary"
                size="icon"
                data-input-counter-decrement="counter-input"
                className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                onClick={handleQtyDecrement}
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </Button>

              <div className="mx-3 text-center text-sm font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                {quantity}
              </div>
              <Button
                variant="secondary"
                size="icon"
                data-input-counter-decrement="counter-input"
                className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                onClick={handleQtyIncrement}
              >
                <svg
                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <Button onClick={() => handleAddToCart(item)}> add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemPG;
