// Importa o AsyncStorage para armazenar e recuperar dados persistentes no dispositivo (ex.: token JWT)
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importa as configurações da API (ex.: BASE_URL do servidor backend)
import { API_CONFIG } from './config';

// Classe responsável por centralizar todas as chamadas HTTP ao backend
class ApiService {
  // Propriedade privada que armazena a URL base da API
  private baseURL: string;

  // Construtor: inicializa a baseURL com o valor definido nas configurações
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  // Método privado que recupera o token de autenticação salvo no AsyncStorage
  private async getAuthToken(): Promise<string | null> {
    return await AsyncStorage.getItem('authToken'); // Retorna o token ou null se não existir
  }

  // Método privado genérico para realizar qualquer requisição HTTP ao backend
  private async request<T>(
    endpoint: string,       // Caminho do endpoint (ex.: '/auth/login')
    options: RequestInit = {} // Opções adicionais da requisição (método, body, etc.)
  ): Promise<T> {
    const token = await this.getAuthToken(); // Busca o token atual para autenticação
    
    // Monta o objeto de configuração da requisição com os headers padrão
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',                              // Indica que o corpo da requisição é JSON
        ...(token && { Authorization: `Bearer ${token}` }),              // Adiciona o header de autorização apenas se houver token
        ...options.headers,                                              // Mescla headers extras passados pelo chamador
      },
      ...options, // Mescla as demais opções (method, body, etc.) passadas pelo chamador
    };

    // Realiza a requisição HTTP para a URL completa (baseURL + endpoint)
    const response = await fetch(`${this.baseURL}${endpoint}`, config);
    
    // Se a resposta indicar erro (status fora do range 200-299), lança uma exceção
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' })); // Tenta extrair mensagem de erro do body; usa fallback se falhar
      throw new Error(error.message || 'Request failed'); // Lança o erro com a mensagem recebida ou uma genérica
    }

    // Retorna o corpo da resposta deserializado como JSON no tipo genérico T
    return response.json();
  }

  // ── Endpoints de autenticação ────────────────────────────────────────────────

  // Realiza o login do usuário com email e senha
  async login(email: string, password: string) {
    const response = await this.request<{ success: boolean; data: { token: string; user: any } }>('/auth/login', {
      method: 'POST',                              // Método HTTP POST
      body: JSON.stringify({ email, password }),   // Serializa as credenciais como JSON
    });
    
    // Se o backend retornar um token, salva-o no AsyncStorage para uso nas próximas requisições
    if (response.data?.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
    }
    return response.data; // Retorna os dados do usuário e o token
  }

  // Registra um novo usuário com nome de usuário, email e senha
  async register(username: string, email: string, password: string) {
    const response = await this.request<{ success: boolean; data: { token: string; user: any } }>('/auth/register', {
      method: 'POST',                                          // Método HTTP POST
      body: JSON.stringify({ username, email, password }),     // Serializa os dados do novo usuário como JSON
    });
    
    // Se o backend retornar um token após o registro, salva-o no AsyncStorage
    if (response.data?.token) {
      await AsyncStorage.setItem('authToken', response.data.token);
    }
    return response.data; // Retorna os dados do usuário criado e o token
  }

  // Realiza o logout do usuário invalidando a sessão no servidor e removendo o token local
  async logout() {
    await this.request('/auth/logout', { method: 'POST' }); // Chama o endpoint de logout no servidor
    await AsyncStorage.removeItem('authToken');              // Remove o token salvo no dispositivo
  }

  // Busca o perfil do usuário autenticado a partir do token salvo
  async getProfile() {
    const response = await this.request<{ success: boolean; data: { user: any } }>('/auth/profile'); // GET implícito
    return response.data; // Retorna os dados do perfil do usuário
  }

  // ── Endpoints de chat ────────────────────────────────────────────────────────

  // Busca a lista de salas de chat disponíveis
  async getRooms() {
    const response = await this.request<{ success: boolean; data: { rooms: any[] } }>('/chat/rooms'); // GET implícito
    return response.data; // Retorna o array de salas
  }

  // Busca as mensagens de uma sala de chat específica pelo seu ID
  async getRoomMessages(roomId: string) {
    const response = await this.request<{ success: boolean; data: { messages: any[] } }>(`/chat/rooms/${roomId}/messages`); // GET com roomId na URL
    return response.data; // Retorna o array de mensagens da sala
  }

  // Envia uma mensagem de texto para uma sala de chat específica
  async sendMessage(roomId: string, text: string) {
    const response = await this.request(`/chat/rooms/${roomId}/messages`, {
      method: 'POST',                       // Método HTTP POST
      body: JSON.stringify({ text }),       // Serializa o texto da mensagem como JSON
    });
    return response; // Retorna a resposta do servidor (ex.: mensagem criada)
  }

  // ── Endpoints de matchmaking ─────────────────────────────────────────────────

  // Solicita ao backend um parceiro de conversa baseado em uma categoria de interesse
  async findMatch(category: string) {
    const response = await this.request<{ success: boolean; data: { roomId: string } }>('/matching/find', {
      method: 'POST',                          // Método HTTP POST
      body: JSON.stringify({ category }),      // Serializa a categoria como JSON
    });
    return response.data; // Retorna o ID da sala criada para o match encontrado
  }
}

// Exporta uma instância única (singleton) do serviço para ser reutilizada em toda a aplicação
export const apiService = new ApiService();