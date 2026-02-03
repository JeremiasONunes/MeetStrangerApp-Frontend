export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
} as const;

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
  button: 10,
  card: 12,
  input: 10,
  chatBubble: 16,
} as const;

export const Layout = {
  // Dimensões mínimas para touch targets
  minTouchTarget: 44,
  
  // Alturas padrão
  buttonHeight: 48,
  inputHeight: 48,
  headerHeight: 56,
  
  // Larguras
  maxChatBubbleWidth: '80%',
  maxContentWidth: 400,
  
  // Padding padrão das telas
  screenPadding: Spacing.lg,
  
  // Margens entre componentes
  componentMargin: Spacing.md,
  sectionMargin: Spacing.xl,
} as const;

export const Shadows = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 16,
  },
} as const;

export const Opacity = {
  disabled: 0.5,
  pressed: 0.8,
  overlay: 0.5,
  subtle: 0.6,
} as const;