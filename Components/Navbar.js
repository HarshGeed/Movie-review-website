"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/video-player.png";
import watchlogo from "../public/bookmark.png";
import FlyoutLink from "./FlyoutLink";
import {MoviesContent, TVShowsContent, AnimeContent} from "./FlyoutContent";
import HoverLink from "./BlueLineLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}

        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <Image className="h-8 w-auto" src={logo} alt="Binge it logo" />
            <span className="text-2xl font-bold ml-2 mt-1">BiNGE It</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <span>
            <span><FlyoutLink href="/movies" FlyoutContent={MoviesContent}>Movies</FlyoutLink></span>
          </span>
          <span href="/reviews">
            <span> 
            <FlyoutLink href="#" FlyoutContent={TVShowsContent}>TV Shows</FlyoutLink>
            </span>
          </span>
          <span href="/about">
            <span>
            <FlyoutLink href="#" FlyoutContent={AnimeContent}>Anime</FlyoutLink>
            </span>
          </span>
          <span href="/contact">
            <span>
              <HoverLink href="#">Trending</HoverLink>
            </span>
          </span>
          <span href="/contact">
          <div className="flex items-center space-x-2">
          <Image className="h-4 w-auto" src={watchlogo} alt="Binge it logo" />
            <span className= "cursor-pointer">
            <HoverLink href="#">Watchlist</HoverLink>
            </span>
          </div>
          
          </span>
          <span href="/contact">
            <span>
            <HoverLink href="#">Sign In</HoverLink>
            </span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link href="/">
            <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/reviews">
            <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Reviews
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
