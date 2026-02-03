export interface User {
  id: string;
  username: string;
  email: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  username: string;
}

export interface ChatCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const mockUser: User = {
  id: '1',
  username: 'Usuário Anônimo',
  email: 'user@example.com'
};

export const chatCategories: ChatCategory[] = [
  {
    id: 'movies',
    name: 'Filmes',
    description: 'Converse sobre seus filmes favoritos',
    icon: '🎬'
  },
  {
    id: 'games',
    name: 'Jogos',
    description: 'Discuta sobre games e gaming',
    icon: '🎮'
  },
  {
    id: 'series',
    name: 'Séries',
    description: 'Fale sobre suas séries preferidas',
    icon: '📺'
  }
];

export const mockMessages: { [key: string]: ChatMessage[] } = {
  movies: [
    {
      id: '1',
      text: 'Olá! Alguém assistiu o último filme da Marvel?',
      isUser: false,
      timestamp: new Date(Date.now() - 300000),
      username: 'CinéfiloMisterioso'
    },
    {
      id: '2',
      text: 'Sim! Achei incrível, principalmente os efeitos especiais',
      isUser: true,
      timestamp: new Date(Date.now() - 240000),
      username: 'Você'
    },
    {
      id: '3',
      text: 'Concordo! E você, qual seu gênero favorito?',
      isUser: false,
      timestamp: new Date(Date.now() - 180000),
      username: 'CinéfiloMisterioso'
    }
  ],
  games: [
    {
      id: '1',
      text: 'E aí, pessoal! Jogando alguma coisa interessante?',
      isUser: false,
      timestamp: new Date(Date.now() - 400000),
      username: 'GamerAnônimo'
    },
    {
      id: '2',
      text: 'Estou viciado em um RPG novo, muito bom!',
      isUser: true,
      timestamp: new Date(Date.now() - 320000),
      username: 'Você'
    }
  ],
  series: [
    {
      id: '1',
      text: 'Alguém mais ansioso pela nova temporada?',
      isUser: false,
      timestamp: new Date(Date.now() - 500000),
      username: 'SerieManiaco'
    },
    {
      id: '2',
      text: 'Muito! Não vejo a hora de sair',
      isUser: true,
      timestamp: new Date(Date.now() - 420000),
      username: 'Você'
    },
    {
      id: '3',
      text: 'Qual sua série favorita de todos os tempos?',
      isUser: false,
      timestamp: new Date(Date.now() - 360000),
      username: 'SerieManiaco'
    }
  ]
};