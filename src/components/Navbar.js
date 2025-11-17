"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-300 text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        
        {/* Logo / Brand (hidden on mobile) */}
        <div className="hidden md:block font-bold text-xl hover:scale-110 duration-100">
          <h1>Anadiya Khan</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-6 font-medium flex-wrap justify-center md:justify-end w-full md:w-auto mt-2 md:mt-0">
          <Link
            href="/"
            className={`hover:text-blue-500 hover:scale-110 duration-150 transition relative ${
              pathname === "/" ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`hover:text-blue-500 hover:scale-110 duration-150 transition relative ${
              pathname === "/about" ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : ""
            }`}
          >
            About Me
          </Link>

          <Link
            href="/contact"
            className={`hover:text-blue-500 hover:scale-110 duration-150 transition relative ${
              pathname === "/contact" ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500" : ""
            }`}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
