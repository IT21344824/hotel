"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/cartStore"; 

const FoodItemPG = () => {
  const params = useParams(); 
  const searchParams = useSearchParams(); 
  const { addItem } = useCartStore(); 
  const [quantity, setQuantity] = useState(1);

  const item = {
    id: params.id, 
    name: searchParams.get("name"), 
    price: searchParams.get("price"),
    img: searchParams.get("img"),
    description: searchParams.get("description"),
  };

  const handleQtyChange = (increment) => {
    setQuantity(prevQty => increment ? prevQty + 1 : Math.max(1, prevQty - 1));
  };

  const handleAddToCart = () => {
    addItem({ ...item, quantity });
  };

  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="flex gap-10 p-10 shadow-lg rounded-md">
        <div className="w-96">
          <Image
            src={item.img}
            alt={item.name}
            className="rounded-sm"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold">{item.name}</h1>
          <h4 className="text-2xl text-red-500">LKR : {item.price}</h4>
          <p className="text-gray-700">
            <span className="font-bold">Description :</span> {item.description}
          </p>

          {/* Quantity Control */}
          <div className="flex items-center space-x-4">
            <span className="font-bold">Quantity:</span>
            <div className="flex items-center">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleQtyChange(false)}
                className="rounded-md"
              >
                -
              </Button>
              <span className="mx-3 text-lg">{quantity}</span>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleQtyChange(true)}
                className="rounded-md"
              >
                +
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button onClick={handleAddToCart} className="mt-6">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemPG;
