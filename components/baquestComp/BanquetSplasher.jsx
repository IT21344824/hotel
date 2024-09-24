import React from "react";
import { banquetHeroConfig } from "@/config/compHeroConfig";
import { banquetIcon } from "@/config/iconConfig";
import { Button } from "../ui/button";
import Image from "next/image";

const BanquetSplasher = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={banquetHeroConfig.src}
        className="w-full h-full object-cover"
        alt="Homepage"
      />

      {/* Full-screen semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text at the bottom */}
      <div className="absolute flex flex-col top-20 text-white p-6 w-full items-center justify-center">
        <p className=" text-2xl font-bold uppercase">
          {banquetHeroConfig.navigation.map((part, index) => (
            <span key={index} className={part.color}>
              {part.text}
            </span>
          ))}
        </p>

        <div className="text-center flex items-center justify-between gap-96 mt-20 ">
          <div className="text-2xl font-bold mb-4 flex-1 ">
            <Button variant="secondary" size="lg" className="text-xl rounded-sm bg-orange-400 text-white gap-4 absolute bottom-10 left-40">
              <Image
                src={banquetIcon.startEvent.icon}
                alt={banquetIcon.startEvent.name}
                width={84}
                height={84}
                className='h-5 w-5'
              /> Start plan your event now
            </Button>
          </div>

          <div className="text-left flex-1">
            <p
              className="text-4xl mb-2"
              style={{
                fontFamily: "Montserrat",
                fontSize: "50px",
                fontWeight: "400",
                lineHeight: "60.95px",
              }}
            >
              Welcome to{" "}
            </p>
            <p
              style={{
                fontFamily: "Aclonica",
                fontSize: "154px",
                fontWeight: "400",
                lineHeight: "174.53px",
              }}
            >
              Luxury{" "}
            </p>
            <p
              style={{
                fontFamily: "Aclonica",
                fontSize: "60px",
                fontWeight: "400",
                lineHeight: "68px",
              }}
            >
              {" "}
              Hotels
            </p>
            <p className="text-lg">
              Book your stay and enjoy luxury redefined at the most affordable
              rates.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BanquetSplasher;
