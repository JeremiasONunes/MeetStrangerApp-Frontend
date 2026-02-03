import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, Animated } from 'react-native';
import { Colors } from '../tokens/colors';
import { Spacing, BorderRadius, Shadows } from '../tokens/spacing';
import { usePressAnimation } from '../animations/interactions';

export type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: keyof typeof Spacing;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export function Card({
  children,
  variant = 'default',
  padding = 'lg',
  onPress,
  style,
  disabled = false,
}: CardProps) {
  const pressAnimation = usePressAnimation(0.98);
  const isInteractive = !!onPress && !disabled;

  if (isInteractive) {
    return (
      <Animated.View style={[pressAnimation.transform]}>
        <TouchableOpacity
          style={[
            styles.base,
            styles[variant],
            { padding: Spacing[padding] },
            disabled && styles.disabled,
            style,
          ]}
          onPress={onPress}
          onPressIn={pressAnimation.onPressIn}
          onPressOut={pressAnimation.onPressOut}
          disabled={disabled}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <View
      style={[
        styles.base,
        styles[variant],
        { padding: Spacing[padding] },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.card,
    backgroundColor: Colors.surface,
  },
  
  default: {
    backgroundColor: Colors.surface,
  },
  
  elevated: {
    backgroundColor: Colors.surfaceElevated,
    ...Shadows.md,
    shadowColor: Colors.shadow,
  },
  
  outlined: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  
  disabled: {
    opacity: 0.6,
  },
});