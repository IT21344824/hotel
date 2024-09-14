import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import navbarConfig from "@/config/navbarConfig";
import { FaHotel } from "react-icons/fa6";
import { appConfig } from "@/config/appConfig";

export default function Nav() {
  return (
    <header className="sticky  top-0 z-30 flex h-16 items-center justify-between border-b px-4 bg-white lg:px-6 h-12">
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
            <Link
              key={item.href}
              href={item.href}
              className="text-black hover:text-zinc-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right-side Controls */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
