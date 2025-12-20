'use client';
import { useState } from 'react';
import { ChevronDown, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import HireMeModal from './HireMeModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Deo NIYOGISUBIZO 
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors"
          >
            Hire Me For Your Next Project
          </button>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/deo_keyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://github.com/deoniyogisubizo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:deoniyogisubizo@gmail.com" 
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-12">
          <div className="flex flex-col items-center gap-4">
            <span className="text-gray-400 text-sm font-medium">Scroll down</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="p-3 bg-gray-300 hover:bg-gray-400 rounded-full transition-all duration-300 hover:scale-110 animate-bounce group"
            >
              <ChevronDown size={24} className="text-gray-600 group-hover:text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button - Fixed Position */}
      <a
        href="https://wa.me/+250792758841" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors z-40"
      >
        <MessageCircle size={24} />
      </a>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}