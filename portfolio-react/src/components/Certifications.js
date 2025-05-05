import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { id: 1, title: 'Certification 1', issuer: 'Issuer', date: '2023', description: 'Description here' },
    { id: 2, title: 'Certification 2', issuer: 'Issuer', date: '2022', description: 'Description here' },
    // Add more certifications as needed
  ];

  return (
    <motion.section 
      id="certifications" 
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
          My Certifications
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-600 text-center"
              role="article" 
              aria-labelledby={`cert-title-${cert.id}`}
            >
              <h3 id={`cert-title-${cert.id}`} className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">Issued by: {cert.issuer}</p>
              <p className="text-gray-400 mb-2">Date: {cert.date}</p>
              <p className="text-gray-300">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
