import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCheckCircle } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="mt-20 border-t border-[#e3e2e5] bg-[#201f32] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#262ef2]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Upper Footer: Call to Action Banner */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6e73fa] font-semibold block mb-2">
              ✦ Available for Senior Roles & Contracts
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Give your <span className="serif-accent text-[#6e73fa]">product</span> <br />
              the speed & polish it deserves
            </h2>
            <p className="mt-2 text-sm text-[#b9bcd0] max-w-lg">
              Looking for a Senior Frontend Engineer who delivers fast, builds clean systems, and thinks like a founder?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href="mailto:maroofmohdmalik@gmail.com"
              className="px-6 py-3.5 bg-[#262ef2] hover:bg-[#1f25c7] text-white font-semibold text-sm rounded-xl text-center shadow-lg shadow-[#262ef2]/25 transition-all"
            >
              Email Mohd Maroof
            </a>
            <a
              href="https://linkedin.com/in/mohd-maroof-535619118"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl text-center border border-white/10 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Middle Footer: Links & Info Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs text-[#b9bcd0]">
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience Carousel</a></li>
              <li><a href="#agent" className="hover:text-white transition-colors">Custom AI Agent</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture Stage</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Core Expertise</h5>
            <ul className="space-y-2">
              <li>React & Next.js (SSR / SSG)</li>
              <li>React Native Mobile (iOS / Android)</li>
              <li>TypeScript & Clean Architecture</li>
              <li>Zustand, Redux & State Engines</li>
              <li>Real-time PubNub & WebSockets</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Featured Roles</h5>
            <ul className="space-y-2">
              <li>Ethos (Ascend Mobile App)</li>
              <li>VAHN (Fleet App MVP)</li>
              <li>Mercor (Frontend Architect)</li>
              <li>Buzztales Technologies (Founder)</li>
              <li>56 Secure (Command Dashboards)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3">Direct Contact</h5>
            <ul className="space-y-2">
              <li className="text-white font-medium">maroofmohdmalik@gmail.com</li>
              <li>Location: India (Remote Worldwide)</li>
              <li className="text-emerald-400 font-medium flex items-center gap-1.5 pt-1">
                <FiCheckCircle className="w-3.5 h-3.5" /> Open to immediate hire
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer: Social Icons & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8fa8]">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mdmaroof"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mohd-maroof-535619118"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:maroofmohdmalik@gmail.com"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
              aria-label="Send Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          <div>
            <span>© {new Date().getFullYear()} MOHD MAROOF. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#b9bcd0] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
