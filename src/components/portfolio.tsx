"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";

import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { RiArrowDropRightLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Lightbox
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import TechnicalDocumentation from "./TechnicalDocumentation";
import PartsAndPrototyping from "./PartsAndPrototyping";
import DrawingsSection from "./DrawingsSection";
import InternshipsAndCertificates from "./InternshipsAndCertificates";
import CadScreenshots from "./CadScreenshots";
import Contact from "./Contact";
import AnimatedBackground from "./ParametricMeshBackground";

// for multi downloading the files
const handleMultiDownload = () => {
  const files = [
    { url: "/assets/Osama-CV-V-13.pdf", name: "Muhammad-Osama-CV.pdf" },
    { url: "/assets/OSAMA-PORTFOLIO-CAD.pptx", name: "OSAMA-PORTFOLIO-CAD.pptx" },
  ];

  files.forEach((file) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

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
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [minimized, setMinimized] = useState(false);


  const projects = [
    {
      title: "Eco-Friendly Recycled Plastic",
      subtitle: "Quad / Hexa / Octa / Coaxial — Custom frames & payloads",
      description:
        "A sustainable engineering project using recycled plastics for UAV structures. Focused on strength-to-weight optimization and manufacturability while supporting environmental goals.",
      details:
        "This project explores the application of recycled plastic composites in UAV airframes. Tasks included CAD modeling, DFMA analysis, and structural optimization through weight and vibration testing. The initiative demonstrated that eco-conscious materials can meet aerospace mechanical standards without compromising flight performance.",
      images: [
        "/images/behance1.png",
        "/images/behance1-sub1.png",
        "/images/behance1-sub2.png",
        "/images/behance1-sub3.jpg",
        "/images/behance1-sub4.jpg",
        "/images/behance1-sub5.jpg",
        "/images/behance1-sub6.jpg",
        "/images/behance1-sub7.jpg",
        "/images/behance1-sub8.jpg",
        "/images/behance1-sub9.jpg",
      ],
      bullets: [
        "Custom plates & arm clampers",
        "Payload releasing mechanisms",
        "Battery / fuel-cell integration",
      ],
    },
    {
      title: "AEC Bus Frame",
      subtitle: "Structural frame design for automotive and transport systems",
      description:
        "A lightweight yet robust bus frame designed for high durability and manufacturability. Developed using DFMA principles and modular frame architecture for easy assembly.",
      details:
        "The AEC Bus Frame project focused on designing a scalable and manufacturable vehicle frame for urban transport. Responsibilities included load analysis, modular frame design, and integration of mechanical mounts for electrical and pneumatic systems. CAD and FEA validation ensured long-term structural stability.",
      images: ["/images/behance2.jpg", "/images/behance2-sub1.jpg", "/images/behance2-sub2.jpg"],
      bullets: [
        "High-strength modular frame design",
        "Ease of assembly and manufacturability",
        "FEA validation for load endurance",
      ],
    },
    {
      title: "Movable Poultry Cage System",
      subtitle: "Automated and modular poultry cage setup",
      description:
        "An innovative, mobile poultry cage design that streamlines animal management and improves ventilation, cleaning, and scalability for small-scale farms.",
      details:
        "This mechanical system was engineered to enable easy relocation and maintenance of poultry setups. It integrates lightweight structural frames with pneumatic-assisted lifting and locking mechanisms. The CAD design focused on ease of transport, modularity, and durability under farm conditions.",
      images: [
        "/images/behance3.jpg",
        "/images/behance3-sub1.jpg",
        "/images/behance3-sub2.jpg",
        "/images/behance3-sub3.jpg",
      ],
      bullets: [
        "Modular and portable design",
        "Optimized for mass fabrication",
        "Pneumatic-assisted locking system",
      ],
    },
    {
      title: "Single Ground Control Stations",
      subtitle: "Compact GCS enclosures for UAV monitoring and control",
      description:
        "A single-operator ground control station built for field deployment. Focused on compact mechanical design, accessibility, and durability for harsh environments.",
      details:
        "Developed a single-unit GCS enclosure designed for quick deployment in UAV operations. Integrated ergonomic layout, shock-resistant housing, and modular component bays. The mechanical design prioritized ease of maintenance and efficient cable routing to reduce downtime during missions.",
      images: ["/images/Picture29.jpg", "/images/Picture30.jpg", "/images/Picture31.jpg"],
      bullets: [
        "Compact and modular GCS layout",
        "Shock-resistant enclosure design",
        "Optimized for quick field deployment",
      ],
    },
    {
      title: "UAV Copters",
      subtitle: "Quad / Hexa / Octa / Coaxial — Custom UAV frames",
      description:
        "A family of custom UAV copters designed for varied payloads and mission requirements. Features lightweight frames, strong arm joints, and quick-swap payload modules.",
      details:
        "This project involved the design and fabrication of multi-rotor UAV frames for different configurations — Quad, Hexa, Octa, and Coaxial. Work included CAD modeling, weight optimization, and payload balancing. Multiple frame variants were produced and tested for flight endurance and vibration stability.",
      images: [
        "/images/Picture1.png",
        // "/images/Picture2.png",
        "/images/Picture3.jpg",
        "/images/Picture4.jpg",
        "/images/Picture5.jpg",
        "/images/Picture6.jpg",
        "/images/Picture7.jpg",
        "/images/Picture8.jpg",
        "/images/Picture9.jpg",
        "/images/Picture10.jpg",
      ],
      bullets: [
        "Custom carbon and aluminum plates",
        "Payload mounting and release systems",
        "Optimized weight distribution and frame rigidity",
      ],
    },
    {
      title: "Fixed-Wing VTOL",
      subtitle: "Hybrid vertical takeoff and forward-flight UAV design",
      description:
        "A fixed-wing VTOL UAV developed for efficient hybrid flight. Designed to transition seamlessly from vertical takeoff to aerodynamic forward flight.",
      details:
        "This aircraft was engineered to combine the benefits of rotary and fixed-wing UAVs. Work involved modeling tilt-motor assemblies, designing structural reinforcements for wing-fuselage transitions, and optimizing aerodynamics. The prototype demonstrated stable vertical-to-horizontal flight conversion.",
      images: ["/images/Picture12.jpg", "/images/Picture13.jpg"],
      bullets: [
        "Foldable wings & tilt-motor integration",
        "Lightweight composite structure",
        "Aerodynamic optimization for endurance",
      ],
    },
    {
      title: "Loiter Munition UAVs",
      subtitle: "Compact fixed-wing designs for long endurance missions",
      description:
        "High-performance loiter munition UAVs emphasizing compact design, aerodynamic efficiency, and quick deployment capability.",
      details:
        "The project focused on designing and prototyping small, efficient fixed-wing UAVs capable of long loiter times. Tasks included 3D modeling, component integration, and assembly planning for streamlined aerodynamics. Each variant was optimized for payload balance, endurance, and launch compatibility.",
      images: [
        "/images/Picture14.jpg",
        "/images/Picture15.jpg",
        "/images/Picture16.jpg",
        "/images/Picture17.jpg",
        "/images/Picture18.jpg",
        "/images/Picture19.jpg",
        "/images/Picture20.jpg",
        "/images/Picture21.jpg",
        "/images/Picture22.jpg",
        "/images/Picture23.jpg",
        "/images/Picture24.jpg",
        "/images/Picture25.jpg",
      ],
      bullets: [
        "Compact aerodynamic layout",
        "Optimized for long endurance missions",
        "Precision component integration",
      ],
    },
    {
      title: "Double Ground Control Stations",
      subtitle: "Dual-operator control system for advanced UAV missions",
      description:
        "An advanced double-station GCS built for dual-operator control and simultaneous mission management. Emphasizes system modularity and operator ergonomics.",
      details:
        "Designed a twin-station GCS enclosure integrating two independent operator consoles for simultaneous UAV control. Focused on internal wiring management, thermal ventilation, and accessibility. The mechanical design allowed modular component expansion and field maintainability.",
      images: ["/images/Picture28.jpg", "/images/Picture27.jpg"],
      bullets: [
        "Dual-operator layout for mission flexibility",
        "Ventilated and modular chassis design",
        "Integrated cable and power routing system",
      ],
    },
    {
      title: "Payload Mechanism",
      subtitle: "Dual-operator control system for advanced UAV missions",
      description:
        "An advanced double-station GCS built for dual-operator control and simultaneous mission management. Emphasizes system modularity and operator ergonomics.",
      details:
        "Designed a twin-station GCS enclosure integrating two independent operator consoles for simultaneous UAV control. Focused on internal wiring management, thermal ventilation, and accessibility. The mechanical design allowed modular component expansion and field maintainability.",
      images: ["/images/Picture2.png"],
      bullets: [
        "Dual-operator layout for mission flexibility",
        "Ventilated and modular chassis design",
        "Integrated cable and power routing system",
      ],
    },
  ];
  

  // Close with escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-600 max-w-xl"
          >
            2+ years in product development and full lifecycle design, 3+ years
            CAD (SolidWorks, PTC Creo). DFMA-focused, prototyping & 3D printing
            experience, BOMs and technical documentation.
          </motion.p>

          <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="inline-block bg-black text-white px-5 py-3 rounded-2xl shadow hover:scale-105 transition"
          >
            View Projects
          </a>

          <button
            onClick={handleMultiDownload}
            className="inline-block border border-black px-5 py-3 rounded-2xl hover:bg-green hover:text-white transition"
          >
            Download CV & Presentation
          </button>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/Picture45.jpg"
            alt="CAD screenshot"
            className="w-full h-64 object-cover"
          />
        </motion.div>
      </header>

      {/* ABOUT SUMMARY */}
      <FadeInWhenVisible>
      <section id="about" className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-bold">ABOUT ME</h2>
        <p className="mt-3 text-gray-600">
          2+ years of experience in full product development lifecycle — concept to
          production. Experienced in fast-paced startup environments, producing
          manufacturable CAD models, 2D drawings (DXF), BOMs and assembly
          documentation.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { number: "3+", label: "Years Experience" },
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

      {/* SKILLS SECTION */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Technical Skills</h3>

        <div className="space-y-3 text-gray-600">
          <div className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-48 shrink-0">Software & CAD:</span>
            <span>
              SolidWorks, PTC Creo, Onshape, Siemens NX, AutoCAD (Basic), Windchill (Basic)
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-48 shrink-0">Programming:</span>
            <span>Basic C++, Basic Python</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-48 shrink-0">Engineering Tools:</span>
            <span>Manufacturable 2D Drawings, Basic Finite Element Analysis (FEA)</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-48 shrink-0">Manufacturing Methods:</span>
            <span>Design for Manufacturing and Assembly (DFMA), 3D Printing, Rapid Prototyping</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-48 shrink-0">Other:</span>
            <span>MS Office, Problem-Solving, Documentation</span>
          </div>
        </div>
      </div>

      {/* PORTFOLIO STATEMENT */}

      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-2">Portfolio Statement</h3>
        <p className="text-gray-600">
          This portfolio demonstrates a broad range of design and engineering skills
          across UAVs, payload mechanisms, launchers and GCS units. Emphasis on
          manufacturability, precision and standards compliance.
        </p>
      </div>
      </section>  
      </FadeInWhenVisible>

      {/* PROJECTS */}

      <FadeInWhenVisible>
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">FEATURED PROJECTS</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
         <motion.article
         key={p.title}
         whileHover={{ translateY: -6 }}
         onClick={() => {
           setActiveProject(i);
           setPhotoIndex(0);
         }}
         className={`relative bg-white rounded-2xl p-4 shadow hover:shadow-lg transition group overflow-hidden cursor-pointer 
           ${
             p.title === "Payload Mechanism"
               ? "md:col-span-2" // ✅ spans 2 columns on medium+ screens
               : ""
           }`}
       >
       
            <div className="flex gap-4 transition-all duration-300 group-hover:blur-sm">
              <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-4 mt-2">{p.description}</p>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-black/50 backdrop-blur-md absolute inset-0"></div>
              <div className="relative z-10 flex flex-col items-center text-white">
                <FaRegEye className="text-4xl mb-2 animate-fade-in" />
                <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
    </FadeInWhenVisible>

      {/* ✅ Lightbox popup for project images */}
      {activeProject !== null && (
        <Lightbox
          open={activeProject !== null}
          close={() => setActiveProject(null)}
          index={photoIndex}
          slides={projects[activeProject].images.map((src) => ({
            src,
            description: `${projects[activeProject].title} — ${projects[activeProject].subtitle}`,
          }))}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
          plugins={[Captions, Thumbnails]}
          captions={{ descriptionTextAlign: "center" }}
          thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
        />
      )}

      {/* ✅ Side modal when project is open */}
      <AnimatePresence>
      {activeProject !== null && (
        <motion.div
          key="project-info"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: minimized ? 320 : 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-black/70 backdrop-blur-xl text-white shadow-2xl z-[9999999] overflow-y-auto border-l border-white/10`}
        >
          {/* ✅ Toggle Minimize Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized((prev) => !prev);
            }}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-black/80 hover:bg-black/90 
                      rounded-full p-3 text-[#22c55e] hover:text-[#4ade80] transition-all duration-300 
                      shadow-lg z-[10000]"
          >
            <RiArrowDropRightLine
              className={`text-5xl transform transition-transform duration-300 cursor-pointer ${
                minimized ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* ✅ Modal Content */}
          <div
            className={`p-6 transition-opacity duration-300 ${
              minimized ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <h2 className="text-xl font-bold mb-1 text-[#22c55e]">
              {projects[activeProject].title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              {projects[activeProject].subtitle}
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              {projects[activeProject].details}
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {projects[activeProject].bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

     {/* INTERNSHIPS & CERTIFICATES */}
      <FadeInWhenVisible>
        <InternshipsAndCertificates />
      </FadeInWhenVisible>

     {/* 2D CAD SCREENSHOTS */}
      <FadeInWhenVisible>
        <CadScreenshots />
      </FadeInWhenVisible>

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
