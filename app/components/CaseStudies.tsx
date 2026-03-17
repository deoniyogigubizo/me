'use client';
import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Transforming Healthcare Access in East Africa",
    client: "Kigali Health Network",
    category: "Healthcare Technology",
    challenge: "Patients in rural areas had limited access to healthcare professionals, resulting in delayed diagnoses and poor health outcomes.",
    solution: "Built a comprehensive telemedicine platform enabling virtual consultations, appointment scheduling, and prescription management.",
    results: [
      { metric: "50,000+", label: "Patients Served" },
      { metric: "85%", label: "Reduction in Wait Times" },
      { metric: "40%", label: "Cost Savings for Patients" }
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Twilio Video API", "Stripe"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Scaling E-Commerce for Regional Retailer",
    client: "AfriMart",
    category: "E-Commerce",
    challenge: "A growing regional retailer needed to modernize their legacy systems and handle 10x traffic growth during peak seasons.",
    solution: "Architected a scalable e-commerce platform with real-time inventory management, AI-powered recommendations, and multi-payment gateway integration.",
    results: [
      { metric: "300%", label: "Increase in Sales" },
      { metric: "99.9%", label: "Uptime Achieved" },
      { metric: "60%", label: "Lower Cart Abandonment" }
    ],
    technologies: ["Next.js", "Python", "AWS", "Redis", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Smart Agriculture IoT Solution",
    client: "GreenTech Agriculture",
    category: "AgriTech",
    challenge: "Farmers lacked real-time data about soil conditions, weather, and crop health, leading to inefficient resource usage.",
    solution: "Developed an IoT solution with sensors for soil moisture, temperature, and nutrient levels with a mobile app for remote monitoring.",
    results: [
      { metric: "35%", label: "Water Usage Reduction" },
      { metric: "25%", label: "Crop Yield Increase" },
      { metric: "500+", label: "Active Farms" }
    ],
    technologies: ["ESP32", "C++", "React Native", "MQTT", "Node.js"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop"
  }
];

function CaseStudyCard({ study, isExpanded, onToggle }: { 
  study: typeof caseStudies[0]; 
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card overflow-hidden">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={study.image} 
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs text-amber-200 uppercase tracking-wider">
            {study.category}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {study.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Client</p>
            <p className="text-white font-medium">{study.client}</p>
          </div>
          <button
            onClick={onToggle}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-4 pt-4" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 mb-2">Challenge</h4>
              <p className="text-gray-400 text-sm">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 mb-2">Solution</h4>
              <p className="text-gray-400 text-sm">{study.solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 mb-2">Results</h4>
              <div className="grid grid-cols-3 gap-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-lg font-bold text-white">{result.metric}</p>
                    <p className="text-xs text-gray-500">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-200 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Detailed breakdowns of how I've helped clients solve complex problems and achieve measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              isExpanded={expandedId === study.id}
              onToggle={() => setExpandedId(expandedId === study.id ? null : study.id)}
            />
          ))}
        </div>

        {/* More Case Studies Link */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Want to see more examples of my work?
          </p>
          <a 
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
