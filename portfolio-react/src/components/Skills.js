import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 95 },
    // Add more skills as needed
  ];

  return (
    <motion.section 
      id="skills" 
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
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-600 text-center"
              role="region" 
              aria-labelledby={`skill-name-${index}`}
            >
              <h3 id={`skill-name-${index}`} className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-4 mb-2" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                <div 
                  className="bg-blue-500 h-4 rounded-full" 
                  style={{ width: `${skill.level}%` }} 
                ></div>
              </div>
              <p className="text-gray-300">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
