"use client"; // Mark this as a Client Component

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Data should be defined before being used
const data = [
  {
    image: "/slideShowImages/image1.jpg",
    name: "Interstellar",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image1.jpg",
    name: "Inception",
    link: "https://www.google.com",
  },
  {
    image: "/slideShowImages/image1.jpg",
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

{
  /* Left Button */
}
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

{
  /* Right Button */
}
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton/>,
    prevArrow: <PrevButton/>
  };


  return (
    <>
      <Slider {...settings} className="mx-4 ">
        {data.map((d, index) => (
          <div key={index} className="px-2 ">
            <div className="relative border-2 border-black w-[26rem] h-[17rem] rounded-2xl ">
              <Image
                src={d.image}
                alt={d.name}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />

              <h4>{d.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
