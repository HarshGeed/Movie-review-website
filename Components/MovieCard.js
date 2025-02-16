"use client"; // Mark this as a Client Component

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Rubik_Distressed } from 'next/font/google'

const rubikDistressed = Rubik_Distressed({ 
    weight: '400',
    subsets: ['latin'] 
  })

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
export default function MovieCard({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <>
      <Slider {...settings} className="mx-4 ">
        {data.map((d, index) => (
          <div key={index} className="px-2 ">
            <div className="relative border-2 border-black w-[26rem] h-[17rem] rounded-2xl z-0 transition-transform duration-300 hover:shadow-2xl">
              <Image
                src={d.image}
                alt={d.name}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%) "
              />

              {/* Gradient Overlay to Darken the Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-transparent rounded-2xl"></div>

              {/* Movie Name Positioned Above the Gradient */}
              <h4 className={`absolute text-white z-10 bottom-4 left-4 text-3xl font-light ${rubikDistressed.className} `}>
                {d.name}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
