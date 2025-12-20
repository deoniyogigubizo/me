'use client';
import { Code2, Database, Cpu, Globe, Smartphone, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Globe size={24} />,
    skills: [
      { name: 'Next.js', level: 95, color: 'bg-black dark:bg-white' },
      { name: 'React.js', level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
      { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server size={24} />,
    skills: [
      { name: 'Python', level: 92, color: 'bg-green-600' },
      { name: 'PHP', level: 80, color: 'bg-purple-600' },
      { name: 'Node.js', level: 85, color: 'bg-green-500' },
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    skills: [
      { name: 'MongoDB', level: 88, color: 'bg-green-700' },
      { name: 'MySQL', level: 82, color: 'bg-blue-700' },
      { name: 'PostgreSQL', level: 78, color: 'bg-blue-800' },
    ]
  },
  {
    title: 'Embedded & Systems',
    icon: <Cpu size={24} />,
    skills: [
      { name: 'C++', level: 85, color: 'bg-blue-900' },
      { name: 'Embedded Systems', level: 88, color: 'bg-gray-700' },
      { name: 'IoT Development', level: 83, color: 'bg-teal-600' },
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone size={24} />,
    skills: [
      { name: 'React Native', level: 75, color: 'bg-blue-400' },
      { name: 'Flutter', level: 70, color: 'bg-cyan-500' },
    ]
  },
  {
    title: 'Other Skills',
    icon: <Code2 size={24} />,
    skills: [
      { name: 'REST APIs', level: 90, color: 'bg-indigo-600' },
      { name: 'Git/GitHub', level: 88, color: 'bg-orange-600' },
      { name: 'Docker', level: 75, color: 'bg-blue-500' },
      { name: 'AWS', level: 72, color: 'bg-yellow-600' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            10+ years of experience across diverse technologies and platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-100">
                With 10+ real-world applications delivered successfully
              </p>
            </div>
            <a
              href="#contact"
              className="mt-4 md:mt-0 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}