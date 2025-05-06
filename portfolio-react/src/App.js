import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import ExtraActivities from './components/ExtraActivities';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'certifications', 'projects', 'resume', 'extra-activities', 'contact']; 
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <Navbar handleScroll={handleScroll} activeSection={activeSection} />
      <Hero handleScroll={handleScroll} />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Resume />
      {/* Removed Streaming Section */}
      <ExtraActivities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
