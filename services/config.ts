// ⚠️ DEV_MODE: desabilita autenticação real para testar navegação de telas
// Mude para false ao voltar ao fluxo normal com backend
export const DEV_MODE = true;

// Objeto de configuração central da API, exportado para uso em todo o projeto
export const API_CONFIG = {
  BASE_URL: 'https://meetstrangerapp-backend.onrender.com/api', // URL base para todas as requisições HTTP REST da API
  SOCKET_URL: 'https://meetstrangerapp-backend.onrender.com',   // URL do servidor WebSocket (sem o prefixo /api)
  TIMEOUT: 10000, // Tempo máximo de espera por uma resposta, em milissegundos (10 segundos)
};

// Interface genérica que representa o formato padrão de resposta da API
export interface ApiResponse<T = any> {
  success: boolean;  // Indica se a operação foi concluída com sucesso (true) ou não (false)
  data?: T;          // Dados retornados pela operação (opcional; o tipo é definido pelo parâmetro genérico T)
  message?: string;  // Mensagem descritiva sobre o resultado da operação (opcional)
  error?: string;    // Mensagem de erro caso a operação tenha falhado (opcional)
}

// Interface que representa o modelo de um usuário da aplicação
export interface User {
  id: string;        // Identificador único do usuário no banco de dados
  username: string;  // Nome de usuário exibido na interface
  email: string;     // Endereço de e-mail do usuário
  createdAt: string; // Data e hora de criação da conta (formato ISO 8601)
}

// Interface que representa uma sala de chat
export interface ChatRoom {
  id: string;              // Identificador único da sala
  category: string;        // Categoria de assunto da sala (ex.: 'tecnologia', 'esportes')
  participants: string[];  // Array com os IDs dos usuários participantes da sala
  createdAt: string;       // Data e hora de criação da sala (formato ISO 8601)
}

// Interface que representa uma mensagem de chat
export interface Message {
  id: string;        // Identificador único da mensagem
  roomId: string;    // ID da sala à qual a mensagem pertence
  userId: string;    // ID do usuário que enviou a mensagem
  username: string;  // Nome do usuário que enviou a mensagem (para exibição)
  text: string;      // Conteúdo textual da mensagem
  timestamp: string; // Data e hora de envio da mensagem (formato ISO 8601)
}