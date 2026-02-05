// Configurações da API
export const API_CONFIG = {
  BASE_URL: 'https://meetstrangerapp-backend.onrender.com/api',
  SOCKET_URL: 'https://meetstrangerapp-backend.onrender.com',
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