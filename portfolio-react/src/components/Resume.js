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
          My Resume
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="text-gray-300 mb-6 max-w-2xl mx-auto"
          transition={{ delay: 0.2 }}
        >
          View or download my resume to see more about my experience, skills, and education.
        </motion.p>
        <motion.a 
          href={resumeUrl} 
          download 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-block font-semibold transition-shadow shadow-lg hover:shadow-xl" 
          role="button" 
          aria-label="Download Resume"
        >
          Download Resume (PDF)
        </motion.a>
        <div className="mt-8">
          <Document file={resumeUrl} className="mx-auto">
            <Page pageNumber={1} width={800} />
          </Document>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
