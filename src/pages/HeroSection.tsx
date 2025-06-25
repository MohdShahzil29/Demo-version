"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import { ArrowRight, ArrowLeft } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full text-white">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <div
              onClick={clickHandler}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] bg-orange-500 bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer"
            >
              <ArrowLeft size={24} />
            </div>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <div
              onClick={clickHandler}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] bg-orange-500 bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer"
            >
              <ArrowRight size={24} />
            </div>
          )
        }
      >
        <div>
          <img src={image1.src} alt="Slide 1" />
        </div>
        <div>
          <img src={image2.src} alt="Slide 2" />
        </div>
        <div>
          <img src={image3.src} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
