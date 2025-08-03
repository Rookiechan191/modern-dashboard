import React from 'react'
import { motion } from 'framer-motion'
import { ChefHat, Clock, Users, Star } from 'lucide-react'

const Recipes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recipe Manager</h1>
          <p className="text-gray-600 mt-1">Discover and organize your favorite recipes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Recipes</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <ChefHat className="w-8 h-8 text-orange-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cook Time</p>
              <p className="text-2xl font-bold text-gray-900">30m</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Servings</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
        </motion.div>
      </div>

      <motion.div className="card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Coming Soon</h3>
        <p className="text-gray-600">Complete recipe management with ingredient lists, cooking instructions, meal planning, and nutritional information will be implemented here.</p>
      </motion.div>
    </div>
  )
}

export default Recipes 