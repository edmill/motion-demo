#!/usr/bin/env node
/**
 * sync-motion-tokens.mjs
 * Parses MOTION.md and generates lib/motion-tokens.ts
 * Run: node scripts/sync-motion-tokens.mjs
 * Or:  npm run sync:motion
 */

import fs   from 'fs'
import path from 'path'

const MOTION_MD  = path.join(process.cwd(), 'MOTION.md')
const TOKENS_OUT = path.join(process.cwd(), 'lib', 'motion-tokens.ts')

function parseDuration(raw) {
  const m = raw.split('#')[0].trim().match(/^(\d+(?:\.\d+)?)ms$/i)
  if (!m) throw new Error(`Bad duration: ${raw}`)
  return Number(m[1]) / 1000
}

function parseEasing(raw) {
  const clean = raw.split('#')[0].trim()
  const m = clean.match(/^cubic-bezier\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/)
  if (!m) return null
  return [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])]
}

function parsePx(raw) {
  const m = raw.split('#')[0].trim().match(/^(\d+(?:\.\d+)?)px$/i)
  if (!m) return null
  return Number(m[1])
}

function parseMotionMd(content) {
  const recipes = {}
  const blocks  = content.replace(/\r\n/g, '\n').split(/\n---\n/)
  for (const block of blocks) {
    if (!/^\s*motion:\s*$/m.test(block)) continue
    let current = null
    for (const line of block.split('\n')) {
      const head = line.match(/^  ([a-z][a-z0-9-]*):\s*$/)
      if (head) { current = head[1]; recipes[current] = {}; continue }
      if (!current) continue
      const prop = line.match(/^    ([a-z][a-z0-9-]*):\s*(.+)$/)
      if (prop) recipes[current][prop[1]] = prop[2].trim()
    }
  }
  return recipes
}

function generateTs(recipes) {
  const lines = [
    '/**',
    ' * AUTO-GENERATED from MOTION.md — do not edit by hand.',
    ' * Run: npm run sync:motion',
    ' */',
    '',
    'export const motionTokens = {',
  ]

  for (const [name, fields] of Object.entries(recipes)) {
    const durField = fields['duration'] || fields['item-duration']
    if (!durField || !fields['easing']) continue

    lines.push(`  ${name}: {`)

    try { lines.push(`    duration: ${parseDuration(durField)},`) } catch {}

    const ease = parseEasing(fields['easing'])
    if (ease) lines.push(`    ease: [${ease.join(', ')}] as [number,number,number,number],`)

    if (fields['exit-duration']) {
      try { lines.push(`    exitDuration: ${parseDuration(fields['exit-duration'])},`) } catch {}
    }
    if (fields['distance']) {
      const px = parsePx(fields['distance'])
      if (px !== null) lines.push(`    distancePx: ${px},`)
    }
    if (fields['slide-from']) {
      lines.push(`    slideFrom: '${fields['slide-from'].split('#')[0].trim()}',`)
    }
    if (fields['scale-down']) {
      const s = Number(fields['scale-down'].split('#')[0].trim())
      if (!isNaN(s)) lines.push(`    scale: ${s},`)
    }
    if (fields['stagger-delay']) {
      try { lines.push(`    staggerDelay: ${parseDuration(fields['stagger-delay'])},`) } catch {}
    }

    lines.push(`  },`)
  }

  lines.push('} as const', '', 'export type MotionToken = keyof typeof motionTokens', '')
  return lines.join('\n')
}

// Run
if (!fs.existsSync(MOTION_MD)) {
  console.error('✗ MOTION.md not found')
  process.exit(1)
}

const content = fs.readFileSync(MOTION_MD, 'utf8')
const recipes = parseMotionMd(content)
const count   = Object.keys(recipes).length

if (count === 0) {
  console.error('✗ No recipes found in MOTION.md')
  process.exit(1)
}

fs.mkdirSync(path.dirname(TOKENS_OUT), { recursive: true })
fs.writeFileSync(TOKENS_OUT, generateTs(recipes), 'utf8')

console.log(`✓ motion-tokens.ts generated (${count} recipes: ${Object.keys(recipes).join(', ')})`)
