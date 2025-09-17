"use client";
import React from 'react';
import { 
  Plus,
  X,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Activity,
  BarChart3,
  Tv,
  Refrigerator,
  Lightbulb,
  Fan,
  Coffee,
  Microwave,
  WashingMachine,
  AirVent,
  Gauge,
  Menu,
  ChevronLeft
} from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/components/contexts/ThemeContext';

interface Appliance {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  voltage: number;
  current: number;
  power: number;
  status: 'normal' | 'warning' | 'critical' | 'offline';
  lastUpdate: string;
  efficiency: number;
}

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [appliances, setAppliances] = React.useState<Appliance[]>([
    {
      id: '1',
      name: 'Smart TV',
      icon: Tv,
      voltage: 242.5,
      current: 1.2,
      power: 291,
      status: 'normal',
      lastUpdate: '2 min ago',
      efficiency: 94
    },
    {
      id: '2',
      name: 'Refrigerator',
      icon: Refrigerator,
      voltage: 238.8,
      current: 2.8,
      power: 668,
      status: 'warning',
      lastUpdate: '1 min ago',
      efficiency: 87
    },
    {
      id: '3',
      name: 'Air Conditioner',
      icon: AirVent,
      voltage: 245.2,
      current: 8.5,
      power: 2084,
      status: 'normal',
      lastUpdate: '30 sec ago',
      efficiency: 91
    },
    {
      id: '4',
      name: 'Washing Machine',
      icon: WashingMachine,
      voltage: 220.1,
      current: 5.2,
      power: 1144,
      status: 'critical',
      lastUpdate: '5 min ago',
      efficiency: 76
    }
  ]);

  const [showAddModal, setShowAddModal] = React.useState(false);

  // Mock real-time voltage data
  const voltageData = [
    { time: '00:00', voltage: 240, power: 1200 },
    { time: '04:00', voltage: 238, power: 1180 },
    { time: '08:00', voltage: 245, power: 1450 },
    { time: '12:00', voltage: 242, power: 1380 },
    { time: '16:00', voltage: 244, power: 1420 },
    { time: '20:00', voltage: 241, power: 1350 },
    { time: '24:00', voltage: 239, power: 1200 }
  ];

  const currentData = [
    { appliance: 'TV', current: 1.2 },
    { appliance: 'Fridge', current: 2.8 },
    { appliance: 'AC', current: 8.5 },
    { appliance: 'Washer', current: 5.2 }
  ];

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
    // These colors will remain the same regardless of dark/light mode
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

  const totalPower = appliances.reduce((sum, appliance) => sum + appliance.power, 0);
  const avgVoltage = appliances.reduce((sum, appliance) => sum + appliance.voltage, 0) / appliances.length;
  const totalCurrent = appliances.reduce((sum, appliance) => sum + appliance.current, 0);
  const avgEfficiency = appliances.reduce((sum, appliance) => sum + appliance.efficiency, 0) / appliances.length;

  const normalCount = appliances.filter(a => a.status === 'normal').length;
  const warningCount = appliances.filter(a => a.status === 'warning').length;
  const criticalCount = appliances.filter(a => a.status === 'critical').length;

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(appliance => appliance.id !== id));
  };

  const applianceIcons = [
    { icon: Tv, name: 'Smart TV' },
    { icon: Refrigerator, name: 'Refrigerator' },
    { icon: AirVent, name: 'Air Conditioner' },
    { icon: WashingMachine, name: 'Washing Machine' },
    { icon: Microwave, name: 'Microwave' },
    { icon: Coffee, name: 'Coffee Maker' },
    { icon: Lightbulb, name: 'Smart Lights' },
    { icon: Fan, name: 'Ceiling Fan' }
  ];

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
          
          {/* Sidebar Header with Close Button */}
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700 lg:border-b-0">
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${!isSidebarOpen && 'lg:hidden'}`}>
              Smart Appliances
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowAddModal(true)}
                className={`flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 ${!isSidebarOpen && 'lg:hidden'}`}
              >
                <Plus className="h-4 w-4" />
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

            {/* Appliances List */}
            <div className="space-y-3">
              {appliances.map((appliance) => {
                const IconComponent = appliance.icon;
                return (
                  <div
                    key={appliance.id}
                    className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                      getStatusBg(appliance.status) // This now uses consistent colors
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className={`p-2 rounded-lg ${getIconBg()}`}>
                          <IconComponent className={`h-5 w-5 ${getStatusColor(appliance.status)}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm text-gray-900">
                            {appliance.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {appliance.lastUpdate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 rounded hover:bg-blue-100 transition-colors">
                          <BarChart3 className="h-4 w-4 text-blue-500" />
                        </button>
                        <button
                          onClick={() => removeAppliance(appliance.id)}
                          className="p-1 rounded hover:bg-red-100 transition-colors"
                        >
                          <X className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>

                    {/* Appliance Stats */}
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Voltage</span>
                        <div className="font-medium text-gray-900">
                          {appliance.voltage.toFixed(1)}V
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Current</span>
                        <div className="font-medium text-gray-900">
                          {appliance.current.toFixed(1)}A
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Power</span>
                        <div className="font-medium text-gray-900">
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
                onClick={() => setShowAddModal(true)}
                className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
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
              <span className="text-sm font-medium">Menu</span>
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
                <span className="text-sm font-medium">Show Appliances</span>
              </button>
            </div>
          )}
          
          {/* Header - Hidden on mobile since we have mobile header */}
          <div className="hidden lg:block mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Dashboard Overview
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
              Monitor your electrical systems in real-time
            </p>
          </div>

          {/* Mobile title */}
          <div className="lg:hidden mb-6">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Dashboard Overview
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
              Monitor your electrical systems in real-time
            </p>
          </div>

          {/* Overall Performance Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-6 lg:mb-8">
            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Total Power
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {(totalPower / 1000).toFixed(2)} kW
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-blue-100 rounded-lg ml-2">
                  <Zap className="h-4 w-4 lg:h-6 lg:w-6 text-blue-600" />
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
                <div className="p-2 lg:p-3 bg-green-100 rounded-lg ml-2">
                  <Gauge className="h-4 w-4 lg:h-6 lg:w-6 text-green-600" />
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
                <div className="p-2 lg:p-3 bg-yellow-100 rounded-lg ml-2">
                  <Activity className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className={`text-xs lg:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                    Efficiency
                  </p>
                  <p className={`text-lg lg:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {avgEfficiency.toFixed(0)}%
                  </p>
                </div>
                <div className="p-2 lg:p-3 bg-purple-100 rounded-lg ml-2">
                  <TrendingUp className="h-4 w-4 lg:h-6 lg:w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Status Overview */}
          <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-6 lg:mb-8`}>
            <h3 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              System Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-6 w-6 lg:h-8 lg:w-8 text-green-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-green-700 text-sm lg:text-base">{normalCount} Normal</p>
                  <p className="text-xs lg:text-sm text-green-600">Operating optimally</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-yellow-700 text-sm lg:text-base">{warningCount} Warning</p>
                  <p className="text-xs lg:text-sm text-yellow-600">Requires attention</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <X className="h-6 w-6 lg:h-8 lg:w-8 text-red-500 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-red-700 text-sm lg:text-base">{criticalCount} Critical</p>
                  <p className="text-xs lg:text-sm text-red-600">Immediate action needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Voltage Trend Chart */}
            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                24-Hour Voltage Trend
              </h3>
              <ResponsiveContainer width="100%" height={250} className="lg:!h-[300px]">
                <AreaChart data={voltageData}>
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
                  <Area 
                    type="monotone" 
                    dataKey="voltage" 
                    stroke="#3B82F6" 
                    fill="url(#voltageGradient)" 
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="voltageGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Current Analysis Chart */}
            <div className={`p-4 lg:p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Current Draw by Appliance
              </h3>
              <ResponsiveContainer width="100%" height={250} className="lg:!h-[300px]">
                <BarChart data={currentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f3f4f6'} />
                  <XAxis dataKey="appliance" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} fontSize={12} />
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
                  <Bar dataKey="current" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Add Appliance Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Add New Appliance
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {applianceIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      const newAppliance: Appliance = {
                        id: Date.now().toString(),
                        name: item.name,
                        icon: item.icon,
                        voltage: 240 + Math.random() * 10,
                        current: 1 + Math.random() * 8,
                        power: Math.floor(200 + Math.random() * 1800),
                        status: 'normal',
                        lastUpdate: 'Just now',
                        efficiency: Math.floor(80 + Math.random() * 20)
                      };
                      setAppliances([...appliances, newAppliance]);
                      setShowAddModal(false);
                    }}
                    className={`p-4 rounded-lg border transition-all duration-200 hover:scale-105 ${
                      isDarkMode 
                        ? 'border-gray-600 hover:border-blue-500 hover:bg-gray-700' 
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    <IconComponent className={`h-8 w-8 mx-auto mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-center`}>
                      {item.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;