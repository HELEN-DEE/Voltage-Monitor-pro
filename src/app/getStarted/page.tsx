'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { 
  Zap, 
  CheckCircle, 
  Mail, 
  User, 
  Building2, 
  ArrowRight, 
  Shield, 
  Clock, 
  BarChart3, 
  Bell,
  Star,
  Users,
  Wifi,
  Eye,
  EyeOff,
  Lock,
  Gift,
  CreditCard,
  XCircle
} from 'lucide-react';

interface TrialStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  jobTitle: string;
  phoneNumber: string;
  deviceCount: string;
  primaryGoal: string;
  hearAboutUs: string;
  agreeToTerms: boolean;
  subscribeToUpdates: boolean;
}

const FreeTrialSetup: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    deviceCount: '1-5',
    primaryGoal: '',
    hearAboutUs: '',
    agreeToTerms: false,
    subscribeToUpdates: true
  });
  const trialFeatures = [
    {
      icon: Clock,
      title: '30-Day Free Trial',
      description: 'Full access to all premium features'
    },
    {
      icon: XCircle,
      title: 'No Credit Card Required',
      description: 'Start monitoring immediately'
    },
    {
      icon: Users,
      title: 'Up to 5 Devices',
      description: 'Monitor multiple electrical systems'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time monitoring and reporting'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Instant notifications for critical events'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and protection'
    }
  ];

  const deviceOptions = [
    '1-5 devices',
    '6-15 devices', 
    '16-50 devices',
    '50+ devices'
  ];

  const goalOptions = [
    'Prevent equipment damage',
    'Monitor power quality',
    'Reduce energy costs',
    'Ensure system reliability',
    'Compliance monitoring',
    'Research & development'
  ];

  const steps: TrialStep[] = [
    { id: 1, title: 'Account Setup', description: 'Create your free account', completed: false },
    { id: 2, title: 'Configuration', description: 'Tell us about your needs', completed: false },
    { id: 3, title: 'Ready to Monitor', description: 'Start your free trial', completed: false }
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = async () => {
    if (currentStep < 3) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentStep(currentStep + 1);
      setIsLoading(false);
    } else {
      // Final submission
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Trial account created:', formData);
      setIsLoading(false);
      // Redirect to dashboard or welcome page
    }
  };
  

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-12">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= step.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : isDarkMode
                  ? 'bg-gray-700 text-gray-400 border-2 border-gray-600'
                  : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
            }`}>
              {currentStep > step.id ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                step.id
              )}
            </div>
            <div className="text-center mt-2">
              <div className={`text-sm font-medium ${
                currentStep >= step.id
                  ? isDarkMode ? 'text-white' : 'text-gray-900'
                  : isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {step.title}
              </div>
              <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {step.description}
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-px mx-4 ${
              currentStep > step.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Create Your Free Account
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Get started with your 30-day free trial - no credit card required
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name *
          </label>
          <div className="relative">
            <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="John"
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name *
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Email Address *
        </label>
        <div className="relative">
          <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Password *
        </label>
        <div className="relative">
          <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Create a secure password"
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
        <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Minimum 8 characters with at least one uppercase, lowercase, and number
        </p>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Company Name
        </label>
        <div className="relative">
          <Building2 className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Your Company (Optional)"
          />
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
          className="w-5 h-5 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="agreeToTerms" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I agree to the{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500 underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</a>
        </label>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Tell Us About Your Needs
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Help us customize your experience for optimal monitoring
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Job Title
          </label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Facilities Manager"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          How many devices do you plan to monitor? *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {deviceOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                formData.deviceCount === option
                  ? isDarkMode
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-blue-500 bg-blue-50'
                  : isDarkMode
                    ? 'border-gray-600 hover:bg-gray-700'
                    : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="deviceCount"
                value={option}
                checked={formData.deviceCount === option}
                onChange={(e) => handleInputChange('deviceCount', e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Primary monitoring goal *
        </label>
        <div className="space-y-2">
          {goalOptions.map((goal) => (
            <label
              key={goal}
              className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                formData.primaryGoal === goal
                  ? isDarkMode
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-blue-500 bg-blue-50'
                  : isDarkMode
                    ? 'border-gray-600 hover:bg-gray-700'
                    : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="primaryGoal"
                value={goal}
                checked={formData.primaryGoal === goal}
                onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {goal}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="subscribeToUpdates"
          checked={formData.subscribeToUpdates}
          onChange={(e) => handleInputChange('subscribeToUpdates', e.target.checked)}
          className="w-5 h-5 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="subscribeToUpdates" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Send me product updates, monitoring tips, and industry insights
        </label>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-8">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
        <Gift className="w-10 h-10 text-white" />
      </div>

      <div>
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Youre All Set!
        </h2>
        <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Your free trial is ready to start. Heres what you get:
        </p>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 text-left`}>
        <div className="grid md:grid-cols-2 gap-6">
          {trialFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'} border ${isDarkMode ? 'border-green-800' : 'border-green-200'} rounded-lg p-6`}>
        <div className="flex items-center justify-center space-x-3 mb-3">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>
            Trial Starting Soon
          </h3>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
          Well send you setup instructions and login credentials within the next few minutes.
        </p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Start Your Free Trial
            </h1>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              FREE
            </div>
          </div>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Join thousands of professionals protecting their electrical systems with our advanced monitoring platform
          </p>
        </div>

        {renderStepIndicator()}

        {/* Main Content */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8`}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          {/* Action Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            {currentStep > 1 && currentStep < 3 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className={`px-6 py-3 border rounded-lg font-medium transition-colors ${
                  isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Previous
              </button>
            )}

            {currentStep < 3 ? (
              <button
                onClick={handleNextStep}
                disabled={isLoading || (currentStep === 1 && !formData.agreeToTerms)}
                className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Setting up your trial...
                  </>
                ) : (
                  <>
                    <Wifi className="w-6 h-6 mr-3" />
                    Start Monitoring Now
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <div className="flex items-center space-x-2">
              <Shield className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enterprise Security
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No Credit Card
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className={`w-5 h-5 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                4.9/5 Rating
              </span>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Cancel anytime during your trial. No commitments, no hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialSetup;