'use client';
import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            name: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            description: ''
          });
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Hire Me
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{border: '2px solid rgb(251, 191, 36)'}}>
                <Send className="text-amber-200" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-400">
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                    style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                    style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                  style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                    style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                  >
                    <option value="">Select type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="embedded">Embedded Systems</option>
                    <option value="fullstack">Full-Stack Solution</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                    style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                  >
                    <option value="">Select budget</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                  style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="1month">1 Month</option>
                  <option value="1-3months">1-3 Months</option>
                  <option value="3-6months">3-6 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Project Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-transparent"
                  style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                  placeholder="Describe your project requirements, goals, and any specific technologies needed..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Proposal
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  style={{border: '1px solid rgba(245, 245, 245, 0.2)'}}
                >
                  Cancel
                </button>
              </div>
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/30 text-red-300 rounded-lg" style={{border: '1px solid rgb(239, 68, 68)'}}>
                  Failed to send message. Please try again or email directly to deoniyogisubizo@gmail.com
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
