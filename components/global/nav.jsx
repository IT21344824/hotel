"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import navbarConfig from "@/config/navbarConfig";
import { FaHotel } from "react-icons/fa6";
import { appConfig } from "@/config/appConfig";

export default function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      {/* Main Navbar shown when scrolling */}
      {isVisible ? (
        <header
          className="sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 bg-white lg:px-6 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            {/* Logo */}
            <Link
              className={`flex items-center space-x-1 text-xl font-bold"text-white hover:text-zinc-500 dark:text-black      }`}
              href={appConfig.href}
              aria-label={`Go to ${appConfig.name} homepage`}
            >
              <span className="overflow-hidden rounded-lg text-amber-300" aria-hidden="true">
                {/* Replace FaHotel with your custom logo if needed */}
                <FaHotel size={36} aria-hidden="true" />
              </span>
              <span className="text-xl font-extrabold"> {appConfig.name} </span>
            </Link>

            {/* Navbar Items for Larger Screens */}
            <nav className="hidden lg:flex lg:space-x-8 ml-8">
              {Object.values(navbarConfig).map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setDropdownVisible(true)}

                >
                  <Link
                    href={item.href}
                    className="text-black hover:text-gray-500"

                  >
                    {item.label}
                  </Link>

                  {/* Dropdown for Team */}
                  {item.subItems && dropdownVisible && (
                    <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
                      onMouseLeave={() => item.subItems && setDropdownVisible(false)}>
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

          {/* Right-side Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </header>
      ) : (
        /* Different Navbar shown when at the top */
        <header
          className="absolute top-0 left-0 w-full z-30 flex h-16 items-center justify-around px-4 lg:px-6 bg-gray-50 opacity-60 text-black transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-20">
            {/* Logo */}
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

            {/* Navbar Items for Larger Screens */}
            <nav className="hidden lg:flex lg:space-x-8 ml-8">
              {Object.values(navbarConfig).map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setDropdownVisible(true)}
                >
                  <Link
                    href={item.href}
                    className="text-black hover:text-gray-500"
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown for Team */}
                  {item.subItems && dropdownVisible && (
                    <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
                      onMouseLeave={() => item.subItems && setDropdownVisible(false)}>
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

          {/* Right-side Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </header>
      )}
    </>
  );
}