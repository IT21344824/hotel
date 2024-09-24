"use client";
import React, { useState } from 'react';
import { chefDummy } from "@/components/dummy/teamDummy";
import Image from 'next/image';

const TeamMember = () => {
    const [hoveredChefIndex, setHoveredChefIndex] = useState(null); // State to track which chef is hovered

    const handleMouseEnter = (index) => {
        setHoveredChefIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredChefIndex(null);
    };

    return (
        <div className='flex flex-col justify-around items-center bg-gray-200 mx-20 my-10'>
            <div className="text-center my-8">
                <div className="flex items-center text-orange-400">
                    <span className="flex-grow border-t border-orange-400 mx-4 min-w-[50px]"></span>
                    <p className="text-2xl font-bold font-Lobster">Team Members</p>
                    <span className="flex-grow border-t border-orange-400 mx-4 min-w-[50px]"></span>
                </div>
                <p className="text-4xl font-bold mt-2">Our Master Chefs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
                {chefDummy.map((chef, index) => (
                    <div
                        key={index}
                        className="text-center shadow-md pt-5 px-3 rounded-sm bg-white cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-xs overflow-hidden bg-cover bg-no-repeat h-60 w-60 flex justify-center items-center rounded-full">
                            <Image
                                src={chef.img}
                                alt={chef.name}
                                className={`h-full w-full object-cover object-center transition-transform duration-300 ease-in-out ${hoveredChefIndex === index ? "scale-110" : ""}`}
                                width={400}
                                height={400}
                            />
                        </div>
                        <h3 className="text-xl font-bold mt-4">{chef.name}</h3>
                        <p className="text-sm mb-4">{chef.designation}</p>

                        <div className={`flex justify-center space-x-4 mt-2`}
                            style={{
                                transition: 'opacity 300ms ease-in-out',
                                opacity: hoveredChefIndex === index ? 1 : 0,
                                pointerEvents: hoveredChefIndex === index ? 'auto' : 'none',
                            }}>
                            {chef.follow.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='bg-orange-400 rounded-b-lg rounded-full p-4 '
                                >
                                    <Image
                                        src={social.img}
                                        alt={social.platform}
                                        className="h-5 w-5"
                                        width={56}
                                        height={56}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMember;
