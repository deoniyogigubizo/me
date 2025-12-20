'use client';
import { User, Code, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful and functional web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer with expertise in modern web technologies.
              I enjoy turning complex problems into simple, beautiful designs and
              writing clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Code className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Writing maintainable and scalable solutions
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <User className="mx-auto mb-4 text-green-600" size={32} />
              <h4 className="font-semibold mb-2">User Focus</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Creating intuitive user experiences
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Coffee className="mx-auto mb-4 text-purple-600" size={32} />
              <h4 className="font-semibold mb-2">Problem Solver</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Tackling challenges with creativity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}