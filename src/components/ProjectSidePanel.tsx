"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  subtitle?: string;
  details: string;
  bullets: string[];
}

interface ProjectSidePanelProps {
  activeProject: number | null;
  setActiveProject: (value: number | null) => void;
  minimized: boolean;
  setMinimized: React.Dispatch<React.SetStateAction<boolean>>;
  allProjects: Project[];
}

export default function ProjectSidePanel({
  activeProject,
  setActiveProject,
  minimized,
  setMinimized,
  allProjects,
}: ProjectSidePanelProps) {
  return (
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

          {/* TOGGLE MINIMIZE */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMinimized((prev) => !prev);
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
              if (!p) return null;
              return (
                <>
                  <h2 className="text-xl font-bold mb-1 text-[#22c55e]">
                    {p.title}
                  </h2>
                  {p.subtitle && (
                    <p className="text-sm text-gray-400 mb-4">{p.subtitle}</p>
                  )}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {p.details}
                  </p>
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
  );
}
