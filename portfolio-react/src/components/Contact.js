import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animation
        delayChildren: 0.3, // Delay children animation start
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }} // Initial state for section
      whileInView={{ opacity: 1, y: 0 }} // Animate section when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger section animation once
      transition={{ duration: 0.6 }} // Animation duration for section
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-purple-500 pb-2 inline-block text-white">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out or schedule a meeting!
        </p>
        
        {/* Scheduling Button */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://calendly.com/your-username" // Replace with your Calendly link
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Schedule a Meeting
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.a
            href="https://github.com/meets2506" // Use actual username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile" // Add aria-label
            variants={itemVariants}
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/meet-s-shah/" // Use actual username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile" // Add aria-label
            variants={itemVariants}
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/meet_s_shah/" // Use actual username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile" // Add aria-label
            variants={itemVariants}
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaInstagram size={32} />
          </motion.a>
          <motion.a
            href="https://huggingface.co/meets2506" // Use actual username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HuggingFace Profile" // Add aria-label
            variants={itemVariants}
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <SiHuggingface size={32} />
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 30 }} // Simple initial state for form
          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate form into view
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
          transition={{ duration: 0.5, delay: 0.4 }} // Delay slightly
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-gray-300 mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              // Use theme colors for focus, add aria-describedby
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/40 focus:outline-none text-gray-100 transition-colors duration-300"
              required
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {/* Add ID to error message */}
            {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-gray-300 mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              // Use theme colors for focus, add aria-describedby
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/40 focus:outline-none text-gray-100 transition-colors duration-300"
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {/* Add ID to error message */}
            {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-gray-300 mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              // Use theme colors for focus, add aria-describedby
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-400/40 focus:outline-none text-gray-100 transition-colors duration-300"
              required
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {/* Add ID to error message */}
            {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="button-primary w-full sm:w-auto justify-self-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {/* Wrap status message for screen reader announcement */}
          <div aria-live="polite" className="mt-4 h-6 text-center">
            {submitStatus && <p className={submitStatus.includes('success') ? 'text-green-400' : 'text-red-500'}>{submitStatus}</p>}
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
