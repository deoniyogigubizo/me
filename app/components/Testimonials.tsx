'use client';
import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Africa",
    content: "Deo delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and ability to translate our requirements into a beautiful, functional solution was impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    content: "Working with Deo on our IoT smart home project was a pleasure. His expertise in embedded systems combined with modern web technologies created a seamless experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Amara Nkrumah",
    role: "Director, Kigali Digital Hub",
    content: "Deo's work on our healthcare portal transformed how we deliver telemedicine services. His professionalism and technical skills are top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "David Okonkwo",
    role: "Founder, RestaurantPOS",
    content: "The restaurant management system Deo built for us handles complex operations smoothly. His understanding of both business logic and user experience made all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`card card-hover p-6 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Quote className="text-amber-200 mb-4" size={32} />
      <p className="text-gray-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-amber-200 text-amber-200" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-black text-white" style={{borderTop: '1px solid rgba(245, 245, 245, 0.1)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* LinkedIn Recommendations Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/deoniyogisubizo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View LinkedIn Recommendations
          </a>
        </div>
      </div>
    </section>
  );
}
