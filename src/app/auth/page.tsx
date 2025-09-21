'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { 
  Zap, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Github,
  Shield,
  BarChart3,
  Bell,
  Clock
} from 'lucide-react';

// Define form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
  agreeToTerms: boolean;
}

// Define benefit item interface
interface BenefitItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const AuthFlow: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    agreeToTerms: false
  });

  const benefits: BenefitItem[] = [
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Track voltage fluctuations across all your devices instantly'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified immediately when critical thresholds are exceeded'
    },
    {
      icon: Shield,
      title: 'Device Protection',
      description: 'Prevent costly damage with predictive monitoring and alerts'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Expert technical support whenever you need assistance'
    }
  ];

  // Properly typed input change handler
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Handle authentication logic here
    console.log(isSignUp ? 'Sign up' : 'Sign in', formData);
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`${isSignUp ? 'Sign up' : 'Sign in'} with ${provider}`);
  };

  // Google icon component
  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="min-h-screen flex">
        {/* Left Side - Benefits */}
        <div className={`"hidden lg:flex lg:w-1/2 relative overflow-hidden" 
        ${isDarkMode 
            ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
        }`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Voltage Monitor Pro
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of professionals protecting their electrical systems with advanced monitoring technology.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="text-sm text-blue-100 mb-3">Trusted by industry leaders</p>
              <div className="flex items-center space-x-6 opacity-70">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-2xl font-bold">24/7</div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-blue-200">
                <span>Companies</span>
                <span>Uptime</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Voltage Monitor Pro
              </h2>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </h2>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {isSignUp 
                  ? 'Start monitoring your electrical systems today' 
                  : 'Welcome back! Please sign in to continue'
                }
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialAuth('Google')}
                className={`w-full flex items-center justify-center px-4 py-3 border rounded-lg font-medium transition-colors ${
                  isDarkMode
                    ? 'border-gray-600 bg-gray-700 text-white hover:bg-gray-600'
                    : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <GoogleIcon />
                {isSignUp ? 'Sign up' : 'Sign in'} with Google
              </button>
              <button
                onClick={() => handleSocialAuth('GitHub')}
                className={`w-full flex items-center justify-center px-4 py-3 border rounded-lg font-medium transition-colors ${
                  isDarkMode
                    ? 'border-gray-600 bg-gray-700 text-white hover:bg-gray-600'
                    : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Github className="w-5 h-5 mr-3" />
                {isSignUp ? 'Sign up' : 'Sign in'} with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-500'}`}>
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Sign Up Fields */}
              {isSignUp && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                        placeholder="Your Company (Optional)"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                      isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up only) */}
              {isSignUp && (
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                        isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Terms Agreement (Sign Up only) */}
              {isSignUp && (
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                  </p>
                </div>
              )}

              {/* Forgot Password (Sign In only) */}
              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <ArrowRight className="w-5 h-5 mr-2" />
                )}
                {isLoading 
                  ? 'Processing...' 
                  : isSignUp 
                    ? 'Create Account' 
                    : 'Sign In'
                }
              </button>

              {/* Switch Auth Mode */}
              <div className="text-center">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    {isSignUp ? 'Sign in' : 'Sign up'}
                  </button>
                </p>
              </div>

              {/* Security Notice */}
              <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex items-start space-x-3">
                  <Shield className={`w-5 h-5 mt-0.5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <div>
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Your data is secure
                    </h4>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      We use enterprise-grade encryption to protect your information and monitoring data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFlow;