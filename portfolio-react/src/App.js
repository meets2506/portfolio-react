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
import Streaming from './components/Streaming';
import ExtraActivities from './components/ExtraActivities';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'certifications', 'projects', 'resume', 'streaming', 'extra-activities', 'contact']; 
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          
          // When section is in viewport (with 40% threshold)
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [activeSection]);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'certifications', 'projects', 'resume', 'streaming', 'extra-activities', 'contact']; 
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
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <Streaming />
        <ExtraActivities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
