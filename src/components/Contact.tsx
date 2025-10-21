import { FaBehance, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-3xl font-bold">CONTACT
            
          </h2>
          <p className="mt-3 text-gray-600">
            I am available for part-time & full-time positions. For inquiries,
            please email:{" "}
            <a
              href="mailto:osama.ather@outlook.com"
              className="text-black underline"
            >
              osama.ather@outlook.com
            </a>
          </p>

          {/* BUTTONS */}
          {/* <div className="mt-6 flex flex-col md:flex-row gap-4">
            <a
              href="mailto:osama.ather@outlook.com"
              className="inline-block border border-black px-5 py-3 rounded-2xl"
            >
              Email Me
            </a> */}
            {/* <a
              href="/assets/OSAMA-CV-V-13.pdf"
              download="Muhammad-Osama-CV.pdf"
              className="inline-block bg-black text-white px-5 py-3 rounded-2xl"
            >
              Download Resume
            </a>
            <a
              href="/assets/OSAMA-PORTFOLIO-CAD.ppt"
              download="OSAMA-PORTFOLIO-CAD.ppt"
              className="inline-block bg-black text-white px-5 py-3 rounded-2xl"
            >
              Download Presentation
            </a> */}
          </div>

          {/* LOCATION */}
          <div className="mt-8 flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-black text-lg" />
            <span className="font-medium">Cottbus, Germany</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="mailto:osama.ather@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <MdEmail className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-osama-mechanicalengineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://www.behance.net/osamaather"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
            >
              <FaBehance className="text-xl" />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 text-center">
            Disclaimer: Images and screenshots in this portfolio are provided by
            the owner and should not contain confidential or proprietary data.
          </p>
        </div>
      </footer>
    </>
  );
}
