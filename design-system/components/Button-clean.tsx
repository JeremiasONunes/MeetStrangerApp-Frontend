import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../tokens/colors';
import { TextStyles } from '../tokens/typography';
import { Spacing, BorderRadius, Layout, Opacity } from '../tokens/spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={Opacity.pressed}
    >
      <Text
        style={[
          styles.text,
          styles[`${variant}Text`],
          textStyle,
        ]}
      >
        {loading ? 'Carregando...' : title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    minHeight: Layout.buttonHeight,
  },
  
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  
  md: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  lg: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  
  disabled: {
    opacity: Opacity.disabled,
  },
  fullWidth: {
    width: '100%',
  },
  
  text: {
    ...TextStyles.button,
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: Colors.textPrimary,
  },
  ghostText: {
    color: Colors.primary,
  },
});