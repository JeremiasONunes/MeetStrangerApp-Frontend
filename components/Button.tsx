import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button as DSButton } from '../design-system';

// Wrapper para manter compatibilidade com código existente
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({ title, onPress, variant = 'primary', disabled = false, style }: ButtonProps) {
  // Mapear variantes antigas para novas
  const dsVariant = variant === 'outline' ? 'ghost' : variant;
  
  return (
    <DSButton
      title={title}
      onPress={onPress}
      variant={dsVariant as any}
      disabled={disabled}
      style={style}
      fullWidth
    />
  );
}

const styles = StyleSheet.create({});
