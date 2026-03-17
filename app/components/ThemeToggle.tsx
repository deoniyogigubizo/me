'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    setTheme('dark');
    document.documentElement.classList.add('dark');
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <div className="flex items-center gap-2 text-white">
          <span className="text-xs font-medium">A</span>
          <Moon size={18} />
        </div>
      ) : (
        <div className="flex items-center gap-2 text-black">
          <span className="text-xs font-medium">A</span>
          <Sun size={18} />
        </div>
      )}
    </button>
  );
}
