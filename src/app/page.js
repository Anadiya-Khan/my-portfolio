"use client";
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gray-900">
      
      <motion.div
  className="absolute w-40 h-40 bg-purple-400 rounded-full opacity-30 top-10 left-20"
  animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
/>

<motion.div
  className="absolute w-32 h-32 bg-teal-400 rounded-full opacity-20 bottom-10 right-10"
  animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
/>
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500 opacity-20"
  animate={{ opacity: [0.2, 0.4, 0.2] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
/>
        {/* 🔹 Background Layers */}
       {/* {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 50, 0],
            y: [0, (Math.random() - 0.5) * 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 10 + Math.random() * 5, ease: "easeInOut" }}
        />
      ))} */}

      <motion.div
  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-10"
  animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
  style={{ backgroundSize: "200% 200%" }}
/>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r bg-[#001F3F]  animate-gradient-x opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        ></motion.div>

        {/* 🔹 Content */}
        <div className="relative z-10 text-white px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Anadiya <span className="text-blue-400">Khan</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            className="max-w-2xl text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building <span className="text-blue-400"> fast </span>,
            <span className="text-purple-400"> reliable </span>, and
            <span className="text-teal-400"> scalable </span> websites.
          </motion.p>

          <motion.p
            className="max-w-2xl text-gray-400 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Passionate about <span className="text-blue-400">frontend</span> and <span className="text-purple-400">backend</span> development.  
            Love creating <span className="text-teal-400">interactive</span> and <span className="text-yellow-400">user-friendly</span> experiences.
          </motion.p>

          <motion.div
            className="flex space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#projects"
                className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Transitions */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
         className="w-full min-h-screen px-4 py-16 shadow-2xl bg-gradient-to-br from-[#1E3C72] via-[#2A5298] to-[#2980B9]"
      >
        <Skills />
      </motion.div>

      <hr className="border-gray-700 my-8" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Project />
      </motion.div>
    </motion.div>
  );
};

export default Home;
