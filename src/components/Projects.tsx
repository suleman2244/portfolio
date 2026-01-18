'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaAppStore, FaGooglePlay, FaGlobe, FaGithub, FaArrowRight } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { IoIosSearch } from 'react-icons/io';
import GitHubStatsImage from './GitHubStatsImage';
import OptimizedImage from './OptimizedImage';
import Image from 'next/image';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
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
  techStack: string[];
  challenge?: string;
  links?: {
    appStore?: string;
    playStore?: string;
    web?: string;
  };
}

// interface PersonalProject {
//   title: string;
//   details: string;
//   images: string[];
// }

const projects: Project[] = [
  {
    title: 'Tapestry Stitch AI',
    subtitle: 'Enterprise LLM-Powered Chatbot for Corporate Knowledge Retrieval',
    description: 'Architected and deployed "Tapestry Stitch AI," an enterprise-grade AI chatbot designed to streamline internal knowledge retrieval for 500+ corporate users.',
    details: 'Leveraged Python and LangChain to build the RAG (Retrieval-Augmented Generation) pipeline, integrating it with a high-performance React.js frontend. Implemented WebSocket-based real-time communication to handle 10K+ concurrent connections. The system features advanced metadata filtering and citation-backed responses, reducing internal documentation search time by 40%.',
    images: [
      '/images/tapestry-ai-1.png',
    ],
    bullets: [
      'Architected RAG pipeline using Python, LangChain, and Vector Databases',
      'Implemented real-time communication via WebSockets for 10K+ concurrent users',
      'Reduced internal search time by 40% through semantic retrieval optimization',
      'Built high-performance React frontend with source citation and context history',
      'Integrated enterprise-grade security and document indexing pipelines'
    ],
    techStack: ['Python', 'LangChain', 'OpenAI/Claude', 'FastAPI', 'WebSockets', 'React.js'],
    challenge: 'Handling massive concurrent WebSocket connections while maintaining sub-second LLM response latency and accuracy.',
    links: {
      web: 'https://www.tapestry.com/'
    }
  },
  {
    title: 'JazzCash Fintech Mobile App',
    subtitle: 'Scalable Frontend Architecture for Pakistan’s #1 FinTech Platform',
    description: 'Core technical leader for the JazzCash mobile ecosystem (50M+ active users), architecting scalable frontend solutions and high-concurrency payment modules.',
    details: 'Architected 15+ complex customer-facing modules including payment gateways, real-time transaction ledgers, and secure authentication. Led a high-stakes migration of 3 legacy AngularJS applications to React/Redux, resulting in a 45% performance improvement. Spearheaded a performance initiative that reduced crash rates by 60% and optimized bundle sizes for low-bandwidth environments.',
    images: [
      '/images/jazzcash1.webp',
      '/images/jazzcash2.webp',
      '/images/jazzcash3.webp',
      '/images/jazzcash4.webp',
      '/images/jazzcash5.webp',
      '/images/jazzcash6.webp',
    ],
    bullets: [
      'Architected 15+ mission-critical modules (Payments, Ledgers, Auth)',
      'Led migration of 3 legacy AngularJS apps to React, improving performance by 45%',
      'Reduced app crash rate by 60% through systematic debugging and profiling',
      'Mentored squad of 4 junior developers on clean code and state management',
      'Achieved WCAG 2.1 AA compliance for essential financial user flows'
    ],
    techStack: ['React.js', 'React Native', 'Redux', 'Performance Profiling', 'Technical Leadership'],
    challenge: 'Leading a massive architectural migration of legacy systems without interrupting services for 50 million daily users.',
    links: {
      appStore: 'https://apps.apple.com/il/app/jazzcash-your-mobile-account/id1224617688',
      playStore: 'https://play.google.com/store/apps/details?id=com.techlogix.mobilinkcustomer&hl=en'
    }
  },
  {
    title: 'myABL Banking App',
    subtitle: 'Native Android Excellence for Allied Bank Limited',
    description: 'Key developer for the native Android mobile banking application of one of Pakistan’s largest commercial banks.',
    details: 'Engineered core banking functionalities using Kotlin and Jetpack Compose, implementing mission-critical security features like biometric authentication, secure transaction signing, and encrypted storage. Successfully delivered a 4.5+ star rated experience on Google Play, ensuring seamless digital financial services for a nationwide customer base.',
    images: [
      '/images/myabl1.webp',
      '/images/myabl2.webp',
      '/images/myabl3.webp',
      '/images/myabl4.webp',
      '/images/myabl5.webp',
      '/images/myabl6.webp',
      '/images/myabl7.webp',
    ],
    bullets: [
      'Developed core banking features using Kotlin and Jetpack Compose',
      'Implemented high-security biometric authentication and transaction signing',
      'Maintained 4.5+ star rating on Play Store through UX optimizations',
      'Integrated complex financial APIs and encrypted local storage',
      'Ensured financial-grade security compliance and data protection'
    ],
    techStack: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Mobile Security', 'FinTech'],
    challenge: 'Achieving a 4.5+ star rating in a highly sensitive and regulated financial sector.',
    links: {
      appStore: 'https://apps.apple.com/pk/app/myabl/id1259150427',
      playStore: 'https://play.google.com/store/apps/details?id=com.ofss.digx.mobile.android.allied&hl=en'
    }
  },
  {
    title: 'HEC National Web Portal',
    subtitle: 'Scale & Accessibility for Pakistan’s Higher Education Commission',
    description: 'Developed and optimized core modules for the HEC Web Portal, a national-level platform serving millions of students and faculty members.',
    details: 'Integrated 10+ RESTful APIs for real-time application processing and data sync. Optimized UI components using a modular architecture, leading to a 40% reduction in page load times. Improved CI/CD efficiency by 30%, which saved 2 hours per release cycle and ensured high availability during critical academic deadlines.',
    images: [
      '/images/hec1.png',
      '/images/hec2.png',
      '/images/hec3.png',
      '/images/hec4.png',
    ],
    bullets: [
      'Integrated 10+ RESTful APIs for real-time national data processing',
      'Reduced page load times by 40% through UI/UX modularization',
      'Improved CI/CD efficiency by 30%, saving 2 hours per release cycle',
      'Ensured high availability for millions of concurrent academic users',
      'Implemented WCAG-compliant accessible interfaces for diverse users'
    ],
    techStack: ['Angular', 'RxJS', 'Gitlab CI/CD', 'API Integration', 'Azure'],
    challenge: 'Managing high-traffic spikes during national university admission and grant deadlines.',
    links: {
      web: 'https://eservices.hec.gov.pk/'
    }
  },
  {
    title: 'YHATA Logistics Portal',
    subtitle: 'Offline-First Supply Chain Solution for USA Food Distribution',
    description: 'Architected a robust logistics platform for a leading USA-based food distributor, enabling driver data management in remote environments.',
    details: 'Engineered a sophisticated Offline-First architecture using local storage (SQLite/Hive) to manage driver logs. Developed a reliable synchronization engine that automatically pushes data to Azure and AWS cloud services upon connection. Resulted in 100% data integrity and zero data loss for drivers in remote areas.',
    images: ['/images/yhata2.png'],
    bullets: [
      'Engineered Offline-First architecture with SQLite/Hive persistence',
      'Built a reliable sync engine for Azure and AWS cloud integration',
      'Eliminated data loss for drivers in low-connectivity remote areas',
      'Ensured 100% data integrity across the enterprise supply chain',
      'Optimized logistics workflows for large-scale food distribution'
    ],
    techStack: ['React Native', 'Offline-First', 'SQLite/Hive', 'Azure/AWS', 'Data Sync'],
    challenge: 'Guaranteeing 100% data integrity when syncing complex delivery logs from remote areas with no internet.',
    links: {
      web: 'https://www.yhata.com/'
    }
  },
  {
    title: "Nar'aakom Healthcare App",
    subtitle: 'National Healthcare Platform for Qatar (100K+ Downloads)',
    description: 'Architected the mobile application for Qatar Primary Health Care Corporation (PHCC), a family-centered healthcare app serving the entire nation of Qatar.',
    details: 'Led the React Native architecture for this critical government healthcare platform. Implemented secure patient data management, appointment scheduling, medical records access, and real-time notifications. Achieved 100K+ downloads and became the primary digital health interface for Qatari citizens, ensuring HIPAA-compliant data handling and seamless integration with national healthcare systems.',
    images: [
      '/images/naarkoom.webp',
      '/images/naarkoom1.webp',
      '/images/naarkoom2.webp',
      '/images/naarkoom3.webp',
      '/images/naarkoom4.webp',
      '/images/naarkoom5.webp',
      '/images/naarkoom6.webp',
      '/images/naarkoom7.webp',
      '/images/naarkoom8.webp',

    ],
    bullets: [
      'Architected React Native mobile app as Lead Developer',
      'Achieved 100K+ downloads on App Store and Play Store',
      'Implemented HIPAA-compliant secure patient data management',
      'Built real-time appointment scheduling and notification systems',
      'Integrated with Qatar national healthcare infrastructure'
    ],
    techStack: ['React Native', 'TypeScript', 'Healthcare APIs', 'Push Notifications', 'Security'],
    challenge: 'Ensuring HIPAA-compliant security while delivering a seamless user experience for a diverse, national user base.',
    links: {
      appStore: 'https://apps.apple.com/il/app/naraakom/id1540048654',
      playStore: 'https://play.google.com/store/apps/details?id=qa.phcc.mobile&hl=en'
    }
  },
];
const allProjects = projects;

export default function Projects() {
  const { theme } = useTheme();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const themeColors = theme === 'dark'
    ? '&title_color=10b981&icon_color=10b981&text_color=9ca3af&bg_color=ffffff00'
    : '&title_color=059669&icon_color=059669&text_color=475569&bg_color=ffffff00';
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // for handling escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject !== null) setActiveProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeProject]);

  const openProject = (idx: number) => {
    setActiveProject(idx);
    setPhotoIndex(0);
  };

  // scroll modal into view & focus when opened
  useEffect(() => {
    if (activeProject !== null && modalRef.current) {
      modalRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });

      try {
        (modalRef.current as HTMLElement).focus({
          preventScroll: true,
        } as FocusOptions);
      } catch {
        (modalRef.current as HTMLElement).focus();
      }
    }
  }, [activeProject]);

  return (
    <>
      {/* LIST VIEW */}
      <FadeInWhenVisible>
        <div className={activeProject !== null ? 'hidden' : 'block'}>
          <section id='projects' className='max-w-6xl mx-auto px-6 py-12'>
            <div className="flex items-center justify-between mb-10 border-b border-[--border-glass] pb-4">
              <h2 className='text-3xl font-bold flex items-center gap-3'>
                <span className='w-2 h-8 bg-[--accent-primary]'></span>
                <span className='tracking-widest uppercase'>Featured Deployment</span>
              </h2>
              <div className='hidden md:flex gap-2 items-center'>
                <span className='w-1.5 h-1.5 bg-[--accent-primary] rounded-none animate-pulse'></span>
                <span className='text-xs font-mono text-[--text-secondary] uppercase tracking-widest'>Status: Production Ready</span>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 mb-12'>
              {projects.map((p, i) => (
                <motion.article
                  key={p.title}
                  layoutId={`project-${i}`}
                  onClick={() => openProject(i)}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='tech-card group cursor-pointer flex flex-col hover:border-[--accent-primary]/50 transition-all duration-300'
                >
                  {/* Image Section with Tech Overlay */}
                  <div className='w-full h-48 overflow-hidden relative border-b border-[--border-tech]'>
                    <OptimizedImage
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[--bg-dark] to-transparent opacity-60'></div>

                    {/* ID Marker */}
                    <div className="absolute top-4 left-4 bg-[--bg-dark]/80 backdrop-blur-sm border border-[--accent-primary]/30 px-2 py-1">
                      <span className="text-[10px] font-mono text-[--accent-primary] tracking-widest">
                        PRJ_{i < 9 ? `0${i + 1}` : i + 1}
                      </span>
                    </div>

                    {/* View prompt */}
                    <div className='absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                      <span className='flex items-center gap-2 bg-[--accent-primary] text-[--bg-dark] text-xs font-bold px-3 py-1.5 uppercase tracking-wider'>
                        Initiate <CgArrowLongRight />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6 flex-1 flex flex-col relative'>
                    {/* Decorative line */}
                    <div className="absolute top-0 right-6 w-px h-8 bg-[--accent-primary]/30"></div>

                    <h3 className='font-bold text-xl mb-2 text-[--text-primary] group-hover:text-[--accent-primary] transition-colors flex items-center justify-between'>
                      {p.title}
                    </h3>

                    <p className='text-sm text-[--text-secondary] flex-1 line-clamp-2 leading-relaxed mb-4'>
                      {p.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mt-auto'>
                      {p.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className='text-[10px] uppercase tracking-wider font-mono px-2 py-1 text-[--text-secondary] border border-[--border-glass] bg-[--bg-dark]/30'
                        >
                          {tech}
                        </span>
                      ))}
                      {p.techStack.length > 3 && (
                        <span className='text-[10px] px-2 py-1 text-[--text-secondary] opacity-60'>
                          +{p.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </FadeInWhenVisible>


      {/* GITHUB & OPEN SOURCE SECTION */}
      < FadeInWhenVisible >
        <div className={activeProject !== null ? 'hidden' : 'block'}>
          <section className='max-w-6xl mx-auto px-6 py-12 border-t border-[--border-glass] mt-12'>
            <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
              <div className='max-w-2xl'>
                <h2 className='text-3xl font-extrabold tracking-tight mb-4 uppercase'>
                  Open Source <span className='text-gradient'>Activity</span>
                </h2>
                <p className='text-[--text-secondary] text-lg leading-relaxed'>
                  I am deeply committed to the open-source ecosystem. My activity reflects my passion for building, contributing, and maintaining high-quality codebases.
                </p>
              </div>
              <a
                href='https://github.com/suleman2244'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-secondary flex items-center gap-2 group'
              >
                <FaGithub /> View full GitHub Profile
                <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
              </a>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='glass-card p-6 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500'>
                <h3 className='text-[--accent-primary] text-xs font-mono uppercase tracking-[0.2em] mb-6'>GitHub Stats Overview</h3>
                <GitHubStatsImage
                  src={`https://github-readme-stats.vercel.app/api?username=suleman2244&show_icons=true&theme=transparent&hide_border=true${themeColors}`}
                  alt='Sulaman GitHub Stats'
                  fallbackTitle='GitHub Stats'
                />
              </div>

              <div className='glass-card p-6 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500'>
                <h3 className='text-[--accent-primary] text-xs font-mono uppercase tracking-[0.2em] mb-6'>Most Used Technologies</h3>
                <GitHubStatsImage
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=suleman2244&layout=compact&theme=transparent&hide_border=true&langs_count=8${themeColors}`}
                  alt='Sulaman Top Languages'
                  fallbackTitle='Language Stats'
                />
              </div>

              <div className='lg:col-span-2 glass-card p-6 flex flex-col items-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden'>
                <h3 className='text-[--accent-primary] text-xs font-mono uppercase tracking-[0.2em] mb-6'>Commit Contribution Heatmap</h3>
                <div className='w-full overflow-x-auto scroller-hide flex justify-center'>
                  <Image
                    src={`https://ghchart.rshah.org/${theme === 'dark' ? '10b981' : '059669'}/suleman2244`}
                    alt='Sulaman Commit Chart'
                    className='min-w-[700px] h-auto hover:brightness-110 transition-all duration-700'
                    unoptimized
                    width={700}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </FadeInWhenVisible >

      {/* PROJECT DETAIL OVERLAY */}
      < AnimatePresence mode='wait' >
        {activeProject !== null && (
          <motion.div
            key='detail'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='fixed inset-0 z-50 overflow-y-auto bg-[--bg-dark]/95 backdrop-blur-md px-4 py-10 sm:p-10 scrollbar-green'
          >
            <div className='max-w-6xl mx-auto'>
              {/* HEADER / NAV */}
              <div className='flex justify-between items-center mb-12'>
                <button
                  onClick={() => setActiveProject(null)}
                  className='flex items-center gap-2 text-[--text-secondary] hover:text-[--text-primary] transition-colors group'
                >
                  <div className='p-2 rounded-full border border-[--border-glass] group-hover:border-[--accent-primary]'>
                    <ChevronRight className='w-5 h-5 rotate-180' />
                  </div>
                  <span className='font-medium'>Back to Projects</span>
                </button>
                <div className='px-4 py-1 rounded-full border border-[--accent-primary]/30 bg-[--accent-primary]/5 text-[--accent-primary] text-xs font-mono uppercase tracking-widest'>
                  Case Study
                </div>
              </div>

              {/* CONTENT GRID */}
              <div className='grid lg:grid-cols-12 gap-12'>
                {/* LEFT: GALLERY & TECH */}
                <div className='lg:col-span-7 space-y-8'>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className='relative aspect-video rounded-3xl overflow-hidden glass-card shadow-2xl group cursor-pointer'
                    onClick={() => setLightboxOpen(true)}
                  >
                    <OptimizedImage
                      src={allProjects[activeProject].images[photoIndex]}
                      alt={allProjects[activeProject].title}
                      fill
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <div className='flex items-center gap-2 text-[--text-primary] font-medium'>
                        <IoIosSearch /> Click to enlarge
                      </div>
                    </div>
                  </motion.div>

                  {/* Thumbnails */}
                  <div className='flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[--border-glass]'>
                    {allProjects[activeProject].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPhotoIndex(idx)}
                        className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${idx === photoIndex ? 'border-[--accent-primary] scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                      >
                        <OptimizedImage src={img} alt='Thumbnail' fill className='w-full h-full object-cover' />
                      </button>
                    ))}
                  </div>

                  <div className='glass-card p-8'>
                    <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
                      <div className='w-1 h-4 bg-[--accent-primary] rounded-full'></div>
                      Built With
                    </h3>
                    <div className='flex flex-wrap gap-3'>
                      {allProjects[activeProject].techStack.map((tech) => (
                        <span key={tech} className='px-4 py-2 rounded-xl bg-[--bg-dark] border border-[--border-glass] text-sm text-[--text-primary] flex items-center gap-2'>
                          <div className='w-1.5 h-1.5 bg-[--accent-primary] rounded-full'></div>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: DETAILS */}
                <div className='lg:col-span-5 space-y-8'>
                  <div className='flex justify-between items-start gap-4'>
                    <div className='flex-1'>
                      <h1 className='text-4xl font-extrabold text-gradient mb-4'>
                        {allProjects[activeProject].title}
                      </h1>
                      <p className='text-xl text-[--text-secondary] font-medium italic'>
                        {allProjects[activeProject].subtitle}
                      </p>
                    </div>
                  </div>

                  {/* LIVE LINKS */}
                  {allProjects[activeProject].links && (
                    <div className='flex flex-wrap gap-4'>
                      {allProjects[activeProject].links.appStore && (
                        <a
                          href={allProjects[activeProject].links.appStore}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 px-4 py-2 rounded-xl bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] hover:bg-[#007AFF] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                        >
                          <FaAppStore className='text-xl' />
                          <span className='font-mono text-xs uppercase tracking-wider'>App Store</span>
                        </a>
                      )}
                      {allProjects[activeProject].links.playStore && (
                        <a
                          href={allProjects[activeProject].links.playStore}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/20 text-[#3DDC84] hover:bg-[#3DDC84] hover:text-white transition-all duration-300 transform hover:-translate-y-1'
                        >
                          <FaGooglePlay className='text-xl' />
                          <span className='font-mono text-xs uppercase tracking-wider'>Play Store</span>
                        </a>
                      )}
                      {allProjects[activeProject].links.web && (
                        <a
                          href={allProjects[activeProject].links.web}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 px-4 py-2 rounded-xl bg-[--accent-primary]/10 border border-[--accent-primary]/20 text-[--accent-primary] hover:bg-[--accent-primary] hover:text-[--bg-dark] transition-all duration-300 transform hover:-translate-y-1'
                        >
                          <FaGlobe className='text-xl' />
                          <span className='font-mono text-xs uppercase tracking-wider'>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}

                  <div className='space-y-6'>
                    <div className='p-6 rounded-2xl bg-[--accent-primary]/5 border border-[--accent-primary]/10'>
                      <h4 className='text-[--accent-primary] text-xs font-mono uppercase tracking-widest mb-3'>The Challenge</h4>
                      <p className='text-[--text-primary] text-lg leading-relaxed'>
                        {allProjects[activeProject].challenge}
                      </p>
                    </div>

                    <div className='space-y-4'>
                      <h4 className='text-[--text-secondary] text-xs font-mono uppercase tracking-widest'>Core Contributions</h4>
                      <ul className='space-y-4'>
                        {allProjects[activeProject].bullets.map((bullet, idx) => (
                          <li key={idx} className='flex gap-4 group'>
                            <div className='mt-1 text-[--accent-primary]'>
                              <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                            </div>
                            <p className='text-[--text-secondary] leading-relaxed'>
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='space-y-4 pt-6'>
                      <h4 className='text-[--text-secondary] text-xs font-mono uppercase tracking-widest'>Technical Deep-Dive</h4>
                      <p className='text-[--text-secondary] leading-relaxed text-justify'>
                        {allProjects[activeProject].details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
        }
      </AnimatePresence >

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={
          activeProject !== null
            ? allProjects[activeProject].images.map((src) => ({
              src,
              description: allProjects[activeProject].subtitle
                ? `${allProjects[activeProject].title} — ${allProjects[activeProject].subtitle}`
                : allProjects[activeProject].title,
            }))
            : []
        }
        on={{ view: ({ index }) => setPhotoIndex(index) }}
        plugins={[Captions, Thumbnails]}
        captions={{ descriptionTextAlign: 'center' }}
        thumbnails={{ borderRadius: 6, width: 100, height: 60 }}
      />
    </>
  );
}
