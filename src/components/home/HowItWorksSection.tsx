'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps?: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ 
  steps = [
    {
      number: 1,
      title: "Install Sensors",
      description: "Install our smart voltage sensors on your electrical panels and key appliances. Quick setup with professional support available."
    },
    {
      number: 2,
      title: "Connect System",
      description: "Connect your sensors to our cloud platform via WiFi or Ethernet. Automatic configuration and immediate data streaming."
    },
    {
      number: 3,
      title: "Monitor & Analyze",
      description: "Access real-time dashboards, receive instant alerts, and analyze historical data to optimize your electrical systems."
    }
  ]
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            How It Works
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get started with professional voltage monitoring in three simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className={`flex items-center justify-center w-16 h-16 font-bold text-xl rounded-full mx-auto mb-6 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
              }`}>
                {step.number}
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{step.title}</h3>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;