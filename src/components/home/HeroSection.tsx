// app/how-it-works/page.tsx
'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Link from 'next/link';
import { 
  Zap, 
  Plug,
  Wifi,
  Activity,
  Shield,
  AlertTriangle,
  Battery,
  Thermometer,
  BarChart3,
  Smartphone,
  Cloud,
  Bell,
  CheckCircle,
  ArrowRight,
  Home,
  Building,
  Factory,
  Server
} from 'lucide-react';

const HowItWorksPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Simple data structure
  const steps = [
    {
      step: "1",
      icon: Plug,
      title: "Plug In",
      description: "Connect our smart sensor to any outlet",
      detail: "No tools needed. Just plug it in like any device."
    },
    {
      step: "2",
      icon: Wifi,
      title: "Connect",
      description: "Sync with the VoltWatch app",
      detail: "Simple setup takes less than 2 minutes."
    },
    {
      step: "3",
      icon: Shield,
      title: "Protected",
      description: "Get alerts before damage happens",
      detail: "24/7 monitoring starts immediately."
    }
  ];

  const protection = [
    {
      icon: AlertTriangle,
      title: "Spikes",
      description: "Sudden voltage increases"
    },
    {
      icon: Battery,
      title: "Brownouts",
      description: "Dangerous low voltage"
    },
    {
      icon: Thermometer,
      title: "Overloads",
      description: "Circuit overheating"
    }
  ];

  const dashboard = [
    {
      icon: BarChart3,
      title: "Live Graphs",
      description: "See voltage in real-time"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Alerts on your phone"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Only notify when needed"
    },
    {
      icon: Cloud,
      title: "History",
      description: "Track trends over time"
    }
  ];

  const useCases = [
    {
      icon: Home,
      title: "Homes",
      description: "Protect appliances & electronics"
    },
    {
      icon: Building,
      title: "Businesses",
      description: "Keep operations running"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Monitor critical equipment"
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Ensure uptime & reliability"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950' : 'bg-white'
    }`}>
      
      {/* Simple Hero */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium">
              <Zap className="h-3 w-3" />
              How It Works
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Simple voltage protection
            </h1>
            
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Plug in. Connect. Get protected. Three steps to peace of mind.
            </p>
          </div>

          {/* 3 Steps - Clean & Simple */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className={`absolute -top-3 left-6 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' 
                      : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                  }`}>
                    {item.step}
                  </div>
                  
                  <div className={`pt-8 p-6 rounded-2xl border ${
                    isDarkMode 
                      ? 'bg-gray-900 border-gray-800' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl mx-auto mb-4 ${
                      isDarkMode 
                        ? 'bg-blue-900/30' 
                        : 'bg-blue-100'
                    }`}>
                      <Icon className={`h-7 w-7 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-2 text-center ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm mb-2 text-center ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    
                    <p className={`text-xs text-center ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What It Protects */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What we catch
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Common power issues that damage equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {protection.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-100'
                } transition-colors duration-200`}>
                  <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg ${
                    isDarkMode 
                      ? 'bg-red-900/30' 
                      : 'bg-red-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      isDarkMode ? 'text-red-400' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Clear dashboard
              </h2>
              
              <p className={`mb-8 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                See what's happening with your power at a glance. No complex charts, just clear information.
              </p>
              
              <div className="space-y-4">
                {dashboard.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${
                        isDarkMode 
                          ? 'bg-blue-900/30' 
                          : 'bg-blue-100'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Simple Dashboard Mockup */}
            <div className={`relative p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              {/* Top bar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className={`h-3 rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                } flex-1`}></div>
              </div>
              
              {/* Voltage display */}
              <div className={`mb-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Current Voltage</div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-center">230V</div>
                <div className="text-xs text-center mt-1 text-green-500">Normal</div>
              </div>
              
              {/* Graph placeholder */}
              <div className={`h-32 rounded-lg mb-4 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}></div>
              
              {/* Status bars */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Spike detection</span>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Last alert</span>
                  <span className={`text-xs ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>7 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Who uses VoltWatch
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              From homes to data centers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`text-center p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800' 
                    : 'bg-white'
                }`}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-3 ${
                    isDarkMode 
                      ? 'bg-blue-900/30' 
                      : 'bg-blue-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className={`font-semibold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to protect your equipment?
            </h2>
            
            <p className={`mb-8 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Start monitoring in minutes. No commitment required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/get-started">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              
              <Link href="/pricing">
                <button className={`px-6 py-3 font-semibold rounded-lg border transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-white'
                }`}>
                  See Pricing
                </button>
              </Link>
            </div>
            
            <p className={`mt-6 text-sm ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Free trial • Cancel anytime • No credit card needed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;