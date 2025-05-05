import React from 'react';
import { motion } from 'framer-motion';

const ExtraActivities = () => {
  const activities = [
    {
      title: 'Volunteering with Akshay Patra',
      description: 'Assisted in food distribution and event management, coordinating with teams for community service.',
      image: 'https://drive.google.com/uc?export=view&id=YOUR_AKSHAY_PATRA_IMAGE_ID' // Replace with actual ID from memories
    },
    {
      title: 'Hiking and Photography',
      description: 'Passionate about outdoor activities and capturing moments, which helps in creative problem-solving.'
    },
    // Add more activities as needed
  ];

  return (
    <motion.section 
      id="extra-activities" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} 
      className="py-16 md:py-24 bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          role="heading" 
          aria-level="2"
        >
          Extra Activities
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-gray-300 mb-6 max-w-2xl mx-auto"
          transition={{ delay: 0.2 }}
        >
          Hobbies, volunteering, and other personal interests that showcase my well-rounded profile.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8" 
          variants={{ visible: { transition: { staggerChildren: 0.15 } }}}
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {activity.image && <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
              <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-300">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExtraActivities;
