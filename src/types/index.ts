// Core Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
}

// Task Management
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  tags: string[];
}

// Real-time Chat
export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
  roomId: string;
  type: 'text' | 'file' | 'image';
  fileUrl?: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  isActive: boolean;
}

// E-commerce
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  tags: string[];
  isFeatured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  shippingAddress: Address;
  paymentMethod: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Weather
export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  date: Date;
  high: number;
  low: number;
  description: string;
  icon: string;
}

// Analytics & Charts
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface AnalyticsData {
  totalSales: number;
  totalOrders: number;
  averageOrderValue: number;
  conversionRate: number;
  topProducts: Product[];
  salesChart: ChartData[];
  ordersChart: ChartData[];
}

// AI Features
export interface AIInsight {
  id: string;
  type: 'productivity' | 'sales' | 'weather' | 'general';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  actionable: boolean;
  actionText?: string;
}

// Fitness Tracking
export interface Workout {
  id: string;
  name: string;
  type: 'cardio' | 'strength' | 'flexibility' | 'sports';
  duration: number;
  calories: number;
  date: Date;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
}

// Recipe Management
export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  tags: string[];
  image?: string;
  rating: number;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

// Notification System
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

// Dashboard Modules
export type DashboardModule = 
  | 'overview'
  | 'tasks'
  | 'chat'
  | 'ecommerce'
  | 'weather'
  | 'analytics'
  | 'fitness'
  | 'recipes'
  | 'ai-insights';

export interface ModuleConfig {
  id: DashboardModule;
  name: string;
  icon: string;
  description: string;
  enabled: boolean;
  order: number;
} 