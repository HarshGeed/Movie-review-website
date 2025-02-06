import Slideshow from "./SlideShow";
import TrendingTrailerSlideup from "./TrendingTrailerSlideup";

export default function HomePage() {
  return (
    <>
   
    <div className="flex flex-wrap justify-start items-start border-2 border-red-400">
      <div className="ml-8 mt-8 w-[53rem] border-2 border-yellow-300"> {/* Container size */}
        <Slideshow />
      </div>
      <div className="ml-4 mt-8 border-2 border-yellow-400 ">
        <h2 className="ml-8 font-bold text-2xl">Trending Trailers &gt;</h2>
        <div className="mt-4 ml-8">

        <TrendingTrailerSlideup/> 
        <TrendingTrailerSlideup/> 
        <TrendingTrailerSlideup/> 
        <TrendingTrailerSlideup/> 
        </div>

      </div>
      <div className="relative w-full ml-8 mt-4">
        <p>sliding link for the image updated dynamically</p>
      </div>
    </div>
    </>
  );
}
