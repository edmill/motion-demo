'use client'

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
  { id: 1, type: 'message',  title: 'Message from Sarah',   body: 'Hey, can you review the latest designs?', time: '2m ago',  avatar: 'S'  },
  { id: 2, type: 'payment',  title: 'Payment received',     body: '$2,400.00 from Acme Corp',                time: '15m ago', avatar: '$'  },
  { id: 3, type: 'file',     title: 'Your file was saved',  body: 'design-system-v3.fig has been synced',   time: '1h ago',  avatar: '📄' },
]

const TYPE_BADGE: Record<Notification['type'], string> = {
  message: 'bg-indigo-500/10 border border-indigo-500/25 text-indigo-500',
  payment: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-500',
  file:    'bg-amber-500/10 border border-amber-500/25 text-amber-500',
}

const { duration, ease, exitDuration, distancePx, slideFrom } = motionTokens.notification
const yOffset = slideFrom === 'top' ? -distancePx : distancePx

export function NotificationCardCrafted() {
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

  return (
    <div className="relative h-full flex flex-col">

      <button
        onClick={trigger}
        className="self-start px-5 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-lg mb-6 cursor-pointer border-0"
      >
        Trigger notification
      </button>

      <div className="relative flex-1">
        <AnimatePresence mode="popLayout">
          {notifications.map((notif, i) => (
            <motion.div
              key={notif.uid}
              layout
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
              className="absolute left-0 right-0 bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-start gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              style={{ bottom: `${i * 80}px` }}
            >
              <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-semibold flex-shrink-0 ${TYPE_BADGE[notif.type]}`}>
                {notif.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-100">{notif.title}</span>
                  <span className="text-xs text-slate-500">{notif.time}</span>
                </div>
                <div className="text-xs text-slate-400 leading-snug">{notif.body}</div>
              </div>
              <button
                onClick={() => dismiss(notif.uid)}
                className="bg-transparent border-0 text-slate-500 cursor-pointer text-base leading-none flex-shrink-0"
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
