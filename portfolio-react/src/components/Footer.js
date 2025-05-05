import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      className="bg-gray-900 py-8 mt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">&copy; {new Date().getFullYear()} Meet Shah. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/meet-s-shah/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">LinkedIn</a>
          <a href="https://github.com/meets2506" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
          <a href="https://www.instagram.com/meet_s_shah/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500">Instagram</a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-blue-400 hover:underline" aria-label="Back to Top">Back to Top</button>
        <a href="/resume.pdf" download className="ml-4 text-blue-400 hover:underline">Download Resume</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
