import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const aboutText1 = "I am a passionate Full Stack Developer and AI Innovator with a strong foundation in Computer Science. My expertise spans across web development, machine learning, and cloud technologies. I thrive on solving complex problems and building scalable, user-friendly applications that make a difference.";
  const aboutText2 = "With hands-on experience in React, Python, Node.js, and cloud platforms like AWS and Google Cloud, I bring a unique blend of technical skills and creativity to every project. I am committed to continuous learning and staying updated with the latest industry trends.";

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }} // First paragraph delay
        >
          {aboutText1}
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }} // Second paragraph delay (staggered)
        >
          {aboutText2}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
