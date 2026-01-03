'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';

interface StatItem {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats = [
    { number: "10k+", label: "Active Monitors" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "500ms", label: "Response Time" }
  ] 
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gray-800 border-y border-gray-700' 
        : 'bg-white border-y border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {stat.number}
              </div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;