# 🎭 MeetStranger Mobile

> **Aplicativo de comunicação anônima P2P desenvolvido em React Native com Expo**

Um aplicativo mobile focado em simplicidade, privacidade e conversas fluidas entre desconhecidos, organizadas por tópicos de interesse.

## 📱 Sobre o Projeto

MeetStranger é um aplicativo de chat anônimo que conecta pessoas com interesses similares de forma segura e privada. O usuário escolhe um tópico (Filmes, Jogos ou Séries) e é conectado com outra pessoa para uma conversa 1-para-1.

### ✨ Características Principais

- 🔒 **100% Anônimo** - Sem coleta de dados pessoais
- 👥 **Chat P2P** - Conversas 1-para-1 em tempo real
- 🎯 **Por Tópicos** - Filmes, Jogos e Séries
- ⚡ **Instantâneo** - Conexão rápida com outros usuários
- 🎨 **Design Moderno** - Interface limpa e intuitiva
- 📱 **Mobile First** - Otimizado para dispositivos móveis
- 🧩 **Arquitetura Modular** - Estilos separados e organizados

## 🛠️ Tecnologias Utilizadas

### Core
- **React Native** - Framework mobile
- **Expo SDK 54** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Router** - Navegação baseada em arquivos

### Design System
- **StyleSheet** - Estilização nativa separada por telas
- **Animated API** - Animações performáticas
- **Design Tokens** - Sistema de cores e espaçamentos
- **Componentes Reutilizáveis** - Arquitetura escalável

### Estado e Dados
- **Context API** - Gerenciamento de estado global
- **Custom Hooks** - Lógica reutilizável
- **Mock Data** - Simulação completa de backend

## 📁 Estrutura do Projeto

```
primeiroApp/
├── app/                          # Telas (Expo Router)
│   ├── auth/
│   │   ├── login.tsx            # Tela de login
│   │   └── register.tsx         # Tela de registro
│   ├── chat/
│   │   ├── select.tsx           # Seleção de tópico
│   │   └── room.tsx             # Sala de chat P2P
│   ├── home/
│   │   └── index.tsx            # Tela principal
│   ├── about/
│   │   └── index.tsx            # Sobre o app
│   ├── _layout.tsx              # Layout raiz
│   └── index.tsx                # Tela de boas-vindas
├── components/                   # Componentes legados
│   ├── Button.tsx
│   ├── Input.tsx
│   └── ChatMessage.tsx
├── design-system/               # Sistema de Design
│   ├── components/              # Componentes base
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ChatBubble.tsx
│   ├── tokens/                  # Tokens de design
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── spacing.ts
│   ├── animations/              # Sistema de animações
│   │   ├── fade.ts
│   │   ├── slide.ts
│   │   └── interactions.ts
│   └── index.ts                 # Exports principais
├── styles/                      # Estilos organizados
│   ├── screens/                 # Estilos por tela
│   │   ├── welcomeStyles.ts
│   │   ├── loginStyles.ts
│   │   ├── registerStyles.ts
│   │   ├── homeStyles.ts
│   │   ├── chatSelectStyles.ts
│   │   ├── chatRoomStyles.ts
│   │   ├── aboutStyles.ts
│   │   └── index.ts             # Exports centralizados
│   └── components/              # Estilos de componentes
│       └── index.ts
├── hooks/                       # Hooks customizados
│   ├── useAuth.tsx              # Autenticação mockada
│   └── useChat.tsx              # Lógica de chat P2P
├── constants/                   # Constantes e dados
│   ├── colors.ts                # Paleta de cores
│   └── mockData.tsx             # Dados simulados
└── README.md                    # Este arquivo
```

## 🎨 Organização de Estilos

### Estrutura Modular
Todos os estilos foram separados das telas para melhor organização:

```typescript
// Antes: Estilos misturados com lógica
export default function Login() {
  // ... lógica do componente
  const styles = StyleSheet.create({ ... }); // ❌
}

// Depois: Estilos separados
import { loginStyles as styles } from '../../styles/screens/loginStyles';
export default function Login() {
  // ... apenas lógica do componente ✅
}
```

### Benefícios da Separação
- ✅ **Manutenibilidade** - Estilos centralizados
- ✅ **Reutilização** - Fácil importação entre telas
- ✅ **Consistência** - Padrão uniforme no projeto
- ✅ **Performance** - Estilos criados uma vez
- ✅ **Legibilidade** - Código mais limpo e focado

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI
- Dispositivo móvel ou emulador

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd primeiroApp
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm start
# ou
expo start
```

4. **Abra no dispositivo**
- Escaneie o QR code com o app Expo Go
- Ou execute no emulador iOS/Android

## 📖 Como Usar

### 1. **Autenticação**
- Faça login com qualquer email/senha
- Ou crie uma conta nova
- Sistema totalmente mockado

### 2. **Escolha um Tópico**
- 🎬 **Filmes** - Converse sobre cinema
- 🎮 **Jogos** - Discuta games
- 📺 **Séries** - Fale sobre suas séries favoritas

### 3. **Chat P2P**
- Conecte com 1 pessoa por vez
- Troque mensagens em tempo real
- Use "Próximo" para encontrar nova pessoa
- Use "Sair" para voltar aos tópicos

## 🎨 Design System

### Paleta de Cores
```typescript
primary: '#3B82F6'      // Azul principal
background: '#EBF4FF'   // Fundo azul claro
surface: '#DBEAFE'      // Superfícies
text: '#1E3A8A'         // Texto azul escuro
```

### Componentes
- **Button** - 4 variantes, 3 tamanhos
- **Input** - Estados focado/erro, ícones
- **Card** - 3 variantes, interativo
- **ChatBubble** - Design padrão WhatsApp/Telegram

### Chat Bubbles Melhorados
- ✅ **Design Compacto** - Balões se ajustam ao conteúdo
- ✅ **Username Externo** - Melhor organização visual
- ✅ **Bordas Sutis** - Definição clara dos balões
- ✅ **Padding Otimizado** - Proporções ideais
- ✅ **Animações Suaves** - Entrada deslizante

### Animações
- **Fade** - Entrada suave de elementos
- **Slide** - Mensagens deslizando
- **Press** - Feedback tátil em botões

## 🔧 Funcionalidades Técnicas

### Autenticação Mockada
```typescript
// Aceita qualquer email/senha válida
login("teste@teste.com", "123456") // ✅ Funciona
```

### Chat P2P Simulado
- Respostas automáticas inteligentes
- Nomes de usuários aleatórios
- Simulação de delay de rede
- Troca de parceiros instantânea

### Navegação
- Expo Router com tipagem
- Navegação baseada em arquivos
- Estados persistentes
- Transições suaves

## 📱 Compatibilidade

- ✅ **iOS** 13+
- ✅ **Android** API 21+
- ✅ **Web** (Expo Web)
- ✅ **Dark Mode** (preparado)

## 🔮 Roadmap Futuro

### Próximas Versões
- [ ] Integração com backend real
- [ ] WebRTC para chat real
- [ ] Notificações push
- [ ] Mais categorias de tópicos
- [ ] Sistema de moderação
- [ ] Modo escuro completo
- [ ] Suporte a imagens/emojis
- [ ] Histórico de conversas (opcional)

### Melhorias Técnicas
- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Performance monitoring
- [ ] Crash reporting
- [ ] Analytics de uso

## 👨💻 Desenvolvimento

### Scripts Disponíveis
```bash
npm start          # Inicia o servidor Expo
npm run android    # Abre no Android
npm run ios        # Abre no iOS
npm run web        # Abre no navegador
npm run lint       # Executa linting
```

### Padrões de Código
- **Estilos Separados** - Cada tela tem seu arquivo de estilo
- **Imports Organizados** - Agrupados por tipo
- **TypeScript Strict** - Tipagem completa
- **Componentes Funcionais** - Hooks em vez de classes

### Estrutura de Commits
```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação/estilos
refactor: refatoração
test: testes
```

## 📄 Licença

Este projeto é um **MVP educacional** desenvolvido para demonstrar:
- Boas práticas em React Native
- Arquitetura escalável e organizada
- Design System completo
- UX focada em privacidade
- Separação clara de responsabilidades

---

**Versão**: 1.1.0  
**Última atualização**: 2024  
**Desenvolvido com**: ❤️ React Native + Expo

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### Diretrizes de Contribuição
- Mantenha os estilos separados das telas
- Use TypeScript para tipagem
- Siga os padrões do Design System
- Teste em iOS e Android

---

> 💡 **Dica**: Este é um projeto de demonstração com dados mockados. Para uso em produção, implemente backend real e medidas de segurança adequadas.