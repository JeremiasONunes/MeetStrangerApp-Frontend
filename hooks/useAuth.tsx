// Importa o React e os hooks necessários: useState (estado), useContext (contexto), createContext (criar contexto), ReactNode (tipo para filhos JSX) e useEffect (efeito colateral)
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// Importa o tipo User definido nos tipos da aplicação
import { User } from '../constants/types';
// Importa o serviço de API para realizar chamadas HTTP ao backend
import { apiService } from '../services/api';
// Importa o serviço de WebSocket para comunicação em tempo real
import { wsService } from '../services/websocket';
// Importa flag de modo dev para bypass de autenticação
import { DEV_MODE } from '../services/config';

// Usuário fictício usado no DEV_MODE para simular sessão autenticada
const DEV_USER: User = {
  id: 'dev-user-001',
  username: 'DevUser',
  email: 'dev@test.com',
};

// Define a interface que descreve o formato do contexto de autenticação
interface AuthContextType {
  user: User | null;           // Usuário autenticado ou null se não há sessão
  isAuthenticated: boolean;    // true se há um usuário logado
  isLoading: boolean;          // true enquanto verifica o estado de autenticação
  login: (email: string, password: string) => Promise<boolean>;                         // Função de login que retorna true em caso de sucesso
  register: (username: string, email: string, password: string) => Promise<boolean>;    // Função de registro que retorna true em caso de sucesso
  logout: () => Promise<void>;  // Função de logout
}

// Cria o contexto de autenticação com valor inicial undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente provedor que envolve a árvore de componentes e disponibiliza o contexto de autenticação
export function AuthProvider({ children }: { children: ReactNode }) {
  // Estado que armazena o usuário autenticado (null = não autenticado)
  const [user, setUser] = useState<User | null>(null);
  // Estado que indica se a verificação inicial de autenticação ainda está em andamento
  const [isLoading, setIsLoading] = useState(true);

  // Executa checkAuthStatus apenas uma vez, quando o componente é montado
  useEffect(() => {
    checkAuthStatus();
  }, []); // Array vazio = executa somente na montagem do componente

  // Verifica se já existe uma sessão ativa consultando o perfil do usuário na API
  const checkAuthStatus = async () => {
    if (DEV_MODE) {
      setUser(DEV_USER);
      setIsLoading(false);
      return;
    }
    try {
      const response = await apiService.getProfile(); // Busca o perfil do usuário autenticado
      setUser(response.user);                          // Salva o usuário no estado
      await wsService.connect();                       // Conecta ao WebSocket com a sessão existente
    } catch (error) {
      console.log('Not authenticated'); // Silencia o erro — usuário simplesmente não está autenticado
    } finally {
      setIsLoading(false); // Finaliza o carregamento independentemente de sucesso ou erro
    }
  };

  // Realiza o login com email e senha; retorna true em caso de sucesso, false em caso de erro
  const login = async (email: string, password: string): Promise<boolean> => {
    if (DEV_MODE) {
      setUser(DEV_USER);
      return true;
    }
    try {
      const response = await apiService.login(email, password); // Chama o endpoint de login
      setUser(response.user);                                    // Armazena o usuário retornado
      await wsService.connect();                                 // Conecta ao WebSocket após login
      return true;                                               // Indica sucesso ao chamador
    } catch (error) {
      console.error('Login error:', error); // Registra o erro no console
      return false;                         // Indica falha ao chamador
    }
  };

  // Realiza o cadastro de um novo usuário; retorna true em caso de sucesso, false em caso de erro
  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    if (DEV_MODE) {
      setUser({ ...DEV_USER, username });
      return true;
    }
    try {
      const response = await apiService.register(username, email, password); // Chama o endpoint de registro
      setUser(response.user);                                                  // Armazena o usuário criado
      await wsService.connect();                                               // Conecta ao WebSocket após registro
      return true;                                                             // Indica sucesso ao chamador
    } catch (error) {
      console.error('Register error:', error); // Registra o erro no console
      return false;                            // Indica falha ao chamador
    }
  };

  // Realiza o logout: encerra a sessão na API, desconecta o WebSocket e limpa o estado
  const logout = async () => {
    if (DEV_MODE) {
      setUser(null);
      return;
    }
    try {
      await apiService.logout(); // Chama o endpoint de logout para invalidar a sessão no servidor
      wsService.disconnect();    // Fecha a conexão WebSocket
      setUser(null);             // Remove o usuário do estado, marcando como não autenticado
    } catch (error) {
      console.error('Logout error:', error); // Registra o erro no console
    }
  };

  // Objeto com todos os valores e funções que serão disponibilizados pelo contexto
  const value = {
    user,                        // Usuário atual
    isAuthenticated: !!user,     // Converte user para booleano (true se user não for null)
    isLoading,                   // Estado de carregamento
    login,                       // Função de login
    register,                    // Função de registro
    logout                       // Função de logout
  };

  // Renderiza o Provider do contexto, tornando `value` acessível a todos os componentes filhos
  return (
    <AuthContext.Provider value={value}>
      {children} {/* Renderiza os componentes filhos passados ao AuthProvider */}
    </AuthContext.Provider>
  );
}

// Hook personalizado para consumir o contexto de autenticação em qualquer componente filho
export function useAuth() {
  // Obtém o valor atual do contexto de autenticação
  const context = useContext(AuthContext);
  // Garante que o hook só seja usado dentro de um AuthProvider; lança erro caso contrário
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  // Retorna o contexto com user, isAuthenticated, isLoading, login, register e logout
  return context;
}