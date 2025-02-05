import Slideshow from "./SlideShow";

export default function HomePage() {
  return (
    <div className="flex justify-start items-start border-2 border-yellow-300">
      <div className="border-2 border-red-400 ml-6 mt-4 w-[50rem] h-[rem]"> {/* Container size */}
        <Slideshow />
      </div>
      <div className="ml-4 mt-4">
        <p>testing</p>
      </div>
    </div>
  );
}
