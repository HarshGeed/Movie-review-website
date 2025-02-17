import ActorsMania from "@/Components/ActorsMania";
import FeaturedToday from "@/Components/FeaturedToday";
import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";
import TopTrending from "@/Components/TopTrending";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="border-2 border-red-400 ml-[70px] mr-[70px] h-[200rem]">

        <HomePage />
        <FeaturedToday/>
        <ActorsMania/>
        <TopTrending/>
        </div>
     
    </>
  );
}
