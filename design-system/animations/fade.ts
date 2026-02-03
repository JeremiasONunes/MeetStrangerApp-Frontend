import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useFadeIn = (duration: number = 300, delay: number = 0) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [fadeAnim, duration, delay]);

  return fadeAnim;
};

export const useFadeOut = (duration: number = 200) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = (callback?: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  return { fadeAnim, fadeOut };
};

export const createFadeAnimation = (
  value: Animated.Value,
  toValue: number,
  duration: number = 300
) => {
  return Animated.timing(value, {
    toValue,
    duration,
    useNativeDriver: true,
  });
};