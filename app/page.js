import ActorsMania from "@/Components/ActorsMania";
import FeaturedToday from "@/Components/FeaturedToday";
import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="border-2 border-red-400 ml-[70px] mr-[70px] h-[100rem]">

        <HomePage />
        <FeaturedToday/>
        <ActorsMania/>
        </div>
     
    </>
  );
}
