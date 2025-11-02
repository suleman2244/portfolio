"use client";
import React, { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CgArrowLongRight } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import { Eye, ArrowRight, ChevronRight, X } from "lucide-react";

// ✅ Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

interface Project {
  title: string;
  description: string;
  image: string;
  images: { src: string; description: string }[];
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Smart Industrial Arm",
    description:
      "An IoT-enabled robotic arm designed for precision industrial automation.",
    image: "/projects/robotic-arm-thumb.jpg",
    category: "IoT & Robotics",
    images: [
      { src: "/projects/robotic-arm-1.jpg", description: "Initial CAD Design" },
      { src: "/projects/robotic-arm-2.jpg", description: "Physical Assembly" },
    ],
  },
  {
    title: "Solar Tracking System",
    description:
      "A dual-axis solar tracker that maximizes solar panel efficiency using sensors.",
    image: "/projects/solar-tracker-thumb.jpg",
    category: "Energy Systems",
    images: [
      { src: "/projects/solar-tracker-1.jpg", description: "Circuit Schematic" },
      { src: "/projects/solar-tracker-2.jpg", description: "Prototype Testing" },
    ],
  },
];

export default function Projects() {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [minimized, setMinimized] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false); // ✅ NEW: Separate lightbox state

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
  
  const personalProjects = [
    {
      title: "G.I. Joe Night Raven Cobra",
      subtitle: "Mini 3-axis CNC milling machine for learning & prototyping",
      description:
        "A compact CNC prototype built using aluminum extrusions, lead screws, and stepper motors. Focused on mechanical rigidity and precise axis alignment.",
      details:
        "This project involved mechanical design, stepper calibration, and spindle mount prototyping. It demonstrates mechanical precision, rigidity control, and step motion tuning for lightweight materials.",
      images: [
        "/images/personal-pro/cobra1.jpg",
        "/images/personal-pro/cobra2.jpg",
        "/images/personal-pro/cobra3.jpg",
        "/images/personal-pro/cobra4.jpg",
        "/images/personal-pro/cobra5.jpg",
        "/images/personal-pro/cobra6.jpg",
        "/images/personal-pro/cobra7.jpg",
        "/images/personal-pro/cobra8.jpg",
        "/images/personal-pro/cobra9.jpg",
        "/images/personal-pro/cobra10.jpg",
        "/images/personal-pro/cobra11.jpg",
        "/images/personal-pro/cobra12.jpg",
        "/images/personal-pro/cobra13.jpg",
        "/images/personal-pro/cobra14.jpg",
      ],
      bullets: [
        "Designed custom gantry & carriage system",
        "Stepper-based motion control",
        "Precision axis calibration",
      ],
    },
    {
      title: "Electric Vehicle Racing Car",
      subtitle: "Custom aluminum chassis with suspension & steering system",
      description:
        "An RC vehicle chassis project exploring wheel alignment, steering geometry, and suspension integration using lightweight materials.",
      details:
        "Developed using SolidWorks with emphasis on DFMA and realistic movement simulation. Designed adjustable steering linkage and shock absorber mounts.",
      images: [
        "/images/personal-pro/ecar1.jpg",
        "/images/personal-pro/ecar2.jpg",
        "/images/personal-pro/ecar3.jpg",
        "/images/personal-pro/ecar4.jpg",
        "/images/personal-pro/ecar5.jpg",
        "/images/personal-pro/ecar6.jpg",
        "/images/personal-pro/ecar7.jpg",
        "/images/personal-pro/ecar8.jpg",
      ],
      bullets: [
        "Independent suspension system",
        "Adjustable toe & camber design",
        "Lightweight aluminum chassis",
      ],
    },
    {
      title: "Zippo Lighter",
      subtitle: "Personal UAV design for payload testing & modular upgrades",
      description:
        "A custom-built drone frame integrating modular motor mounts and payload slots for flexible testing.",
      details:
        "Designed in PTC Creo and 3D printed for rapid iteration. The frame allowed different payload weights and propeller configurations to be tested safely.",
      images: [
        "/images/personal-pro/lighter3.jpg",
        "/images/personal-pro/lighter1.jpg",
        "/images/personal-pro/lighter2.jpg",
        "/images/personal-pro/lighter4.jpg",
        "/images/personal-pro/lighter5.jpg",
        "/images/personal-pro/lighter6.jpg",
      ],
      bullets: [
        "3D-printed PLA arms and joints",
        "Modular payload attachment",
        "Custom motor mount brackets",
      ],
    },
    {
      title: "High-Speed Mosquito Trap Fan",
      subtitle: "Scaled mechanical press prototype using syringes & pistons",
      description:
        "A small-scale hydraulic press built to demonstrate Pascal’s law and load amplification principles.",
      details:
        "Used as a mechanical concept demonstrator for understanding pressure transmission and force multiplication. Designed to be easily replicable for educational projects.",
      images: [
        "/images/personal-pro/mtrap1.jpg",
        "/images/personal-pro/mtrap2.jpg",
        "/images/personal-pro/mtrap3.jpg",
      ],
      bullets: [
        "Hydraulic syringe system",
        "Transparent fluid chamber for visualization",
        "Demonstrates Pascal’s principle",
      ],
    },
    {
      title: "Bottle Rack",
      subtitle: "Scaled mechanical press prototype using syringes & pistons",
      description:
        "A small-scale hydraulic press built to demonstrate Pascal’s law and load amplification principles.",
      details:
        "Used as a mechanical concept demonstrator for understanding pressure transmission and force multiplication. Designed to be easily replicable for educational projects.",
      images: [
        "/images/personal-pro/br1.jpg",
        "/images/personal-pro/br2.jpg",
      ],
      bullets: [
        "Hydraulic syringe system",
        "Transparent fluid chamber for visualization",
        "Demonstrates Pascal’s principle",
      ],
    },
    {
      title: "Collapsable Dog Pot",
      subtitle: "Scaled mechanical press prototype using syringes & pistons",
      description:
        "A small-scale hydraulic press built to demonstrate Pascal’s law and load amplification principles.",
      details:
        "This project focuses on creating a collapsible dog bowl that's perfect for pet owners who are always on the move. Designed with portability and ease of use in mind, this bowl can be taken anywhere, making it easy to provide food or water to your furry friend. Its compact design ensures it’s convenient to carry around without losing any functionality, making it a must-have accessory for anyone who loves to travel with their pet.",
      images: [
        "/images/personal-pro/dogpot1.jpg",
        "/images/personal-pro/dogpot2.jpg",
        "/images/personal-pro/dogpot3.jpg",
        "/images/personal-pro/dogpot4.jpg",
        "/images/personal-pro/dogpot5.jpg",
      ],
      bullets: [
        "Hydraulic syringe system",
        "Transparent fluid chamber for visualization",
        "Demonstrates Pascal’s principle",
      ],
    },
    {
      title: "Bee Truck",
      subtitle: "Scaled mechanical press prototype using syringes & pistons",
      description:
        "A small-scale hydraulic press built to demonstrate Pascal’s law and load amplification principles.",
      details:
        "This project focuses on creating a collapsible dog bowl that's perfect for pet owners who are always on the move. Designed with portability and ease of use in mind, this bowl can be taken anywhere, making it easy to provide food or water to your furry friend. Its compact design ensures it’s convenient to carry around without losing any functionality, making it a must-have accessory for anyone who loves to travel with their pet.",
      images: [
        "/images/personal-pro/beetruck1.jpg",
        "/images/personal-pro/beetruck2.jpg",
      ],
      bullets: [
        "Hydraulic syringe system",
        "Transparent fluid chamber for visualization",
        "Demonstrates Pascal’s principle",
      ],
    },
  ];
  

  const allProjects = [...projects, ...personalProjects];
  // Close panel on Escape (only if lightbox is closed)
    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !lightboxOpen && activeProject !== null) {
          setActiveProject(null);
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, activeProject]);
  
    // Reset minimized when opening new project
    useEffect(() => {
      if (activeProject !== null) setMinimized(false);
    }, [activeProject]);
  
    const openProject = (idx: number) => {
      setActiveProject(idx);
      setPhotoIndex(0);
      setLightboxOpen(true);
    };

    return (
        <>
          {/* PROJECTS */}
          <FadeInWhenVisible>
            <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
              {/* FEATURED PROJECTS */}
              <h2 className="text-3xl font-bold mb-6">FEATURED PROJECTS</h2>
      
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {projects.map((p, i) => (
                  <motion.article
                    key={p.title}
                    whileHover={{ translateY: -6 }}
                    onClick={() => {
                      setActiveProject(i);
                      setPhotoIndex(0);
                    }}
                    className={`relative bg-white rounded-2xl p-4 shadow hover:shadow-lg transition group overflow-hidden cursor-pointer ${
                      p.title === "Payload Mechanism" ? "md:col-span-2" : ""
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
                        <p className="text-sm text-gray-600 line-clamp-4 mt-2">
                          {p.description}
                        </p>
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
      
              {/* PERSONAL PROJECTS */}
              <h2 className="text-3xl font-bold mb-6">PERSONAL PROJECTS</h2>
      
              <div className="grid md:grid-cols-2 gap-6">
                {personalProjects.map((p, i) => (
                  <motion.article
                    key={p.title}
                    whileHover={{ translateY: -6 }}
                    onClick={() => {
                      setActiveProject(i + projects.length); // ✅ offset index so Lightbox still works
                      setPhotoIndex(0);
                    }}
                    className={`relative bg-white rounded-2xl p-4 shadow hover:shadow-lg transition group overflow-hidden cursor-pointer ${
                      p.title === "Bee Truck" ? "md:col-span-2" : ""
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
                        <p className="text-sm text-gray-600 line-clamp-4 mt-2">
                          {p.description}
                        </p>
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
              slides={[
                ...projects,
                ...personalProjects,
              ][activeProject].images.map((src) => ({
                src,
                description: `${
                  [...projects, ...personalProjects][activeProject].title
                } — ${
                  [...projects, ...personalProjects][activeProject].subtitle
                }`,
              }))}
              on={{
                view: ({ index }) => setPhotoIndex(index),
              }}
              plugins={[Captions, Thumbnails]}
              captions={{ descriptionTextAlign: "center" }}
              thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
            />
          )}

          {/* ✅ Lightbox popup - closes independently */}

            {activeProject !== null && lightboxOpen && (
            <div className="fixed inset-0 z-[9998] pointer-events-none">
                <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={photoIndex}
                slides={allProjects[activeProject].images.map((src) => ({
                    src,
                    description: `${allProjects[activeProject].title} — ${allProjects[activeProject].subtitle}`,
                }))}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
                plugins={[Captions, Thumbnails]}
                captions={{ descriptionTextAlign: "center" }}
                thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
                styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
                controller={{ closeOnBackdropClick: true }}
                />
            </div>
            )}



{/* ------------------------------------------------------------ */}
            {/* SIDE PANEL - Always on top, pointer-events preserved */}
        <AnimatePresence>
            {activeProject !== null && (
            <motion.div
                key="project-info"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: minimized ? 320 : 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-black/70 backdrop-blur-xl text-white shadow-2xl z-[9999] overflow-y-auto border-l border-white/10"
                style={{ pointerEvents: "auto" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE PANEL */}
                <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400 z-[10001] cursor-pointer"
                style={{ pointerEvents: "auto" }}
                >
                <X className="w-6 h-6" />
                </button>

                {/* TOGGLE MINIMIZE - WORKS DURING LIGHTBOX */}
                <button
                onClick={(e) => {
                    e.stopPropagation();
                    setMinimized(prev => !prev);
                }}
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-black/80 hover:bg-black/90 rounded-full p-3 text-[#22c55e] hover:text-[#4ade80] transition-all duration-300 shadow-lg z-[10000] cursor-pointer"
                style={{ pointerEvents: "auto" }}
                >
                <ChevronRight
                    className={`w-8 h-8 transform transition-transform duration-300 ${
                    minimized ? "rotate-180" : ""
                    }`}
                />
                </button>

                {/* CONTENT */}
                <div
                className={`p-6 pt-16 transition-opacity duration-300 ${
                    minimized ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                >
                {(() => {
                    const p = allProjects[activeProject];
                    return (
                    <>
                        <h2 className="text-xl font-bold mb-1 text-[#22c55e]">{p.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">{p.subtitle}</p>
                        <p className="text-gray-300 leading-relaxed mb-4">{p.details}</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                        {p.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                        </ul>
                    </>
                    );
                })()}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );      
}