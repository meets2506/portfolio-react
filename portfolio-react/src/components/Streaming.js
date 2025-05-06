import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Streaming = () => {
  const [displayedText, setDisplayedText] = useState('');
  const title = 'Streaming Projects';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedText(title.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [title]);

  const streamingProjects = [
    {
      title: 'Live Streaming App',
      description: 'Built a WebRTC-based streaming app with React and AI moderation, allowing real-time video for events and conferences.', 
      image: 'https://drive.google.com/uc?export=view&id=1vk5lpw9n8mf_72sJh0NCICLRlPan_Nx5'
    },
    {
      title: 'AI-Enhanced Streaming Platform',
      description: 'Developed a platform using Python and Flask for AI-driven content recommendation in streaming services.'
    },
  ];

  return (
    <motion.section 
      id="streaming" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 text-gray-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-10"
          role="heading" 
          aria-level="2"
        >
          {displayedText}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {streamingProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="bg-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-500"
            >
              {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-500" />}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Streaming;
