'use client';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/deoniyogisubizo/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.deoniyogisubizo.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/deoniyogisubizo/task-manager',
    liveUrl: 'https://taskmanager.deoniyogisubizo.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/deoniyogisubizo/weather-dashboard',
    liveUrl: 'https://weather.deoniyogisubizo.com',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop'
  },
  {
    title: 'IoT Smart Home System',
    description: 'An embedded systems project for smart home automation using ESP32 and sensors.',
    technologies: ['C++', 'ESP32', 'IoT', 'React Native', 'MQTT'],
    githubUrl: 'https://github.com/deoniyogisubizo/smart-home-iot',
    liveUrl: 'https://github.com/deoniyogisubizo/smart-home-iot',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop'
  },
  {
    title: 'Restaurant Management System',
    description: 'Complete restaurant management solution with POS, inventory management, and employee scheduling.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/deoniyogisubizo/restaurant-system',
    liveUrl: 'https://restaurant.deoniyogisubizo.com',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop'
  },
  {
    title: 'Healthcare Portal',
    description: 'Telemedicine platform connecting patients with healthcare providers for virtual consultations.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zoom API'],
    githubUrl: 'https://github.com/deoniyogisubizo/healthcare-portal',
    liveUrl: 'https://healthcare.deoniyogisubizo.com',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card card-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-200 transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/deoniyogisubizo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View More on GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
