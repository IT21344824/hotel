"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import navbarConfig from "@/config/navbarConfig";
import { useAuth } from '@/hooks/session';
import Logout from '@/components/userComps/Logout';

//icons
import { FaHotel } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";

import { appConfig } from "@/config/appConfig";
import { useCartStore } from "@/hooks/cartStore";
import Image from "next/image";

export default function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Added state to track hydration
  const { cart, addItem, removeItem, updateQuantity } = useCartStore(); // Zustand cart store
  const { session, isLoading, isAuthenticated } = useAuth(); // Use custom hook


  // Ensure component is mounted (client-side rendering)
  useEffect(() => {
    setIsMounted(true); // Set to true after mounting (hydration phase complete)
  }, []);

  // Detect scroll and toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Render loading state if session is loading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isVisible ? (
        // when scrolling show this
        <header
          className="sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 bg-white lg:px-6 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            <Link
              className="flex items-center space-x-1 text-xl font-bold text-black hover:text-zinc-500 dark:text-black"
              href={appConfig.href}
              aria-label={`Go to ${appConfig.name} homepage`}
            >
              <span className="overflow-hidden rounded-lg text-amber-300" aria-hidden="true">
                <FaHotel size={36} aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold"> {appConfig.name} </span>
            </Link>

            <nav className="hidden lg:flex lg:space-x-8 ml-8">
              {Object.values(navbarConfig).map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setDropdownVisible(true)}
                >
                  <Link href={item.href} className="text-black hover:text-gray-500">
                    {item.label}
                  </Link>
                  {item.subItems && dropdownVisible && (
                    <div
                      className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
                      onMouseLeave={() => item.subItems && setDropdownVisible(false)}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* Cart Icon with Item Count */}
            <div className="relative">
              <button onClick={toggleCart} aria-label="Toggle Cart">
                <MdShoppingCart size={24} />
                {isMounted && cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </button>
              {/* Cart dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    <>
                      <ul className="space-y-4">
                        {cart.map((item) => (
                          <li key={item.id} className="flex justify-between items-start mb-2">
                            {/* Display Item Image */}
                            <div className="flex items-start">
                              <div>
                                <div className="w-20 h-20 relative">
                                  <Image
                                    src={item.img}
                                    alt={item.name}
                                    layout="fill"
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                {/* Quantity Controls */}
                                <div className="flex justify-between items-center mt-2">
                                  <button
                                    className="cursor-pointer"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity === 1}
                                  >
                                    <AiFillMinusCircle className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="cursor-pointer"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <AiFillPlusCircle className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              <div className="ml-3 flex flex-col ">
                                {/* Item name */}
                                <p className="font-medium">{item.name}</p>
                                {/* Quantity and price */}
                                <p className="text-sm text-gray-500">
                                  {item.quantity} x ${item.price}
                                </p>
                                {/* Total price for this item */}
                                <p className="text-sm text-gray-500">${item.quantity * item.price}</p>
                              </div>
                            </div>
                            {/* remove item */}
                            <div className="flex items-center space-x-2 ">

                              <button
                                className="text-red-500 ml-2"
                                onClick={() => removeItem(item.id)}
                              >
                                <MdDeleteForever />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* Display the total price for all items */}
                      <div className="mt-4">
                        <p className="text-lg font-semibold">
                          Total: ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}
                        </p>
                      </div>
                      <Link href="/checkout">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">
                          Checkout
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="bg-slate-100 p-2 border-2 rounded-md cursor-pointer hover:bg-slate-200">
              <Link href="/orders">
                <TbTruckDelivery />
              </Link>

            </div>
            <div>
              {isAuthenticated ? (
                <div className="flex gap-x-2"><div className='flex items-center gap-x-2 text-sm'>
                  {/* {session.user.name} */}
                  {session?.user?.image && (
                    <Image className=' rounded-full '
                      width={30}
                      height={30}
                      alt='User'
                      src={session?.user?.image || ""} />
                  )}
                </div>
                  <Logout />
                </div>
              ) : (
                <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row ">
                  <Link className="group relative inline-flex border border-red-500 focus:outline-none w-full sm:w-auto"
                    href="/sign-in">
                    <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-red-500 ring-1 ring-red-500 ring-offset-1 ring-offset-red-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                      log in
                    </span>
                  </Link>
                  <Link className="group relative inline-flex border border-red-600 focus:outline-none w-full sm:w-auto"
                    href="/sign-up" >
                    <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                      sign up</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      ) : (
        // when not scrolling show this
        <header className=" top-0 left-0 w-full z-30 flex h-16 items-center justify-around px-4 lg:px-6 bg-white text-black transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-20">
            <Link
              className="flex items-center space-x-1 text-xl font-bold text-black hover:text-gray-300"
              href={appConfig.href}
              aria-label={`Go to ${appConfig.name} homepage`}
            >
              <span className="overflow-hidden rounded-lg text-amber-300" aria-hidden="true">
                <FaHotel size={36} aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold"> {appConfig.name} </span>
            </Link>

            <nav className="hidden lg:flex lg:space-x-8 ml-8">
              {Object.values(navbarConfig).map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setDropdownVisible(true)}
                >
                  <Link href={item.href} className="text-black hover:text-gray-500">
                    {item.label}
                  </Link>
                  {item.subItems && dropdownVisible && (
                    <div
                      className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
                      onMouseLeave={() => item.subItems && setDropdownVisible(false)}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4 ">
            <ThemeToggle />
            {/* Cart Icon with Item Count */}
            <div className="relative">
              <button onClick={toggleCart} aria-label="Toggle Cart">
                <MdShoppingCart size={24} />
                {isMounted && cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </button>
              {/* Cart dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    <>
                      <ul className="space-y-4">
                        {cart.map((item) => (
                          <li key={item.id} className="flex justify-between items-start mb-2">
                            {/* Display Item Image */}
                            <div className="flex items-start">
                              <div>
                                <div className="w-20 h-20 relative">
                                  <Image
                                    src={item.img}
                                    alt={item.name}
                                    layout="fill"
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                {/* Quantity Controls */}
                                <div className="flex justify-between items-center mt-2">
                                  <button
                                    className="cursor-pointer"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity === 1}
                                  >
                                    <AiFillMinusCircle className="w-5 h-5" />
                                  </button>
                                  <button
                                    className="cursor-pointer"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <AiFillPlusCircle className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              <div className="ml-3 flex flex-col ">
                                {/* Item name */}
                                <p className="font-medium">{item.name}</p>
                                {/* Quantity and price */}
                                <p className="text-sm text-gray-500">
                                  {item.quantity} x ${item.price}
                                </p>
                                {/* Total price for this item */}
                                <p className="text-sm text-gray-500">${item.quantity * item.price}</p>
                              </div>
                            </div>
                            {/* remove item */}
                            <div className="flex items-center space-x-2 ">

                              <button
                                className="text-red-500 ml-2"
                                onClick={() => removeItem(item.id)}
                              >
                                <MdDeleteForever />
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* Display the total price for all items */}
                      <div className="mt-4">
                        <p className="text-lg font-semibold">
                          Total: ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}
                        </p>
                      </div>
                      <Link href="/checkout">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">
                          Checkout
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {isAuthenticated ? (
              <div className="bg-slate-100 p-2 border-2 rounded-md cursor-pointer hover:bg-slate-200">
                <Link href="/orders">
                  <TbTruckDelivery />
                </Link>
              </div>
            ) : ('')}

            <div>
              {isAuthenticated ? (
                <div className="flex gap-x-2"><div className='flex items-center gap-x-2 text-sm'>
                  {/* {session.user.name} */}
                  {session?.user?.image && (
                    <Link href="/profile">
                      <Image className=' rounded-full '
                        width={30}
                        height={30}
                        alt='User'
                        src={session?.user?.image || ""} />
                    </Link>

                  )}
                </div>
                  <Logout />
                </div>
              ) : (
                <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row ">
                  <Link className="group relative inline-flex border border-red-500 focus:outline-none w-full sm:w-auto"
                    href="/sign-in">
                    <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-red-500 ring-1 ring-red-500 ring-offset-1 ring-offset-red-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                      log in
                    </span>
                  </Link>
                  <Link className="group relative inline-flex border border-red-600 focus:outline-none w-full sm:w-auto"
                    href="/sign-up" >
                    <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                      sign up</span>
                  </Link>


                </div>
              )}
            </div>

          </div>

        </header>
      )}
    </>
  );
}
