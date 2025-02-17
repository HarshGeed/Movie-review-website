"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";
import { useState } from "react";

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
export default function MovieCard_2({ data }) {
  const [bookmarkedMovies, setBookmarkedMovies] = useState({});

  const toggleBookmark = (index) => {
    setBookmarkedMovies((prev) => {
      return { ...prev, [index]: !prev[index] }; // Correctly updating the state
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <>
      <Slider {...settings} className="mx-4 overflow-visible">
        {data.map((d, index) => (
          <div key={index} className="group">
            <div
              className={`relative flex border-2 border-black w-[16rem] h-[20rem] rounded-2xl z-0`}
            >
              <Image
                src={d.image}
                alt={d.name}
                layout="fill"
                className=" rounded-2xl transition-opacity duration-300 group-hover:opacity-95"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-wrap w-[16rem] h-[10rem] border-[1px] border-black rounded-2xl mt-2 shadow-2xl">
              <button
                className="ml-2 mb-1"
                onClick={() => toggleBookmark(index)}
              >
                {bookmarkedMovies[index] ? (
                  <BsBookmarkCheckFill className="w-5 h-5 text-gray-800" />
                ) : (
                  <BsBookmarkCheck className="w-6 h-6 text-gray-800" />
                )}
              </button>
              <h3 className="ml-4 mt-2 text-xl">{d.name}</h3>
              <div className="absolute flex w-full items-center gap-1 mt-10 ml-4">
                <IoStarHalfSharp className="text-yellow-500 w-5 h-5" />
                <p className="text-base  font-light">{d.rating}</p>
              </div>
              <button className="relative mt-8 border-2 border-gray-800 w-full h-8 rounded-xl bg-gray-800 text-white mx-2">
                Trailer
              </button>
              <button className="mt-2 border-[1px] border-gray-800 w-full h-8 rounded-xl mx-2">
                Watch Options
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
