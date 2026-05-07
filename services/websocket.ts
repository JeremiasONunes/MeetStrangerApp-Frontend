// Importa a função `io` (cria a conexão) e o tipo `Socket` da biblioteca socket.io-client
import { io, Socket } from 'socket.io-client';
// Importa o AsyncStorage para recuperar o token de autenticação salvo no dispositivo
import AsyncStorage from '@react-native-async-storage/async-storage';
// Importa as configurações da aplicação, incluindo a URL do servidor de WebSocket
import { API_CONFIG } from './config';

// Classe responsável por gerenciar toda a comunicação via WebSocket com o servidor
class WebSocketService {
  public socket: Socket | null = null; // Instância do socket; null enquanto não conectado
  private isConnected = false;         // Flag interna que rastreia se há conexão ativa

  // Conecta ao servidor WebSocket usando o token JWT salvo no AsyncStorage
  async connect(): Promise<void> {
    const token = await AsyncStorage.getItem('authToken'); // Recupera o token de autenticação do armazenamento local
    
    // Cria a conexão com o servidor usando a URL configurada
    this.socket = io(API_CONFIG.SOCKET_URL, {
      auth: { token },             // Envia o token no handshake para autenticação inicial
      transports: ['websocket']    // Força o uso de WebSocket puro (evita fallback para polling)
    });

    // Retorna uma Promise que resolve quando a conexão for estabelecida ou rejeita em caso de erro
    return new Promise((resolve, reject) => {
      // Evento disparado quando a conexão com o servidor é estabelecida com sucesso
      this.socket!.on('connect', () => {
        this.isConnected = true;           // Marca a conexão como ativa
        console.log('WebSocket connected');
        
        // Authenticate automatically
        if (token) {
          this.socket!.emit('authenticate', { token }); // Envia o token ao servidor para autenticar a sessão WebSocket
        }
        
        resolve(); // Resolve a Promise, sinalizando que a conexão está pronta
      });

      // Evento disparado quando o servidor confirma que o usuário foi autenticado
      this.socket!.on('authenticated', (data) => {
        console.log('WebSocket authenticated:', data.userId); // Exibe o ID do usuário autenticado
      });

      // Evento disparado quando o servidor recusa a autenticação
      this.socket!.on('auth_error', (error) => {
        console.error('WebSocket auth error:', error);
        reject(error); // Rejeita a Promise com o erro de autenticação
      });

      // Evento disparado quando ocorre um erro durante a tentativa de conexão
      this.socket!.on('connect_error', (error) => {
        console.error('WebSocket connection error:', error);
        reject(error); // Rejeita a Promise com o erro de conexão
      });

      // Evento disparado quando a conexão com o servidor é encerrada
      this.socket!.on('disconnect', () => {
        this.isConnected = false;              // Marca a conexão como inativa
        console.log('WebSocket disconnected');
      });
    });
  }

  // Encerra a conexão WebSocket e limpa o estado interno
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect(); // Fecha a conexão com o servidor
      this.socket = null;       // Remove a referência ao socket
      this.isConnected = false; // Reseta a flag de conexão
    }
  }

  // ── Eventos de chat ──────────────────────────────────────────────────────────

  // Entra em uma sala de chat específica pelo seu ID
  joinRoom(roomId: string): void {
    this.socket?.emit('join-room', { roomId }); // Emite o evento 'join-room' para o servidor com o ID da sala
  }

  // Sai de uma sala de chat específica pelo seu ID
  leaveRoom(roomId: string): void {
    this.socket?.emit('leave-room', { roomId }); // Emite o evento 'leave-room' para o servidor com o ID da sala
  }

  // Envia uma mensagem de texto para uma sala de chat específica
  sendMessage(roomId: string, message: string): void {
    this.socket?.emit('send-message', { roomId, message }); // Emite o evento 'send-message' com o ID da sala e o conteúdo
  }

  // Registra um callback para ser chamado sempre que uma nova mensagem for recebida
  onMessage(callback: (data: any) => void): void {
    this.socket?.on('new-message', callback); // Escuta o evento 'new-message' emitido pelo servidor
  }

  // Registra um callback para ser chamado quando um usuário entrar na sala
  onUserJoined(callback: (data: any) => void): void {
    this.socket?.on('user-joined', callback); // Escuta o evento 'user-joined' emitido pelo servidor
  }

  // Registra um callback para ser chamado quando um usuário sair da sala
  onUserLeft(callback: (data: any) => void): void {
    this.socket?.on('user-left', callback); // Escuta o evento 'user-left' emitido pelo servidor
  }

  // Registra um callback para ser chamado quando um match (parceiro de conversa) for encontrado
  onMatchFound(callback: (data: any) => void): void {
    this.socket?.on('match-found', callback); // Escuta o evento 'match-found' emitido pelo servidor
  }

  // ── Eventos de matchmaking ───────────────────────────────────────────────────

  // Solicita ao servidor que encontre um parceiro de conversa para a categoria informada
  findMatch(category: string): void {
    console.log(' Sending find-match event for category:', category); // Log para depuração
    this.socket?.emit('find-match', { category }); // Emite o evento 'find-match' com a categoria desejada
  }

  // Cancela a busca por um parceiro de conversa em andamento
  cancelMatching(): void {
    this.socket?.emit('cancel-matching'); // Emite o evento 'cancel-matching' para o servidor
  }

  // ── Gerenciamento de listeners ───────────────────────────────────────────────

  // Remove todos os listeners de eventos registrados no socket (evita memory leaks)
  removeAllListeners(): void {
    this.socket?.removeAllListeners(); // Desregistra todos os handlers de eventos do socket
  }

  // Getter que expõe o estado de conexão de forma pública e somente leitura
  get connected(): boolean {
    return this.isConnected; // Retorna true se o socket estiver conectado, false caso contrário
  }
}

// Exporta uma instância única (singleton) do serviço para ser reutilizada em toda a aplicação
export const wsService = new WebSocketService();