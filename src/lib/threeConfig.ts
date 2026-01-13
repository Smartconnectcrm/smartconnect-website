export const THREE_CONFIG = {
  dpr: [1, 2] as [number, number],
  camera: {
    fov: 45,
    position: [0, 0, 6] as [number, number, number],
  },
  performance: {
    frameloop: "demand" as const,
  },
} as const
