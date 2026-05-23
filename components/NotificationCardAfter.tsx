'use client'

/**
 * NotificationCardAfter
 *
 * What an AI agent produces WITH the notification recipe from MOTION.md.
 * Reads motionTokens — spring from bottom, exact values from the spec.
 * Prompt used: "read MOTION.md then rebuild the notification card using the notification recipe"
 */

import { useState }                from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { motionTokens }            from '@/lib/motion-tokens'

interface Notification {
  id:     number
  type:   'message' | 'payment' | 'file'
  title:  string
  body:   string
  time:   string
  avatar: string
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  { id: 1, type: 'message',  title: 'Message from Sarah',   body: 'Hey, can you review the latest designs?', time: '2m ago',  avatar: 'S' },
  { id: 2, type: 'payment',  title: 'Payment received',     body: '$2,400.00 from Acme Corp',                time: '15m ago', avatar: '$' },
  { id: 3, type: 'file',     title: 'Your file was saved',  body: 'design-system-v3.fig has been synced',   time: '1h ago',  avatar: '📄' },
]

// Pull directly from motionTokens — generated from MOTION.md
const { duration, ease, exitDuration, distancePx, slideFrom } = motionTokens.notification
const yOffset = slideFrom === 'top' ? -distancePx : distancePx

export function NotificationCardAfter() {
  const [notifications, setNotifications] = useState<(Notification & { uid: number })[]>([])
  const [nextId, setNextId]               = useState(0)

  function trigger() {
    const notif = SAMPLE_NOTIFICATIONS[nextId % SAMPLE_NOTIFICATIONS.length]
    setNotifications(prev => [...prev, { ...notif, uid: Date.now() }])
    setNextId(n => n + 1)
  }

  function dismiss(uid: number) {
    setNotifications(prev => prev.filter(n => n.uid !== uid))
  }

  const TYPE_COLOR = { message: '#6366f1', payment: '#10b981', file: '#f59e0b' }

  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Trigger button — with press recipe */}
      <motion.button
        onClick={trigger}
        whileTap={{
          scale: motionTokens.press.scale,
          transition: { duration: motionTokens.press.duration, ease: [...motionTokens.press.ease] },
        }}
        style={{
          padding: '10px 20px',
          background: '#f97316',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          marginBottom: '24px',
          alignSelf: 'flex-start',
        }}
      >
        Trigger notification
      </motion.button>

      {/* Notification stack — spring from bottom, reads from motionTokens */}
      <div style={{ position: 'relative', flex: 1 }}>
        <AnimatePresence mode="popLayout">
          {notifications.map((notif, i) => {
            const color = TYPE_COLOR[notif.type]
            return (
              <motion.div
                key={notif.uid}
                layout
                /* ✅ Values from motionTokens — generated from MOTION.md notification recipe
                   duration: 0.5s | ease: spring [0.34,1.56,0.64,1] | distance: 48px from bottom */
                initial={{ opacity: 0, y: yOffset }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration, ease: [...ease] },
                }}
                exit={{
                  opacity: 0,
                  y: yOffset / 2,
                  transition: { duration: exitDuration },
                }}
                style={{
                  position: 'absolute',
                  bottom: `${i * 80}px`,
                  left: 0,
                  right: 0,
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: color + '20', border: `1px solid ${color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '600', color, flexShrink: 0,
                }}>
                  {notif.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#f1f5f9' }}>{notif.title}</span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>{notif.time}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.4' }}>{notif.body}</div>
                </div>
                <motion.button
                  onClick={() => dismiss(notif.uid)}
                  whileTap={{ scale: motionTokens.press.scale }}
                  style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', fontSize: '16px', lineHeight: 1, flexShrink: 0 }}
                >
                  ×
                </motion.button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
