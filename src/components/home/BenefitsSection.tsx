'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { CheckCircle, AlertTriangle, Clock, LucideIcon } from 'lucide-react';

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits?: BenefitItem[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  benefits = [
    {
      icon: CheckCircle,
      title: "Prevent Equipment Damage",
      description: "Avoid costly repairs by detecting voltage issues before they cause harm."
    },
    {
      icon: AlertTriangle,
      title: "Safety First",
      description: "Get instant alerts for dangerous electrical conditions that could pose safety risks."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automated monitoring means less manual checking and more efficient maintenance."
    }
  ]
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gray-800' 
        : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-indigo-700'
            }`}> VoltWatch</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className={`p-8 rounded-2xl shadow-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                  isDarkMode 
                    ? 'bg-blue-900/30' 
                    : 'bg-blue-100'
                }`}>
                  <IconComponent className={`h-7 w-7 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;