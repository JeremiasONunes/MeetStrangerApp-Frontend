import { useState, useEffect } from 'react';
import { ChatMessage, mockMessages } from '../constants/mockData';

export function useChat(category: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simula conexão inicial com uma pessoa
    const connectTimer = setTimeout(() => {
      setIsConnected(true);
      const initialMessages = mockMessages[category] || [];
      // Pega apenas a primeira mensagem para simular P2P
      if (initialMessages.length > 0) {
        setMessages([initialMessages[0]]);
      }
    }, 1500);

    return () => clearTimeout(connectTimer);
  }, [category]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
      username: 'Você'
    };

    setMessages(prev => [...prev, newMessage]);

    // Simula resposta automática após 2-4 segundos
    const responseDelay = Math.random() * 2000 + 2000;
    setTimeout(() => {
      const responses = [
        'Interessante! Conte-me mais sobre isso.',
        'Concordo totalmente com você!',
        'Nunca pensei por esse ângulo.',
        'Que legal! Também gosto disso.',
        'Hmm, não conhecia. Vou pesquisar!',
        'Excelente ponto de vista!'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
        username: 'Desconhecido'
      };

      setMessages(prev => [...prev, responseMessage]);
    }, responseDelay);
  };

  const findNewPartner = () => {
    setIsConnected(false);
    setMessages([]);
    
    // Simula busca por novo parceiro (2-3 segundos)
    setTimeout(() => {
      setIsConnected(true);
      const partnerNames = ['Desconhecido', 'Anônimo', 'Pessoa Misteriosa', 'Alguém Legal', 'Novo Amigo'];
      const randomName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
      
      const welcomeMessages = [
        'Oi! Tudo bem?',
        'Olá! Como você está?',
        'E aí! Vamos conversar?',
        'Oi! Prazer em conhecer você!',
        'Olá! Que bom encontrar alguém aqui!'
      ];
      
      const welcomeMessage: ChatMessage = {
        id: Date.now().toString(),
        text: welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)],
        isUser: false,
        timestamp: new Date(),
        username: randomName
      };
      setMessages([welcomeMessage]);
    }, Math.random() * 1000 + 2000); // 2-3 segundos
  };

  return {
    messages,
    isConnected,
    sendMessage,
    findNewPartner
  };
}