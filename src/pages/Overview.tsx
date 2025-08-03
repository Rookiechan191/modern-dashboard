import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  MessageSquare,
  CheckSquare,
  Activity,
  ChefHat,
  Brain,
  Cloud,
  BarChart3,
  Plus
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Overview: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'text-blue-600', change: '+12%' },
    { label: 'Revenue', value: '$45,678', icon: DollarSign, color: 'text-green-600', change: '+8%' },
    { label: 'Active Orders', value: '89', icon: ShoppingCart, color: 'text-orange-600', change: '+5%' },
    { label: 'Tasks Completed', value: '156', icon: CheckSquare, color: 'text-purple-600', change: '+15%' }
  ]

  const modules = [
    {
      id: 'tasks',
      name: 'Task Management',
      description: 'Manage projects and track progress',
      icon: CheckSquare,
      color: 'bg-blue-500',
      stats: '12 active tasks',
      path: '/tasks'
    },
    {
      id: 'chat',
      name: 'Real-time Chat',
      description: 'Team communication and collaboration',
      icon: MessageSquare,
      color: 'bg-green-500',
      stats: '5 unread messages',
      path: '/chat'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Online store and order management',
      icon: ShoppingCart,
      color: 'bg-orange-500',
      stats: '23 pending orders',
      path: '/ecommerce'
    },
    {
      id: 'weather',
      name: 'Weather',
      description: 'Real-time weather information',
      icon: Cloud,
      color: 'bg-cyan-500',
      stats: '72°F Sunny',
      path: '/weather'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'Data visualization and insights',
      icon: BarChart3,
      color: 'bg-purple-500',
      stats: '15% growth',
      path: '/analytics'
    },
    {
      id: 'fitness',
      name: 'Fitness Tracker',
      description: 'Workout and health monitoring',
      icon: Activity,
      color: 'bg-red-500',
      stats: '3 workouts this week',
      path: '/fitness'
    },
    {
      id: 'recipes',
      name: 'Recipe Manager',
      description: 'Recipe collection and meal planning',
      icon: ChefHat,
      color: 'bg-yellow-500',
      stats: '45 saved recipes',
      path: '/recipes'
    },
    {
      id: 'ai-insights',
      name: 'AI Insights',
      description: 'Intelligent recommendations',
      icon: Brain,
      color: 'bg-indigo-500',
      stats: '8 new insights',
      path: '/ai-insights'
    }
  ]

  const recentActivities = [
    { action: 'New order placed', user: 'John Doe', time: '2 minutes ago', type: 'order' },
    { action: 'Task completed', user: 'Sarah Smith', time: '5 minutes ago', type: 'task' },
    { action: 'Message sent', user: 'Mike Johnson', time: '10 minutes ago', type: 'message' },
    { action: 'Recipe added', user: 'Emma Wilson', time: '15 minutes ago', type: 'recipe' },
    { action: 'Workout logged', user: 'Alex Brown', time: '20 minutes ago', type: 'fitness' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening across all modules.</p>
        </div>
        <motion.button
          className="btn-primary flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          <span>Quick Action</span>
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            className="module-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to={module.path} className="block">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${module.color}`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{module.stats}</span>
                <div className="text-primary-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-orange-500' :
                  activity.type === 'task' ? 'bg-blue-500' :
                  activity.type === 'message' ? 'bg-green-500' :
                  activity.type === 'recipe' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <CheckSquare className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-medium text-gray-900">Create New Task</p>
                  <p className="text-sm text-gray-600">Add a new task to your list</p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Send Message</p>
                  <p className="text-sm text-gray-600">Start a new conversation</p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">View Orders</p>
                  <p className="text-sm text-gray-600">Check recent orders</p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">AI Insights</p>
                  <p className="text-sm text-gray-600">Get intelligent recommendations</p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Overview 