"use client";

import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";

const images = [image1, image2, image3];

export default function ImageSlideshow() {
  const slideRef = useRef(null);

  const goBack = () => {
    slideRef.current.goBack();
  };

  const goNext = () => {
    slideRef.current.goNext();
  };

  return (
    <div className=" w-full h-full rounded-lg overflow-hidden shadow-lg relative sm:h-80 md:h-96 bg-white">
      <button
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
        onClick={goBack}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
        onClick={goNext}
      >
        <ChevronRight size={24} />
      </button>

      <Slide
        ref={slideRef}
        easing="ease"
        duration={300}
        transitionDuration={200}
        autoplay={false}
        infinite
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-64 sm:h-80 md:h-96 relative">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}
