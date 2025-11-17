"use client";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      id: 1,
      title: "Secondary School Certificate",
      school: "Anjuman Khairul Islam Girls High School",
      year: "2020",
      percentage: "85%",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      school: "St. Mary's High School & Junior College",
      year: "2022",
      percentage: "82%",
    },
    {
      id: 3,
      title: "Bachelor's of Science Information Technology",
      school:
        "Mahendra Pratap Sharada Prasad Singh College of Arts, Commerce and Science",
      year: "2025",
      percentage: "9.65 CGPI",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#001F3F] text-white flex flex-col items-center py-16 px-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        Education
      </motion.h1>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-400 h-full rounded-full"></div>

        {/* Timeline Items */}
        {education.map((val, index) => (
          <motion.div
            key={val.id}
            className={`relative mb-16 flex ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex-col md:items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 rounded-full border-4 border-[#001F3F] shadow-lg shadow-blue-400/50"></div>

            {/* Card */}
            <div
              className={`mt-10 md:w-1/2 bg-gradient-to-br from-blue-800 via-purple-800 to-teal-800 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 ${
                index % 2 === 0 ? "md:ml-auto md:mr-16" : "md:mr-auto md:ml-16"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
                {val.title}
              </h2>
              <p className="text-white/80 mb-1">{val.school}</p>
              <p className="text-white/70 mb-2">{val.year}</p>
              <p className="text-green-400 font-bold text-lg md:text-xl">
                {val.percentage}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
