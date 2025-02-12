'use client'
import { useState, useEffect } from "react";
import ImageSlideshow from "./SlideShow";
import TrendingTrailerSlideup from "./TrendingTrailerSlideup";
import SlidingContent from "./SlidingContent";

export default function HomePage() {
 
  return (
    <>
      <div className="flex flex-wrap justify-start items-start border-2 border-red-400 ml-[70px] mr-[70px]">
        <div className="mt-[80px] w-[815px] h-[441px] border-2 border-yellow-300">
          {/* Slideshow with dynamic images */}
          <ImageSlideshow/>

        </div>

        <div className="ml-[42px] mt-[80px] border-2 border-yellow-400">
          <h2 className="font-bold text-2xl">Trending Trailers &gt;</h2>
          <div className="mt-[32px]">
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
          </div>
        </div>
        {/* <div className="relative w-full ml-8 mt-4">
          
          <div>
            <SlidingContent name={movieArray[currentIndex].name} rating={movieArray[currentIndex].rating} trailerLink={movieArray[currentIndex].link}/>
          </div>
        </div> */}
      </div>
    </>
  );
}
