"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function TechnicalDocumentation() {
  const [open, setOpen] = useState(false);

  const slides = [
    { src: "/images/td-sub1.jpg" },
    { src: "/images/td-sub2.jpg" },
    { src: "/images/td-sub3.jpg" },
    { src: "/images/td-sub4.jpg" },
    { src: "/images/td-sub5.jpg" },
  ];

  return (
    <section id="techdoc" className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-3xl font-bold mb-4">TECHNICAL DOCUMENTATION</h2>

        {/* ✅ DESCRIPTION ABOVE IMAGE */}
        <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
          Vector-based 2D CAD drawings prepared for CNC laser cutting and fabrication. 
          These technical documents include detailed annotations, precise tolerances, 
          and machining-ready geometry ensuring manufacturing accuracy and consistency 
          across mechanical assemblies.
        </p>

        {/* FULL-WIDTH IMAGE CARD */}
        <div
          className="relative aspect-[16/9] overflow-hidden rounded-xl shadow group cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img
            src="/images/td.jpg"
            alt="Technical documentation preview"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <FaRegEye className="text-4xl mb-2 animate-fade-in" />
            <CgArrowLongRight className="text-2xl transform -translate-x-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>

        {/* LIGHTBOX SLIDER */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
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
