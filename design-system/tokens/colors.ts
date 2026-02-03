export interface ColorTokens {
  primary: string;
  primaryDark: string;
  secondary: string;
  background: string;
  surface: string;
  surfaceElevated: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  success: string;
  error: string;
  warning: string;
  border: string;
  borderLight: string;
  shadow: string;
  overlay: string;
  chat: {
    userBubble: string;
    otherBubble: string;
    userText: string;
    otherText: string;
  };
}

export const lightTheme: ColorTokens = {
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  secondary: '#60A5FA',
  background: '#EBF4FF',
  surface: '#DBEAFE',
  surfaceElevated: '#BFDBFE',
  textPrimary: '#1E3A8A',
  textSecondary: '#1E40AF',
  textTertiary: '#3B82F6',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  border: '#93C5FD',
  borderLight: '#C3DDFD',
  shadow: 'rgba(59, 130, 246, 0.2)',
  overlay: 'rgba(30, 58, 138, 0.5)',
  chat: {
    userBubble: '#3B82F6',
    otherBubble: '#F3F8FF',
    userText: '#FFFFFF',
    otherText: '#1E3A8A',
  }
};

export const darkTheme: ColorTokens = {
  primary: '#60A5FA',
  primaryDark: '#3B82F6',
  secondary: '#A78BFA',
  background: '#0F172A',
  surface: '#1E293B',
  surfaceElevated: '#334155',
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textTertiary: '#64748B',
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',
  border: '#334155',
  borderLight: '#475569',
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.7)',
  chat: {
    userBubble: '#3B82F6',
    otherBubble: '#334155',
    userText: '#FFFFFF',
    otherText: '#F8FAFC',
  }
};

// Default export para compatibilidade
export const Colors = lightTheme;