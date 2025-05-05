import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ handleScroll }) => {
  return (
    <motion.section 
      id="hero" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }} 
      className="min-h-screen flex items-center justify-center bg-gray-900 py-16"
      role="banner" 
      aria-label="Hero Section: Meet Shah's Portfolio Introduction"
      aria-describedby="hero-content"
    >
      <div className="container mx-auto px-4 text-center" id="hero-content">
        <motion.img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQHUyW5f92Nvjg/profile-displayphoto-shrink_800_800/B4DZaUbmfqGwAc-/0/1746246991104?e=1752105600&v=beta&t=8aOwJja7wRrgkC42X8fQpmyhbW4eY32BYxlaSc5DiJ4" 
          alt="Meet Shah's Profile Picture" 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover shadow-lg" 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.5 }} 
        />
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }} 
          className="text-4xl md:text-6xl font-bold text-white mb-4" 
          role="heading" 
          aria-level="1"
        >
          Meet Shah
        </motion.h1>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-2xl md:text-3xl text-gray-300 mb-8" 
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>
        <motion.a 
          href="#contact" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-shadow shadow-lg hover:shadow-xl" 
          role="button" 
          aria-label="Contact Meet Shah"
          tabIndex={0}
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
