'use client'

/**
 * NotificationCardBefore
 *
 * What an AI agent produces with NO motion spec.
 * Generic fade-in, default timing, no personality.
 * Prompt used: "build me a notification card component that animates in"
 */

import { useState } from 'react'

interface Notification {
  id: number
  type: 'message' | 'payment' | 'file'
  title: string
  body: string
  time: string
  avatar: string
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  { id: 1, type: 'message',  title: 'Message from Sarah',   body: 'Hey, can you review the latest designs?', time: '2m ago',  avatar: 'S' },
  { id: 2, type: 'payment',  title: 'Payment received',     body: '$2,400.00 from Acme Corp',                time: '15m ago', avatar: '$' },
  { id: 3, type: 'file',     title: 'Your file was saved',  body: 'design-system-v3.fig has been synced',   time: '1h ago',  avatar: '📄' },
]

export function NotificationCardBefore() {
  const [shown, setShown]   = useState<number[]>([])
  const [nextId, setNextId] = useState(0)

  function trigger() {
    const notif = SAMPLE_NOTIFICATIONS[nextId % SAMPLE_NOTIFICATIONS.length]
    setShown(prev => [...prev, notif.id + nextId * 10])
    setNextId(n => n + 1)
  }

  function dismiss(id: number) {
    setShown(prev => prev.filter(i => i !== id))
  }

  const TYPE_COLOR = { message: '#6366f1', payment: '#10b981', file: '#f59e0b' }

  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Trigger button — no motion recipe */}
      <button
        onClick={trigger}
        style={{
          padding: '10px 20px',
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #334155',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          marginBottom: '24px',
          alignSelf: 'flex-start',
        }}
      >
        Trigger notification
      </button>

      {/* Notification stack — generic fade, no personality */}
      <div style={{ position: 'relative', flex: 1 }}>
        {shown.map((id, i) => {
          const notif = SAMPLE_NOTIFICATIONS[(id) % SAMPLE_NOTIFICATIONS.length]
          const color = TYPE_COLOR[notif.type]
          return (
            <div
              key={id}
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
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                /* ⚠️ Generic agent output — just opacity fade, no spring,
                   no distance, no personality. CSS animation because
                   the agent didn't know to use Framer Motion properly. */
                animation: 'genericFadeIn 0.3s ease forwards',
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
              <button onClick={() => dismiss(id)} style={{ background: 'none', border: 'none', color: '#475569', cursor: 'pointer', fontSize: '16px', lineHeight: 1, flexShrink: 0 }}>×</button>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes genericFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
