import { colorTheme } from "@/lib/Constants";
import MovieCard from "./MovieCard";

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
  
export default function FeaturedToday() {
    
  return (
    <>
      {/* Featured Today section */}
      <div className="border-2 border-green-300 mt-16">
        <h2 className={`font-bold text-2xl text-${colorTheme}`}>
          Featured Today &gt;
        </h2>
        <div className="mt-14">

        <MovieCard data = {data}/>
        
        </div>
      </div>
    </>
  );
}
