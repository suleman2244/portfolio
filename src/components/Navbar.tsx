'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegEye } from 'react-icons/fa';
import ScrollProgressBar from './ScrollProgressBar';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-shadow duration-300 ${hasShadow ? 'glass-nav shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className='max-w-6xl mx-auto px-6 py-5 flex justify-between items-center'>
          {/* Left Section - Profile */}
          <div className='flex items-center gap-3'>
            <div
              className='relative w-12 h-12 rounded-full overflow-hidden cursor-pointer group border-2 border-[--accent-primary]'
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src='/images/sulaman.jpeg'
                alt='Profile'
                className='w-full h-full object-cover transition-all duration-300 group-hover:blur-sm'
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <div className='bg-black/40 backdrop-blur-sm absolute inset-0'></div>
                <FaRegEye className='relative z-10 text-white text-2xl' />
              </div>
            </div>

            <div>
              <div className='font-bold text-gradient font-mono tracking-wider'>SULAMAN_KHAN</div>
              <div className='text-[10px] text-[--text-secondary] uppercase tracking-widest font-mono'>
                Sys.Architect // v3.0
              </div>
            </div>
          </div>

          {/* Right Section - Nav Links */}
          <div className='flex gap-8 items-center font-semibold'>
            <div className='hidden md:flex gap-8 items-center font-mono text-sm'>
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'impact', label: 'Impact' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`transition-all duration-300 relative group uppercase tracking-wider ${activeSection === id
                    ? 'text-[--accent-primary]'
                    : 'text-[--text-primary] hover:text-[--accent-secondary]'
                    }`}
                >
                  <span className={`opacity-0 transition-opacity duration-300 ${activeSection === id ? 'opacity-100' : 'group-hover:opacity-50'}`}>[ </span>
                  {label}
                  <span className={`opacity-0 transition-opacity duration-300 ${activeSection === id ? 'opacity-100' : 'group-hover:opacity-50'}`}> ]</span>
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className='h-[88px]' />

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className='relative max-w-lg w-full mx-4 rounded-2xl overflow-hidden shadow-lg'
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src='/images/sulaman.png'
                alt='Profile Full'
                className='w-full h-auto object-contain cursor-zoom-in'
                onClick={(e) => {
                  e.currentTarget.classList.toggle('scale-110');
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
