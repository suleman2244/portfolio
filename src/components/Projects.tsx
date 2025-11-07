"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { IoIosSearch } from "react-icons/io";

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
  subtitle?: string;
  description: string;
  details: string;
  images: string[];
  bullets: string[];
}

const projects: Project[] = [
  {
    title: "Eco-Friendly Bricks",
    subtitle: "Recycled plastic & sand-based sustainable construction",
    description:
      "This project is all about making eco-friendly bricks by recycling waste plastic and leftover sand from the sand casting process. By combining these two waste materials, we create durable and sustainable bricks that help protect the environment.",
    details:
      "This innovative approach not only cuts down on plastic waste but also reuses industrial by-products, promoting a greener system. Perfect for construction, these recycled bricks offer a fantastic green alternative to traditional building materials, supporting sustainable development.",
    images: [
      "/images/behance1.png",
      "/images/behance1-sub1.png",
      "/images/behance1-sub2.png",
      "/images/behance1-sub3.jpg",
      "/images/behance1-sub4.jpg",
    ],
    bullets: [
      "Utilized recycled waste plastic and casting sand",
      "Developed durable eco-friendly bricks",
      "Promotes sustainable construction methods",
    ],
  },
  {
    title: "Movable Poultry Cage System",
    subtitle: "Automated and modular poultry egg management system",
    description:
      "An innovative mobile poultry cage system that improves egg management, ventilation, and scalability for small-scale farms.",
    details:
      "This mechanical system was engineered to enable easy relocation and maintenance of poultry setups. It integrates lightweight structural frames with pneumatic-assisted lifting and locking mechanisms. The CAD design focused on modularity, ease of cleaning, and long-term durability under farm conditions.",
    images: [
      "/images/behance3.jpg",
      "/images/behance3-sub1.jpg",
      "/images/behance3-sub2.jpg",
      "/images/behance3-sub3.jpg",
    ],
    bullets: [
      "Modular and portable design",
      "Optimized for mass fabrication",
      "Pneumatic-assisted lifting and locking system",
    ],
  },
  {
    title: "UAV Copters",
    subtitle: "Quad / Hexa / Octa / Coaxial — Custom UAV configurations",
    description:
      "Custom UAV copters designed for various payloads and mission requirements, featuring lightweight structures, optimized weight balance, and high mechanical precision.",
    details:
      "This modular UAV platform was designed to accommodate a wide range of payload capacities and mission profiles, including surveillance, mapping, delivery, and research applications. The copter supports multiple frame configurations—Quad, Hexa, Octa, and Coaxial—allowing tailored optimization for thrust-to-weight ratios and flight stability. Key design considerations included payload adaptability (ranging from lightweight sensors to heavier equipment), takeoff weight management, and aerodynamic efficiency. The project involved end-to-end development: from conceptualization and component selection to CAD-based avionics placement, DFMA-driven weight optimization, and manual assembly. Custom carbon and aluminum frames were fabricated to balance durability and weight, while detailed BOMs and pictorial assembly guides ensured smooth technician-led production and troubleshooting.",
    images: [
      "/images/Picture1.png",
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
      "Multiple frame configurations (Quad, Hexa, Octa, Coaxial)",
      "Custom carbon and aluminum frames",
      "DFMA & weight optimization for endurance",
    ],
  },
  {
    title: "Ground Control Station",
    subtitle: "Compact GCS enclosure for field UAV operations",
    description:
      "Engineered and modelled CAD single operator ground control station, designed for durable field deployment and modular component housing for UAV operations.",
    details:
      "Developed a robust single-operator GCS unit designed for portable and ergonomic control. Features modular internal compartments for avionics and monitoring systems, ensuring protection and accessibility during field missions.",
    images: [
      "/images/Picture27.jpg",
      "/images/Picture28.jpg",
      "/images/Picture29.jpg",
      "/images/Picture30.jpg",
      "/images/Picture31.jpg",
    ],
    bullets: [
      "Compact and portable design",
      "Durable structure with component modularity",
      "Ergonomic field layout for UAV operation",
    ],
  },
  {
    title: "Fixed-Wing VTOL",
    subtitle: "Hybrid vertical takeoff and forward-flight UAV",
    description:
      "Engineered and modelled CAD including internal structure and outer body. This also includes avionics placements. It is a fixed-wing hybrid UAV designed for stable vertical-to-horizontal flight transition.",
    details:
      "The aircraft combines VTOL and fixed-wing performance for maximum endurance and stability. It incorporates foldable wings and tilt motor mechanisms, enhancing aerodynamic efficiency and mission range.",
    images: [
      "/images/Picture12-Replacement.jpg",
      "/images/Picture12.jpg",
      "/images/Picture13.jpg",
    ],
    bullets: [
      "Tilt-motor and foldable wing integration",
      "Optimized aerodynamic profile",
      "Lightweight composite structure",
    ],
  },
  {
    title: "Loiter Munition UAVs",
    subtitle: "Compact fixed-wing UAVs for long endurance missions",
    description:
      "Designed and drafted UAVs specialized for VTOL and loitering munitions operations, including installation planning and fabrication.",
    details:
      "Developed compact UAVs optimized for long-range endurance and payload efficiency. Integrated aerodynamic shaping and internal component layouts to ensure steady loitering capability.",
    images: [
      "/images/Picture14.jpg",
      "/images/Picture15.jpg",
      "/images/Picture16.jpg",
      "/images/Picture17.jpg",
      "/images/Picture18.jpg",
    ],
    bullets: [
      "Optimized aerodynamic efficiency",
      "VTOL and loiter operation ready",
      "Payload and endurance balance achieved",
    ],
  },
  {
    title: "Payload Mechanism",
    subtitle: "Payload deployment system for UAV applications",
    description:
      "Created modular mechanisms to expand UAV payload capabilities, designed for reliability and easy integration.",
    details:
      "Designed a compact and efficient payload mechanism to enhance UAV mission flexibility. Focused on lightweight construction, quick attachment, and smooth actuation for aerial drops.",
    images: ["/images/Picture2.png"],
    bullets: [
      "Lightweight modular mechanism",
      "Smooth actuation and control",
      "Adaptable to multiple UAV platforms",
    ],
  },
];

const personalProjects = [
  {
    title: "G.I. Joe Night Raven Cobra",
    details:
      "Designed in SolidWorks",
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
  },
  {
    title: "Electric Vehicle Racing Car",
    details:
      "Designed in SolidWorks",
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
  },
  {
    title: "Zippo Lighter",
    details:
      "Designed in AutoDesk Inventor",
    images: [
      "/images/personal-pro/lighter3.jpg",
      "/images/personal-pro/lighter1.jpg",
      "/images/personal-pro/lighter2.jpg",
      "/images/personal-pro/lighter4.jpg",
      "/images/personal-pro/lighter5.jpg",
      "/images/personal-pro/lighter6.jpg",
    ],

  },
  {
    title: "High-Speed Mosquito Trap Fan",
    details:
      "Designed in Siemens NX",
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
    details:
      "Designed in AutoDesk Inventor",
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
    details:
      "Designed in Creo Parametric",
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
    details:
      "Designed in Creo Parametric",
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

export default function Projects() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // for handling escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject !== null) setActiveProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject]);

  const openProject = (idx: number) => {
    setActiveProject(idx);
    setPhotoIndex(0);
  };

// scroll modal into view & focus when opened
  useEffect(() => {
    if (activeProject !== null && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

      try {
        (modalRef.current as HTMLElement).focus({ preventScroll: true } as FocusOptions);
      } catch {
        (modalRef.current as HTMLElement).focus();
      }
    }
  }, [activeProject]);



  if (activeProject === null) {
    return (
      <>
        <FadeInWhenVisible>
          <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-6">FEATURED PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {projects.map((p, i) => (
                <motion.article
                  key={p.title}
                  whileHover={{ translateY: -6 }}
                  onClick={() => openProject(i)}
                  className={`relative bg-white rounded-2xl p-4 shadow hover:shadow-lg transition group overflow-hidden cursor-pointer ${
                    p.title === "Payload Mechanism" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex gap-4 transition-all duration-300 group-hover:blur-sm">
                    <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-4 mt-2">{p.description}</p>
                    </div>
                  </div>
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

            <h2 className="text-3xl font-bold mb-6">PERSONAL PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((p, i) => (
                <motion.article
                  key={p.title}
                  whileHover={{ translateY: -6 }}
                  onClick={() => openProject(i + projects.length)}
                  className={`relative bg-white rounded-2xl p-4 shadow hover:shadow-lg transition group overflow-hidden cursor-pointer ${
                    p.title === "Bee Truck" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex gap-4 transition-all duration-300 group-hover:blur-sm">
                    <div className="w-36 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-1 items-center text-left">
                      <h3 className="font-semibold text-xl">{p.title}</h3>
                    </div>
                  </div>
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

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={allProjects[activeProject ?? 0]?.images.map((src) => ({
            src,
            description: `${allProjects[activeProject ?? 0]?.title ?? ""}`,
          })) || []}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
          plugins={[Captions, Thumbnails]}
          captions={{ descriptionTextAlign: "center" }}
          thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
        />
      </>
    );
  }

  const currentProject = allProjects[activeProject!];

  return (
    <>
      {/* PROJECT DETAIL CONTAINER */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-start)] to-[var(--bg-end)] px-4 sm:px-6 py-10 sm:py-16">
        <div
          ref={modalRef}
          tabIndex={-1}
          className="relative max-w-7xl w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4"
        >
          {/* LEFT: IMAGE CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] flex flex-col justify-start items-center"
          >
            <div className="group relative w-full h-[280px] sm:h-[400px] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              {/* IMAGE */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-full h-full relative"
              >
                <img
                  src={currentProject.images[photoIndex]}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/50 backdrop-blur-md absolute inset-0"></div>
                  <div className="relative z-10 flex flex-col items-center text-white">
                    <IoIosSearch className="text-4xl mb-2 animate-fade-in" />
                    <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {currentProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === photoIndex
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white/60 hover:bg-white hover:scale-110"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() =>
                  setPhotoIndex(
                    (photoIndex - 1 + currentProject.images.length) %
                      currentProject.images.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>

              <button
                onClick={() =>
                  setPhotoIndex((photoIndex + 1) % currentProject.images.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 max-w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {currentProject.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                    idx === photoIndex
                      ? "border-green-500 shadow-lg"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${currentProject.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
          {/* RIGHT: PROJECT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[40%] flex flex-col justify-start"
          >
            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setActiveProject(null)}
              className="
          absolute 
          top-4 
          right-4
          z-50 
          rounded-full 
          p-3 
          shadow-lg 
          border border-[var(--border-glass)] 
          bg-[var(--card-bg)] 
          text-[var(--text-primary)] 
          hover:shadow-2xl 
          transition-all duration-300 
          hover:scale-110 
          hover:bg-[var(--bg-start)]
          lg:right-[2.5rem]
          xl:right-[3rem]
        "
              aria-label="Close"
            >
              ✕
            </button>
            <div className="rounded-3xl p-8 sm:p-10 shadow-2xl max-h-[70vh] overflow-y-auto backdrop-blur-xl border border-[var(--border-glass)] bg-[var(--card-bg)] text-[var(--text-primary)] scrollbar-green">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                {currentProject.title}
              </h1>
              {currentProject.subtitle && (
                <h2 className="text-lg sm:text-xl text-gray-600 font-semibold mb-6 opacity-90">
                  {currentProject.subtitle}
                </h2>
              )}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 opacity-95">
                {currentProject.description}
              </p>
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Project Overview:
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {currentProject.details}
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Key Highlights
                </h3>
                  <ul className="space-y-3">
                  {currentProject.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base sm:text-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={currentProject.images.map((src) => ({
          src,
          description: `${currentProject.title} — ${
            currentProject.subtitle || ""
          }`,
        }))}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
        plugins={[Captions, Thumbnails]}
        captions={{ descriptionTextAlign: "center" }}
        thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
      />
    </>
  );
}  