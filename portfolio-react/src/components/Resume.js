import React from 'react';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

// Assuming resume data or PDF is available; sync with resume.tex data. Use a PDF URL or path.
const resumeUrl = '/resume.pdf'; // Replace with actual path or generate from resume.tex

const Resume = () => {
  return (
    <motion.section 
      id="resume" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6 }} 
      className="py-16 md:py-24 bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          aria-level="2"
        >
          My Resume
        </h2>
        <p 
          className="text-gray-300 mb-6 max-w-2xl mx-auto"
        >
          View or download my resume to see more about my experience, skills, and education.
        </p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          <a 
            href={resumeUrl} 
            download 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="button-primary" 
            role="button" 
            aria-label="Download Resume"
          >
            Download Resume (PDF)
          </a>
        </motion.div>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          <Document file={resumeUrl} className="mx-auto">
            <Page pageNumber={1} width={800} />
          </Document>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
