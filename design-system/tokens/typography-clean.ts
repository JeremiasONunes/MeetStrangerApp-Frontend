// Simple typography system
export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
} as const;

export const FontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const LineHeights = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
} as const;

// Clean text styles
export const TextStyles = {
  h1: {
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights.tight,
  },
  h2: {
    fontSize: FontSizes['2xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights.tight,
  },
  h3: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights.normal,
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights.normal,
  },
  body: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.relaxed,
  },
  caption: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.normal,
  },
  small: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.normal,
  },
  button: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.normal,
  },
} as const;