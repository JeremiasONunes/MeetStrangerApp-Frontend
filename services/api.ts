import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG } from './config';

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  private async getAuthToken(): Promise<string | null> {
    return await AsyncStorage.getItem('authToken');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = await this.getAuthToken();
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(error.message || 'Request failed');
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const response = await this.request<{ success: boolean; data: { token: string; user: any } }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.data?.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  }

  async register(username: string, email: string, password: string) {
    const response = await this.request<{ success: boolean; data: { token: string; user: any } }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    });
    
    if (response.data?.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  }

  async logout() {
    await this.request('/auth/logout', { method: 'POST' });
    await AsyncStorage.removeItem('authToken');
  }

  async getProfile() {
    const response = await this.request<{ success: boolean; data: { user: any } }>('/auth/profile');
    return response.data;
  }

  // Chat endpoints
  async getRooms() {
    const response = await this.request<{ success: boolean; data: { rooms: any[] } }>('/chat/rooms');
    return response.data;
  }

  async getRoomMessages(roomId: string) {
    const response = await this.request<{ success: boolean; data: { messages: any[] } }>(`/chat/rooms/${roomId}/messages`);
    return response.data;
  }

  async sendMessage(roomId: string, text: string) {
    const response = await this.request(`/chat/rooms/${roomId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
    return response;
  }

  // Matching endpoints
  async findMatch(category: string) {
    const response = await this.request<{ success: boolean; data: { roomId: string } }>('/matching/find', {
      method: 'POST',
      body: JSON.stringify({ category }),
    });
    return response.data;
  }
}

export const apiService = new ApiService();