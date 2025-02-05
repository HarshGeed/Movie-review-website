'use client';

import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';

const images = [image1, image2, image3];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const totalSlides = images.length;

  // Function to go to previous slide
  const goBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  // Function to go to next slide
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg relative h-96">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 z-20 transition-transform duration-300 hover:scale-110"
        onClick={goBack}
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 z-20 transition-transform duration-300 hover:scale-110"
        onClick={goNext}
      >
        <ChevronRight size={28} />
      </button>

      <Slide
        easing="ease"
        duration={300}
        transitionDuration={200}
        autoplay={false} // Disable autoplay to control manually
        infinite
        defaultIndex={currentIndex} // Set the current index
        onChange={(oldIndex, newIndex) => setCurrentIndex(newIndex)} // Sync state when slides change
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-96 relative">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}
