export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 19,
  '2xl': 22,
  '3xl': 26,
  '4xl': 30,
  title: 26,
  subtitle: 17,
  body: 15,
  caption: 13,
  small: 11,
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
  relaxed: 1.5,
  loose: 1.7,
  chat: 1.3,
} as const;

export const LetterSpacing = {
  tight: -0.3,
  normal: 0,
  wide: 0.3,
  button: 0.2,
} as const;

// Combinações pré-definidas para uso comum
export const TextStyles = {
  h1: {
    fontSize: FontSizes['4xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights.tight,
    letterSpacing: LetterSpacing.tight,
  },
  h2: {
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights.tight,
    letterSpacing: LetterSpacing.tight,
  },
  h3: {
    fontSize: FontSizes['2xl'],
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights.normal,
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: FontWeights.bold,
    lineHeight: LineHeights.tight,
    letterSpacing: LetterSpacing.tight,
  },
  subtitle: {
    fontSize: FontSizes.subtitle,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.normal,
  },
  body: {
    fontSize: FontSizes.body,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.relaxed,
  },
  bodyMedium: {
    fontSize: FontSizes.body,
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.normal,
  },
  caption: {
    fontSize: FontSizes.caption,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.normal,
  },
  small: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.normal,
  },
  chatMessage: {
    fontSize: FontSizes.body,
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.chat,
  },
  button: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    lineHeight: LineHeights.normal,
    letterSpacing: LetterSpacing.button,
  },
} as const;