import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University Long Beach",
      logo: "https://seeklogo.com/images/L/long-beach-state-logo-9781A24CEF-seeklogo.com.png",
      period: "Jan 2023 – Dec 2024",
      description: "Focused on AI, ML, and software engineering."
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      logo: "https://w7.pngwing.com/pngs/798/786/png-transparent-gujarat-technological-university-anand-agricultural-university-c-k-pithawala-college-of-engineering-and-technology-institute-of-technology-student-blue-people-university-thumbnail.png",
      period: "Aug 2018 – May 2022",
      description: "Emphasized programming and system design."
    }
  ];

  return (
    <motion.section 
      id="education" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} 
      className="py-16 md:py-24 bg-gray-600 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        >
          {Array.from('Education').map((letter, index) => (
            <motion.span 
              key={index} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {educations.map((edu, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} 
              className="bg-gray-800 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              role="region" 
              aria-label={`${edu.degree} at ${edu.school}, period: ${edu.period}`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <motion.img 
                  src={edu.logo} 
                  alt={`${edu.school} logo`} 
                  loading="lazy"
                  className="w-20 h-20 object-contain mb-2 rounded-xl border border-gray-500 bg-white p-2"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 * index, duration: 0.5 }} 
                />

                <motion.h3 
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.2 * index, duration: 0.5 }} 
                  className="text-xl font-bold text-white"
                >
                  {Array.from(edu.degree).map((letter, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: i * 0.02 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h3>

                <p className="text-gray-400 text-sm">{edu.school} • {edu.period}</p>
                <p className="text-gray-300 text-sm mt-1">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
