import { colorTheme } from "@/lib/Constants";
import MovieCard from "./MovieCard";
export default function FeaturedToday() {
  return (
    <>
      {/* Featured Today section */}
      <div className="border-2 border-green-300 mt-16">
        <h2 className={`font-bold text-2xl ${colorTheme}`}>
          Trending Trailers &gt;
        </h2>
        <div className="mt-14">

        <MovieCard/>
        </div>
      </div>
    </>
  );
}
