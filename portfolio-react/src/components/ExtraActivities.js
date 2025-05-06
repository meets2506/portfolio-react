import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ExtraActivities = () => {
  const [displayedText, setDisplayedText] = useState('');
  const title = 'Extra Activities';

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

  const activities = [
    {
      title: 'Volunteering with Akshay Patra',
      description: 'Assisted in food distribution and event management, coordinating with teams for community service.',
      image: 'https://apusa.org/wp-content/uploads/2024/06/590abe54-acab-11ee-b998-0a2cb4d57f7b-1.jpg'
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-b from-gray-700 to-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8"
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Hobbies, volunteering, and other personal interests that showcase my well-rounded profile.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card"
            >
              {activity.image && <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-500" />}
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
