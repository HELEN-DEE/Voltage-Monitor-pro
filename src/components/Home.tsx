'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Waveform from '../components/Waveform';
import Image from 'next/image';
import Link from 'next/link';
import { 
   
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
            ? 'bg-[#020617]' 
            : 'bg-[#F8FAFC]'
        }`}>
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background grid with gradient overlay */}
  <div className="absolute inset-0 pointer-events-none">
    <div className={`absolute inset-0 opacity-5 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-transparent' : 'bg-gradient-to-br from-blue-50 to-transparent'}`}></div>
    <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke={isDarkMode ? '#3b82f6' : '#94a3b8'}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Floating elements for depth */}
  <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
    
    {/* LEFT — Text + CTA */}
    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
          Live Protection Technology
        </span>
      </div>

      <h1
        className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
          isDarkMode ? 'text-white' : 'text-[#020617]'
        }`}
      >
        Know your voltage
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mt-2">
          before it damages.
        </span>
      </h1>

      <p
        className={`text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-[#475569]'
        }`}
      >
        VoltWatch monitors voltage in real-time, detects dangerous spikes instantly, 
        and gives you complete visibility into your power quality.
      </p>

      {/* Waveform with enhanced container */}
      <div className="mb-12 p-6 rounded-2xl backdrop-blur-sm border border-opacity-20"
        style={{
          backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.6)',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
        }}
      >
        <Waveform isDarkMode={isDarkMode} />
        <div className="flex justify-between items-center mt-4 text-sm">
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Current status: <span className="font-semibold text-green-500">Normal</span>
          </span>
          <span className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>
            Updates every 100ms
          </span>
        </div>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Link href="/how-it-works">
          <button className="group relative px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span className="relative z-10 flex items-center gap-2">
              How VoltWatch Works
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </Link>

        <Link href="/problem">
          <button
            className={`group px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-0.5 ${
              isDarkMode
                ? 'border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600'
                : 'border-gray-300 text-[#475569] hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <span className="flex items-center gap-2">
              Why Power Quality Matters
              <svg className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>

    {/* RIGHT — Enhanced Image Container */}
    <div className="relative z-10 lg:bottom-12">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Image container */}
        <div
          className={`relative w-full h-[580px] rounded-2xl overflow-hidden shadow-2xl border ${
            isDarkMode 
              ? 'bg-gray-900 border-gray-800' 
              : 'bg-white border-gray-200'
          }`}
        >
          <Image
            src="/images/power-lines.jpg"
            alt="Power infrastructure showing voltage distribution"
            fill
            priority
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Floating info card */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md border border-white/20"
            style={{
              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  Real-time Monitoring
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Detects anomalies within milliseconds
                </p>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1 h-6 rounded-full ${
                      i === 2 ? 'bg-green-500 animate-pulse' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
            <Link href="/getStarted">
              <button className="px-8 py-4 bg-white text-blue-600 hover:text-blue-700 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-2">
                Get Started Free <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/demo">
                <button className="px-8 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl transition-all duration-300">
              Schedule Demo
              </button>
            </Link>
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

