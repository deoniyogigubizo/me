'use client';
import { User, Code, Coffee, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful and functional web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-amber-200">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer with expertise in modern web technologies.
              I enjoy turning complex problems into simple, beautiful designs and
              writing clean, efficient code.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Based in Kigali, Rwanda, I'm passionate about using technology to 
              drive positive change in Africa and beyond.
            </p>
            
            {/* Resume Download */}
            <a 
              href="/Deo_Niyogisubizo_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Download Resume</span>
              <Sparkles size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card card-hover p-6 text-center group">
              <Code className="mx-auto mb-4 text-amber-200 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-semibold mb-2 text-white">Clean Code</h4>
              <p className="text-sm text-gray-400">
                Writing maintainable and scalable solutions
              </p>
            </div>
            <div className="card card-hover p-6 text-center group">
              <User className="mx-auto mb-4 text-amber-200 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-semibold mb-2 text-white">User Focus</h4>
              <p className="text-sm text-gray-400">
                Creating intuitive user experiences
              </p>
            </div>
            <div className="card card-hover p-6 text-center group">
              <Coffee className="mx-auto mb-4 text-amber-200 group-hover:scale-110 transition-transform" size={36} />
              <h4 className="font-semibold mb-2 text-white">Problem Solver</h4>
              <p className="text-sm text-gray-400">
                Tackling challenges with creativity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
