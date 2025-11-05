"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function DrawingsSection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: "/images/2D-draw-1.jpg" },
    { src: "/images/2D-draw-2.jpg" },
  ];

  return (
    <section id="drawings" className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold">2D DRAWINGS & CNC FILES</h2>
          <ul className="mt-4 text-gray-600 text-[15px] leading-relaxed list-disc pl-6 space-y-2">
            <li>Created Part / Assembly Drawings For Seamless Production.</li>
            <li>Created 2D Drawings (DXF) For Machining (CNC LASER + CNC ROUTER).</li>
            <li>Created 2D Drawings (DXF) For Local And Chinese Manufacturers.</li>
            <li>Created 2D Drawings (DXF) For Technicians For Seamless Production.</li>
          </ul>

        {/* IMAGES GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer aspect-[4/3]"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={slide.src}
                alt={`Drawing ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaRegEye className="text-4xl mb-2 animate-fade-in" />
                <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX SLIDER */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
        />
      </div>

      {/* Inline Animation Styles */}
      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(-8px);
            opacity: 0.6;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-right {
          animation: slideRight 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}
