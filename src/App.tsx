import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import Tasks from './pages/Tasks'
import Chat from './pages/Chat'
import Ecommerce from './pages/Ecommerce'
import Weather from './pages/Weather'
import Analytics from './pages/Analytics'
import Fitness from './pages/Fitness'
import Recipes from './pages/Recipes'
import AIInsights from './pages/AIInsights'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/ai-insights" element={<AIInsights />} />
            </Routes>
          </motion.div>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App 