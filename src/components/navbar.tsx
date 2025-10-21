"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import ScrollProgressBar from "./ScrollProgressBar";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hasShadow, setHasShadow] = useState(false); // 👈 controls shadow on scroll

  // Add or remove shadow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 20); // 👈 adjust scroll threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect current visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
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
        className={`fixed top-0 left-0 w-full backdrop-blur-md z-40 transition-shadow duration-300 ${
          hasShadow ? "shadow-[0_4px_10px_rgba(0,0,0,0.6)]" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Left Section - Profile */}
          <div className="flex items-center gap-3">
            <div
              className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src="/images/osama-pfp.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-black/40 backdrop-blur-sm absolute inset-0"></div>
                <FaRegEye className="relative z-10 text-white text-2xl" />
              </div>
            </div>

            <div>
              <div className="font-semibold">ENGR. MUHAMMAD OSAMA</div>
              <div className="text-xs text-gray-500">
                Mechanical Engineer • CAD Designer
              </div>
            </div>
          </div>

          {/* Right Section - Nav Links */}
          <div className="hidden md:flex gap-6 items-center font-bold">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "certifications", label: "Certifications" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-opacity duration-300 ${
                  activeSection === id
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-[88px]" />

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-lg w-full mx-4 rounded-2xl overflow-hidden shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/osama-pfp.jpg"
                alt="Profile Full"
                className="w-full h-auto object-contain cursor-zoom-in"
                onClick={(e) => {
                  e.currentTarget.classList.toggle("scale-110");
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
