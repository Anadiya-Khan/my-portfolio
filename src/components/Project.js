"use client"; 
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const project = [
    {
      img: "/images/imagify.png",
      title: "Imagify",
      description: "Built an AI image-generation platform using the MERN stack with secure payments and a credit system.",
      lang: ["MongoDB","Express","React","Node"],
      git: "https://github.com/Anadiya-Khan/Imagify-1",
      vercel: "https://imagify-tyw6.onrender.com/",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen md:mt-10 md:mx-40"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-center mb-5 text-3xl text-white font-bold">
          Projects
        </h1>
      </motion.div>

      {/* grid layout */}
      <motion.ul
        className="grid gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 p-4"
        variants={containerVariants}
      >
        {project.map((val, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              rotate: 1,
              boxShadow: "0 10px 30px rgba(59,130,246,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-900 text-white rounded-xl p-5 shadow-lg transition-transform duration-300"
          >
            <motion.img
              src={val.img}
              alt={val.title}
              className="rounded-lg mb-3  object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-lg font-semibold">{val.title}</h2>
            <p className="text-sm text-gray-300">{val.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {val.lang.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-700 rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href={val.git}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href={val.vercel}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:underline text-sm"
              >
                Live Demo
              </a>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Project;
