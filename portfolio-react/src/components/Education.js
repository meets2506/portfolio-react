import React from 'react';
import { motion } from 'framer-motion';

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

const Education = () => {
  return (
    <motion.section 
      id="education"
      className="py-16 px-4 md:px-8 bg-gray-800 text-gray-300" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6 }} 
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white border-b-2 border-purple-500 pb-2 inline-block mx-auto block w-fit">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div 
              key={index}
              className="card flex flex-col items-start space-y-4" 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.3 }} 
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }} 
            >
              <div className="flex items-start mb-4 space-x-4">
                {edu.logo && (
                  <img src={edu.logo} alt={`${edu.school} Logo`} className="w-16 h-16 rounded-md object-contain bg-white p-1 flex-shrink-0" />
                )}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm ml-4">
                <li>{edu.description}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
