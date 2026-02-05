export interface ColorTokens {
  primary: string;
  primaryLight: string;
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

/* =========================
   Light Theme (Clean & Simple)
   ========================= */
export const lightTheme: ColorTokens = {
  // Light blue palette - clean and calming
  primary: '#3B82F6',
  primaryLight: '#DBEAFE', 
  primaryDark: '#1D4ED8',
  secondary: '#E0F2FE',

  // Clean backgrounds
  background: '#FAFBFC',
  surface: '#FFFFFF',
  surfaceElevated: '#F8FAFC',

  // Simple text hierarchy
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',

  // Clear semantic colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',

  // Subtle borders
  border: '#E5E7EB',
  borderLight: '#F3F4F6',

  // Light shadows
  shadow: 'rgba(0, 0, 0, 0.05)',
  overlay: 'rgba(0, 0, 0, 0.3)',

  // Clean chat design
  chat: {
    userBubble: '#3B82F6',
    otherBubble: '#F3F4F6',
    userText: '#FFFFFF',
    otherText: '#1F2937',
  }
};

/* =========================
   Dark Theme (Clean & Simple)
   ========================= */
export const darkTheme: ColorTokens = {
  // Dark blue palette
  primary: '#60A5FA',
  primaryLight: '#1E3A8A',
  primaryDark: '#3B82F6',
  secondary: '#1E293B',

  // Dark backgrounds
  background: '#111827',
  surface: '#1F2937',
  surfaceElevated: '#374151',

  // Dark text hierarchy
  textPrimary: '#F9FAFB',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',

  // Dark semantic colors
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',

  // Dark borders
  border: '#374151',
  borderLight: '#4B5563',

  // Dark shadows
  shadow: 'rgba(0, 0, 0, 0.3)',
  overlay: 'rgba(0, 0, 0, 0.6)',

  // Dark chat design
  chat: {
    userBubble: '#60A5FA',
    otherBubble: '#374151',
    userText: '#111827',
    otherText: '#F9FAFB',
  }
};

export const Colors = lightTheme;
