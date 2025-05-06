import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ handleScroll, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);

  useEffect(() => {
    const handleScrollEffect = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScrollEffect);

    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
    };
  }, []);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      const firstFocusableElement = mobileMenuRef.current.querySelector('button');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    } else if (!isOpen && document.activeElement !== mobileToggleRef.current) {
      if (mobileToggleRef.current) {
        mobileToggleRef.current.focus();
      }
    }
  }, [isOpen]);

  const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'projects', name: 'Projects' },
    { id: 'resume', name: 'Resume' },
    { id: 'extra-activities', name: 'Activities' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${ 
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'bg-gray-900/30 backdrop-blur-sm shadow-none'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              className="text-2xl font-bold text-purple-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              onClick={() => handleScroll('hero')}
              aria-label="Scroll to top of page"
            >
              Meet Shah
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md ${ 
                    activeSection === item.id 
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                   }`}
                >
                  {item.name}
                  {/* Active indicator line */}
                  {activeSection === item.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                      layoutId="activeNavIndicator" // Animate line position
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              ref={mobileToggleRef}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <motion.div 
        ref={mobileMenuRef}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { handleScroll(item.id); setIsOpen(false); }}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${ 
                activeSection === item.id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
