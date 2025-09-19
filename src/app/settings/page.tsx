"use client";
import React from 'react';
import { 
  Settings,
  Bell,
  Shield,
  Zap,
  Database,
  
  Monitor,
  
  Download,
  Upload,
  
  Save,
  RotateCcw,
  ChevronRight,
  Moon,
  Sun,
  
  AlertTriangle,
  
  Activity,
  Gauge,
  TrendingUp,
  Eye,
  
  Key,
  
} from 'lucide-react';
import { useTheme } from '@/components/contexts/ThemeContext';

const SettingsPage = () => {
  const { isDarkMode } = useTheme();
  
  // Settings state
  const [settings, setSettings] = React.useState({
    // General Settings
    language: 'en',
    timezone: 'auto',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    
    // Theme Settings
    theme: isDarkMode ? 'dark' : 'light',
    accentColor: 'blue',
    compactMode: false,
    
    // Monitoring Settings
    refreshInterval: 5, // seconds
    dataRetention: 30, // days
    autoSync: true,
    realTimeUpdates: true,
    
    // Alert Settings
    enableNotifications: true,
    soundAlerts: true,
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    
    // Voltage Thresholds
    voltageMin: 220,
    voltageMax: 250,
    voltageCriticalMin: 200,
    voltageCriticalMax: 260,
    
    // Current Thresholds
    currentWarning: 15,
    currentCritical: 20,
    
    // Power Thresholds
    powerWarning: 3000, // watts
    powerCritical: 4000, // watts
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: 60, // minutes
    autoLockout: true,
    
    // Data & Privacy
    dataCollection: true,
    analytics: true,
    crashReports: true,
    
    // Export Settings
    exportFormat: 'csv',
    includeCharts: true,
    
    // Advanced Settings
    debugMode: false,
    advancedLogging: false,
    apiAccess: false
  });

  const [activeSection, setActiveSection] = React.useState('general');
  const [showResetModal, setShowResetModal] = React.useState(false);
  const [unsavedChanges, setUnsavedChanges] = React.useState(false);

  type SettingsKey = keyof typeof settings;
  type SettingsValue = typeof settings[SettingsKey];

  const updateSetting = (key: SettingsKey, value: SettingsValue) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setUnsavedChanges(true);
  };

  const handleSave = () => {
    // Simulate saving settings
    setTimeout(() => {
      setUnsavedChanges(false);
    }, 1000);
  };

  const handleReset = () => {
    setSettings({
      language: 'en',
      timezone: 'auto',
      dateFormat: 'MM/DD/YYYY',
      timeFormat: '12h',
      theme: 'light',
      accentColor: 'blue',
      compactMode: false,
      refreshInterval: 5,
      dataRetention: 30,
      autoSync: true,
      realTimeUpdates: true,
      enableNotifications: true,
      soundAlerts: true,
      emailAlerts: true,
      smsAlerts: false,
      pushNotifications: true,
      voltageMin: 220,
      voltageMax: 250,
      voltageCriticalMin: 200,
      voltageCriticalMax: 260,
      currentWarning: 15,
      currentCritical: 20,
      powerWarning: 3000,
      powerCritical: 4000,
      twoFactorAuth: false,
      sessionTimeout: 60,
      autoLockout: true,
      dataCollection: true,
      analytics: true,
      crashReports: true,
      exportFormat: 'csv',
      includeCharts: true,
      debugMode: false,
      advancedLogging: false,
      apiAccess: false
    });
    setUnsavedChanges(true);
    setShowResetModal(false);
  };

  const sections = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'appearance', name: 'Appearance', icon: Monitor },
    { id: 'monitoring', name: 'Monitoring', icon: Activity },
    { id: 'alerts', name: 'Alerts & Notifications', icon: Bell },
    { id: 'thresholds', name: 'Thresholds', icon: Gauge },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data & Privacy', icon: Database },
    { id: 'export', name: 'Export & Backup', icon: Download },
    { id: 'advanced', name: 'Advanced', icon: Settings }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' }
  ];

  const timezones = [
    { value: 'auto', name: 'Auto Detect' },
    { value: 'UTC', name: 'UTC' },
    { value: 'America/New_York', name: 'Eastern Time' },
    { value: 'America/Chicago', name: 'Central Time' },
    { value: 'America/Denver', name: 'Mountain Time' },
    { value: 'America/Los_Angeles', name: 'Pacific Time' },
    { value: 'Europe/London', name: 'London' },
    { value: 'Europe/Paris', name: 'Paris' },
    { value: 'Asia/Tokyo', name: 'Tokyo' }
  ];

  const accentColors = [
    { name: 'Blue', value: 'blue', color: '#3B82F6' },
    { name: 'Green', value: 'green', color: '#10B981' },
    { name: 'Purple', value: 'purple', color: '#8B5CF6' },
    { name: 'Orange', value: 'orange', color: '#F59E0B' },
    { name: 'Red', value: 'red', color: '#EF4444' },
    { name: 'Pink', value: 'pink', color: '#EC4899' }
  ];

  // Helper component for toggle switches
  const ToggleSwitch = ({ checked, onChange, label, description }: {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
    description?: string;
  }) => (
    <div className="flex items-center justify-between">
      <div>
        <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {label}
        </label>
        {description && (
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
            {description}
          </p>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );

  // Helper component for section headers
  const SectionHeader = ({ icon: Icon, title, className = '' }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    className?: string;
  }) => (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <Icon className="h-5 w-5" />
      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Settings} title="General Settings" />
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => updateSetting('language', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Timezone
                </label>
                <select
                  value={settings.timezone}
                  onChange={(e) => updateSetting('timezone', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  {timezones.map(tz => (
                    <option key={tz.value} value={tz.value}>{tz.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date Format
                  </label>
                  <select
                    value={settings.dateFormat}
                    onChange={(e) => updateSetting('dateFormat', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Time Format
                  </label>
                  <select
                    value={settings.timeFormat}
                    onChange={(e) => updateSetting('timeFormat', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="12h">12 Hour</option>
                    <option value="24h">24 Hour</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Monitor} title="Appearance Settings" />
            
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Theme
                </label>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      updateSetting('theme', 'light');
                    }}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
                      !isDarkMode
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Sun className="h-5 w-5" />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => {
                      updateSetting('theme', 'dark');
                    }}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-colors ${
                      isDarkMode
                        ? 'bg-blue-900 border-blue-700 text-blue-300'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Moon className="h-5 w-5" />
                    <span>Dark</span>
                  </button>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Accent Color
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {accentColors.map(color => (
                    <button
                      key={color.value}
                      onClick={() => updateSetting('accentColor', color.value)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                        settings.accentColor === color.value
                          ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
                          : isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="text-sm">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <ToggleSwitch
                checked={settings.compactMode}
                onChange={(checked) => updateSetting('compactMode', checked)}
                label="Compact Mode"
                description="Reduce spacing and padding for more content"
              />
            </div>
          </div>
        );

      case 'monitoring':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Activity} title="Monitoring Settings" />
            
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Refresh Interval (seconds)
                </label>
                <select
                  value={settings.refreshInterval}
                  onChange={(e) => updateSetting('refreshInterval', parseInt(e.target.value))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value={1}>1 second</option>
                  <option value={5}>5 seconds</option>
                  <option value={10}>10 seconds</option>
                  <option value={30}>30 seconds</option>
                  <option value={60}>1 minute</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Data Retention (days)
                </label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={settings.dataRetention}
                  onChange={(e) => updateSetting('dataRetention', parseInt(e.target.value))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  How long to keep historical data
                </p>
              </div>

              <div className="space-y-4">
                <ToggleSwitch
                  checked={settings.autoSync}
                  onChange={(checked) => updateSetting('autoSync', checked)}
                  label="Auto Sync"
                  description="Automatically sync data to cloud"
                />

                <ToggleSwitch
                  checked={settings.realTimeUpdates}
                  onChange={(checked) => updateSetting('realTimeUpdates', checked)}
                  label="Real-time Updates"
                  description="Update values in real-time"
                />
              </div>
            </div>
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Bell} title="Alerts & Notifications" />
            
            <div className="space-y-6">
              <ToggleSwitch
                checked={settings.enableNotifications}
                onChange={(checked) => updateSetting('enableNotifications', checked)}
                label="Enable Notifications"
                description="Master switch for all notifications"
              />

              {settings.enableNotifications && (
                <div className="space-y-4 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                  <ToggleSwitch
                    checked={settings.soundAlerts}
                    onChange={(checked) => updateSetting('soundAlerts', checked)}
                    label="Sound Alerts"
                  />

                  <ToggleSwitch
                    checked={settings.emailAlerts}
                    onChange={(checked) => updateSetting('emailAlerts', checked)}
                    label="Email Alerts"
                  />

                  <ToggleSwitch
                    checked={settings.smsAlerts}
                    onChange={(checked) => updateSetting('smsAlerts', checked)}
                    label="SMS Alerts"
                  />

                  <ToggleSwitch
                    checked={settings.pushNotifications}
                    onChange={(checked) => updateSetting('pushNotifications', checked)}
                    label="Push Notifications"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'thresholds':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Gauge} title="Alert Thresholds" />
            
            <div className="space-y-6">
              {/* Voltage Thresholds */}
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Voltage Thresholds
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Warning Min (V)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      value={settings.voltageMin}
                      onChange={(e) => updateSetting('voltageMin', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Warning Max (V)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      value={settings.voltageMax}
                      onChange={(e) => updateSetting('voltageMax', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Critical Min (V)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      value={settings.voltageCriticalMin}
                      onChange={(e) => updateSetting('voltageCriticalMin', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Critical Max (V)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      value={settings.voltageCriticalMax}
                      onChange={(e) => updateSetting('voltageCriticalMax', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>

              {/* Current Thresholds */}
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Current Thresholds
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Warning Threshold (A)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={settings.currentWarning}
                      onChange={(e) => updateSetting('currentWarning', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Critical Threshold (A)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={settings.currentCritical}
                      onChange={(e) => updateSetting('currentCritical', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>

              {/* Power Thresholds */}
              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Power Thresholds
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Warning Threshold (W)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={settings.powerWarning}
                      onChange={(e) => updateSetting('powerWarning', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Critical Threshold (W)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={settings.powerCritical}
                      onChange={(e) => updateSetting('powerCritical', parseInt(e.target.value))}
                      className={`w-full px-3 py-2 rounded-lg border ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Shield} title="Security Settings" />
            
            <div className="space-y-6">
              <ToggleSwitch
                checked={settings.twoFactorAuth}
                onChange={(checked) => updateSetting('twoFactorAuth', checked)}
                label="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
              />

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Session Timeout (minutes)
                </label>
                <select
                  value={settings.sessionTimeout}
                  onChange={(e) => updateSetting('sessionTimeout', parseInt(e.target.value))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hours</option>
                  <option value={240}>4 hours</option>
                  <option value={-1}>Never</option>
                </select>
              </div>

              <ToggleSwitch
                checked={settings.autoLockout}
                onChange={(checked) => updateSetting('autoLockout', checked)}
                label="Auto Lockout"
                description="Lock account after failed login attempts"
              />

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Key className="h-5 w-5 text-red-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}>
                    Password & Access
                  </h4>
                </div>
                <div className="space-y-3">
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Change Password
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    View Active Sessions
                  </button>
                  <button className="w-full px-4 py-2 text-left rounded-lg border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/70 transition-colors">
                    Revoke All Sessions
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Database} title="Data & Privacy" />
            
            <div className="space-y-6">
              <ToggleSwitch
                checked={settings.dataCollection}
                onChange={(checked) => updateSetting('dataCollection', checked)}
                label="Data Collection"
                description="Allow collection of usage data for improvements"
              />

              <ToggleSwitch
                checked={settings.analytics}
                onChange={(checked) => updateSetting('analytics', checked)}
                label="Analytics"
                description="Help us understand how you use the app"
              />

              <ToggleSwitch
                checked={settings.crashReports}
                onChange={(checked) => updateSetting('crashReports', checked)}
                label="Crash Reports"
                description="Automatically send crash reports to help fix bugs"
              />

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Database className="h-5 w-5 text-blue-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Data Management
                  </h4>
                </div>
                <div className="space-y-3">
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Download My Data
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    View Privacy Policy
                  </button>
                  <button className="w-full px-4 py-2 text-left rounded-lg border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/70 transition-colors">
                    Delete All Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'export':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Download} title="Export & Backup" />
            
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Export Format
                </label>
                <select
                  value={settings.exportFormat}
                  onChange={(e) => updateSetting('exportFormat', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="csv">CSV</option>
                  <option value="xlsx">Excel (XLSX)</option>
                  <option value="json">JSON</option>
                  <option value="pdf">PDF Report</option>
                </select>
              </div>

              <ToggleSwitch
                checked={settings.includeCharts}
                onChange={(checked) => updateSetting('includeCharts', checked)}
                label="Include Charts"
                description="Include visual charts in exported reports"
              />

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Download className="h-5 w-5 text-green-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                    Quick Export
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Export Today
                  </button>
                  <button className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Export This Week
                  </button>
                  <button className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Export This Month
                  </button>
                  <button className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Export All Data
                  </button>
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-orange-900/20 border-orange-800' : 'bg-orange-50 border-orange-200'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <Upload className="h-5 w-5 text-orange-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-700'}`}>
                    Backup & Restore
                  </h4>
                </div>
                <div className="space-y-3">
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Create Backup
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Restore from Backup
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Schedule Auto Backup
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className="space-y-6">
            <SectionHeader icon={Settings} title="Advanced Settings" />
            
            <div className="space-y-6">
              <ToggleSwitch
                checked={settings.debugMode}
                onChange={(checked) => updateSetting('debugMode', checked)}
                label="Debug Mode"
                description="Enable debug information and logging"
              />

              <ToggleSwitch
                checked={settings.advancedLogging}
                onChange={(checked) => updateSetting('advancedLogging', checked)}
                label="Advanced Logging"
                description="Enable detailed system logging"
              />

              <ToggleSwitch
                checked={settings.apiAccess}
                onChange={(checked) => updateSetting('apiAccess', checked)}
                label="API Access"
                description="Enable API access for third-party integrations"
              />

              {settings.apiAccess && (
                <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-purple-900/20 border-purple-800' : 'bg-purple-50 border-purple-200'}`}>
                  <div className="flex items-center space-x-2 mb-3">
                    <Key className="h-5 w-5 text-purple-500" />
                    <h4 className={`text-md font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                      API Configuration
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        API Key
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="password"
                          value="sk-1234567890abcdef"
                          readOnly
                          className={`flex-1 px-3 py-2 rounded-lg border ${
                            isDarkMode 
                              ? 'bg-gray-700 border-gray-600 text-white' 
                              : 'bg-gray-100 border-gray-300 text-gray-900'
                          } cursor-not-allowed`}
                        />
                        <button className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className={`px-4 py-2 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                          : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                      }`}>
                        Generate New Key
                      </button>
                      <button className={`px-4 py-2 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                          : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                      }`}>
                        View Documentation
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'}`}>
                <div className="flex items-center space-x-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <h4 className={`text-md font-medium ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    System Maintenance
                  </h4>
                </div>
                <div className="space-y-3">
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Clear Cache
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Rebuild Database
                  </button>
                  <button className={`w-full px-4 py-2 text-left rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}>
                    System Diagnostics
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Settings className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Select a settings category
            </h3>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
              Choose a category from the sidebar to view and edit settings
            </p>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Settings
          </h1>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
            Customize your Voltage Monitor Pro experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className={`lg:w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 h-fit`}>
            <nav className="space-y-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white shadow-md'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{section.name}</span>
                    <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
              {renderSection()}
            </div>

            {/* Action Buttons */}
            <div className={`mt-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {unsavedChanges && (
                    <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="text-sm font-medium">You have unsaved changes</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowResetModal(true)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <RotateCcw className="h-4 w-4 mr-2 inline" />
                    Reset All
                  </button>
                  
                  <button
                    onClick={handleSave}
                    disabled={!unsavedChanges}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      unsavedChanges
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                  >
                    <Save className="h-4 w-4 mr-2 inline" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-md`}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Reset All Settings
              </h3>
            </div>
            
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Are you sure you want to reset all settings to their default values? This action cannot be undone.
            </p>
            
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowResetModal(false)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;