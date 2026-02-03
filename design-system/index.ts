// Tokens
export * from './tokens/colors';
export * from './tokens/typography';
export * from './tokens/spacing';

// Components
export { Button } from './components/Button';
export type { ButtonVariant } from './components/Button';

export { Input } from './components/Input';

export { Card } from './components/Card';
export type { CardVariant } from './components/Card';

export { ChatBubble } from './components/ChatBubble';
export type { ChatBubblePosition } from './components/ChatBubble';

// Animations
export * from './animations/fade';
export * from './animations/slide';
export * from './animations/interactions';

// Design System Info
export const DesignSystemInfo = {
  name: 'MeetStranger Design System',
  version: '1.0.0',
  description: 'Design system focado em comunicação anônima, simplicidade e privacidade',
  principles: [
    'Minimalista',
    'Alto contraste',
    'Foco em leitura e conversação',
    'Feedback visual sutil',
    'Animações leves',
    'Interface confortável para longas conversas',
  ],
} as const;