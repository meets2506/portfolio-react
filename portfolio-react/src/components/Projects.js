import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Medical Fraud Detection System",
      description: "Built a web-based fraud detection system using Python, Flask, and MySQL, improving detection accuracy by 35% with ML algorithms. Created a responsive UI with JavaScript, HTML, and CSS for data visualization.",
      image: 'https://drive.google.com/file/d/1vk5lpw9n8mf_72sJh0NCICLRlPan_Nx5/view?usp=drive_link',
      link: "https://github.com/meets2506/medical-fraud-detection",
      category: "AI"
    },
    {
      id: 2,
      title: "ResourceHub",
      description: "Developed a web application with React.js, Python, Flask, and Postgres, using the Hungarian algorithm for team allocation. Integrated Material UI for enhanced visuals and streamlined processes.",
      image: 'https://drive.google.com/file/d/1m0dq22qkDmNNCCKl_TcN03kgp2gbxJC4/view?usp=drive_link',
      link: "https://github.com/meets2506/resourcehub",
      category: "Web"
    },
    {
      id: 3,
      title: "WaterWise IoT Device",
      description: "Engineered a smart water intake monitor using Python 3, Django, and MySQL. Programmed an ESP32 chip in C++ for real-time data handling and remote monitoring.",
      image: 'https://drive.google.com/file/d/18poWcwCCYBt3iLbmnQWHljr4cUGmVLlN/view?usp=drive_link',
      link: "https://github.com/meets2506/waterwise-iot",
      category: "AI"
    }
  ];
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const filterProjects = (category) => {
    setFilter(category);
  };

  return (
    <motion.section 
      id="projects" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }} 
      className="py-16 md:py-24 bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          role="heading" 
          aria-level="2"
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center mb-8 space-x-4">
          <button onClick={() => filterProjects('all')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">All</button>
          <button onClick={() => filterProjects('web')} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Web Dev</button>
          <button onClick={() => filterProjects('ai')} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">AI Projects</button>
        </div>
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found in this category.</p>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={{ visible: { transition: { staggerChildren: 0.15 } }}}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Project</a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
