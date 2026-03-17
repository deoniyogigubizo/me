'use client';
import { useEffect, useState, useRef } from 'react';
import { Code2, Database, Cpu, Globe, Smartphone, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe size={28} />,
    skills: [
      { name: 'Next.js', level: 100, color: 'from-white to-gray-300' },
      { name: 'React.js', level: 98, color: 'from-blue-400 to-blue-600' },
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', level: 93, color: 'from-blue-500 to-blue-700' },
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server size={28} />,
    skills: [
      { name: 'Python', level: 98, color: 'from-green-400 to-green-600' },
      { name: 'PHP', level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'Node.js', level: 95, color: 'from-green-500 to-green-700' },
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={28} />,
    skills: [
      { name: 'MongoDB', level: 95, color: 'from-green-500 to-green-700' },
      { name: 'MySQL', level: 92, color: 'from-blue-500 to-blue-700' },
      { name: 'PostgreSQL', level: 90, color: 'from-blue-600 to-blue-800' },
    ]
  },
  {
    title: 'Embedded & Systems',
    icon: <Cpu size={28} />,
    skills: [
      { name: 'C++', level: 93, color: 'from-pink-400 to-pink-600' },
      { name: 'Embedded Systems', level: 95, color: 'from-gray-400 to-gray-600' },
      { name: 'IoT Development', level: 92, color: 'from-teal-400 to-teal-600' },
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone size={28} />,
    skills: [
      { name: 'React Native', level: 90, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Flutter', level: 90, color: 'from-blue-400 to-blue-600' },
    ]
  },
  {
    title: 'Other Skills',
    icon: <Code2 size={28} />,
    skills: [
      { name: 'REST APIs', level: 98, color: 'from-indigo-400 to-indigo-600' },
      { name: 'Git/GitHub', level: 95, color: 'from-orange-400 to-orange-600' },
      { name: 'Docker', level: 92, color: 'from-blue-400 to-blue-600' },
      { name: 'AWS', level: 90, color: 'from-yellow-500 to-yellow-700' },
    ]
  }
];

function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div 
      ref={ref}
      className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl transform hover:scale-105 transition-all duration-300"
      style={{
        border: '5px solid rgba(245, 245, 245, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="stat-number mb-2 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="stat-label text-sm">{label}</div>
    </div>
  );
}

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        border: '5px solid rgba(245, 245, 245, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-amber-200/20 to-yellow-400/20 rounded-xl">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-white">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-gray-200 font-medium text-sm">
                {skill.name}
              </span>
              <span className="text-amber-200 font-bold text-sm">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-900 rounded-full overflow-hidden relative">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-black text-white relative overflow-hidden" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            10+ years of experience across diverse technologies and platforms
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <AnimatedStat value={10} label="Years Experience" />
          <AnimatedStat value={50} label="Projects Completed" />
          <AnimatedStat value={30} label="Happy Clients" />
          <AnimatedStat value={99} label="Satisfaction Rate" suffix="%" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div 
          className="mt-20 p-8 bg-gradient-to-r from-amber-200/10 to-yellow-400/10 rounded-3xl transform hover:scale-[1.02] transition-all duration-300"
          style={{
            border: '5px solid rgba(251, 191, 36, 0.2)',
            boxShadow: '0 20px 50px rgba(251, 191, 36, 0.1)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 text-lg">
                With 50+ real-world applications delivered successfully
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap text-lg px-8 py-4"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
