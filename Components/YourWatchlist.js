import MovieCard_2 from "./MovieCard_2";

const data = [
    {
      image: "/slideShowImages/image1.jpg",
      name: "Interstellar",
      link: "https://www.google.com",
      rating: 5.8,
    },
    {
      image: "/slideShowImages/image2.jpg",
      name: "Inception",
      link: "https://www.google.com",
      rating: 5.8,
    },
    {
      image: "/slideShowImages/image3.jpg",
      name: "Godfather",
      link: "https://www.google.com",
      rating: 5.8,
    },
    {
      image: "/slideShowImages/image1.jpg",
      name: "Men in Black",
      link: "https://www.google.com",
      rating: 5.8,
    },
    {
      image: "/slideShowImages/image1.jpg",
      name: "Avengers",
      link: "https://www.google.com",
      rating: 5.8,
    },
  ];
  

export default function YourWatchlist() {
  return (
    <>
      <h2 className={`flex font-bold text-2xl text-gray-800 mt-16`}>
        Picked from your watchlist &gt;
      </h2>
      <div className="mt-8">
        <MovieCard_2 data={data} />
      </div>
    </>
  );
}
