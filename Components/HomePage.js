"use client";

import { colorTheme } from "@/uiLib/Constants";
import ImageSlideshow from "./SlideShow";
import TrendingTrailerSlideup from "./TrendingTrailerSlideup";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-wrap justify-start items-start">
        <div className="mt-[80px] w-[815px] h-[441px] border-2 border-yellow-300">
          {/* Slideshow with dynamic images */}
          <ImageSlideshow />
        </div>

        <div className="ml-[42px] mt-[80px] border-2 border-yellow-400">
          <h2 className={`font-bold text-2xl text-${colorTheme}`}>Trending Trailers &gt;</h2>
          <div className="mt-[32px]">
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
            <TrendingTrailerSlideup />
          </div>
        </div>
      </div>
    </>
  );
}
