'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { 
  Zap, 
  Menu, 
  X, 
  Home, 
  LayoutDashboard, 
  Settings, 
  User,
  UserPlus,
  Activity,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '@/components/contexts/ThemeContext'; // Import the hook

const Navbar = ({ isAuthenticated = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode, mounted } = useTheme(); // Use the theme context
  // const router = useRouter();

  if (!mounted) {
    return null; 
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/voltageMonitor', label: 'Voltage Monitor', icon: Activity },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      <nav className= {`${
        isDarkMode 
          ? 'bg-[#020617] border-[#1E293B]' 
          : 'bg-white border-[#E2E8F0]'
        } shadow-lg border-b sticky top-0 z-50 transition-colors duration-300`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className= "flex items-center justify-center"
                >
                <Zap className=" text-[#475569]" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold whitespace-nowrap font-serif ${
                  isDarkMode 
                    ? 'text-white ' 
                    : 'text-[#475569]'
                  }`}>
                  VoltWatch <span className="text-amber-300">grid</span>
                  
                </span>
                <span className='text-gray-400 text-[10px] '>
                  Real-time voltage intelligence for unstable power systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-1 mx-4">
              {navigationLinks.map((link) => {
                const IconComponent = link.icon;
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                      isDarkMode 
                        ? 'text-[#94A3B8] hover:text-white hover:bg-[#2563EB]' 
                        : 'text-[#475569] hover:text-white hover:bg-[#2563EB]'
                      }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-amber-400 hover:bg-[#15181b]' 
                    : 'text-[#475569] hover:text-amber-400 hover:bg-[#F7F8FA]'
                  }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Auth Buttons */}
              {!isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/auth"
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-[#475569]  hover:bg-gray-200'
                      }`}
                  >
                    
                    <span className="text-sm">Sign In</span>
                  </Link>
                  <Link
                    href="/register"
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow ${
                      isDarkMode 
                        ? 'bg-[#2563EB] text-white hover:bg-blue-500' 
                        : 'bg-[#2563EB] text-white hover:text-[#2563EB] hover:bg-indigo-50'
                      }`}
                  >
                    <UserPlus className="h-4 w-4" />
                    <span className="text-sm">Register</span>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/profile"
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-indigo-100 hover:text-white hover:bg-indigo-500'
                      }`}
                  >
                    <User className="h-4 w-4" />
                    <span className="text-sm">Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      console.log('Logout clicked');
                    }}
                    className="px-4 py-2 text-red-300 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-200 font-medium text-sm"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden ${
            isDarkMode
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-gray-200'
          } border-t`}
        >
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navigationLinks.map((link) => {
              const IconComponent = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            {/* Mobile Auth Section */}
            <div
              className={`pt-3 space-y-2 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              } border-t`}
            >
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/auth"
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <span>Sign In</span>
                  </Link>

                  <Link
                    href="/auth"
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                      isDarkMode
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    <UserPlus className="h-5 w-5" />
                    <span>Register</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/profile"
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 w-full ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <User className="h-5 w-5" />
                    <span>Profile</span>
                  </Link>

                  <button
                    onClick={() => {
                      closeMobileMenu();
                      console.log('Logout clicked');
                    }}
                    className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200 w-full text-left font-medium"
                  >
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;