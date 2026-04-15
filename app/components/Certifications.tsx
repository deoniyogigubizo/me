'use client';
import { Award, CheckCircle, Calendar, ExternalLink, Cpu, Code, Brain, Database, Globe, Smartphone } from 'lucide-react';

const certifications = [
  {
    title: "Python Programming Certificate",
    issuer: "TutorialsPoint",
    date: "2024",
    credentialId: "TPP-PY-2024-001",
    url: "#",
    color: "border-l-green-400",
    icon: <Code size={28} />,
    iconBg: "from-green-400/20 to-green-600/20"
  },
  {
    title: "Next.js Full Stack Development",
    issuer: "TutorialsPoint",
    date: "2024",
    credentialId: "TPP-NX-2024-002",
    url: "#",
    color: "border-l-gray-300",
    icon: <Globe size={28} />,
    iconBg: "from-gray-400/20 to-gray-600/20"
  },
  {
    title: "IoT Development Masterclass",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-IOT-2023-003",
    url: "#",
    color: "border-l-cyan-400",
    icon: <Cpu size={28} />,
    iconBg: "from-cyan-400/20 to-cyan-600/20"
  },
  {
    title: "Embedded Systems Programming",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-EMB-2023-004",
    url: "#",
    color: "border-l-purple-400",
    icon: <Cpu size={28} />,
    iconBg: "from-purple-400/20 to-purple-600/20"
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-ML-2023-005",
    url: "#",
    color: "border-l-pink-400",
    icon: <Brain size={28} />,
    iconBg: "from-pink-400/20 to-pink-600/20"
  },
  {
    title: "MongoDB Database Administration",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-MDB-2023-006",
    url: "#",
    color: "border-l-green-500",
    icon: <Database size={28} />,
    iconBg: "from-green-500/20 to-green-700/20"
  },
  {
    title: "React Native Mobile Development",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-RN-2023-007",
    url: "#",
    color: "border-l-blue-400",
    icon: <Smartphone size={28} />,
    iconBg: "from-blue-400/20 to-blue-600/20"
  },
  {
    title: "TypeScript for Professionals",
    issuer: "TutorialsPoint",
    date: "2024",
    credentialId: "TPP-TS-2024-008",
    url: "#",
    color: "border-l-blue-500",
    icon: <Code size={28} />,
    iconBg: "from-blue-500/20 to-blue-700/20"
  },
  {
    title: "Node.js Backend Development",
    issuer: "TutorialsPoint",
    date: "2023",
    credentialId: "TPP-NJ-2023-009",
    url: "#",
    color: "border-l-green-600",
    icon: <Code size={28} />,
    iconBg: "from-green-600/20 to-green-800/20"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications from TutorialsPoint validating expertise across various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`card card-hover p-6 border-l-4 ${cert.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${cert.iconBg} rounded-lg`}>
                  {cert.icon}
                </div>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {cert.issuer}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                Credential ID: {cert.credentialId}
              </p>
              
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors text-sm"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Continuous Learning Note */}
        <div className="mt-12 p-6 rounded-xl" style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}>
          <div className="flex items-center gap-4">
            <CheckCircle className="text-green-400 flex-shrink-0" size={32} />
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Continuous Learning</h4>
              <p className="text-gray-400">
                Committed to staying current with the latest technologies. New certifications are regularly added.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
