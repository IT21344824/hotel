"use client";
import React, { useState } from "react";
import Image from "next/image";
import { menuIcon } from "@/config/iconConfig";
import { menu_Dummy_1 } from "@/components/dummy/menu_Dummy";
import FoodCard from "@/components/menu/FoodCard";
import { useCartStore } from "@/hooks/cartStore";
import Link from "next/link";
import { Button } from "../ui/button";

const MenuContainer = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const { addItem } = useCartStore();

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleAddToCart = (item) => addItem(item);

  return (
    <div className="px-10 py-10">
      <div className="flex flex-col justify-center items-center bg-gray-100 p-10 rounded-md shadow-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center text-orange-400">
            <span className="flex-grow border-t border-orange-400 mx-4"></span>
            <p className="text-2xl font-bold font-Lobster">Food Menu</p>
            <span className="flex-grow border-t border-orange-400 mx-4"></span>
          </div>
          <Link href="/three">
            <Button className="rounded-md bg-orange-600 px-6 py-3 text-white hover:bg-orange-900">
              Visit 3D Restaurant
            </Button>
          </Link>
          <p className="text-4xl text-black font-bold mt-2">
            Most Popular Items
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10 border-b-2 border-black">
          {Object.keys(menuIcon).map((key) => (
            <div
              key={key}
              className={`flex text-black  items-center gap-3 cursor-pointer border-b-4 ${activeTab === key ? "border-orange-500" : "border-transparent"
                }`}
              onClick={() => handleTabClick(key)}
            >
              <Image
                src={menuIcon[key].icon}
                alt={menuIcon[key].name}
                width={84}
                height={84}
                className="h-14 w-14"
              />
              <div>
                <p className="font-bold">{menuIcon[key].name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Food Items (using FoodCard) */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {menu_Dummy_1.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
