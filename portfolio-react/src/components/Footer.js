import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.5 }}
      className="bg-gray-800 py-8 mt-16 border-t border-gray-700"
    >
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/meet-s-shah/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/meets2506" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/meet_s_shah/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://huggingface.co/meets2506" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="HuggingFace Profile"
            className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <SiHuggingface size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-500 mb-4">&copy; {new Date().getFullYear()} Meet Shah. All rights reserved.</p>
        
        <div className="flex justify-center space-x-4 text-sm">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 ease-in-out"
            aria-label="Back to Top"
          >
            Back to Top
          </button>
          <span className="text-gray-600">|</span> 
          <a 
            href="/resume.pdf" 
            download 
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 ease-in-out"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
