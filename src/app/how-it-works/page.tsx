// app/how-it-works/page.tsx
'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Link from 'next/link';
import { 
  Zap, 
  Cpu,
  Wifi,
  Shield,
  AlertTriangle,
  BarChart3,
  Smartphone,
  Cloud,
  Settings,
  CheckCircle,
  Clock,
  Battery,
  Thermometer,
  Plug,
  HardDrive,
  SmartphoneCharging,
  Server,
  Home,
  Building,
  Factory,
  ArrowRight,
  Download,
  Upload,
  Activity,
  Eye,
  Bell
} from 'lucide-react';

const HowItWorksPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const monitoringSteps = [
    {
      number: 1,
      icon: Plug,
      title: "Install Voltage Sensors",
      description: "Install our compact voltage sensors directly into your electrical outlets or connect them to your main electrical panel.",
      features: [
        "Non-invasive installation",
        "No wiring modifications needed",
        "Fits standard electrical boxes"
      ],
      image: "/images/sensor-installation.jpg"
    },
    {
      number: 2,
      icon: Wifi,
      title: "Connect to VoltWatch Cloud",
      description: "Sensors automatically connect to your WiFi and establish a secure connection to our cloud platform.",
      features: [
        "Automatic pairing",
        "End-to-end encryption",
        "Real-time data streaming"
      ],
      image: "/images/cloud-connection.jpg"
    },
    {
      number: 3,
      icon: Activity,
      title: "Real-time Monitoring Begins",
      description: "Start monitoring voltage fluctuations, power quality, and receive instant alerts for any anomalies.",
      features: [
        "240 samples per second",
        "Millisecond response time",
        "Continuous 24/7 monitoring"
      ],
      image: "/images/realtime-monitoring.jpg"
    }
  ];

  const protectionFeatures = [
    {
      icon: AlertTriangle,
      title: "Spike Detection",
      description: "Instantly detects voltage spikes and surges that can damage sensitive electronics.",
      data: "Detects spikes in <2ms"
    },
    {
      icon: Battery,
      title: "Brownout Protection",
      description: "Monitors for low voltage conditions that can cause equipment malfunction and data loss.",
      data: "Alerts at <90% nominal voltage"
    },
    {
      icon: Thermometer,
      title: "Overload Monitoring",
      description: "Tracks circuit load to prevent overheating and potential fire hazards.",
      data: "Monitors temperature rise"
    },
    {
      icon: HardDrive,
      title: "Equipment Protection",
      description: "Safeguards computers, servers, appliances, and industrial equipment from power-related damage.",
      data: "Protects 200+ device types"
    }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive dashboard showing voltage trends, power quality metrics, and historical data."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Full-featured mobile app for monitoring and alerts on the go with push notifications."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Customizable alert thresholds via email, SMS, and push notifications for immediate action."
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure cloud storage for all monitoring data with unlimited history and export capabilities."
    }
  ];

  const useCases = [
    {
      icon: Home,
      title: "Residential Protection",
      description: "Protect home electronics, appliances, and smart home systems from power damage.",
      devices: ["TVs", "Computers", "Appliances", "HVAC Systems"]
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Safeguard business equipment, servers, and point-of-sale systems to prevent downtime.",
      devices: ["Servers", "POS Systems", "Network Equipment", "Security Systems"]
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Monitor critical machinery, production lines, and industrial equipment for power quality issues.",
      devices: ["CNC Machines", "Robotics", "Control Systems", "Manufacturing Equipment"]
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Ensure uninterrupted operation of servers and network infrastructure with precise monitoring.",
      devices: ["Server Racks", "UPS Systems", "Cooling Systems", "Network Gear"]
    }
  ];

  const technicalSpecs = [
    { spec: "Sampling Rate", value: "240 samples/second", detail: "For precise waveform capture" },
    { spec: "Response Time", value: "< 2 milliseconds", detail: "Instant spike detection" },
    { spec: "Voltage Range", value: "80V - 300V AC", detail: "Covers all standard voltages" },
    { spec: "Accuracy", value: "±0.5%", detail: "Laboratory-grade precision" },
    { spec: "Connectivity", value: "WiFi 6 / Ethernet", detail: "Dual connectivity options" },
    { spec: "Data Retention", value: "Unlimited cloud storage", detail: "Full historical data" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      
      {/* Hero Section */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? '#3b82f6' : '#94a3b8'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">How VoltWatch Works</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Complete Power Protection
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto mb-10 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            VoltWatch provides professional-grade voltage monitoring and protection in an easy-to-use package. 
            Here&apos;s exactly how our system protects your valuable equipment.
          </p>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Simple 3-Step Setup
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Get complete voltage protection in under 15 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monitoringSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' 
                      : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                  } shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className={`pt-8 p-8 rounded-2xl shadow-xl border ${
                    isDarkMode 
                      ? 'bg-gray-900 border-gray-800' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl mx-auto mb-6 ${
                      isDarkMode 
                        ? 'bg-blue-900/30' 
                        : 'bg-blue-100'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-4 text-center ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`mb-6 text-center ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            isDarkMode ? 'text-green-400' : 'text-green-600'
                          }`} />
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What We Protect You From
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Comprehensive protection against all common power quality issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500' 
                    : 'bg-white border-gray-200 hover:border-blue-400'
                }`}>
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30' 
                      : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                  }`}>
                    <Icon className={`h-7 w-7 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                  
                  <div className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
                    isDarkMode 
                      ? 'bg-blue-900/30 text-blue-300' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {feature.data}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard & Analytics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Powerful Dashboard & Analytics
              </h2>
              
              <p className={`text-lg mb-8 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Monitor your power quality from anywhere with our intuitive dashboard and mobile app. 
                Get real-time insights, historical data, and instant alerts.
              </p>
              
              <div className="space-y-6">
                {dashboardFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${
                        isDarkMode 
                          ? 'bg-blue-900/30' 
                          : 'bg-blue-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Dashboard Mockup */}
            <div className={`relative p-8 rounded-2xl shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className={`h-4 rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                } flex-1`}></div>
              </div>
              
              {/* Mock dashboard content */}
              <div className="space-y-4">
                <div className={`h-6 rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`h-32 rounded-lg ${
                    isDarkMode ? 'bg-blue-900/30 border border-blue-800/50' : 'bg-blue-50'
                  }`}></div>
                  <div className={`h-32 rounded-lg ${
                    isDarkMode ? 'bg-green-900/30 border border-green-800/50' : 'bg-green-50'
                  }`}></div>
                </div>
                <div className={`h-40 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}></div>
              </div>
              
              {/* Floating stats */}
              <div className={`absolute -bottom-4 -right-4 p-4 rounded-xl shadow-lg ${
                isDarkMode ? 'bg-blue-900' : 'bg-blue-600'
              } text-white`}>
                <div className="text-center">
                  <div className="text-2xl font-bold">229V</div>
                  <div className="text-xs opacity-80">Current Voltage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Who Uses VoltWatch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Protecting valuable equipment across homes, businesses, and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className={`p-6 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                    : 'bg-white hover:bg-gray-50'
                } transition-colors duration-300`}>
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30' 
                      : 'bg-gradient-to-br from-blue-100 to-indigo-100'
                  }`}>
                    <Icon className={`h-7 w-7 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {useCase.title}
                  </h3>
                  
                  <p className={`text-sm mb-6 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {useCase.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.devices.map((device, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Specifications
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Professional-grade technology for reliable protection
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {technicalSpecs.map((item, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <div className="text-sm opacity-70 mb-2">{item.spec}</div>
                <div className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.value}
                </div>
                <div className="text-sm opacity-70">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50' 
          : 'bg-gradient-to-r from-blue-50 to-indigo-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Ready to Protect</span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Start Protecting Your Equipment Today
          </h2>
          
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Join thousands of professionals who trust VoltWatch to protect their valuable equipment from power damage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/pricing">
              <button className={`px-8 py-4 font-semibold rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600'
                  : 'border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400'
              }`}>
                View Pricing
              </button>
            </Link>
          </div>
          
          <p className={`mt-8 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;