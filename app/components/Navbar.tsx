'use client';
import { Code2, Github, Linkedin, Instagram, Mail, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Grid - Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm sm:text-lg leading-tight">
                Deo Developer
              </span>
              <span className="text-amber-200 text-xs sm:text-sm -mt-0.5">
                Full Stack Dev
              </span>
            </div>
          </div>

          {/* Right Grid - Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Who's Deo - Link to About */}
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
            >
              Who's Deo
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-3 mr-2">
              <a
                href="https://github.com/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/deo_keyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:deoniyogisubizo@gmail.com"
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Contact
            </button>

            {/* Hire Me Button - Highlighted */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-amber-200 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-amber-300 hover:scale-105 text-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {/* Who's Deo - Link to About */}
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Who's Deo
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Find me on</span>
                <a
                  href="https://github.com/deoniyogisubizo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deoniyogisubizo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/deo_keyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Contact
              </button>

              {/* Hire Me Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-amber-200 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-amber-300 text-center"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}