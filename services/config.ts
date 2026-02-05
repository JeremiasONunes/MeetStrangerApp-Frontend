// Configurações da API
export const API_CONFIG = {
  BASE_URL: __DEV__ ? 'http://10.112.190.214:3000/api' : 'https://your-production-api.com/api',
  SOCKET_URL: __DEV__ ? 'http://10.112.190.214:3000' : 'https://your-production-api.com',
  TIMEOUT: 10000,
};

// Tipos para as respostas da API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export interface ChatRoom {
  id: string;
  category: string;
  participants: string[];
  createdAt: string;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  username: string;
  text: string;
  timestamp: string;
}