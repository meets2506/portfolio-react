import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Iterate.ai',
      role: 'AI Developer',
      period: '2023-Present',
      description: 'Developed AI models and integrated them into web applications using React and Python, improving system efficiency by 40%.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhHWver_g38Vk1lYflEwPu-mfnFG_7UfLeE9jk7V18pmPTqEXggt-MHaU48hZBy094xA&usqp=CAU',
    },
    {
      id: 2,
      company: 'Softvan',
      role: 'Software Engineer',
      period: '2021-2023',
      description: 'Led full-stack development projects with JavaScript, SQL, and cloud services, focusing on scalable architectures.',
      image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGOb2t8u_b8xA/company-logo_200_200/company-logo_200_200/0/1631332655292?e=2147483647&v=beta&t=LyrffCVt6Ggp5LRRkfuSewBHiwc_HJH4Mh3Zj-qM3a4',
    },
    {
      id: 3,
      company: 'iClerisy Solutions',
      role: 'Embedded Software Developer',
      period: 'Jun 2021 – Jan 2022',
      description: 'Developed C/C++ apps for embedded systems and debugged optimizations. Integrated deep learning models for Qualcomm hardware. Enhanced AI application architecture for better efficiency.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYHKGegiDkoNRsIlulaNsu7A4ssXcMvPHKg&s',
    },
    {
      id: 4,
      company: 'Akshay Patra',
      role: 'Volunteer',
      period: 'Aug 2019 – Dec 2019',
      description: 'Assisted in food distribution and event management. Coordinated with team members for smooth operations.',
      image: 'https://apusa.org/wp-content/uploads/2024/06/590abe54-acab-11ee-b998-0a2cb4d57f7b-1.jpg',
    },
  ];

  return (
    <motion.section 
      id="experience" 
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
          role="heading" 
          aria-level="2"
        >
          My Experience
        </motion.h2>
        <motion.div 
          className="space-y-8" 
          variants={{ visible: { transition: { staggerChildren: 0.1 } }}}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} 
              className="flex flex-col md:flex-row items-center bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {exp.image && <img src={exp.image} alt={exp.company} className="w-24 h-24 object-cover rounded-full mb-4 md:mb-0 md:mr-6" />}
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role} at {exp.company}</h3>
                <p className="text-gray-400">{exp.period}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
