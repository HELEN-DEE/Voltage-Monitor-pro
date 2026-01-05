'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { useTheme } from '@/components/contexts/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
        <footer
        className={`border-t transition-colors duration-300 ${
            isDarkMode
            ? 'bg-[#020617] border-[#1E293B]'
            : 'bg-white border-[#E2E8F0]'
        }`}
        >
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-[#2563EB]" />
                <span
                    className={`font-semibold text-lg ${
                    isDarkMode ? 'text-white' : 'text-[#020617]'
                    }`}
                >
                    VoltWatch
                </span>
                </div>

                <p
                className={`text-sm leading-relaxed max-w-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-[#475569]'
                }`}
                >
                VoltWatch is an early-stage project focused on helping people
                understand voltage instability and protect devices from
                unreliable power systems.
                </p>
            </div>

            {/* Navigation */}
            <div>
                <h4
                className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-[#020617]'
                }`}
                >
                Explore
                </h4>

                <ul className="space-y-3 text-sm">
                <li>
                    <Link
                    href="/how-it-works"
                    className={`hover:underline ${
                        isDarkMode ? 'text-gray-400' : 'text-[#475569]'
                    }`}
                    >
                    How it works
                    </Link>
                </li>
                <li>
                    <Link
                    href="/problem"
                    className={`hover:underline ${
                        isDarkMode ? 'text-gray-400' : 'text-[#475569]'
                    }`}
                    >
                    Why unstable power matters
                    </Link>
                </li>
                <li>
                    <Link
                    href="/voltageMonitor"
                    className={`hover:underline ${
                        isDarkMode ? 'text-gray-400' : 'text-[#475569]'
                    }`}
                    >
                    Voltage monitoring
                    </Link>
                </li>
                </ul>
            </div>

            {/* Status / Meta */}
            <div>
                <h4
                className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-[#020617]'
                }`}
                >
                Project status
                </h4>

                <p
                className={`text-sm mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-[#475569]'
                }`}
                >
                Currently in development. No public demo or launch date yet.
                </p>

                <p
                className={`text-xs ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}
                >
                © 2025 VoltWatch. Built thoughtfully.
                </p>
            </div>
            </div>
        </div>
        </footer>
  );
};

export default Footer;
