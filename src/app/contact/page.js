"use client";
import Navbar from '@/components/Navbar';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaWhatsapp, FaLinkedin, FaGithub 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      className='min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-[#0B1F3F] via-[#112B57] to-[#001A2E]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden'
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className='flex-1 p-10 md:p-16'
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className='text-4xl md:text-5xl font-bold text-purple-700 mb-6 border-b-4 border-purple-500 inline-block pb-2'
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className='text-gray-700 mb-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Have questions, opportunities, or feedback? I would love to hear from you and discuss how we can collaborate.
          </motion.p>

          {/* Contact Details */}
          <motion.div
            className='space-y-5 mb-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex items-center gap-4 text-gray-800'>
              <FaEnvelope className='text-purple-600 text-xl' />
              <span>khananadiya45@gmail.com</span>
            </div>
            <div className='flex items-center gap-4 text-gray-800'>
              <FaPhone className='text-purple-600 text-xl' />
              <span>+91 9321369690</span>
            </div>
            <div className='flex items-center gap-4 text-gray-800'>
              <FaMapMarkerAlt className='text-purple-600 text-xl' />
              <span>Mumbai India</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className='text-lg font-semibold text-gray-800 mb-3'>
              Connect with me
            </h2>
            <div className='flex gap-4'>
              <motion.a
                href="https://www.linkedin.com/in/anadiya-khan"
                className='p-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition'
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Anadiya-Khan"
                className='p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition'
                whileHover={{ scale: 1.15, rotate: -5 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>

          <p className='text-gray-600 mt-10 text-sm'>&copy; 2025 | Anadiya Khan</p>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          className='flex-1 flex items-center bg-amber-200 justify-center hidden md:block'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/contact.jpg"
            alt="Contact Illustration"
            className='w-[80%] md:w-[70%] rounded-xl shadow-lg center ml-15 mt-25'
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
