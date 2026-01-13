export const MOTION = {
  ease: [0.22, 1, 0.36, 1] as const,
  fast: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  base: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  slow: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },

  fadeUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },

  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
} as const
