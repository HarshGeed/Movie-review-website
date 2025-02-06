import Image from "next/image";
import image2 from "@/public/image2.jpg"
import playBtn from "@/public/play-button.png"
import Link from "next/link";
export default function TrendingTrailerSlideup(){
    return(
        <>
        {/* boxes of trending trailers */}
        <Link href="#">
        <div className="flex border-2 border-yellow-400 w-[30rem] shadow-lg mt-2 transform hover:scale-105 transition-transform duration-300">
           
            <Image 
            src={image2}
            alt= "Trailer image"
            width={150}
            className="rounded-lg"
            
            />
            {/* side content of the image */}
           <div className="ml-6">
            <Image
            src={playBtn}
            alt = "play button image"
            width={35}
            className="transition duration-300 hover:brightness-75 hover:greyscale" // fix this issue
            />
            {/* dynamic value will of the trailer name will come here */}
            <h3 className="mt-2 font-medium">Taxi Driver</h3>
            <p>Watch the trailer</p>
           </div>
        </div>
        </Link>
        </>
    )
}

