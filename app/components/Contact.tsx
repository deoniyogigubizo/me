'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Twitter, Download } from 'lucide-react';
import HireMeModal from './HireMeModal';

export default function Contact() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  
  return (
    <>
      <section id="contact" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-500 text-sm">Available Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+250794990264" className="block hover:text-amber-200 transition-colors">
                  +250 794 990 264
                </a>
                <a href="tel:+250792758841" className="block hover:text-amber-200 transition-colors">
                  +250 792 758 841
                </a>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 text-sm">Response within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:deoniyogisubizo@gmail.com"
                className="text-lg hover:text-amber-200 transition-colors break-all"
              >
                deoniyogisubizo@gmail.com
              </a>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-500 text-sm">Based in Kigali, Rwanda</p>
                </div>
              </div>
              <address className="not-italic">
                <p className="text-white">Kigali Province</p>
                <p className="text-gray-500">Kicukiro District, Gatenga Sector</p>
                <p className="text-gray-500">Rwanda</p>
              </address>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setIsHireModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300"
            >
              <Send size={22} />
              <span className="text-lg">Hire Me For Your Next Project</span>
            </button>
            
            <p className="mt-8 text-gray-500">
              Or download my resume to learn more
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="/Deo_Niyogisubizo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
            
            <p className="mt-8 text-gray-500">
              Connect with me on professional networks
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-amber-200 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-amber-200 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com/deo_keyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-amber-200 rounded-lg transition-all"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/deo_keyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 hover:text-amber-200 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Developed by <span className="text-amber-200 font-semibold">Deo NIYOGISUBIZO</span>. 
            Full Stack Developer & UI/UX Enthusiast.
          </p>
        </div>
      </footer>

      <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
    </>
  );
}
