'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Twitter } from 'lucide-react';
import HireMeModal from './HireMeModal';

export default function Contact() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  
  return (
    <>
      <section id="contact" className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-400">Available Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+250794990264" className="block hover:text-blue-400 transition-colors">
                  +250 794 990 264
                </a>
                <a href="tel:+250792758841" className="block hover:text-blue-400 transition-colors">
                  +250 792 758 841
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-400">Response within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:deoniyogisubizo@gmail.com"
                className="text-lg hover:text-green-400 transition-colors break-all"
              >
                deoniyogisubizo@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-400">Based in Kigali, Rwanda</p>
                </div>
              </div>
              <address className="not-italic">
                <p className="text-lg">Kigali Province</p>
                <p className="text-gray-400">Kicukiro District, Gatenga Sector</p>
                <p className="text-gray-400">Rwanda</p>
              </address>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setIsHireModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Send size={22} />
              <span className="text-lg">Hire Me For Your Next Project</span>
            </button>
            
            <p className="mt-6 text-gray-400">
              Connect with me on professional networks
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/deoniyogisubizo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com/deo_keyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Developed by <span className="text-blue-400 font-semibold">Deo NIYOGISUBIZO</span>. 
            Full Stack Developer & UI/UX Enthusiast.
          </p>
        </div>
      </footer>

      <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
    </>
  );
}