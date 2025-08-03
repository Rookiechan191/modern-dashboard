import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Search,
  Phone,
  Video,
  User
} from 'lucide-react'
import { Message, User as UserType } from '../types'

const Chat: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('general')
  const [message, setMessage] = useState('')
  const [rooms] = useState([
    { id: 'general', name: 'General', unread: 3, lastMessage: 'Hello everyone!' },
    { id: 'development', name: 'Development Team', unread: 0, lastMessage: 'Code review completed' },
    { id: 'design', name: 'Design Team', unread: 5, lastMessage: 'New mockups ready' },
    { id: 'marketing', name: 'Marketing', unread: 1, lastMessage: 'Campaign launched' }
  ])

  const [messages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How is everyone doing today?',
      sender: { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      roomId: 'general',
      type: 'text'
    },
    {
      id: '2',
      content: 'Great! Working on the new features.',
      sender: { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', role: 'user' },
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      roomId: 'general',
      type: 'text'
    },
    {
      id: '3',
      content: 'Same here! The dashboard looks amazing.',
      sender: { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'user' },
      timestamp: new Date(Date.now() - 1000 * 60 * 1),
      roomId: 'general',
      type: 'text'
    }
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('')
    }
  }

  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedRoom === room.id ? 'bg-primary-50 border-primary-200' : ''
              }`}
              onClick={() => setSelectedRoom(room.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{room.name}</h3>
                  <p className="text-sm text-gray-600 truncate">{room.lastMessage}</p>
                </div>
                {room.unread > 0 && (
                  <span className="bg-primary-500 text-white text-xs rounded-full px-2 py-1">
                    {room.unread}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {rooms.find(r => r.id === selectedRoom)?.name}
                </h3>
                <p className="text-sm text-gray-600">3 members</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              className={`flex ${msg.sender.id === '1' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className={`max-w-xs lg:max-w-md ${
                msg.sender.id === '1' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-900'
              } rounded-lg px-4 py-2`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-medium">{msg.sender.name}</span>
                  <span className="text-xs opacity-70">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <motion.button
              onClick={handleSendMessage}
              className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat 