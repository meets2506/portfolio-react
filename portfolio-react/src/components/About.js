import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    { year: '2023-Present', title: 'AI Developer', company: 'Iterate.ai', description: 'Developed AI models and full-stack applications using React and Python.' },
    { year: '2021-2023', title: 'Software Engineer', company: 'Softvan', description: 'Focused on web development and database management with JavaScript and SQL.' },
    // Add more experiences as needed
  ];

  return (
    <motion.section 
      id="about" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} 
      className="py-16 md:py-24 bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          aria-label="About Me Section Title"
        >
          About Me
        </motion.h2>
        <motion.div 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
          className="max-w-3xl mx-auto text-center text-gray-300 mb-8"
          transition={{ delay: 0.2 }}
        >
          <p>I'm a passionate Full Stack Developer with a focus on AI and machine learning. With a strong foundation in software engineering, I love building innovative solutions that make a difference.</p>
        </motion.div>
        <motion.div 
          className="relative"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          role="list" 
          aria-label="Professional Experience Timeline"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, visible: { opacity: 1, x: 0 } }} 
              className={`flex items-center justify-between bg-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-600 hover:scale-105 mb-4`} 
              role="listitem" 
              aria-labelledby={`exp-title-${index}`}
            >
              <div className="w-1/4 text-right pr-4 md:pr-8">
                <p id={`exp-title-${index}`} className="text-gray-400 font-semibold">{exp.year}</p>
              </div>
              <div className="flex-1 mx-4 bg-gray-600 h-0.5"></div> {/* Simplified timeline line for responsiveness */}
              <div className="w-3/4">
                <h3 className="text-xl font-bold text-white mb-2">{exp.title} at {exp.company}</h3>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
