import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="bg-gray-800 shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a href="#" className="text-2xl font-bold text-white" onClick={() => handleScroll('hero')} aria-label="Home">Meet Shah</motion.a>
        <div className="hidden md:flex space-x-6">
          <motion.a href="#hero" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('hero')} whileHover={{ scale: 1.1 }} aria-label="Home Section">Home</motion.a>
          <motion.a href="#about" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('about')} whileHover={{ scale: 1.1 }} aria-label="About Section">About</motion.a>
          <motion.a href="#projects" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('projects')} whileHover={{ scale: 1.1 }} aria-label="Projects Section">Projects</motion.a>
          <motion.a href="#skills" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('skills')} whileHover={{ scale: 1.1 }} aria-label="Skills Section">Skills</motion.a>
          <motion.a href="#experience" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('experience')} whileHover={{ scale: 1.1 }} aria-label="Experience Section">Experience</motion.a>
          <motion.a href="#education" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('education')} whileHover={{ scale: 1.1 }} aria-label="Education Section">Education</motion.a>
          <motion.a href="#certifications" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('certifications')} whileHover={{ scale: 1.1 }} aria-label="Certifications Section">Certifications</motion.a>
          <motion.a href="#resume" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('resume')} whileHover={{ scale: 1.1 }} aria-label="Resume Section">Resume</motion.a>
          <motion.a href="#streaming" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('streaming')} whileHover={{ scale: 1.1 }} aria-label="Streaming Section">Streaming</motion.a>
          <motion.a href="#extra-activities" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('extra-activities')} whileHover={{ scale: 1.1 }} aria-label="Extra Activities Section">Extra Activities</motion.a>
          <motion.a href="#contact" className="text-gray-300 hover:text-white transition" onClick={() => handleScroll('contact')} whileHover={{ scale: 1.1 }} aria-label="Contact Section">Contact</motion.a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 w-full">
            <motion.a href="#hero" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('hero'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Home</motion.a>
            <motion.a href="#about" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('about'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>About</motion.a>
            <motion.a href="#projects" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('projects'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Projects</motion.a>
            <motion.a href="#skills" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('skills'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Skills</motion.a>
            <motion.a href="#experience" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('experience'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Experience</motion.a>
            <motion.a href="#education" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('education'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Education</motion.a>
            <motion.a href="#certifications" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('certifications'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Certifications</motion.a>
            <motion.a href="#resume" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('resume'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Resume</motion.a>
            <motion.a href="#streaming" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('streaming'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Streaming</motion.a>
            <motion.a href="#extra-activities" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('extra-activities'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Extra Activities</motion.a>
            <motion.a href="#contact" className="block py-2 text-gray-300 hover:text-white transition" onClick={() => { handleScroll('contact'); setIsOpen(false); }} whileHover={{ scale: 1.1 }}>Contact</motion.a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
