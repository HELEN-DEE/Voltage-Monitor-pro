'use client';

import React from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  note?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Building a safer way to understand your power.",
  description = "VoltWatch is in active development to help homes and businesses detect voltage issues early and protect their devices from unstable power.",
  primaryButtonText = "How VoltWatch will work",
  secondaryButtonText = "Why unstable power is a problem",
  primaryButtonLink = "/how-it-works",
  secondaryButtonLink = "/problem",
  note = "Early-stage product • No launch date yet • Built with real-world power issues in mind"
}) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 ${
        isDarkMode
          ? 'bg-gradient-to-b from-[#020617] to-[#020617]'
          : 'bg-gradient-to-b from-[#F8FAFC] to-white'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-[#020617]'
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-xl mb-10 ${
            isDarkMode ? 'text-gray-300' : 'text-[#475569]'
          }`}
        >
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonLink}>
            <button className="px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-xl transition-all hover:bg-blue-500 hover:scale-105 flex items-center gap-2">
              {primaryButtonText}
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>

          <Link href={secondaryButtonLink}>
            <button
              className={`px-8 py-4 rounded-xl font-semibold border transition-all ${
                isDarkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-[#475569] hover:bg-gray-100'
              }`}
            >
              {secondaryButtonText}
            </button>
          </Link>
        </div>

        <p
          className={`mt-8 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          {note}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
