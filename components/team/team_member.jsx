"use client";
import React, { useState } from 'react';
import { chefDummy } from "@/components/dummy/teamDummy";
// import { socialIcon } from "@/config/iconConfig";

const Team_member = () => {
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
                {chefDummy.map((chef, index) => {
                    const [isHovered, setIsHovered] = useState(false);

                    return (
                        <div
                            key={index}
                            className="text-center shadow-md pt-5 px-3 rounded-sm bg-white cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="max-w-xs overflow-hidden bg-cover bg-no-repeat h-60 w-60 flex justify-center items-center rounded-full">
                                <img
                                    src={chef.img}
                                    alt={chef.name}
                                    className={`h-full w-full object-cover object-center transition-transform duration-300 ease-in-out ${isHovered ? "scale-110" : ""}`}
                                />
                            </div>
                            <h3 className="text-xl font-bold mt-4">{chef.name}</h3>
                            <p className="text-sm mb-4">{chef.designation}</p>

                            <div className={`flex justify-center space-x-4 mt-2 `}
                                style={{
                                    transition: 'opacity 300ms ease-in-out',
                                    opacity: isHovered ? 1 : 0,
                                    pointerEvents: isHovered ? 'auto' : 'none', // Prevent clicks when not visible
                                }}>

                                {chef.follow.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='bg-orange-400 rounded-b-lg rounded-full p-4 '
                                    >
                                        <img
                                            src={social.img}
                                            alt={social.platform}
                                            className="h-5 w-5"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Team_member;
