import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../tokens/colors';
import { TextStyles } from '../tokens/typography';
import { Spacing, BorderRadius, Layout, Opacity } from '../tokens/spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

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
  const handlePress = () => {
    if (!disabled && !loading) {
      onPress();
    }
  };

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
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          styles[`${variant}Text`],
          styles[`${size}Text`],
          disabled && styles.disabledText,
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
    borderRadius: BorderRadius.button,
    minHeight: Layout.minTouchTarget,
  },
  
  // Variants
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
  danger: {
    backgroundColor: Colors.error,
  },
  
  // Sizes
  sm: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    minHeight: 44,
  },
  md: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    minHeight: 52,
  },
  lg: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xl,
    minHeight: 56,
  },
  
  // States
  disabled: {
    backgroundColor: Colors.border,
    opacity: Opacity.disabled,
  },
  fullWidth: {
    width: '100%',
  },
  
  // Text styles
  text: {
    ...TextStyles.button,
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  primaryText: {
    color: Colors.background,
    fontWeight: '600',
  },
  secondaryText: {
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  ghostText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  dangerText: {
    color: Colors.background,
    fontWeight: '600',
  },
  disabledText: {
    color: Colors.textTertiary,
  },
  
  // Size text variants
  smText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
  },
  mdText: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
  },
  lgText: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
});