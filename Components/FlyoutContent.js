import Link from "next/link";
import Image from "next/image";

const LinkClass = "block text-sm border-2 border-gray-800 w-52 ml-4 p-2 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200"

const MoviesContent = () => {
  return (
    <div className="flex relative mr-1 -mx-8 w-[40rem] h-auto bg-white p-6 shadow-xl ">
      {/* Side section with images */}
      <div className="relative w-[20rem] h-50 bg-gray-800 mr-4 parent flex items-center justify-center pb-[2rem]">
        <div className="p-8 m-auto text-white">
          <p>
            &quot;The length of a film should be directly related to the
            endurance of the human bladder.&quot;
          </p>
          <p className="pl-20">&#8209; Alfred Hitchcock</p>
        </div>
      </div>

      {/* Main section with important links */}
      <div>
        <div className="mb-3 space-y-3 text-2xl font-medium">
          <Link
            href="#"
            className={LinkClass}
          >
            Top 100 IMDb
          </Link>
          <Link href="#" className = {LinkClass}>
            Top Box Office
          </Link>

          <Link href="#" className = {LinkClass}>
            Movie News
          </Link>
          <Link href="#" className = {LinkClass}>
            Upcoming Movies
          </Link>
          <Link href="#" className = {LinkClass}>
            Movie Trailers
          </Link>
          <Link href="#" className = {LinkClass}>
            Genres
          </Link>
        </div>
      </div>
    </div>
  );
};

const TVShowsContent = () => {
  return (
    <div className="flex relative mr-1 -mx-8 w-[40rem] h-auto bg-white p-6 shadow-xl ">
      {/* Side section with images */}
      <div className="relative w-[20rem] h-50 bg-gray-800 mr-4 parent flex items-center justify-center pb-[2rem]">
        <div className="p-8 m-auto text-white">
          <p>
            &quot;Whenever I'm about to do something, I think, "Would an idiot do that?" And if they would, I do not do that thing..&quot;
          </p>
          <p className="pl-20">&#8209; Dwight Shrute <br></br> &nbsp;&nbsp;"The Office"</p>
        </div>
      </div>

      {/* Main section with important links */}
      <div>
        <div className="mb-3 space-y-3 text-2xl font-medium">
          <Link
            href="#"
            className={LinkClass}
          >
            Popular Shows
          </Link>
          <Link href="#" className = {LinkClass}>
            Trending Now
          </Link>

          <Link href="#" className = {LinkClass}>
            TV Shows News
          </Link>
          <Link href="#" className = {LinkClass}>
            Upcoming TV Shows
          </Link>
          <Link href="#" className = {LinkClass}>
            Top Ratings
          </Link>
          <Link href="#" className = {LinkClass}>
            Genres
          </Link>
        </div>
      </div>
    </div>
  );
};
const AnimeContent = () => {
  return (
    <div className="flex relative mr-1 -mx-8 w-[40rem] h-auto bg-white p-6 shadow-xl ">
      {/* Side section with images */}
      <div className="relative w-[20rem] h-50 bg-gray-800 mr-4 parent flex items-center justify-center pb-[2rem]">
        <div className="p-8 m-auto text-white">
          <p>
            &quot;The important thing is not how long you live. It's what you accomplish with your life.&quot;
          </p>
          <p className="pl-20">&#8209; Grovyle <br></br>&nbsp; "Pokemon"</p>
        </div>
      </div>

      {/* Main section with important links */}
      <div>
        <div className="mb-3 space-y-3 text-2xl font-medium">
          <Link
            href="#"
            className={LinkClass}
          >
            Top Anime Shows
          </Link>
          <Link href="#" className = {LinkClass}>
            Trending Now
          </Link>

          <Link href="#" className = {LinkClass}>
            Studios
          </Link>
          <Link href="#" className = {LinkClass}>
            Anime News
          </Link>
          <Link href="#" className = {LinkClass}>
            Anime Characters
          </Link>
          <Link href="#" className = {LinkClass}>
            Genres
          </Link>
        </div>
      </div>
    </div>
  );
};



export { MoviesContent, TVShowsContent, AnimeContent};
