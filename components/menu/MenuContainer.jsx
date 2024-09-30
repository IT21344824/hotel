"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { menuIcon } from "@/config/iconConfig";
import { menu_Dummy_1 } from "@/components/dummy/menu_Dummy";
import Link from 'next/link';
import { BsCartPlusFill } from 'react-icons/bs'; // Import Cart Icon
import { useCartStore } from "@/hooks/cartStore"; // Zustand cart store

const MenuContainer = () => {
    const [activeTab, setActiveTab] = useState("breakfast");
    const { addItem } = useCartStore(); // Use Zustand store for adding items to the cart

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAddToCart = (item) => {
        addItem(item);
    };

    return (
        <div>
            <div className='flex flex-col justify-around items-center bg-gray-200 mx-20 my-10'>
                <div className="text-center my-8">
                    <div className="flex items-center text-orange-400">
                        <span className="flex-grow border-t border-orange-400 mx-4 min-w-[50px]"></span>
                        <p className="text-2xl font-bold font-Lobster">Food Menu</p>
                        <span className="flex-grow border-t border-orange-400 mx-4 min-w-[50px]"></span>
                    </div>
                    <p className="text-4xl font-bold mt-2">Most Popular Items</p>
                </div>

                <div className='m-10'>
                    <div className='flex justify-center gap-10 border-b-2 border-gray-300'>
                        <div
                            className={`flex items-center justify-center gap-3 cursor-pointer border-b-4 ${activeTab === 'breakfast' ? 'border-orange-500' : 'border-transparent'}`}
                            onClick={() => handleTabClick('breakfast')}
                        >
                            <Image
                                src={menuIcon.Breakfast.icon}
                                alt={menuIcon.Breakfast.name}
                                width={84}
                                height={84}
                                className='h-14 w-14'
                            />
                            <div>
                                <p>Popular</p>
                                <p className='font-bold'>{menuIcon.Breakfast.name}</p>
                            </div>
                        </div>

                        <div
                            className={`flex items-center justify-center gap-3 cursor-pointer border-b-4 ${activeTab === 'lunch' ? 'border-orange-500' : 'border-transparent'}`}
                            onClick={() => handleTabClick('lunch')}
                        >
                            <Image
                                src={menuIcon.Lunch.icon}
                                alt={menuIcon.Lunch.name}
                                width={56}
                                height={56}
                                className='h-14 w-14'
                            />
                            <div>
                                <p>Special</p>
                                <p className='font-bold'>{menuIcon.Lunch.name}</p>
                            </div>
                        </div>

                        <div
                            className={`flex items-center justify-center gap-3 cursor-pointer border-b-4 ${activeTab === 'dinner' ? 'border-orange-500' : 'border-transparent'}`}
                            onClick={() => handleTabClick('dinner')}
                        >
                            <Image
                                src={menuIcon.Dinner.icon}
                                alt={menuIcon.Dinner.name}
                                width={56}
                                height={56}
                                className='h-14 w-14'
                            />
                            <div>
                                <p>Lovely</p>
                                <p className='font-bold'>{menuIcon.Dinner.name}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center justify-center gap-10 mt-10'>
                        {menu_Dummy_1.map(item => (
                            <div key={item.id} className='relative group'>
                                <Link href={{
                                    pathname: `/restaurant/${item.id}`,
                                    query: {
                                        name: item.name,
                                        price: item.price,
                                        img: item.img,
                                        description: item.description
                                    }
                                }}>
                                    <div
                                        style={{ '--image-url': `url(${item.img})` }}
                                        className='h-60 w-60 bg-[image:var(--image-url)] bg-cover bg-center rounded-lg'
                                    >
                                        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg">
                                            <p className="text-2xl text-white">{item.name}</p>
                                            <p className="text-sm text-orange-300">LKR : {item.price}</p>
                                        </div>
                                    </div>
                                </Link>

                                {/* Add to Cart Button */}
                                <button
                                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    <BsCartPlusFill size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuContainer;
