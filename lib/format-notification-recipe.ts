import { motionTokens } from '@/lib/motion-tokens'

type CubicBezier = readonly [number, number, number, number]

const EASE_LABELS: { label: string; ease: CubicBezier }[] = [
  { label: 'spring', ease: [0.34, 1.56, 0.64, 1] },
  { label: 'decelerate', ease: [0.05, 0.7, 0.1, 1] },
  { label: 'standard', ease: [0.2, 0, 0, 1] },
  { label: 'accelerate', ease: [0.3, 0, 0.8, 0.15] },
]

function easeMatches(a: CubicBezier, b: CubicBezier): boolean {
  return a.every((v, i) => Math.abs(v - b[i]) < 0.0001)
}

function formatEaseLabel(ease: CubicBezier): string {
  const known = EASE_LABELS.find(({ ease: preset }) => easeMatches(ease, preset))
  if (known) return known.label
  return `cubic-bezier(${ease.map((v) => v.toFixed(2)).join(',')})`
}

/** Seconds → human label (500ms, 1.2s). Matches demo footer copy. */
export function formatMotionDuration(seconds: number): string {
  if (seconds >= 1) {
    const value = Number.isInteger(seconds) ? String(seconds) : seconds.toFixed(1)
    return `${value}s`
  }
  return `${Math.round(seconds * 1000)}ms`
}

/**
 * One-line summary of the notification recipe from motion-tokens.ts
 * (synced from MOTION.md). Keep in sync with NotificationCardAfter/Crafted.
 */
export function formatNotificationRecipeSummary(): string {
  const { duration, ease, exitDuration, distancePx, slideFrom } = motionTokens.notification
  const enter = formatMotionDuration(duration)
  const exit = formatMotionDuration(exitDuration)
  const easing = formatEaseLabel(ease)
  const slide =
    slideFrom === 'top' ? 'slide from top' : slideFrom === 'bottom' ? 'slide from bottom' : `slide from ${slideFrom}`

  return `${enter} ${easing} · ${slide} · ${distancePx}px · exits at ${exit}`
}
