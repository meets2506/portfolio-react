import React from 'react';
import { motion } from 'framer-motion';

const Streaming = () => {
  const streamingProjects = [
    {
      title: 'Live Streaming App',
      description: 'Built a WebRTC-based streaming app with React and AI moderation, allowing real-time video for events and conferences.', 
      image: 'https://drive.google.com/uc?export=view&id=1vk5lpw9n8mf_72sJh0NCICLRlPan_Nx5' // Use direct link for image loading
    },
    {
      title: 'AI-Enhanced Streaming Platform',
      description: 'Developed a platform using Python and Flask for AI-driven content recommendation in streaming services.'
    },
    // Add more items as needed
  ];

  return (
    <motion.section 
      id="streaming" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} 
      className="py-16 md:py-24 bg-gray-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          role="heading" 
          aria-level="2"
        >
          Streaming Projects
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-gray-300 mb-6 max-w-2xl mx-auto"
          transition={{ delay: 0.2 }}
        >
          Explore my work in streaming technologies, including live video apps and media streaming projects.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          variants={{ visible: { transition: { staggerChildren: 0.15 } }}}
        >
          {streamingProjects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="bg-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
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
