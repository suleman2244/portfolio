'use client';

import Image from 'next/image';
import React from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';

// ✅ Lightbox
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Components Imported
// import InternshipsAndCertificates from './InternshipsAndCertificates';
import Contact from './Contact';
import Projects from './Projects';
import Chatbot from './Chatbot';
import StickyCTA from './StickyCTA';
import Experience from './Experience';
import Testimonials from './Testimonials';
import TechBenchmarks from './TechBenchmarks';
import OptimizedImage from './OptimizedImage';

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay }}
    viewport={{ once: true, margin: '-50px' }}
  >
    {children}
  </motion.div>
);

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    // Immediate load - the mesh background loads fast enough
    setIsLoaded(true);
  }, []);

  return (
    <div className='min-h-screen portfolio-theme antialiased relative text-[--text-primary]'>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[--accent-primary] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* HERO */}
      <header className='max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12'>
        <div className='flex-1 space-y-6'>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Availability Badge - Eye-catching for recruiters */}
            <div className='inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4'>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
              </span>
              <span className='text-emerald-400 text-sm font-semibold'>Available for full-time roles in Germany</span>
            </div>

            <h1 className='text-5xl md:text-7xl font-extrabold leading-tight tracking-tight'>
              Sulaman <span className='text-gradient'>Khan</span>
            </h1>
            <p className='text-2xl md:text-3xl font-medium text-[--text-secondary] mt-4'>
              Senior Software Engineer
            </p>
            <p className='text-base text-[--text-secondary]/80 mt-2 max-w-lg'>
              6+ years building enterprise fintech & healthcare apps for 50M+ users. React, React Native & AI specialist.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-wrap gap-4 pt-4'
          >
            <a href='#contact' className='group relative px-6 py-3 rounded-lg bg-[--accent-primary] text-[#020617] font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'>
              <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
              <span className='relative flex items-center gap-2'>✉️ Let's Talk</span>
            </a>

            <a
              href='https://calendar.app.google/Q6axPy9XXiu56TV9A'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 rounded-lg border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 hover:border-blue-400 transition-all flex items-center gap-2 relative overflow-hidden group'
            >
              <span className='absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500'></span>
              <span className='relative'>📅 Google Meet</span>
            </a>

            <a href='#projects' className='px-6 py-3 rounded-lg border border-[--border-glass] text-[--text-secondary] hover:text-[--text-primary] hover:border-[--text-primary] transition-all flex items-center gap-2'>
              View Projects
            </a>

            <div className="flex items-center gap-2">
              <a
                href='/assets/Osama-CV-and-Portfolio.zip'
                download='Sulaman-Khan-Resume.zip'
                className='px-4 py-3 rounded-lg border border-[--border-glass] text-[--text-secondary] text-sm hover:text-[--accent-primary] hover:border-[--accent-primary] transition-colors flex items-center gap-2'
                title='Download ZIP'
              >
                <span className='font-mono'>ZIP</span> ⬇
              </a>
              <a
                href='/assets/Sulaman-Khan-Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-3 rounded-lg border border-[--border-glass] text-[--text-secondary] text-sm hover:text-[--accent-primary] hover:border-[--accent-primary] transition-colors flex items-center gap-2'
                title='View PDF'
              >
                <span className='font-mono'>PDF</span> ↗
              </a>
            </div>
          </motion.div>

          {/* Credibility Stripe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1.5 }}
            className="pt-8 flex flex-col gap-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[--text-secondary] font-black">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-black tracking-tighter text-[--text-primary]">JAZZCASH</span>
              <span className="text-xl font-bold tracking-tight text-[--text-primary] italic">Allied Bank</span>
              <span className="text-xl font-bold tracking-widest text-[--accent-primary]">SYSTEMS</span>
              <span className="text-xl font-serif font-bold text-[--text-primary]">TAPESTRY</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Script Introduction */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className='relative w-full md:w-[420px]'
        >
          <div className='absolute inset-0 bg-[--accent-primary] rounded-3xl blur-2xl opacity-20 animate-pulse'></div>

          <TiltCard>
            <div className='glass-card p-6 md:p-8 relative z-10 overflow-hidden h-full'>
              {/* Header with photo */}
              <div className='flex items-center gap-4 mb-6 pb-4 border-b border-[--border-glass]'>
                <div className='w-16 h-16 rounded-full overflow-hidden border-2 border-[--accent-primary] shadow-lg relative'>
                  <OptimizedImage
                    src='/images/sulaman.jpeg'
                    alt='Sulaman Khan'
                    fill
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></span>
                    <span className='text-[10px] text-emerald-400 font-bold uppercase tracking-wider'>Quick Intro</span>
                  </div>
                  <p className='text-lg font-bold text-[--text-primary]'>Meet Sulaman</p>
                </div>
              </div>

              {/* Script Content */}
              <div className='space-y-4 text-[--text-secondary] text-sm leading-relaxed'>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className='text-[--text-primary] font-semibold'>"Hi, I'm Sulaman Khan</span> — a Senior Software Engineer with 6 years of experience building enterprise applications that serve over <span className='text-[--accent-primary] font-bold'>50 million users</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  I specialize in <span className='text-[--accent-secondary] font-semibold'>React, React Native, and AI-powered solutions</span> — from leading the frontend at JazzCash to building RAG pipelines for enterprise AI chatbots.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  I'm currently in <span className='text-[--text-primary] font-semibold'>Germany</span>, ready for my next challenge — whether that's scaling your platform or integrating AI into your products.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className='text-[--accent-primary] font-bold italic'
                >
                  Let's build something great together!"
                </motion.p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className='mt-6 pt-4 border-t border-[--border-glass]'
              >
                <a href='#contact' className='btn-primary w-full justify-center text-center'>
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </header>

      {/* ABOUT SUMMARY */}
      <FadeInWhenVisible>
        <section id='about' className='max-w-6xl mx-auto px-6 py-20 space-y-12'>
          <div className='tech-card p-8 md:p-12 relative overflow-hidden'>
            {/* Background decorative grid */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-[0.03] pointer-events-none"></div>

            <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
              <span className='w-1 h-8 bg-[--accent-primary]'></span>
              <span className="tracking-widest uppercase">About Me</span>
            </h2>

            <p className='text-[--text-secondary] text-lg leading-relaxed text-left md:text-justify font-light'>
              Senior Software Engineer with a focus on <span className='text-[--text-primary] font-semibold'>Engineering Excellence</span> and <span className='text-[--text-primary] font-semibold'>Scalable Architectures</span>.
              With over 6 years of experience in the enterprise fintech space, I specialize in building high-performance
              applications that serve millions. My tenure as <span className='text-[--accent-secondary] font-medium'>Frontend Lead at JazzCash</span>
              involved orchestrating critical migrations and performance overhauls for a user base of <span className='text-[--text-primary] font-semibold'>50M+</span>.
              Currently, I am bridging the gap between traditional engineering and <span className='text-[--accent-primary]'>Artificial Intelligence</span>
              at BTU Cottbus, focusing on the future of RAG pipelines and autonomous agents.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {[
              { number: '5+', label: 'Years Experience', sub: 'Enterprise Level' },
              { number: '50M+', label: 'End Users', sub: 'Served Daily' },
              { number: '60%', label: 'Crash Reduction', sub: 'Efficiency optimization' },
            ].map((stat, i) => (
              <div
                key={i}
                className='tech-card p-8 group text-center hover:border-[--accent-primary] transition-all duration-300'
              >
                <h3 className='text-5xl font-extrabold text-[--accent-primary] mb-2 font-mono tracking-tighter'>
                  {stat.number}
                </h3>
                <p className='text-[--text-primary] font-bold uppercase tracking-widest text-sm'>
                  {stat.label}
                </p>
                <p className='text-[--text-secondary] text-[10px] uppercase mt-1 tracking-wider'>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          <div className='tech-card p-8 md:p-12'>
            <h3 className='text-2xl font-bold mb-10 border-b border-[--border-tech] pb-4 flex items-center gap-3'>
              <span className='w-2 h-2 bg-[--accent-secondary]'></span>
              <span className="uppercase tracking-widest text-sm">Tech Stack Ecosystem</span>
            </h3>

            {/* Tools Grid */}
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center mt-6'>
              {[
                { name: 'VS Code', icon: '/images/icons/vscode.png' },
                { name: 'Git', icon: '/images/icons/git.png' },
                { name: 'GitHub', icon: '/images/icons/github.png' },
                { name: 'Node.js', icon: '/images/icons/nodejs.png' },
                { name: 'React', icon: '/images/icons/react.png' },
                { name: 'Next.js', icon: '/images/icons/next.png' },
                { name: 'TypeScript', icon: '/images/icons/ts.png' },
                { name: 'Tailwind', icon: '/images/icons/tailwaind.png' },
                { name: 'Docker', icon: '/images/icons/docker.png' },
                { name: 'Figma', icon: '/images/icons/figma.png' },
              ].map((tool) => (
                <div key={tool.name} className='flex flex-col items-center group cursor-pointer'>
                  <div className='w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 p-3 rounded-xl bg-[--bg-dark] border border-[--border-glass] group-hover:border-[--accent-primary]'>
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className='w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                    />
                  </div>
                  <p className='mt-3 text-[10px] uppercase tracking-widest font-semibold text-[--text-secondary] group-hover:text-[--accent-primary] transition-colors'>
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION WITH PROFICIENCY */}
          <div className='tech-card p-8 md:p-12'>
            <div className="flex items-center justify-between mb-10 border-b border-[--border-glass] pb-4">
              <h3 className='text-xl md:text-2xl font-bold flex items-center gap-3'>
                <span className='w-2 h-8 bg-[--accent-primary]'></span>
                <span className='tracking-widest uppercase'>System Competencies</span>
              </h3>
              <div className='hidden md:flex gap-2'>
                <div className='w-2 h-2 bg-[--accent-primary] rounded-full animate-pulse'></div>
                <span className='text-xs font-mono text-[--accent-primary]'>DIAGNOSTICS: ONLINE</span>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {/* Frontend & Mobile */}
              <div className='space-y-6'>
                <h4 className='text-[--accent-secondary] font-mono font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-[--accent-secondary] pl-3'>
                  Frontend & Mobile Architecture
                </h4>
                {[
                  { skill: 'React / Next.js', level: 95 },
                  { skill: 'React Native', level: 92 },
                  { skill: 'TypeScript', level: 90 },
                  { skill: 'Angular / Vue.js', level: 75 },
                  { skill: 'Flutter', level: 70 },
                ].map((item, i) => (
                  <div key={i} className='space-y-2'>
                    <div className='flex justify-between text-sm items-end'>
                      <span className='text-[--text-primary] font-medium tracking-wide'>{item.skill}</span>
                      <span className='font-mono text-[--accent-primary] font-bold text-xs'>
                        [{item.level}%]
                      </span>
                    </div>
                    {/* Segmented Bar */}
                    <div className='segment-container h-3 w-full opacity-0 animate-fadeIn' style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}>
                      {Array.from({ length: 20 }).map((_, segmentIdx) => (
                        <div
                          key={segmentIdx}
                          className={`segment ${(segmentIdx / 20) * 100 < item.level ? 'filled' : ''}`}
                          style={{
                            opacity: (segmentIdx / 20) * 100 < item.level ? 1 : 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI & Backend */}
              <div className='space-y-6'>
                <h4 className='text-purple-400 font-mono font-bold uppercase tracking-widest text-xs mb-6 border-l-2 border-purple-400 pl-3'>
                  AI & Backend Infrastructure
                </h4>
                {[
                  { skill: 'Python / LangChain', level: 85 },
                  { skill: 'LLMs / RAG Pipelines', level: 88 },
                  { skill: 'Node.js / FastAPI', level: 80 },
                  { skill: 'Docker / CI/CD', level: 78 },
                  { skill: 'Azure / AWS', level: 75 },
                ].map((item, i) => (
                  <div key={i} className='space-y-2'>
                    <div className='flex justify-between text-sm items-end'>
                      <span className='text-[--text-primary] font-medium tracking-wide'>{item.skill}</span>
                      <span className='font-mono text-purple-400 font-bold text-xs'>
                        [{item.level}%]
                      </span>
                    </div>
                    {/* Segmented Bar */}
                    <div className='segment-container h-3 w-full opacity-0 animate-fadeIn' style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}>
                      {Array.from({ length: 20 }).map((_, segmentIdx) => (
                        <div
                          key={segmentIdx}
                          className={`segment ${(segmentIdx / 20) * 100 < item.level ? 'filled-secondary' : ''}`}
                          style={{
                            background: (segmentIdx / 20) * 100 < item.level ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.1)',
                            boxShadow: (segmentIdx / 20) * 100 < item.level ? '0 0 5px var(--accent-secondary)' : 'none'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PORTFOLIO STATEMENT */}
          <div className='glass-card p-8 md:p-12 border-l-4 border-[--accent-primary]'>
            <h3 className='text-xl font-bold mb-4 text-gradient'>Professional Philosophy</h3>
            <p className='text-[--text-secondary] text-lg leading-relaxed italic'>
              "I am passionate about building clean, performant, and scalable architectures that bridge the gap between complex technical requirements and intuitive user experiences. My goal is to leverage AI and modern engineering practices to deliver measurable business value and drive digital innovation."
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* EXPERIENCE */}
      <FadeInWhenVisible>
        <Experience />
      </FadeInWhenVisible>

      {/* TESTIMONIALS */}
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>

      {/* BENCHMARKS */}
      <FadeInWhenVisible>
        <TechBenchmarks />
      </FadeInWhenVisible>

      {/* PROJECTS */}
      <FadeInWhenVisible>
        <Projects />
      </FadeInWhenVisible>

      {/* INTERNSHIPS & CERTIFICATES */}
      {/* <FadeInWhenVisible>
          <InternshipsAndCertificates />
      </FadeInWhenVisible> */}

      {/* CONTACT */}
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>

      {/* CHATBOT */}
      <Chatbot />

      {/* STICKY CTA (Mobile) */}
      <StickyCTA />
    </div>
  );
}
