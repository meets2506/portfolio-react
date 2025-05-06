import React from 'react';
import { motion } from 'framer-motion'; 
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase, 
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiKubernetes, 
  SiTypescript, 
  SiCplusplus, 
  SiC, 
  SiFastapi, 
  SiFlask, 
  SiJenkins, 
  SiRedis, 
  SiNginx, 
  SiExpress
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    icon: FaReact, 
    items: [
      { name: 'React', icon: FaReact },
      { name: 'JavaScript (ES6+)', icon: FaJsSquare },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    category: 'Backend',
    icon: FaNodeJs,
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Python', icon: FaPython },
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
    ]
  },
  {
    category: 'Databases',
    icon: FaDatabase,
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL', icon: FaDatabase }, 
      { name: 'Redis', icon: SiRedis },
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: FaAws,
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
      { name: 'Nginx', icon: SiNginx },
    ]
  },
  {
    category: 'AI/ML',
    icon: SiTensorflow,
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
    ]
  }
];

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, 
      duration: 0.5
    }
  })
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05, 
    }
  })
};

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      className="py-16 px-4 md:px-8 bg-gray-800 text-gray-300" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.15 }} 
      transition={{ duration: 0.6 }} 
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white border-b-2 border-purple-500 pb-2 inline-block mx-auto block w-fit">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillCategory, categoryIndex) => (
            <motion.div 
              key={skillCategory.category}
              className="card" 
              custom={categoryIndex} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={categoryVariants}
            >
              <div className="flex items-center mb-4">
                <skillCategory.icon className="w-6 h-6 mr-3 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="flex items-center bg-gray-600 px-3 py-1 rounded-full text-sm"
                    custom={skillIndex} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }} 
                    variants={skillItemVariants} 
                  >
                    <skill.icon className="w-4 h-4 mr-2 text-purple-300" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
