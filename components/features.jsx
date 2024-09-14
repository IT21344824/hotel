"use client";

import { FaBuildingColumns } from "react-icons/fa6"; // Importing icons from react-icons/fa6
import { FaSwimmer, FaBeer, FaUtensils, FaBed } from "react-icons/fa"; // Importing icons from react-icons/fa
import { MdEvent } from "react-icons/md"; // Importing event icon from react-icons/md
import { motion } from "framer-motion"; // Import Framer Motion components
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: FaBuildingColumns,
    title: "Banquet Halls",
    image: "/images/banquet-hall.jpg",
  },
  {
    icon: FaBed,
    title: "Accommodation",
    image: "/images/accommodation.jpg",
  },
  {
    icon: FaUtensils,
    title: "Restaurant",
    image: "/images/restaurant.jpg",
  },
  {
    icon: MdEvent,
    title: "Events",
    image: "/images/events.webp",
  },
  {
    icon: FaBeer,
    title: "Bar",
    image: "/images/bar.jpg",
  },
  {
    icon: FaSwimmer,
    title: "Swimming Pool",
    image: "/images/swimming-pool.webp",
  },
];

const FeaturesSection = () => {
  const [isHovering, setIsHovering] = useState(false); // Hover state to pause/resume motion

  return (
    <section id="section2" className="relative h-screen bg-gray-800">
      {/* Motion div to handle the horizontal movement */}
      <div className="h-full w-full overflow-hidden">
        <motion.div
          className="flex items-center justify-start space-x-6 py-12"
          animate={{ x: isHovering ? 0 : ["0%", "-100%"] }} // Animate from 0% to -100%
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {features.map(({ title, icon: Icon, image }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-4 bg-gray-700 rounded-lg p-4 shadow-md w-[85%] sm:w-[45%] lg:w-[40%] xl:w-[30%] min-w-[500px] transition-transform" // Minimum width of 500px for larger screens
              onMouseEnter={() => {
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
              whileHover={{ scale: 1.1 }} // Enlarge the card on hover
            >
              {/* Responsive Image with dynamic height */}
              <div className="relative w-full h-[300px] sm:h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Icon */}
              <Icon size={36} className="text-white" />
              {/* Title */}
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
