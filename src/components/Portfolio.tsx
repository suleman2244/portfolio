"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// ✅ Lightbox
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Components Imported
import TechnicalDocumentation from "./TechnicalDocumentation";
import PartsAndPrototyping from "./PartsAndPrototyping";
import DrawingsSection from "./DrawingsSection";
import InternshipsAndCertificates from "./InternshipsAndCertificates";
import CadScreenshots from "./CadScreenshots";
import Contact from "./Contact";
import Projects from "./Projects";

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen portfolio-theme antialiased relative">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Mechanical Engineer & CAD Designer
          </motion.h1>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="inline-block bg-black text-white px-5 py-3 rounded-2xl shadow hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/assets/Osama-CV-and-Portfolio.zip"
              download="Osama-CV-and-Portfolio.zip"
              className="inline-block border border-black px-5 py-3 rounded-2xl hover:bg-green hover:text-white transition"
            >
              Download CV & Portfolio
            </a>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-none mx-auto md:mx-0"
        >
          <img
            src="/images/osama-pfp.jpg"
            alt="Osama Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </header>

      {/* ABOUT SUMMARY */}
      <FadeInWhenVisible>
        <section id="about" className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-bold">ABOUT ME</h2>
            <p className="mt-3 text-gray-600">
              Mechanical engineer having experience in full product development
              lifecycle — concept to production. Experienced in fast-paced
              startup environments, producing manufacturable CAD models, 2D
              drawings (DXF), BOMs and assembly documentation.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "4+", label: "Years CAD Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 
                      transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-[#22c55e]/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
              >
                <h3 className="text-3xl font-bold text-[#22c55e] group-hover:text-[#4ade80] transition-colors duration-300">
                  {stat.number}
                </h3>
                <p className="text-gray-300 mt-2 group-hover:text-[#a7f3d0] transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CAD SOFTWARES */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              CAD Softwares
            </h3>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {/* SolidWorks */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/solidworks-logo.png"
                  alt="SolidWorks"
                  className="h-20"
                />
                <p className="mt-2 text-md font-bold text-gray-600">SolidWorks</p>
              </div>

              {/* Creo Parametric */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/creo-logo.png"
                  alt="Creo Parametric"
                  className="h-20"
                />
                <p className="mt-2 text-md font-bold text-gray-600">Creo Parametric</p>
              </div>

              {/* Siemens NX */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/siemensnx-logo.png"
                  alt="Siemens NX"
                  className="h-20"
                />
                <p className="mt-2 text-md font-bold text-gray-600">Siemens NX</p>
              </div>

              {/* Autodesk Inventor */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/autodeskinventor-logo.png"
                  alt="Autodesk Inventor"
                  className="h-20"
                />
                <p className="mt-2 text-md font-bold text-gray-600">Autodesk Inventor</p>
              </div>
            </div>

          </div>

          {/* SKILLS SECTION */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">
              Technical Skills
            </h3>

            <div className="space-y-3 text-gray-600">
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-semibold w-48 shrink-0">
                  Software & CAD:
                </span>
                <span>
                  SolidWorks, Creo Parametric, Siemens NX, Autodesk Inventor
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-semibold w-48 shrink-0">Programming:</span>
                <span>Basic C++, Basic Python</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-semibold w-48 shrink-0">
                  Engineering Tools:
                </span>
                <span>
                  Manufacturable 2D Drawings, BOM, Part Lists, Basic Finite
                  Element Analysis (FEA)
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-semibold w-48 shrink-0">
                  Manufacturing Methods:
                </span>
                <span>
                  Design for Manufacturing and Assembly (DFMA), 3D Printing,
                  Rapid Prototyping
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-semibold w-48 shrink-0">Other:</span>
                <span>
                  MS Office (Word, Excel, PowerPoint), Problem-Solving,
                  Documentation
                </span>
              </div>
            </div>
          </div>

          {/* PORTFOLIO STATEMENT */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-2">Portfolio Statement</h3>
            <p className="text-gray-600">
              This portfolio demonstrates a broad range of design and
              engineering. It includes expertise in part design, large-scale
              assembly development, special machine construction, and system
              integration, with a focus on manufacturability, precision, and
              compliance with engineering standards. The work reflects
              proficiency in CAD modelling, prototyping, and technical
              documentation, showcasing the ability to deliver innovative,
              production-ready solutions across diverse mechanical and product
              design applications.
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* PROJECTS */}
      <FadeInWhenVisible>
        <Projects />
      </FadeInWhenVisible>

      {/* INTERNSHIPS & CERTIFICATES */}
      <FadeInWhenVisible>
        <InternshipsAndCertificates />
      </FadeInWhenVisible>

      {/* 2D CAD SCREENSHOTS */}
      {/* <FadeInWhenVisible>
        <CadScreenshots />
      </FadeInWhenVisible> */}

      {/* 2D DRAWINGS */}
      <FadeInWhenVisible>
        <DrawingsSection />
      </FadeInWhenVisible>

      {/* TECHNICAL DOCUMENTATION */}
      <FadeInWhenVisible>
        <TechnicalDocumentation />
      </FadeInWhenVisible>

      {/* 3D PARTS & PROTOTYPING */}
      <FadeInWhenVisible>
        <PartsAndPrototyping />
      </FadeInWhenVisible>

      {/* CONTACT */}
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </div>
  );
}
