"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import navbarConfig from "@/config/navbarConfig";
import { FaHotel } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { appConfig } from "@/config/appConfig";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";

export default function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Added state to track hydration
  const { cart, addItem, removeItem, updateQuantity } = useCartStore(); // Zustand cart store

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

  return (
    <>
      {isVisible ? (
        <header
          className="sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 bg-white lg:px-6 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            <Link
              className="flex items-center space-x-1 text-xl font-bold text-white hover:text-zinc-500 dark:text-black"
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
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-md"
                              />
                              <div className="ml-3 flex flex-col">
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
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <button
                                className="bg-gray-200 px-2 rounded"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity === 1}
                              >
                                -
                              </button>
                              <button
                                className="bg-gray-200 px-2 rounded"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                              {/* Remove Item */}
                              <button
                                className="text-red-500 ml-2"
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
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
          </div>
        </header>
      ) : (
        <header className="absolute top-0 left-0 w-full z-30 flex h-16 items-center justify-around px-4 lg:px-6 bg-white text-black transition-all duration-300 ease-in-out">
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
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-md"
                              />
                              <div className="ml-3 flex flex-col">
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
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <button
                                className="bg-gray-200 px-2 rounded"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity === 1}
                              >
                                -
                              </button>
                              <button
                                className="bg-gray-200 px-2 rounded"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                              <button
                                className="text-red-500 ml-2"
                                onClick={() => removeItem(item.id)}
                              >
                                Remove
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
          </div>
        </header>
      )}
    </>
  );
}
