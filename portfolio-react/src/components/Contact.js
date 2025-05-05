import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.message) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call; in a real app, replace with actual backend call
      setTimeout(() => {
        setSubmitStatus('Message sent successfully!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, 1000);
    } else {
      setSubmitStatus('Please fix the errors before submitting.');
    }
  };

  return (
    <motion.section 
      id="contact" 
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
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} 
          className="max-w-lg mx-auto bg-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-600 hover:scale-105"
        >
          {submitStatus && <p className={submitStatus.includes('success') ? 'text-green-400' : 'text-red-500'}>{submitStatus}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-invalid={errors.name ? 'true' : 'false'} 
                aria-describedby="name-error"
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-invalid={errors.email ? 'true' : 'false'} 
                aria-describedby="email-error"
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none" 
                aria-invalid={errors.message ? 'true' : 'false'} 
                aria-describedby="message-error"
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl" 
              disabled={isSubmitting} 
              aria-busy={isSubmitting ? 'true' : 'false'} 
              aria-label="Send Message"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
