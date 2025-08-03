import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Heart, Target, TrendingUp } from 'lucide-react'

const Fitness: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fitness Tracker</h1>
          <p className="text-gray-600 mt-1">Track your workouts and health metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Workouts</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Calories</p>
              <p className="text-2xl font-bold text-gray-900">2,450</p>
            </div>
            <Heart className="w-8 h-8 text-red-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Goals</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
            <Target className="w-8 h-8 text-green-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-gray-900">+8%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </motion.div>
      </div>

      <motion.div className="card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Coming Soon</h3>
        <p className="text-gray-600">Complete fitness tracking with workout logging, progress charts, and health metrics will be implemented here.</p>
      </motion.div>
    </div>
  )
}

export default Fitness 