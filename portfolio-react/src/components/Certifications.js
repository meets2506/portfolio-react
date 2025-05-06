import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
  { 
    name: 'AWS Certified Cloud Practitioner', 
    issuer: 'Amazon Web Services (AWS)', 
    date: 'Issued Nov 2023', 
    credentialId: 'V1G3Q9D242B41P2E', 
    link: 'https://www.credly.com/badges/c5f1a4b4-f0d1-4f1e-8f8a-9f9e1b2c3d4e',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png' // Placeholder, replace with actual logo if available
  },
  { 
    name: 'Google Cloud Certified: Cloud Digital Leader', 
    issuer: 'Google Cloud', 
    date: 'Issued Sep 2023', 
    credentialId: 'e8a9b0c1d2e3f4g5', // Example ID
    link: 'https://www.credential.net/profile/yourprofile/wallet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' // Placeholder
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <motion.section // Wrap section with motion.section
      id="certifications"
      className="py-16 px-4 md:px-8 bg-gray-900 text-gray-300" // Consistent styling
      initial={{ opacity: 0, y: 50 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once
      transition={{ duration: 0.6 }} // Animation duration for section
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white border-b-2 border-purple-500 pb-2 inline-block mx-auto block w-fit">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div // Add motion to each certificate card
              key={index}
              className="card flex flex-col justify-between" // Use card class
              initial={{ opacity: 0, scale: 0.95, y: 20 }} // Initial state for cards
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate when in view
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger animation
            >
              <div>
                <div className="flex items-center mb-4 space-x-4">
                  {cert.logo && (
                      <img src={cert.logo} alt={`${cert.issuer} Logo`} className="w-12 h-12 object-contain rounded-md bg-white p-1 flex-shrink-0" />
                  )}
                  <div className='flex-grow'>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-purple-400 text-sm font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-1">{cert.date}</p>
                <p className="text-xs text-gray-500">Credential ID: {cert.credentialId}</p>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium self-start"
              >
                View Credential <FaExternalLinkAlt className="ml-2 h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
