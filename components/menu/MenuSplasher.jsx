import React from "react";
import { menuHeroConfig } from "@/config/compHeroConfig";
import Image from 'next/image';
const Menuplasher = () => {
    return (
        <div className="relative  w-full">
            <Image
                src={menuHeroConfig.src}
                className="h-80 w-full object-cover"
                alt="Homepage"
            />
            {/* Full-screen semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white font-bold text-7xl">{menuHeroConfig.name}</p>
                    <p className=" text-2xl font-bold uppercase">
                        {menuHeroConfig.navigation.map((part, index) => (
                            <span key={index} className={part.color}>
                                {part.text}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Menuplasher;
