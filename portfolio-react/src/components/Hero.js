import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ handleScroll }) => {
  // Reverted to the Google Drive link as the LinkedIn one was potentially unstable/too long
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHUyW5f92Nvjg/profile-displayphoto-shrink_800_800/B4DZaUbmfqGwAc-/0/1746246991104?e=1752105600&v=beta&t=8aOwJja7wRrgkC42X8fQpmyhbW4eY32BYxlaSc5DiJ4"; 

  return (
    <motion.section 
      id="hero" 
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 lg:px-20 py-20 lg:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Content */}
      <motion.div 
        className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hey, I'm <span className="text-purple-400">Meet Shah</span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A passionate <strong className="text-purple-300">Computer Science student</strong> specializing in AI, Machine Learning, and crafting innovative software solutions.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            onClick={() => handleScroll('contact')} 
            className="button-primary" // Use global button style
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
          <motion.button 
            onClick={() => handleScroll('projects')} 
            className="button-outline" // Use global button style
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div 
        className="lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/30"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={profileImageUrl}
            alt="Meet Shah Profile"
            className="w-full h-full object-cover"
          />
           {/* Optional: Add an overlay or effect */}
           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
