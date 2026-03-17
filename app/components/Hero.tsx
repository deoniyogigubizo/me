'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Instagram, Mail, MessageCircle, Download } from 'lucide-react';
import HireMeModal from './HireMeModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="flex flex-col justify-end bg-black text-white relative overflow-hidden" style={{minHeight: '120vh'}}>
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(250, 250, 210) 0%, transparent 50%)`,
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgb(255,255,255) 1px, transparent 1px), linear-gradient(90deg, rgb(255,255,255) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="text-center px-4 relative z-10 pb-8 mb-4">
        {/* Name with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">Deo NIYOGISUBIZO</span>
        </h1>
        
        {/* Role */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Full Stack Developer & <span className="gradient-text-accent">UI/UX Enthusiast</span>
        </p>
        
        {/* Tagline */}
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Transforming complex problems into beautiful, functional solutions
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            View My Work
            <ChevronDown size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-10">
          <a 
            href="https://www.instagram.com/deo_keyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="https://github.com/deoniyogisubizo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/deoniyogisubizo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <Mail size={22} />
          </a>
          <a 
            href="/Deo_Niyogisubizo_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Download Resume"
          >
            <Download size={22} />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Scroll down</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 animate-float"
            >
              <ChevronDown size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button - Fixed Position */}
      <a
        href="https://wa.me/+250792758841"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
      >
        <MessageCircle size={24} />
      </a>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
