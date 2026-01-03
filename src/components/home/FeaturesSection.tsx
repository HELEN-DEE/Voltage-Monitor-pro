'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { 
  Activity, 
  Shield, 
  TrendingUp, 
  Wifi,
  BarChart3,
  Smartphone,
  LucideIcon,
} from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: FeatureItem[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  features = [
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Track voltage fluctuations across all your appliances with millisecond precision and instant alerts."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with historical trends, usage patterns, and predictive insights."
    },
    {
      icon: Shield,
      title: "Protection Alerts",
      description: "Automated warnings for dangerous voltage levels that could damage your electrical equipment."
    },
    {
      icon: Wifi,
      title: "Remote Access",
      description: "Monitor your electrical systems from anywhere with our cloud-based dashboard and mobile app."
    },
    {
      icon: BarChart3,
      title: "Custom Reports",
      description: "Generate detailed reports for maintenance scheduling, energy efficiency, and compliance tracking."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Full-featured mobile application for on-the-go monitoring and instant notifications."
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
            Powerful Features for
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDarkMode 
                ? 'from-blue-400 to-purple-400' 
                : 'from-blue-600 to-indigo-700'
            }`}> Complete Control</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to monitor, analyze, and protect your electrical systems in one comprehensive platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`group p-8 rounded-2xl shadow-lg hover:shadow-2xl border transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-400'
              }`}>
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-900 to-purple-900' 
                    : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                }`}>
                  <IconComponent className={`h-7 w-7 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;