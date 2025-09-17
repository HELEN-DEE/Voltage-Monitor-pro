'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { 
  Zap, 
  Activity, 
  Shield, 
  TrendingUp, 
  Wifi,
  BarChart3,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Clock,
  ArrowRight,
  Play
} from 'lucide-react';

const Homepage = () => {
const { isDarkMode } = useTheme();

  const features = [
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
  ];

  const stats = [
    { number: "10k+", label: "Active Monitors" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "500ms", label: "Response Time" }
  ];

  const benefits = [
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
  ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-indigo-50 via-white to-blue-50'
        }`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-96 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
                <div className="flex justify-center mb-8">
                <div className={`flex items-center justify-center w-20 h-20 rounded-2xl shadow-2xl ${
                    isDarkMode 
                        ? 'bg-gradient-to-br from-blue-400 via-gray-800 to-purple-400  ' 
                        : 'bg-gradient-to-br from-indigo-400 via-indigo-100 to-blue-200'
                }`}>
                    <Zap className="h-10 w-10 text-white" />
                </div>
            </div>
            
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode 
                    ? 'from-blue-400 to-purple-400' 
                    : 'from-blue-600 to-indigo-700'
                }`}>
                    Voltage Monitor Pro
                </span>
                </h1>
                
                <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Advanced electrical monitoring system that tracks voltage fluctuations, protects your appliances, 
                and provides comprehensive analytics for optimal electrical safety and efficiency.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg ${
                    isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-500 hover:to-indigo-600'
                }`}>
                    Start Monitoring Now
                </button>
                <button className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                    isDarkMode 
                    ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}>
                <Play className="h-5 w-5" />
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Section */}
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

      {/* Benefits Section */}
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
              }`}> VoltageMonitor Pro</span>
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

      {/* How It Works Section */}
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
            <div className="text-center">
              <div className={`flex items-center justify-center w-16 h-16 font-bold text-xl rounded-full mx-auto mb-6 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
              }`}>
                1
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Install Sensors</h3>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Install our smart voltage sensors on your electrical panels and key appliances. Quick setup with professional support available.
              </p>
            </div>
            
            <div className="text-center">
              <div className={`flex items-center justify-center w-16 h-16 font-bold text-xl rounded-full mx-auto mb-6 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
              }`}>
                2
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Connect System</h3>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Connect your sensors to our cloud platform via WiFi or Ethernet. Automatic configuration and immediate data streaming.
              </p>
            </div>
            
            <div className="text-center">
              <div className={`flex items-center justify-center w-16 h-16 font-bold text-xl rounded-full mx-auto mb-6 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
              }`}>
                3
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Monitor & Analyze</h3>
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Access real-time dashboards, receive instant alerts, and analyze historical data to optimize your electrical systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-600 to-purple-700' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-700'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Electrical Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust VoltageMonitor Pro for their electrical monitoring needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-600 hover:text-blue-700 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-2">
              Get Started Free <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-blue-100 mt-6 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;