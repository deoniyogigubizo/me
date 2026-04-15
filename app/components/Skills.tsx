'use client';
import { useEffect, useState, useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Next.js', level: 100 },
      { name: 'React.js', level: 98 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 93 },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'PHP', level: 90 },
      { name: 'Node.js', level: 95 },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 95 },
      { name: 'MySQL', level: 92 },
      { name: 'PostgreSQL', level: 90 },
    ]
  },
  {
    title: 'Embedded & Systems',
    skills: [
      { name: 'C++', level: 93 },
      { name: 'Embedded Systems', level: 95 },
      { name: 'IoT Development', level: 92 },
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'Flutter', level: 90 },
    ]
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'REST APIs', level: 98 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 92 },
      { name: 'AWS', level: 90 },
    ]
  }
];

function SkillRow({ name, level, index }: { name: string; level: number; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
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
    <div ref={ref} className="flex items-center gap-3 py-2">
      <span className="text-[#f5f5dc] text-xs w-28 truncate">{name}</span>
      <div className="flex-1 h-2 bg-[#1a1a1a] border border-[#404040]">
        <div
          className="h-full bg-[#c4b5a0] transition-all duration-700 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
      <span className="text-[#a89f91] text-xs w-8 text-right">{level}%</span>
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
          setTimeout(() => setIsVisible(true), index * 80);
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
      className={`bg-[#1a1a1a] border border-[#404040] p-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h3 className="text-[#f5f5dc] text-xs font-bold uppercase tracking-wider mb-3 border-b border-[#404040] pb-2">
        {category.title}
      </h3>
      
      <div className="space-y-1">
        {category.skills.map((skill, skillIndex) => (
          <SkillRow key={skillIndex} name={skill.name} level={skill.level} index={skillIndex} />
        ))}
      </div>
    </div>
  );
}

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
    const duration = 1500;
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
      className="bg-[#1a1a1a] border border-[#404040] p-4 text-center"
    >
      <div className="text-[#f5f5dc] text-2xl font-bold mb-1">
        {count}{suffix}
      </div>
      <div className="text-[#a89f91] text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 bg-[#0d0d0d] text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-[#f5f5dc] font-bold tracking-wider uppercase mb-2">
            Technical Skills
          </h2>
          <div className="w-16 h-0.5 bg-[#c4b5a0] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <AnimatedStat value={10} label="Years Exp" />
          <AnimatedStat value={50} label="Projects" />
          <AnimatedStat value={30} label="Clients" />
          <AnimatedStat value={99} label="Success" suffix="%" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
