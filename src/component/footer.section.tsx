import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-8 pt-6 md:px-8">
      {/* Top Gradient Divider Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/50 to-transparent mb-8" />

      {/* 3-Column Content (Stacks on Mobile) */}
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        {/* Left Column: Name & Subtitle */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-base font-semibold tracking-tight text-slate-200">
            Mohd Maroof
          </span>
          <span className="mt-0.5 text-xs text-slate-500">
            Senior Frontend Developer
          </span>
        </div>

        {/* Center Column: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/mdmaroof"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-800 hover:text-sky-400 hover:scale-105"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/mohd-maroof-535619118"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-800 hover:text-sky-400 hover:scale-105"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>

        {/* Right Column: Built with info */}
        <div className="text-xs text-slate-500 md:text-right">
          Built with Next.js & React
        </div>
      </div>

      {/* Centered Copyright */}
      <div className="mt-6 border-t border-slate-800/40 pt-5 text-center text-xs text-slate-600">
        &copy; 2026 Mohd Maroof. All rights reserved.
      </div>
    </footer>
  );
};
