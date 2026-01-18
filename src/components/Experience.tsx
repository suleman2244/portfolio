'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react'; // Unused

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
    {
        company: "Visionet Systems Inc.",
        role: "Senior Frontend Developer",
        period: "Jan 2025 - Aug 2025",
        location: "Cranbury, New Jersey, United States (Remote)",
        description: [
            "Led full-stack development of 'Tapestry Stitch AI'—an enterprise LLM-powered chatbot serving 500+ internal users.",
            "Collaborated with Product, UX, and Data Science teams to integrate AI features into existing React applications.",
            "Implemented real-time chat functionality using WebSockets, handling 10K+ concurrent connections.",
            "Reduced frontend bundle size by 28% through code splitting and lazy loading optimization.",
            "Established component library documentation, reducing onboarding time for new developers by 40%."
        ],
        skills: ["React", "Python", "LangChain", "LLMs", "FastAPI", "WebSockets"]
    },
    {
        company: "Systems Limited",
        role: "Senior Frontend Developer",
        period: "Jan 2025 - May 2025",
        location: "Lahore, Pakistan",
        description: [
            "Core team member building JazzCash mobile app, Pakistan's #1 FinTech platform with 50M+ active users.",
            "Architected and implemented 15+ customer-facing features including payment flows and transaction history.",
            "Reduced app crash rate by 60% through systematic debugging and performance optimization.",
            "Mentored a team of 4 junior developers, conducting weekly code reviews and knowledge-sharing sessions.",
            "Led migration of 3 legacy AngularJS applications to React, improving performance by 45%.",
            "Implemented accessibility features achieving WCAG 2.1 AA compliance for key user flows."
        ],
        skills: ["React", "AngularJS", "Technical Leadership", "Performance Optimization", "Agile/Scrum"]
    },
    {
        company: "Systems Limited",
        role: "Junior Frontend Developer",
        period: "Aug 2022 - Feb 2025",
        location: "Lahore, Pakistan",
        description: [
            "Developed and optimized core modules for the Higher Education Commission (HEC) Web Portal, serving millions of students.",
            "Integrated 10+ RESTful APIs to facilitate real-time application processing and data synchronization.",
            "Optimized UI/UX components using a modular architecture, significantly improving the deployment pipeline.",
            "Reduced page load times by 40%, directly increasing user satisfaction scores.",
            "Improved CI/CD efficiency by 30%, reducing release cycles by 2 hours."
        ],
        skills: ["Web Development", "API Integration", "CI/CD", "Modular Design", "Flutter"]
    },
    {
        company: "Systems Limited",
        role: "Associate Software Engineer",
        period: "Oct 2021 - Aug 2022",
        location: "Lahore, Pakistan",
        description: [
            "Architected and developed a robust logistics platform for YHATA (USA-based food distributor).",
            "Engineered an Offline-First architecture using SQLite/Hive for connectivity-challenged environments.",
            "Developed a reliable synchronization engine pushing local data to Azure and AWS cloud services.",
            "Eliminated data loss for drivers in remote areas and ensured 100% data integrity across the supply chain."
        ],
        skills: ["Offline-First", "Data Sync", "Azure", "AWS", "SQLite", "React Native"]
    },
    {
        company: "Qraftec",
        role: "Intern Web Application Developer",
        period: "Aug 2021 - Oct 2021",
        location: "Lahore, Pakistan",
        description: [
            "Developed responsive web interfaces using React.js and CSS3 for client projects.",
            "Participated in daily standups and sprint planning, learning Agile methodologies.",
            "Built a reusable component library that was adopted across 3 different client projects."
        ],
        skills: ["React.js", "CSS3", "Agile", "Component Design"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
    }
};

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative pl-8 pb-16 last:pb-0"
    >
        {/* Tech Timeline Line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[--accent-primary] via-[--accent-secondary] to-transparent opacity-30"></div>

        {/* Node/Joint */}
        <div className="absolute left-[-4px] top-0 w-[9px] h-[9px] bg-[--bg-dark] border border-[--accent-primary] rotate-45"></div>

        <div className="tech-card p-6 md:p-8 hover:border-[--accent-primary]/40 transition-all duration-500 group relative">
            {/* Decorative Tech Elements */}
            <div className="absolute top-4 right-4 text-[--border-glass] text-[10px] font-mono tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                EXP_NODE_{index < 9 ? `0${index + 1}` : index + 1}
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-xl font-bold tracking-tight text-[--text-primary] group-hover:text-[--accent-primary] transition-colors">{item.company}</h3>
                    <h4 className="text-base font-medium text-[--text-secondary] mt-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[--accent-primary] rounded-none"></span>
                        {item.role}
                    </h4>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-sm font-mono text-[--accent-primary] bg-[--accent-primary]/5 border border-[--accent-primary]/20 px-3 py-1 rounded-sm">
                        {item.period}
                    </div>
                    <span className="text-xs text-[--text-secondary]/60 font-mono mt-1 uppercase tracking-wider">{item.location}</span>
                </div>
            </div>

            <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 mb-6 relative z-10"
            >
                {item.description.map((bullet, i) => (
                    <motion.li
                        key={i}
                        variants={bulletVariants}
                        className="flex gap-3 text-sm text-[--text-secondary] leading-relaxed group/item"
                    >
                        <span className="text-[--accent-primary] mt-1.5 text-[10px] group-hover/item:text-white transition-colors">▹</span>
                        <span className="group-hover/item:text-[--text-primary] transition-colors">{bullet}</span>
                    </motion.li>
                ))}
            </motion.ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[--border-glass]">
                {item.skills.map((skill, i) => (
                    <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 text-[--text-secondary] border border-[--border-glass] hover:border-[--accent-primary] hover:text-[--accent-primary] transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default function Experience() {
    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    WORK <span className="text-gradient">EXPERIENCE</span>
                </h2>
                <p className="text-[--text-secondary] text-lg max-w-2xl">
                    A track record of high-scale engineering at market-leading fintechs, global tech consultants, and AI ventures.
                </p>
            </motion.div>

            <div className="space-y-0">
                {EXPERIENCES.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}
