'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';

const HowItWorksSection = () => {
  const { isDarkMode } = useTheme();

  const steps = [
    {
      number: "01",
      title: "Sensor Installation & Connection",
      description: "VoltWatch uses high-precision voltage sensors that connect directly to your electrical panel or individual circuits. These industrial-grade sensors continuously sample the AC waveform at 10,000 times per second (10kHz), capturing every nuance of your power supply. The sensors measure RMS voltage, peak voltage, frequency, and waveform distortion—all critical indicators of power quality.",
      technicalDetails: [
        "Non-invasive clamp-on installation",
        "Supports 110V-240V systems",
        "±0.5% voltage accuracy",
        "Wireless or ethernet connectivity"
      ],
      
    },
    {
      number: "02",
      title: "Real-Time Signal Processing",
      description: "Our proprietary algorithms analyze the voltage data in real-time using advanced digital signal processing techniques. The system performs Fast Fourier Transform (FFT) analysis to detect harmonic distortion, identifies voltage sags/swells within 1/2 cycle (8-10ms), and tracks power factor variations. Machine learning models trained on millions of power quality events help distinguish between normal fluctuations and dangerous anomalies.",
      technicalDetails: [
        "Sub-cycle anomaly detection",
        "Harmonic analysis up to 50th order",
        "AI-powered pattern recognition",
        "Predictive failure detection"
      ],
      
    },
    {
      number: "03",
      title: "Intelligent Alert System",
      description: "When the system detects voltage outside safe operating ranges (typically ±10% of nominal), it triggers multi-channel alerts. The severity classification system ranks events from minor fluctuations to critical emergencies. For voltage spikes exceeding 130% of nominal, you receive instant push notifications, SMS, and email alerts. The system also logs near-miss events that didn't trigger alerts but indicate degrading power quality.",
      technicalDetails: [
        "Customizable threshold settings",
        "Multi-tier severity classification",
        "SMS, email, and app notifications",
        "Integration with smart home systems"
      ],
      
    },
    {
      number: "04",
      title: "Data Analytics & Reporting",
      description: "All voltage data is securely stored in the cloud with end-to-end encryption. The dashboard provides interactive visualizations including real-time waveforms, trending charts, and power quality scores. Historical analysis reveals patterns like daily voltage variations, weekend vs. weekday differences, and seasonal trends. Automated reports identify the root causes of power issues—whether from utility supply problems, internal equipment, or neighborhood load patterns.",
      technicalDetails: [
        "Unlimited cloud storage",
        "Exportable CSV/PDF reports",
        "Customizable dashboards",
        "Utility-grade power quality metrics"
      ],
      
    },
  ];

  const techSpecs = [
    { label: "Sampling Rate", value: "10,000 Hz" },
    { label: "Response Time", value: "< 10ms" },
    { label: "Voltage Range", value: "85-280V AC" },
    { label: "Accuracy", value: "±0.5%" },
    { label: "Data Storage", value: "Unlimited" },
    { label: "Update Frequency", value: "100ms" },
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
              Advanced Technology
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#020617]'}`}>
            How VoltWatch Works
          </h2>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
            VoltWatch combines industrial-grade hardware with cutting-edge AI to provide comprehensive power quality monitoring. Here&apos;s the complete technical process from installation to insights.
          </p>
        </div>

        {/* Technical Specs Overview */}
        <div className={`mb-16 p-8 rounded-2xl border ${
          isDarkMode
            ? 'bg-gray-900/50 border-gray-800'
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-[#020617]'}`}>
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent`}>
                  {spec.value}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-300 border ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-blue-500/50'
                  : 'bg-white border-gray-200 hover:shadow-xl hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">{step.number}</span>
                  </div>
                  
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#020617]'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
                    {step.description}
                  </p>

                  {/* Technical Details */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-6 rounded-xl ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  }`}>
                    {step.technicalDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className={`mt-16 p-8 rounded-2xl border ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700'
            : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#020617]'}`}>
              Why Voltage Monitoring Matters
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
              Most electrical damage happens silently. Voltage spikes from lightning, grid switching, or faulty equipment can destroy sensitive electronics in milliseconds. Prolonged undervoltage causes motors and compressors to overheat and fail prematurely. VoltWatch gives you the visibility and advance warning needed to prevent thousands of dollars in equipment damage.
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isDarkMode ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium">Concept in Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;