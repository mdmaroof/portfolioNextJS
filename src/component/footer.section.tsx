import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export const Footer = () => (
  <footer className="footer-wrap">
    <div className="footer-orbit">
      <div className="footer-ring footer-ring-one" /><div className="footer-ring footer-ring-two" />
      <div className="relative z-10">
        <span className="eyebrow">Open to the right opportunity</span>
        <h2>Have an ambitious product<br />that needs momentum?</h2>
        <a href="mailto:maroofmohdmalik@gmail.com" className="primary-button mt-7">Start a conversation <FiArrowUpRight /></a>
      </div>
      <div className="footer-contact relative z-10"><FiMail /><span>Email me at</span><a href="mailto:maroofmohdmalik@gmail.com">maroofmohdmalik@gmail.com</a></div>
    </div>
    <div className="footer-bottom"><div><strong>MM</strong><span>Mohd Maroof · Senior Frontend Developer</span></div><div className="flex gap-2"><a href="https://github.com/mdmaroof" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/mohd-maroof-535619118" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div><p>© 2026 · Built with care in India</p></div>
  </footer>
);
