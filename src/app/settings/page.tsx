'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/contexts/ThemeContext';
import { 
    User, 
    Bell, 
    Shield, 
    Palette, 
    Zap, 
    Save, 
    Eye, 
    EyeOff,
    Mail,
    Phone,
    AlertTriangle,
    Volume2,
        Moon,
        Sun,
    Smartphone,
    Monitor,
    //   Settings as SettingsIcon,
    ChevronRight
} from 'lucide-react';

    interface SettingsSection {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    }

const Settings: React.FC = () => {
const { isDarkMode } = useTheme();
const [activeSection, setActiveSection] = useState<string>('account');
const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({
        // Account settings
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        
        // Notification settings
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        soundAlerts: true,
        criticalAlertsOnly: false,
        
        // Monitoring preferences
        voltageThreshold: 12.0,
        alertDelay: 5,
        dataRetention: 30,
        refreshRate: 1,
        units: 'V',
        
        // Display preferences
        theme: 'auto',
        compactView: false,
        showGrid: true,
        animations: true
    });

    const settingsSections: SettingsSection[] = [
        {
        id: 'account',
        title: 'Account Management',
        icon: <User className="w-5 h-5" />,
        description: 'Manage your personal information and security'
        },
        {
        id: 'notifications',
        title: 'Notifications',
        icon: <Bell className="w-5 h-5" />,
        description: 'Configure alerts and notification preferences'
        },
        {
        id: 'monitoring',
        title: 'Monitoring Preferences',
        icon: <Zap className="w-5 h-5" />,
        description: 'Set voltage thresholds and monitoring settings'
        },
        {
        id: 'display',
        title: 'Display & Interface',
        icon: <Palette className="w-5 h-5" />,
        description: 'Customize the appearance and layout'
        },
        {
        id: 'security',
        title: 'Security',
        icon: <Shield className="w-5 h-5" />,
        description: 'Manage security settings and permissions'
        }
    ];

    const handleInputChange = (
        field: keyof typeof formData,
        value: string | number | boolean
    ) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        // Implement save functionality
        console.log('Settings saved:', formData);
        // Show success message or handle API call
    };

    const renderAccountSection = () => (
        <div className="space-y-6">
        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                First Name
                </label>
                <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                />
            </div>
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Last Name
                </label>
                <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                />
            </div>
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Information
            </h3>
            <div className="space-y-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
                </label>
                <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                />
            </div>
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
                </label>
                <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                />
            </div>
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Change Password
            </h3>
            <div className="space-y-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Password
                </label>
                <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter current password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    New Password
                </label>
                <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter new password"
                />
                </div>
                <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Confirm Password
                </label>
                <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Confirm new password"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    );

    const renderNotificationsSection = () => (
        <div className="space-y-6">
        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Alert Preferences
            </h3>
            <div className="space-y-4">
            {[
                { key: 'emailNotifications', label: 'Email Notifications', icon: Mail },
                { key: 'smsNotifications', label: 'SMS Notifications', icon: Smartphone },
                { key: 'pushNotifications', label: 'Push Notifications', icon: Bell },
                { key: 'soundAlerts', label: 'Sound Alerts', icon: Volume2 }
            ].map((item) => (
                <div key={item.key} className={`flex items-center justify-between p-4 rounded-lg border ${
                isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                }`}>
                <div className="flex items-center space-x-3">
                    <item.icon className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                    </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                    type="checkbox"
                    checked={formData[item.key as keyof typeof formData] as boolean}
                    onChange={(e) => handleInputChange(item.key as keyof typeof formData, e.target.checked)}
                    className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                </div>
            ))}
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Alert Settings
            </h3>
            <div className="space-y-4">
            <div className={`p-4 rounded-lg border ${
                isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
            }`}>
                <label className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    checked={formData.criticalAlertsOnly}
                    onChange={(e) => handleInputChange('criticalAlertsOnly', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Critical Alerts Only
                    </span>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Only receive notifications for critical voltage events
                    </p>
                </div>
                </label>
            </div>
            </div>
        </div>
        </div>
    );

    const renderMonitoringSection = () => (
        <div className="space-y-6">
        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Voltage Thresholds
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Critical Voltage Threshold
                </label>
                <div className="flex">
                <input
                    type="number"
                    step="0.1"
                    value={formData.voltageThreshold}
                    onChange={(e) => handleInputChange('voltageThreshold', parseFloat(e.target.value))}
                    className={`flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                />
                <span className={`px-3 py-2 border-l-0 border rounded-r-lg ${
                    isDarkMode 
                    ? 'bg-gray-600 border-gray-600 text-gray-300' 
                    : 'bg-gray-100 border-gray-300 text-gray-700'
                }`}>
                    V
                </span>
                </div>
            </div>
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Alert Delay
                </label>
                <div className="flex">
                <input
                    type="number"
                    min="1"
                    value={formData.alertDelay}
                    onChange={(e) => handleInputChange('alertDelay', parseInt(e.target.value))}
                    className={`flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                />
                <span className={`px-3 py-2 border-l-0 border rounded-r-lg ${
                    isDarkMode 
                    ? 'bg-gray-600 border-gray-600 text-gray-300' 
                    : 'bg-gray-100 border-gray-300 text-gray-700'
                }`}>
                    sec
                </span>
                </div>
            </div>
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Data Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Data Retention Period
                </label>
                <select
                value={formData.dataRetention}
                onChange={(e) => handleInputChange('dataRetention', parseInt(e.target.value))}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                >
                <option value={7}>7 days</option>
                <option value={30}>30 days</option>
                <option value={90}>90 days</option>
                <option value={365}>1 year</option>
                </select>
            </div>
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Refresh Rate
                </label>
                <select
                value={formData.refreshRate}
                onChange={(e) => handleInputChange('refreshRate', parseInt(e.target.value))}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                >
                <option value={1}>1 second</option>
                <option value={5}>5 seconds</option>
                <option value={10}>10 seconds</option>
                <option value={30}>30 seconds</option>
                </select>
            </div>
            </div>
        </div>
        </div>
    );

    const renderDisplaySection = () => (
        <div className="space-y-6">
        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Theme Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { value: 'light', label: 'Light Mode', icon: Sun },
                { value: 'dark', label: 'Dark Mode', icon: Moon },
                { value: 'auto', label: 'System Default', icon: Zap }
            ].map((theme) => (
                <label
                key={theme.value}
                className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    formData.theme === theme.value
                    ? isDarkMode
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-blue-500 bg-blue-50'
                    : isDarkMode
                        ? 'border-gray-600 bg-gray-700/50 hover:bg-gray-700'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
                >
                <input
                    type="radio"
                    name="theme"
                    value={theme.value}
                    checked={formData.theme === theme.value}
                    onChange={(e) => handleInputChange('theme', e.target.value)}
                    className="sr-only"
                />
                <span className="text-xl">
                    {typeof theme.icon === 'string'
                    ? <span>{theme.icon}</span>
                    : React.createElement(theme.icon, { className: `w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}` })}
                </span>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {theme.label}
                </span>
                </label>
            ))}
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Interface Options
            </h3>
            <div className="space-y-4">
            {[
                { key: 'compactView', label: 'Compact View', description: 'Show more information in less space' },
                { key: 'showGrid', label: 'Show Grid Lines', description: 'Display grid lines in charts and graphs' },
                { key: 'animations', label: 'Enable Animations', description: 'Smooth transitions and visual effects' }
            ].map((option) => (
                <div key={option.key} className={`flex items-start justify-between p-4 rounded-lg border ${
                isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                }`}>
                <div className="flex-1">
                    <span className={`font-medium block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {option.label}
                    </span>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {option.description}
                    </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                    type="checkbox"
                    checked={formData[option.key as keyof typeof formData] as boolean}
                    onChange={(e) => handleInputChange(option.key as keyof typeof formData, e.target.checked)}
                    className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                </div>
            ))}
            </div>
        </div>
        </div>
    );

    const renderSecuritySection = () => (
        <div className="space-y-6">
        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Security Overview
            </h3>
            <div className={`p-6 rounded-lg border ${
            isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
            }`}>
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Account Security Status
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your account is secure and protected
                </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Last login:</span>
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Today, 10:30 AM</span>
                </div>
                <div className="flex justify-between">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Password changed:</span>
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>30 days ago</span>
                </div>
            </div>
            </div>
        </div>

        <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Security Actions
            </h3>
            <div className="space-y-3">
            <button className={`w-full flex items-center justify-between p-4 rounded-lg border text-left transition-colors ${
                isDarkMode 
                ? 'border-gray-600 bg-gray-700/50 hover:bg-gray-700 text-white' 
                : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-900'
            }`}>
                <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <div>
                    <span className="font-medium">Enable Two-Factor Authentication</span>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Add an extra layer of security to your account
                    </p>
                </div>
                </div>
                <ChevronRight className="w-5 h-5" />
            </button>

            <button className={`w-full flex items-center justify-between p-4 rounded-lg border text-left transition-colors ${
                isDarkMode 
                ? 'border-gray-600 bg-gray-700/50 hover:bg-gray-700 text-white' 
                : 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-900'
            }`}>
                <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-blue-500" />
                <div>
                    <span className="font-medium">Active Sessions</span>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage devices with access to your account
                    </p>
                </div>
                </div>
                <ChevronRight className="w-5 h-5" />
            </button>
            </div>
        </div>
        </div>
    );

    const renderActiveSection = () => {
        switch (activeSection) {
        case 'account':
            return renderAccountSection();
        case 'notifications':
            return renderNotificationsSection();
        case 'monitoring':
            return renderMonitoringSection();
        case 'display':
            return renderDisplaySection();
        case 'security':
            return renderSecuritySection();
        default:
            return renderAccountSection();
        }
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
            </h1>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your account, preferences, and monitoring configuration
            </p>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
                <nav className="space-y-1">
                {settingsSections.map((section) => (
                    <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-start space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeSection === section.id
                        ? isDarkMode
                            ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
                        : isDarkMode
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    >
                    <div className="flex-shrink-0">
                        {section.icon}
                    </div>
                    <div className="flex-1">
                        <div className="font-medium">{section.title}</div>
                        <div className={`text-sm mt-1 ${
                        activeSection === section.id
                            ? 'text-blue-100'
                            : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                        }`}>
                        {section.description}
                        </div>
                    </div>
                    </button>
                ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="mt-6 lg:mt-0 lg:col-span-9">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg`}>
                <div className="px-6 py-6">
                    {renderActiveSection()}
                </div>

                {/* Save Button */}
                <div className={`px-6 py-4 border-t ${
                    isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
                } rounded-b-lg`}>
                    <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isDarkMode
                            ? 'text-gray-300 bg-gray-700 hover:bg-gray-600'
                            : 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-300'
                        }`}
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white  rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isDarkMode ? 'bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-purple-700' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:bg-blue-700'}`}
                    >
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Settings;