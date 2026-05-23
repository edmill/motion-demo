/**
 * AUTO-GENERATED from MOTION.md — do not edit by hand.
 * Run: npm run sync:motion
 */

export const motionTokens = {
  enter: {
    duration: 0.3,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    distancePx: 16,
  },
  modal: {
    duration: 0.35,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    distancePx: 12,
  },
  toast: {
    duration: 0.3,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    distancePx: 32,
    slideFrom: 'top',
  },
  notification: {
    duration: 0.5,
    ease: [0.34, 1.56, 0.64, 1] as [number,number,number,number],
    exitDuration: 0.28,
    distancePx: 48,
    slideFrom: 'top',
  },
  drawer: {
    duration: 0.4,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    slideFrom: 'right',
  },
  press: {
    duration: 0.12,
    ease: [0.34, 1.56, 0.64, 1] as [number,number,number,number],
    scale: 0.97,
  },
  hover: {
    duration: 0.15,
    ease: [0.2, 0, 0, 1] as [number,number,number,number],
  },
  stagger: {
    duration: 0.25,
    ease: [0.05, 0.7, 0.1, 1] as [number,number,number,number],
    staggerDelay: 0.04,
  },
  error: {
    duration: 0.15,
    distancePx: 6,
  },
  skeleton: {
    duration: 1.2,
    ease: [0.2, 0, 0, 1] as [number,number,number,number],
  },
} as const

export type MotionToken = keyof typeof motionTokens
