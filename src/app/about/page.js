"use client"; 
import React from "react";
import { motion } from "framer-motion";
import Education from "@/components/Education";
import Link from 'next/link';
import Navbar from "@/components/Navbar";

const About = () => {
  return (
   <div className="min-h-[90vh] bg-[#001F3F] flex flex-col items-center justify-center px-4 sm:px-6 md:px-16">
  {/* Main Section */}
  <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 w-full">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left max-w-xl"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4">
        <span className="text-blue-500 text-xl sm:text-2xl md:text-3xl">
          Hello
        </span>
        <br />
        I am <span className="text-blue-400">Anadiya</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed flex flex-wrap justify-center md:justify-start gap-x-2">
        Skilled in
        <span className="text-blue-400 font-bold">REACT</span>
        <span className="text-yellow-400 font-bold">JAVASCRIPT</span>
        <span className="text-green-400 font-bold">MONGODB</span>
        <span className="text-gray-300 font-bold">NODE EXPRESS</span>
      </p>

      <Link href="/Anadiya_Khan_.pdf">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border py-2 px-6 mt-6 text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-400/40"
        >
          Resume
        </motion.button>
      </Link>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      <motion.img
        src="/images/Anadiya.png"
        alt="myphoto"
        className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]
          rounded-full shadow-2xl shadow-blue-500/50 border-4 border-blue-400
          object-cover object-top transition-all duration-500 ease-in-out"
        whileHover={{ scale: 1.1, rotate: 3 }}
      />

      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-blue-500 via-purple-600 to-teal-400 opacity-40 animate-pulse"></div>
    </motion.div>
  </div>

  {/* Education Section */}
  <Education />
</div>
  );
};

export default About;
