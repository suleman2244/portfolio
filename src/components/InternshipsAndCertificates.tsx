"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function InternshipsAndCertificates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [type, setType] = useState<
    "internship" | "certificate" | "license" | null
  >(null);

  const internships = [
    { src: "/images/certificates/prof.jpg" },
    { src: "/images/certificates/internship1.jpg" },
    { src: "/images/certificates/internship2.jfif" },
    { src: "/images/certificates/internship3.jfif" },
    { src: "/images/certificates/internship4.jpg" },
  ];

  const certificates = [
    { src: "/images/certificates/bachdegree.jpg" },
    { src: "/images/certificates/cert1.png" },
    { src: "/images/certificates/cert2.png" },
    { src: "/images/certificates/cert3.png" },
  ];

  const licenses = [
    { src: "/images/certificates/addcert1.jpg" },
    { src: "/images/certificates/addcert2.jfif" },
    { src: "/images/certificates/addcert3.jpg" },
  ];

  const slides =
    type === "internship"
      ? internships
      : type === "certificate"
        ? certificates
        : licenses;

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
      <div className="tech-card p-10 relative">
        {/* Decorative header line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[--accent-primary] to-transparent opacity-20"></div>

        <h2 className="text-3xl font-bold text-gradient flex items-center gap-3">
          <span className="text-[--accent-primary] text-lg font-mono">04.</span>
          INTERNSHIPS & CERTIFICATIONS
        </h2>
        <p className="mt-4 text-[--text-secondary] text-[15px] leading-relaxed font-mono text-xs max-w-3xl">
          // ACCESSING_VERIFIED_CREDENTIALS <br />
          Showcasing practical experience and verified achievements.
        </p>
        <br />

        {/* INTERNSHIPS */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[--accent-primary]"></span>
            Work Experience & Internships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
            {internships.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-square overflow-hidden border border-[--border-glass] bg-[--bg-dark]/50 group cursor-pointer hover:border-[--accent-primary] transition-all duration-300
        ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
                onClick={() => {
                  setType("internship");
                  setIndex(i);
                  setOpen(true);
                }}
              >
                {/* Tech overlay */}
                <div className="absolute top-2 left-2 z-10 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-[--accent-primary] border border-[--accent-primary]/20">
                  INT_EXP_{i + 1}
                </div>

                <img
                  src={img.src}
                  alt={`Internship ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[--accent-primary]/10 opacity-0 group-hover:opacity-100 transition duration-300 border-2 border-[--accent-primary]"></div>
              </div>
            ))}
          </div>

        </div>
        <hr className="my-8 border-[--border-glass]" />

        {/* CERTIFICATES */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[--accent-secondary]"></span>
            Degree & Certificates
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificates.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden border border-[--border-glass] bg-[--bg-dark]/50 group cursor-pointer hover:border-[--accent-secondary] transition-all duration-300"
                onClick={() => {
                  setType("certificate");
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <div className="absolute top-2 left-2 z-10 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-[--accent-secondary] border border-[--accent-secondary]/20">
                  CERT_ID_{i + 1}
                </div>
                <img
                  src={img.src}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[--accent-secondary]/10 opacity-0 group-hover:opacity-100 transition duration-300 border-2 border-[--accent-secondary]"></div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-8 border-[--border-glass]" />
        {/* 🆕 ADDITIONAL LICENSES & CERTIFICATES */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-500"></span>
            Additional Licenses & Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {licenses.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden border border-[--border-glass] bg-[--bg-dark]/50 group cursor-pointer hover:border-purple-500 transition-all duration-300"
                onClick={() => {
                  setType("license");
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <div className="absolute top-2 left-2 z-10 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-purple-400 border border-purple-500/20">
                  LIC_ID_{i + 1}
                </div>
                <img
                  src={img.src}
                  alt={`License ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 border-2 border-purple-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX VIEWER */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
        />
      </div>
    </section>
  );
}
