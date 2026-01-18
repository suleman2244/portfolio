'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Zap, ShieldCheck, Users, Activity } from 'lucide-react';

const BENCHMARKS = [
    {
        icon: <Zap className="text-yellow-400" size={28} />,
        title: "Bundle Reduction",
        value: 28,
        suffix: "%",
        subtitle: "Visionet Systems",
        description: "Reduced frontend bundle size through advanced code splitting and lazy loading optimizations for enterprise AI apps."
    },
    {
        icon: <Activity className="text-emerald-400" size={28} />,
        title: "Crash Reduction",
        value: 60,
        suffix: "%",
        subtitle: "Systems Limited",
        description: "Implemented robust state management and error boundaries for JazzCash, leading to a massive drop in production crashes."
    },
    {
        icon: <Users className="text-blue-400" size={28} />,
        title: "AI Optimization",
        value: 40,
        suffix: "%",
        subtitle: "Search Time Savings",
        description: "Reduced average documentation search time for Tapestry internal users by leveraging fine-tuned RAG pipelines."
    },
    {
        icon: <ShieldCheck className="text-purple-400" size={28} />,
        title: "Performance",
        value: 45,
        suffix: "%",
        subtitle: "React Migration",
        description: "Led migration from AngularJS to React for mission-critical fintech modules, achieving significant runtime gains."
    }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            });
            return controls.stop;
        }
    }, [isInView, value, count]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
        return () => unsubscribe();
    }, [rounded]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function TechBenchmarks() {
    return (
        <section id="impact" className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="tech-card overflow-hidden"
            >
                <div className="bg-[--bg-dark]/50 p-8 md:p-12 border-b border-[--border-tech]">
                    <div className="flex items-center gap-3 mb-2 opacity-70">
                        <Activity size={16} className="text-[--accent-primary]" />
                        <span className="font-mono text-xs text-[--accent-primary] tracking-widest uppercase">System Metrics</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                        ENGINEERING <span className="text-gradient">IMPACT</span>
                    </h2>
                    <p className="text-[--text-secondary] mt-4 max-w-2xl font-mono text-sm leading-relaxed">
                        Quantitative analysis of deployed systems. Performance optimization and architectural efficiency metrics.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[--border-glass]">
                    {BENCHMARKS.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 group hover:bg-[--accent-primary]/5 transition-colors relative"
                        >
                            {/* Corner marker */}
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[--accent-primary]/30 group-hover:border-[--accent-primary] transition-colors"></div>

                            <div className="mb-6 p-3 rounded-lg border border-[--border-glass] bg-[--bg-dark]/50 w-fit group-hover:scale-110 group-hover:border-[--accent-primary]/50 transition-all">
                                {b.icon}
                            </div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-black text-[--text-primary] font-mono tracking-tighter">
                                    <AnimatedCounter value={b.value} suffix={b.suffix} />
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-[--accent-primary] uppercase tracking-widest block mb-1">{b.subtitle}</span>
                            <h4 className="text-sm font-bold text-[--text-primary] mb-3 uppercase tracking-wider opacity-80">{b.title}</h4>
                            <p className="text-xs text-[--text-secondary] leading-relaxed border-t border-[--border-glass] pt-3 mt-3">
                                {b.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
