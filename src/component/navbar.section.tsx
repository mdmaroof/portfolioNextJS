import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { FiBriefcase, FiCode, FiFolder, FiHome, FiLayers } from 'react-icons/fi';

const NAV_LINKS = [
  { name: 'About', href: '#about', icon: FiHome },
  { name: 'Overview', href: '#overview', icon: FiLayers },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Projects', href: '#projects', icon: FiFolder },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_LINKS.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      className={`nav-shell ${isScrolled ? 'nav-shell-scrolled' : ''}`}
    >
      <div className="nav-inner">
        <a 
          href="#" 
          className="nav-brand"
          onClick={(e) => handleSmoothScroll(e, '#')}
        >
          MM
        </a>

        {/* Desktop Nav */}
        <div className="nav-links hidden md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`nav-link ${
                  isActive ? 'active' : ''
                }`}
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="icon-button"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <AiOutlineClose size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`mobile-nav md:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`nav-link flex items-center gap-2 text-base ${
                  isActive ? 'active' : ''
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
