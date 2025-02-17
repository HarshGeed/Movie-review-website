import ActorsMania from "@/Components/ActorsMania";
import FeaturedToday from "@/Components/FeaturedToday";
import Footer from "@/Components/Footer";
import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";
import News from "@/Components/News";
import RecentlyViewed from "@/Components/RecentlyViewed";
import TopTrending from "@/Components/TopTrending";
import YourWatchlist from "@/Components/YourWatchlist";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="border-2 border-red-400 ml-[70px] mr-[70px]">

        <HomePage />
        <FeaturedToday/>
        <ActorsMania/>
        <TopTrending/>
        <News/>
        <YourWatchlist/>
        <RecentlyViewed/>
        </div>
        <Footer/>
     
    </>
  );
}
