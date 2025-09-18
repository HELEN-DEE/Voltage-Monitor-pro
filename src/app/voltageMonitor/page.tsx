"use client";
import React, { useState, useEffect } from 'react';
import { 
  X,
  Zap,
  Power,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Activity,
  Tv,
  Refrigerator,
  Lightbulb,
  Coffee,
  WashingMachine,
  AirVent,
  Gauge,
  TrendingUp,
  Battery,
  Wifi,
  WifiOff,
  Menu,
  Eye,
  ChevronLeft
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



interface Appliance {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  voltage: number;
  current: number;
  power: number;
  status: 'normal' | 'warning' | 'critical' | 'offline';
  isOn: boolean;
  temperature: number;
  lastUpdate: string;
  efficiency: number;
  powerConsumption24h: number;
  connectionStatus: 'connected' | 'disconnected';
  location: string;
}

const VoltageMonitor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState<string | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  
  const [appliances, setAppliances] = useState<Appliance[]>([
    {
      id: '1',
      name: 'Smart TV',
      icon: Tv,
      voltage: 242.5,
      current: 1.2,
      power: 291,
      status: 'normal',
      isOn: true,
      temperature: 38,
      lastUpdate: '2 min ago',
      efficiency: 94,
      powerConsumption24h: 6.98,
      connectionStatus: 'connected',
      location: 'Living Room'
    },
    {
      id: '2',
      name: 'Refrigerator',
      icon: Refrigerator,
      voltage: 238.8,
      current: 2.8,
      power: 668,
      status: 'warning',
      isOn: true,
      temperature: 45,
      lastUpdate: '1 min ago',
      efficiency: 87,
      powerConsumption24h: 16.03,
      connectionStatus: 'connected',
      location: 'Kitchen'
    },
    {
      id: '3',
      name: 'Air Conditioner',
      icon: AirVent,
      voltage: 245.2,
      current: 8.5,
      power: 2084,
      status: 'normal',
      isOn: true,
      temperature: 52,
      lastUpdate: '30 sec ago',
      efficiency: 91,
      powerConsumption24h: 50.02,
      connectionStatus: 'connected',
      location: 'Master Bedroom'
    },
    {
      id: '4',
      name: 'Washing Machine',
      icon: WashingMachine,
      voltage: 220.1,
      current: 5.2,
      power: 1144,
      status: 'critical',
      isOn: false,
      temperature: 28,
      lastUpdate: '5 min ago',
      efficiency: 76,
      powerConsumption24h: 3.44,
      connectionStatus: 'disconnected',
      location: 'Laundry Room'
    },
    {
      id: '5',
      name: 'Coffee Maker',
      icon: Coffee,
      voltage: 241.2,
      current: 3.1,
      power: 748,
      status: 'normal',
      isOn: false,
      temperature: 22,
      lastUpdate: '1 min ago',
      efficiency: 89,
      powerConsumption24h: 2.24,
      connectionStatus: 'connected',
      location: 'Kitchen'
    },
    {
      id: '6',
      name: 'Smart Lights',
      icon: Lightbulb,
      voltage: 243.1,
      current: 0.8,
      power: 194,
      status: 'normal',
      isOn: true,
      temperature: 31,
      lastUpdate: '45 sec ago',
      efficiency: 96,
      powerConsumption24h: 4.66,
      connectionStatus: 'connected',
      location: 'Multiple Rooms'
    }
  ]);

  // Real-time voltage data for the main chart
  const [voltageHistory] = useState([
    { time: '12:00', voltage: 240.2, frequency: 50.1 },
    { time: '12:05', voltage: 241.5, frequency: 50.0 },
    { time: '12:10', voltage: 239.8, frequency: 49.9 },
    { time: '12:15', voltage: 242.1, frequency: 50.1 },
    { time: '12:20', voltage: 240.7, frequency: 50.0 },
    { time: '12:25', voltage: 241.3, frequency: 50.0 },
    { time: '12:30', voltage: 238.9, frequency: 49.8 },
    { time: '12:35', voltage: 243.2, frequency: 50.2 },
    { time: '12:40', voltage: 241.8, frequency: 50.1 },
    { time: '12:45', voltage: 240.4, frequency: 50.0 }
  ]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Auto-refresh data every 30 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      setAppliances(prev => prev.map(appliance => ({
        ...appliance,
        voltage: appliance.voltage + (Math.random() - 0.5) * 2,
        current: Math.max(0, appliance.current + (Math.random() - 0.5) * 0.2),
        power: Math.max(0, appliance.power + (Math.random() - 0.5) * 50),
        temperature: appliance.isOn ? 
          appliance.temperature + (Math.random() - 0.5) * 3 : 
          Math.max(20, appliance.temperature - 1),
        lastUpdate: 'Just now'
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const toggleAppliance = (id: string) => {
    setAppliances(prev => prev.map(appliance => 
      appliance.id === id 
        ? { 
            ...appliance, 
            isOn: !appliance.isOn,
            power: !appliance.isOn ? appliance.power : 0,
            current: !appliance.isOn ? appliance.current : 0
          }
        : appliance
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      case 'offline': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    // Consistent colors regardless of theme
    switch (status) {
      case 'normal': return 'bg-green-100 border-green-200';
      case 'warning': return 'bg-yellow-100 border-yellow-200';
      case 'critical': return 'bg-red-100 border-red-200';
      case 'offline': return 'bg-gray-100 border-gray-200';
      default: return 'bg-gray-100 border-gray-200';
    }
  };

  const getIconBg = () => {
    // Consistent icon background regardless of theme
    return 'bg-gray-100';
  };

  const getTemperatureColor = (temp: number) => {
    if (temp < 30) return 'text-blue-500';
    if (temp < 50) return 'text-green-500';
    if (temp < 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const totalActivePower = appliances.filter(a => a.isOn).reduce((sum, appliance) => sum + appliance.power, 0);
  const avgVoltage = appliances.reduce((sum, appliance) => sum + appliance.voltage, 0) / appliances.length;
  const totalCurrent = appliances.filter(a => a.isOn).reduce((sum, appliance) => sum + appliance.current, 0);
  const onlineDevices = appliances.filter(a => a.connectionStatus === 'connected').length;

  const selectedApplianceData = selectedAppliance ? 
    appliances.find(a => a.id === selectedAppliance) : null;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className={`${
          isSidebarOpen ? 'translate-x-0 w-80' : '-translate-x-full lg:translate-x-0 lg:w-20'
        } fixed lg:relative inset-y-0 left-0 z-50 ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r transition-all duration-300 h-screen overflow-y-auto`}>
          
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700 lg:border-b-0">
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${!isSidebarOpen && 'lg:hidden'}`}>
              Voltage Monitor
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200 ${
                  autoRefresh 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gray-500 hover:bg-gray-600 text-white'
                } ${!isSidebarOpen && 'lg:hidden'}`}
                title={autoRefresh ? "Auto-refresh ON" : "Auto-refresh OFF"}
              >
                <Activity className="h-4 w-4" />
              </button>
              {/* Toggle sidebar button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hidden lg:flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200"
              >
                <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
              </button>
              {/* Close button for mobile */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden flex items-center justify-center w-8 h-8 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className={`p-4 lg:p-6 lg:pt-0 ${!isSidebarOpen && 'lg:hidden'}`}>
            {/* Control Panel */}
            <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-6`}>
              <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                System Overview
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center">
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {avgVoltage.toFixed(1)}V
                  </div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Avg Voltage</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {totalCurrent.toFixed(1)}A
                  </div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Total Current</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    {(totalActivePower/1000).toFixed(2)}kW
                  </div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Active Power</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {onlineDevices}/{appliances.length}
                  </div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Online</div>
                </div>
              </div>
            </div>

            {/* Appliances List */}
            <div className="space-y-3">
              {appliances.map((appliance) => {
                const IconComponent = appliance.icon;
                return (
                  <div
                    key={appliance.id}
                    className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                      getStatusBg(appliance.status)
                    } ${selectedAppliance === appliance.id ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className={`relative p-2 rounded-lg ${getIconBg()}`}>
                          <IconComponent className={`h-5 w-5 ${getStatusColor(appliance.status)}`} />
                          {appliance.connectionStatus === 'connected' ? (
                            <Wifi className="absolute -top-1 -right-1 h-3 w-3 text-green-500" />
                          ) : (
                            <WifiOff className="absolute -top-1 -right-1 h-3 w-3 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h3 className={`font-medium text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {appliance.name}
                            </h3>
                            <div className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                              appliance.isOn 
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              <Power className="h-3 w-3" />
                              <span>{appliance.isOn ? 'ON' : 'OFF'}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-xs mt-1">
                            <span className={`truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {appliance.location}
                            </span>
                            <div className="flex items-center space-x-1 flex-shrink-0">
                              <Thermometer className={`h-3 w-3 ${getTemperatureColor(appliance.temperature)}`} />
                              <span className={getTemperatureColor(appliance.temperature)}>
                                {appliance.temperature}°C
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => toggleAppliance(appliance.id)}
                          disabled={appliance.connectionStatus === 'disconnected'}
                          className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                            appliance.isOn
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          <Power className="h-3 w-3" />
                          <span>{appliance.isOn ? 'Turn Off' : 'Turn On'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setSelectedAppliance(appliance.id);
                            setShowDetailModal(true);
                          }}
                          className="p-1 rounded hover:bg-blue-100 transition-colors"
                        >
                          <Eye className="h-4 w-4 text-blue-500" />
                        </button>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Voltage</span>
                        <div className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.voltage.toFixed(1)}V
                        </div>
                      </div>
                      <div>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Current</span>
                        <div className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.current.toFixed(1)}A
                        </div>
                      </div>
                      <div>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Power</span>
                        <div className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.power}W
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Collapsed sidebar view */}
          <div className={`hidden lg:block ${isSidebarOpen && 'lg:hidden'} p-4`}>
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200 ${
                  autoRefresh 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gray-500 hover:bg-gray-600 text-white'
                }`}
                title={autoRefresh ? "Auto-refresh ON" : "Auto-refresh OFF"}
              >
                <Activity className="h-5 w-5" />
              </button>
              
              {appliances.slice(0, 4).map((appliance) => {
                const IconComponent = appliance.icon;
                return (
                  <div key={appliance.id} className="relative group">
                    <div className={`p-2 rounded-lg ${getIconBg()}`}>
                      <IconComponent className={`h-5 w-5 ${getStatusColor(appliance.status)}`} />
                    </div>
                    <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 hidden group-hover:block">
                      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-3 border border-gray-200 dark:border-gray-700 min-w-40">
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {appliance.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Status: <span className={getStatusColor(appliance.status)}>{appliance.status}</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Power: {appliance.power}W
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6 transition-all duration-300">
          {/* Mobile Menu Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'
              } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <Menu className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Controls</span>
            </button>
          </div>
          
          {/* Desktop Toggle Button when sidebar is closed */}
          {!isSidebarOpen && (
            <div className="hidden lg:block mb-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <Menu className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Show Controls</span>
              </button>
            </div>
          )}

          {/* Header - Hidden on mobile since we have mobile header */}
          <div className="hidden lg:block mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Real-time Voltage Monitoring
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
              Monitor voltage levels, control appliances, and track electrical metrics
            </p>
          </div>

          {/* Mobile title */}
          <div className="lg:hidden mb-6">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Voltage Monitoring
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
              Real-time monitoring and appliance control
            </p>
          </div>

          {/* Main Voltage Chart */}
          <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-6 lg:mb-8`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Real-time Voltage Trend
              </h3>
              <div className="flex items-center space-x-2 text-sm">
                <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span>Voltage</span>
                </div>
                <div className={`flex items-center space-x-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                  <span>Frequency</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={voltageHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f3f4f6'} />
                <XAxis dataKey="time" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} fontSize={12} />
                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="voltage" 
                  stroke={isDarkMode ? '#10B981' : '#059669'}
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="frequency" 
                  stroke={isDarkMode ? '#3B82F6' : '#2563EB'}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8">
            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Active Power
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {(totalActivePower / 1000).toFixed(2)} kW
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg ml-2">
                  <Zap className="h-4 w-4 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Avg Voltage
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {avgVoltage.toFixed(1)} V
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-green-100 dark:bg-green-900/20 rounded-lg ml-2">
                  <Gauge className="h-4 w-4 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>

            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Total Current
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {totalCurrent.toFixed(1)} A
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg ml-2">
                  <Activity className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
            </div>

            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Online Devices
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {onlineDevices}/{appliances.length}
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg ml-2">
                  <Wifi className="h-4 w-4 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Device Status Overview */}
          <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Device Status Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {appliances.map((appliance) => {
                const IconComponent = appliance.icon;
                return (
                  <div key={appliance.id} className={`p-4 rounded-lg border transition-colors ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getIconBg()}`}>
                          <IconComponent className={`h-5 w-5 ${getStatusColor(appliance.status)}`} />
                        </div>
                        <div className="min-w-0">
                          <h4 className={`font-medium text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {appliance.name}
                          </h4>
                          <p className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {appliance.location}
                          </p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                        appliance.isOn 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {appliance.isOn ? 'ON' : 'OFF'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Power</span>
                        <div className={`font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.power}W
                        </div>
                      </div>
                      <div>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Temp</span>
                        <div className={`font-bold truncate ${getTemperatureColor(appliance.temperature)}`}>
                          {appliance.temperature}°C
                        </div>
                      </div>
                      <div>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Voltage</span>
                        <div className={`font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.voltage.toFixed(1)}V
                        </div>
                      </div>
                      <div>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Current</span>
                        <div className={`font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {appliance.current.toFixed(1)}A
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                          {appliance.connectionStatus === 'connected' ? (
                            <>
                              <Wifi className="h-3 w-3 text-green-500" />
                              <span className="text-green-500">Connected</span>
                            </>
                          ) : (
                            <>
                              <WifiOff className="h-3 w-3 text-red-500" />
                              <span className="text-red-500">Offline</span>
                            </>
                          )}
                        </div>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {appliance.lastUpdate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Appliance Detail Modal */}
      {showDetailModal && selectedApplianceData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${getIconBg()}`}>
                  <selectedApplianceData.icon className={`h-6 w-6 ${getStatusColor(selectedApplianceData.status)}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedApplianceData.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedApplianceData.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Detailed Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Power</span>
                </div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedApplianceData.power} W
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Gauge className="h-4 w-4 text-green-500" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Voltage</span>
                </div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedApplianceData.voltage.toFixed(1)} V
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Activity className="h-4 w-4 text-yellow-500" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Current</span>
                </div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedApplianceData.current.toFixed(1)} A
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className={`h-4 w-4 ${getTemperatureColor(selectedApplianceData.temperature)}`} />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Temperature</span>
                </div>
                <div className={`text-2xl font-bold ${getTemperatureColor(selectedApplianceData.temperature)}`}>
                  {selectedApplianceData.temperature}°C
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Efficiency</span>
                </div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedApplianceData.efficiency}%
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Battery className="h-4 w-4 text-indigo-500" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>24h Usage</span>
                </div>
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedApplianceData.powerConsumption24h} kWh
                </div>
              </div>
            </div>
            
            {/* Status Information */}
            <div className={`p-4 rounded-lg ${getStatusBg(selectedApplianceData.status)} mb-6`}>
              <div className="flex items-center space-x-3">
                {selectedApplianceData.status === 'normal' && <CheckCircle className="h-6 w-6 text-green-500" />}
                {selectedApplianceData.status === 'warning' && <AlertTriangle className="h-6 w-6 text-yellow-500" />}
                {selectedApplianceData.status === 'critical' && <X className="h-6 w-6 text-red-500" />}
                <div>
                  <h4 className={`font-medium ${getStatusColor(selectedApplianceData.status)}`}>
                    {selectedApplianceData.status.charAt(0).toUpperCase() + selectedApplianceData.status.slice(1)} Status
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedApplianceData.status === 'normal' && 'Device is operating within normal parameters'}
                    {selectedApplianceData.status === 'warning' && 'Device requires attention - check voltage levels'}
                    {selectedApplianceData.status === 'critical' && 'Critical issue detected - immediate action required'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Control Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleAppliance(selectedApplianceData.id)}
                  disabled={selectedApplianceData.connectionStatus === 'disconnected'}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedApplianceData.isOn
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Power className="h-4 w-4" />
                  <span>{selectedApplianceData.isOn ? 'Turn Off' : 'Turn On'}</span>
                </button>
                
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                  selectedApplianceData.connectionStatus === 'connected'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {selectedApplianceData.connectionStatus === 'connected' ? (
                    <Wifi className="h-4 w-4" />
                  ) : (
                    <WifiOff className="h-4 w-4" />
                  )}
                  <span className="text-sm font-medium">
                    {selectedApplianceData.connectionStatus === 'connected' ? 'Connected' : 'Offline'}
                  </span>
                </div>
              </div>
              
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last update: {selectedApplianceData.lastUpdate}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoltageMonitor;