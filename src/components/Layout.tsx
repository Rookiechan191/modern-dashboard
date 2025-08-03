import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  CheckSquare, 
  MessageSquare, 
  ShoppingCart, 
  Cloud, 
  BarChart3, 
  Activity, 
  ChefHat, 
  Brain,
  Menu,
  X,
  Bell,
  Search,
  User,
  Settings
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ModuleConfig } from '../types'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const modules: ModuleConfig[] = [
    {
      id: 'overview',
      name: 'Overview',
      icon: 'LayoutDashboard',
      description: 'Main dashboard overview',
      enabled: true,
      order: 1
    },
    {
      id: 'tasks',
      name: 'Task Management',
      icon: 'CheckSquare',
      description: 'Manage tasks and projects',
      enabled: true,
      order: 2
    },
    {
      id: 'chat',
      name: 'Real-time Chat',
      icon: 'MessageSquare',
      description: 'Team communication',
      enabled: true,
      order: 3
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      icon: 'ShoppingCart',
      description: 'Online store management',
      enabled: true,
      order: 4
    },
    {
      id: 'weather',
      name: 'Weather',
      icon: 'Cloud',
      description: 'Weather information',
      enabled: true,
      order: 5
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: 'BarChart3',
      description: 'Data analytics and charts',
      enabled: true,
      order: 6
    },
    {
      id: 'fitness',
      name: 'Fitness Tracker',
      icon: 'Activity',
      description: 'Workout and health tracking',
      enabled: true,
      order: 7
    },
    {
      id: 'recipes',
      name: 'Recipe Manager',
      icon: 'ChefHat',
      description: 'Recipe collection and meal planning',
      enabled: true,
      order: 8
    },
    {
      id: 'ai-insights',
      name: 'AI Insights',
      icon: 'Brain',
      description: 'AI-powered insights and recommendations',
      enabled: true,
      order: 9
    }
  ]

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      LayoutDashboard,
      CheckSquare,
      MessageSquare,
      ShoppingCart,
      Cloud,
      BarChart3,
      Activity,
      ChefHat,
      Brain
    }
    return icons[iconName] || LayoutDashboard
  }

  const isActive = (path: string) => {
    if (path === '/overview' || path === '/') {
      return location.pathname === '/' || location.pathname === '/overview'
    }
    return location.pathname === path
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Multi Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {modules.map((module) => {
            const Icon = getIcon(module.icon)
            const path = module.id === 'overview' ? '/' : `/${module.id}`
            
            return (
              <motion.div
                key={module.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(path)
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{module.name}</span>
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* AI Assistant Panel */}
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
          <h3 className="font-semibold text-primary-800 mb-2">AI Assistant</h3>
          <p className="text-sm text-primary-600">
            Get intelligent insights across all modules
          </p>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header 
          className="bg-white border-b border-gray-200 px-6 py-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search across modules..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  5
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Admin User</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout 