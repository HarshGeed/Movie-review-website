"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import playBtn from "@/public/icons8-play-button-100.png";

const slides = [
  {
    image: "/slideShowImages/image1.jpg",
    name: "Interstellar",
    link: "https://www.google.com",
    rating: 8.8,
    context:
      "This will include catchy lines about the slides we are going to show 1",
  },
  {
    image: "/slideShowImages/image2.jpg",
    name: "Inception",
    link: "https://www.google.com",
    rating: 8.9,
    context:
    "This will include catchy lines about the slides we are going to show 2",
  },
  {
    image: "/slideShowImages/image3.jpg",
    name: "The Dark Knight",
    link: "https://www.google.com",
    rating: 9.0,
    context:
      "This will include catchy lines about the slides we are going to show 3",
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',

    // transition: {
    //   x: { type: "spring", stiffness: 300, damping: 30 },
    //   opacity: { duration: 0.2 },
    // },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',

      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const previousSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [current, isPaused]);

  return (
    <>
      <div
        className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl bg-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Button */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
          onClick={previousSlide}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-80 z-10 transition-transform duration-300 hover:scale-110"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Animated Slide Wrapper */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="relative w-full h-full overflow-hidden"
            key={current} // Ensure key changes on each slide change
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            custom={direction}
          >
            <Image
              key={slides[current]}
              src={slides[current].image}
              alt={slides[current].name}
              // layout="fill"
              width={815}
              height={441}
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Slideshow movie details will be here */}
      <div className="flex border-2 border-red-300 mt-6 h-40 pt-6 pl-2 shadow-xl" >
        <div>
          <Image src={playBtn} alt="Play button icon" width={83} />
        </div>
        <div className="ml-4">
          <h2 className={`${bebasNeue.className} text-4xl `}>
            {slides[current].name}
          </h2>
          <p className="text-xl font-light">Trailer</p>
          <p>{slides[current].context}</p>
        </div>
      </div>
    </>
  );
}
