"use client"; // Mark this as a Client Component

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Rubik_Distressed } from "next/font/google";

const data = [
  {
    image: "/slideShowImages/image1.jpg",
    name: "Interstellar",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image2.jpg",
    name: "Inception",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image3.jpg",
    name: "Godfather",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image1.jpg",
    name: "Men in Black",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image1.jpg",
    name: "Avengers",
    link: "https://www.google.com",
  },
];

const rubikDistressed = Rubik_Distressed({
  weight: "400",
  subsets: ["latin"],
});

const PrevButton = ({ onClick }) => {
  return (
    <button
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button
      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );
};

export default function MovieCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <>
      <h2 className={`font-bold text-2xl text-gray-800 mt-16`}>
        Featured Today &gt;
      </h2>
      <Slider {...settings} className="mx-4 mt-16 gap-x-1"> {/* Reduced gap between slides */}
        {data.map((d, index) => (
          <div key={index} className="px-1 group"> {/* Reduced padding */}
            <div className="relative border-2 border-black w-[13rem] h-[13rem] rounded-full z-0">
              <Image
                src={d.image}
                alt={d.name}
                layout="fill"
        
                objectFit="cover"
                className="rounded-full transition-opacity duration-300 group-hover:opacity-95"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
