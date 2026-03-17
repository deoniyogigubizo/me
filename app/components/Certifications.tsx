'use client';
import { Award, CheckCircle, Calendar, ExternalLink, Cloud, Code, Container, Smartphone, Server } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-2024-1234",
    url: "https://aws.amazon.com/certification",
    color: "border-l-amber-200",
    icon: <Cloud size={28} />,
    iconBg: "from-orange-400/20 to-yellow-500/20"
  },
  {
    title: "Meta Full Stack Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-FS-2023-5678",
    url: "https://www.coursera.org/professional-certificates/meta-full-stack-developer",
    color: "border-l-blue-400",
    icon: <Code size={28} />,
    iconBg: "from-blue-400/20 to-blue-600/20"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-9012",
    url: "https://cloud.google.com/certification",
    color: "border-l-green-400",
    icon: <Cloud size={28} />,
    iconBg: "from-green-400/20 to-green-600/20"
  },
  {
    title: "Meta React Native Developer Certificate",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-RN-2023-3456",
    url: "https://www.coursera.org/professional-certificates/meta-react-native-developer",
    color: "border-l-cyan-400",
    icon: <Smartphone size={28} />,
    iconBg: "from-cyan-400/20 to-cyan-600/20"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-LF-7890",
    url: "https://www.cncf.io/certification/cka",
    color: "border-l-purple-400",
    icon: <Container size={28} />,
    iconBg: "from-purple-400/20 to-purple-600/20"
  },
  {
    title: "Python Institute Certified Python Programmer",
    issuer: "Python Institute",
    date: "2022",
    credentialId: "PCPP1-2022-4567",
    url: "https://pythoninstitute.org/pcpp-certification",
    color: "border-l-yellow-400",
    icon: <Server size={28} />,
    iconBg: "from-yellow-400/20 to-yellow-600/20"
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
            Professional certifications that validate my expertise across various technologies and platforms.
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
                Verify Certificate
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
                I'm committed to staying current with the latest technologies. New certifications are regularly added as I complete them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
