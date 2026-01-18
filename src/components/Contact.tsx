import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="tech-card p-10 text-center relative">
          {/* Tech decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[--accent-primary]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[--accent-primary]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[--accent-primary]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[--accent-primary]"></div>

          <h2 className="text-3xl font-extrabold mb-6 tracking-tight flex items-center justify-center gap-3">
            <span className="text-[--accent-primary]">{`//`}</span> LET'S CONNECT
          </h2>

          <p className="max-w-xl mx-auto text-[--text-secondary] text-lg mb-10 leading-relaxed font-mono text-sm">
            I am currently open to new opportunities and collaborations in Germany.
          </p>

          <div className="flex flex-col items-center gap-8">
            {/* Primary CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sulamankhan54425@gmail.com"
                className="group relative px-6 py-3 rounded-lg bg-[--accent-primary] text-[#020617] font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-3"
              >
                <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                <MdEmail className="text-xl relative z-10" /> <span className="relative z-10">Send an Email</span>
              </a>
              <a
                href="https://calendar.app.google/Q6axPy9XXiu56TV9A"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all flex items-center gap-3 relative overflow-hidden group font-medium"
              >
                <span className='absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500'></span>
                <FaCalendarCheck className="text-xl relative z-10" /> <span className="relative z-10">Google Meet</span>
              </a>
              <a
                href="https://wa.me/4917667586298"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-[--border-glass] text-[--text-secondary] hover:text-[--text-primary] hover:border-[--text-primary] transition-all flex items-center gap-3"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sulaman-khan-1254761b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-[--border-glass] flex items-center justify-center text-[--accent-primary] hover:bg-[--accent-primary] hover:text-black transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://github.com/suleman2244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-[--border-glass] flex items-center justify-center text-[--accent-primary] hover:bg-[--accent-primary] hover:text-black transition-all duration-300"
                title="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://wa.me/4917667586298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-[--border-glass] flex items-center justify-center text-[--accent-primary] hover:bg-[--accent-primary] hover:text-black transition-all duration-300"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[--text-secondary] font-mono text-xs">
              <FaMapMarkerAlt className="text-[--accent-primary]" />
              <span>Cottbus / Berlin, Germany // RELOCATION_READY</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center text-[--text-secondary]">Or Send Me a Message</h3>
            <ContactForm />
          </div>

          <div className="mt-16 pt-8 border-t border-[--border-glass]">
            <p className="text-xs text-[--text-secondary] font-mono">
              © {new Date().getFullYear()} Sulaman Khan. Built with React & Next.js. [v3.0.0-architect]
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
