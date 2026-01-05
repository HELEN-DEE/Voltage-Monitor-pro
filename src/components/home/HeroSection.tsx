'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Waveform from '../Waveform';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  return (
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
            className={`text-lg md:text-xl mb-12 max-w-2xl leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-[#475569]'
            }`}
          >
            VoltWatch monitors voltage in real-time, detects dangerous spikes instantly, 
            and gives you complete visibility into your power quality.
          </p>

          {/* Waveform with container */}
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

          {/* CTA Buttons */}
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

        {/* RIGHT — Image Container */}
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
  );
};

export default HeroSection;