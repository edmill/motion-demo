/**
 * AUTO-GENERATED from MOTION.md — do not edit by hand.
 * Run: npm run sync:motion
 */

export const motionTokens = {
  enter: {
    duration: 0.18,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    exitDuration: 0.1,
    distancePx: 8,
  },
  notification: {
    duration: 0.5,
    ease: [0.34, 1.56, 0.64, 1] as [number,number,number,number],
    exitDuration: 0.28,
    distancePx: 48,
    slideFrom: 'bottom',
  },
  press: {
    duration: 0.08,
    ease: [0.34, 1.56, 0.64, 1] as [number,number,number,number],
    scale: 0.96,
  },
} as const

export type MotionToken = keyof typeof motionTokens
