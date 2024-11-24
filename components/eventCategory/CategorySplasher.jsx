import React from "react";
import { eventHeroConfig } from "@/config/compHeroConfig";
import { banquetIcon } from "@/config/iconConfig";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const BanquetSplasher = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={eventHeroConfig.src}
        className="w-full h-full object-cover"
        alt={eventHeroConfig.name}
        width={1000}
        height={1000}
      />

      {/* Full-screen semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text at the bottom */}
      <div className="absolute flex flex-col top-20 text-white p-6 w-full items-start justify-center ">

        <div className="text-center flex items-center justify-between w-full   mt-20 pl-20">
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
              Find your
            </p>
            <p
              style={{
                fontFamily: "Aclonica",
                fontSize: "154px",
                fontWeight: "400",
                lineHeight: "174.53px",
              }}
            >
              Luxury
            </p>
            <p
              style={{
                fontFamily: "Aclonica",
                fontSize: "60px",
                fontWeight: "400",
                lineHeight: "68px",
              }}
            >

              Evets
            </p>
            <p className="text-lg">
              Stay and enjoy luxury redefined at the most affordable Event
            </p>
          </div>

          <Link href="/eventManagement/create-event">
            <Button size="lg" className="bg-red-700" >
              Event Management
            </Button>
          </Link>



        </div>
      </div>
    </div>
  );
};

export default BanquetSplasher;
