import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Iterate.ai',
    title: 'AI Developer Intern',
    duration: 'Jan 2024 - May 2024',
    location: 'San Jose, California (Remote)',
    logo: 'https://drive.google.com/uc?export=view&id=1fP4QZzT5a-rP-wM709kY6-x5A3b7E4eR',
    description: [
      'Led development of an AI-powered contract summarization app using Retrieval-Augmented Generation (RAG) and Langchain.',
      'Integrated Google Gemini Pro LLM for advanced text analysis and OpenAI Whisper API for transcription.',
      'Developed a full-stack solution with React.js frontend and FastAPI backend, deployed via Docker.',
      'Implemented robust data handling with Chroma DB and PostgreSQL.',
      'Secured a $10,000 grant from Google Cloud, optimizing deployment costs.',
      'Collaborated in Agile sprints, enhancing team productivity.',
    ],
  },
  {
    company: 'Softvan',
    title: 'Jr. Software Engineer',
    duration: 'Jun 2021 - May 2023',
    location: 'Ahmedabad, Gujarat, India',
    logo: 'https://drive.google.com/uc?export=view&id=1m_qHk6wQ8qH0O9ZlJ7j_Y3Z-C6jX4L9s',
    description: [
      'Developed 20+ projects using Django, React, Node.js, and Python.',
      'Managed databases (PostgreSQL, MySQL, MongoDB) and deployed on AWS, Heroku, Azure.',
      'Led a team of 5, boosting project delivery by 25%.',
      'Achieved 90% client satisfaction through effective communication.',
    ],
  },
  {
    company: 'iClerisy',
    title: 'Jr. Associate Software Engineer',
    duration: 'Oct 2020 - May 2021',
    location: 'Ahmedabad, Gujarat, India',
    logo: 'https://drive.google.com/uc?export=view&id=1N-pY2j9gA-T4dK8rL8zXj6vY5W-N1R0c',
    description: [
      'Specialized in Python backend development, focusing on API integration and database management.',
      'Developed web applications using Django, Flask, Python, JavaScript, HTML, CSS.',
      'Contributed to Odoo ERP customizations, improving workflow efficiency.',
      'Engaged in code reviews and Agile processes.',
    ],
  },
  {
    company: 'The Akshaya Patra Foundation',
    title: 'Software Engineer Intern',
    duration: 'Aug 2019 - Oct 2019',
    location: 'Ahmedabad, Gujarat, India',
    logo: 'https://drive.google.com/uc?export=view&id=1Z-jT6kF-wX8sN9oI-L7vB4xY3T-eR1dA',
    description: [
      'Assisted in developing and testing software components for internal applications.',
      'Gained experience in SQL database interactions and backend support.',
      'Learned about large-scale application deployment and maintenance.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6 }} 
      className="py-16 px-4 md:px-8 bg-gray-900 text-gray-300"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white border-b-2 border-purple-500 pb-2 inline-block mx-auto block w-fit">
          Work Experience
        </h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.5, delay: 0.1 * index }} 
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 shadow-lg absolute left-5 -translate-x-1/2 translate-y-0.5 md:translate-y-0 md:mx-auto md:left-1/2 group-odd:left-auto group-odd:right-1/2 text-white font-bold">
                {index + 1}
              </div>

              {/* Card */}
              <div className="card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <div className="flex items-center mb-3 space-x-3">
                  {exp.logo && (
                    <img src={exp.logo} alt={`${exp.company} Logo`} className="w-10 h-10 rounded-full object-contain bg-white p-1" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{exp.duration} | {exp.location}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
