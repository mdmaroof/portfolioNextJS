import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { m } from "framer-motion";

export const Footer = () => (
  <footer className="footer-wrap">
    <div className="footer-orbit">
      <m.div className="footer-ring footer-ring-one" whileInView={{ opacity: [.4, .82, .4] }} viewport={{ amount: .2 }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} /><m.div className="footer-ring footer-ring-two" whileInView={{ opacity: [.26, .55, .26] }} viewport={{ amount: .2 }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: .8 }} />
      <m.div className="relative z-10" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}>
        <span className="eyebrow">Open to the right opportunity</span>
        <h2>Have an ambitious product<br />that needs momentum?</h2>
        <m.a whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: .97 }} href="mailto:maroofmohdmalik@gmail.com" className="primary-button mt-7">Start a conversation <FiArrowUpRight /></m.a>
      </m.div>
      <m.div className="footer-contact relative z-10" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, delay: .08, ease: [0.16, 1, 0.3, 1] }}><FiMail /><span>Email me at</span><a href="mailto:maroofmohdmalik@gmail.com">maroofmohdmalik@gmail.com</a></m.div>
    </div>
    <div className="footer-bottom"><div><strong>MM</strong><span>Mohd Maroof · Senior Frontend Developer</span></div><div className="flex gap-2"><a href="https://github.com/mdmaroof" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/mohd-maroof-535619118" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div><p>© 2026 · Built by Mohd Maroof</p></div>
  </footer>
);
