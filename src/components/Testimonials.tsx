'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
    image: string;
    linkedin?: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Engineering Lead",
        role: "Senior Software Architect",
        company: "Systems Limited",
        text: "Sulaman demonstrated exceptional technical leadership during the JazzCash migration. His ability to modernize legacy architectures while maintaining sub-second performance was pivotal for our team's success.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Engineering+Lead&background=random&color=fff",
        linkedin: "https://www.linkedin.com/in/sulaman-khan-1254761b5/"
    },
    {
        name: "Product Manager",
        role: "Digital Banking Division",
        company: "Allied Bank",
        text: "A highly disciplined engineer who understands the intersection of security and user experience. Sulaman's contributions to the MyABL mobile app significantly improved our stability and customer satisfaction ratings.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Product+Manager&background=random&color=fff",
        linkedin: "https://www.linkedin.com/in/sulaman-khan-1254761b5/"
    },
    {
        name: "Tech Director",
        role: "Full-Stack Development",
        company: "ArhamSoft",
        text: "A problem-solver at heart. Sulaman has a unique talent for simplifying complex requirements into scalable frontend solutions. His engineering rigor and attention to detail are top-tier.",
        rating: 5,
        image: "https://ui-avatars.com/api/?name=Tech+Director&background=random&color=fff",
        linkedin: "https://www.linkedin.com/in/sulaman-khan-1254761b5/"
    }
];

import { FaLinkedin } from "react-icons/fa";

export default function Testimonials() {
    return (
        <section id="testimonials" className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex items-center justify-between mb-16 border-b border-[--border-glass] pb-4">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3">
                        <span className="w-2 h-8 bg-[--accent-primary]"></span>
                        <span className="tracking-widest uppercase text-[--text-primary]">Professional Recognition</span>
                    </h2>
                    <p className="text-[--text-secondary] text-sm mt-2 ml-5 font-mono">
                        Validating engineering impact through consistent delivery.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="tech-card p-8 group hover:border-[--accent-primary]/40 transition-all duration-500 flex flex-col h-full"
                    >
                        {/* Tech decoration */}
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <div className="flex gap-1">
                                <span className="w-1 h-1 bg-[--accent-primary] rounded-full"></span>
                                <span className="w-1 h-1 bg-[--accent-primary] rounded-full"></span>
                                <span className="w-1 h-1 bg-[--accent-primary] rounded-full"></span>
                            </div>
                        </div>

                        <div className="flex gap-1 mb-6">
                            {[...Array(t.rating)].map((_, idx) => (
                                <Star key={idx} size={14} className="fill-[--accent-primary] text-[--accent-primary]" />
                            ))}
                        </div>

                        <p className="text-[--text-secondary] text-sm leading-relaxed mb-8 italic flex-grow">
                            &quot;{t.text}&quot;
                        </p>

                        <div className="border-t border-[--border-glass] pt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-[--border-glass] ring-2 ring-[--accent-primary]/20">
                                    <OptimizedImage src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[--text-primary] font-bold text-xs uppercase tracking-wider">{t.name}</h4>
                                    <p className="text-[--text-secondary] text-[10px] mt-0.5 font-mono">{t.role} @ {t.company}</p>
                                </div>
                            </div>
                            {t.linkedin && (
                                <a
                                    href={t.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0077b5] hover:scale-110 transition-transform opacity-80 hover:opacity-100"
                                    title="View LinkedIn Profile"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
