import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useSlideUp = (duration: number = 300, delay: number = 0) => {
  const slideAnim = useRef(new Animated.Value(20)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return {
    transform: [{ translateY: slideAnim }],
    opacity: opacityAnim,
  };
};

export const useSlideIn = (
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  duration: number = 300,
  delay: number = 0
) => {
  const slideAnim = useRef(new Animated.Value(getInitialValue(direction))).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const transform = getTransform(direction, slideAnim);

  return {
    transform,
    opacity: opacityAnim,
  };
};

const getInitialValue = (direction: 'left' | 'right' | 'up' | 'down') => {
  switch (direction) {
    case 'left':
      return -20;
    case 'right':
      return 20;
    case 'up':
      return 20;
    case 'down':
      return -20;
    default:
      return 20;
  }
};

const getTransform = (direction: 'left' | 'right' | 'up' | 'down', animValue: Animated.Value) => {
  switch (direction) {
    case 'left':
    case 'right':
      return [{ translateX: animValue }];
    case 'up':
    case 'down':
      return [{ translateY: animValue }];
    default:
      return [{ translateY: animValue }];
  }
};