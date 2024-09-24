"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      {/* ... */}
    </Carousel>
  );
}

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Carousel and Banner Overlay Container */}
      <div className="relative w-full">
        {/* Video Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="relative h-screen">
            <CarouselItem className="relative">
              <video
                src="/videos/3015493-hd_1920_1080_24fps.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover aspect-video"
              />
              {/* Banner Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-5">
                  Welcome to Luxury Hotels
                </h1>
                <Link href="/visit-now">
                  <Button className="bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded-full w-48 h-12">
                    Visit Now
                  </Button>
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem className="relative">
              <video
                src="/videos/3573964-uhd_3840_2160_30fps.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-5">
                  Welcome to Luxury Hotels
                </h1>
                <Link href="/visit-now">
                  <Button className="bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded-full w-48 h-12">
                    Visit Now
                  </Button>
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem className="relative">
              <video
                src="/videos/2022395-hd_1920_1080_30fps.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-5">
                  Welcome to Luxury Hotels
                </h1>
                <Link href="/visit-now">
                  <Button className="bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded-full w-48 h-12">
                    Visit Now
                  </Button>
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem className="relative">
              <video
                src="/videos/17529644-hd_1920_1080_30fps.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl sm:text-6xl font-extrabold mb-5">
                  Welcome to Luxury Hotels
                </h1>
                <Link href="/visit-now">
                  <Button className="bg-amber-300 hover:bg-amber-500 text-white px-6 py-3 rounded-full w-48 h-12">
                    Visit Now
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
