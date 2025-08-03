import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react'

const Weather: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weather Dashboard</h1>
          <p className="text-gray-600 mt-1">Real-time weather information and forecasts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center">
            <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">72°F</h3>
            <p className="text-gray-600">Sunny</p>
            <p className="text-sm text-gray-500 mt-2">San Francisco, CA</p>
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="text-center">
            <Cloud className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">65°F</h3>
            <p className="text-gray-600">Partly Cloudy</p>
            <p className="text-sm text-gray-500 mt-2">New York, NY</p>
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="text-center">
            <CloudRain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">58°F</h3>
            <p className="text-gray-600">Rainy</p>
            <p className="text-sm text-gray-500 mt-2">Seattle, WA</p>
          </div>
        </motion.div>
      </div>

      <motion.div className="card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Coming Soon</h3>
        <p className="text-gray-600">Real weather API integration with detailed forecasts, radar maps, and location-based weather alerts will be implemented here.</p>
      </motion.div>
    </div>
  )
}

export default Weather 