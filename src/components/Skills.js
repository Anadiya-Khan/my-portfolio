"use client"; 
import React from "react";
import { motion } from "framer-motion";
import { 
  SiMongodb, 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiMysql, 
  SiExpress
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, color: "bg-gradient-to-r from-green-400 via-green-500 to-green-900" },
  { name: "React", icon: <SiReact className="text-blue-400" />, color: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, color: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "bg-gradient-to-r from-gray-700 via-gray-800 to-black" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, color: "bg-gradient-to-r from-green-400 via-green-600 to-green-800" },
  { name: "Python", icon: <SiPython className="text-yellow-400" />, color: "bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-600" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, color: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, color: "bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800" }
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
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
   <motion.div
  className="mx-4 sm:mx-8 md:mx-16 lg:mx-30"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  <motion.h2
    className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Technical Skills
  </motion.h2>

  <motion.div
    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6"
    variants={containerVariants}
  >
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        whileHover={{ scale: 1.08, rotate: 1 }}
        whileTap={{ scale: 0.97 }}
        className="flex flex-col items-center justify-center p-11 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer"
      >
        <motion.div
          className="text-5xl mb-4"
          initial={{ rotateY: 90 }}
          whileInView={{ rotateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          {skill.icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-2 text-white">
          {skill.name}
        </h3>

        <div className="w-full h-2 rounded-full overflow-hidden bg-gray-300">
          <motion.div
            className={`${skill.color} h-full`}
            initial={{ width: "0%" }}
            whileInView={{ width: "75%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
  );
};

export default Skills;
