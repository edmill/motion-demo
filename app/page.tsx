'use client'

import { NotificationCardBefore }   from '@/components/NotificationCardBefore'
import { NotificationCardAfter }    from '@/components/NotificationCardAfter'
import { NotificationCardCrafted }  from '@/components/NotificationCardCrafted'
import { formatNotificationRecipeSummary } from '@/lib/format-notification-recipe'

const notificationRecipeSummary = formatNotificationRecipeSummary()

export default function DemoPage() {
  return (
    <main style={{
      minHeight: '100vh',
      boxSizing: 'border-box',
      background: '#0a0a0e',
      padding: '40px 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '600px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'monospace', fontSize: '12px', color: '#f97316',
          background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)',
          borderRadius: '20px', padding: '4px 14px', marginBottom: '20px',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f97316', display: 'inline-block' }} />
          MOTION.md demo
        </div>
        <h1 style={{
          fontSize: '36px', fontWeight: '700', lineHeight: 1.1,
          marginBottom: '12px', letterSpacing: '-0.02em',
        }}>
          Same component.<br />
          <span style={{ color: '#f97316' }}>Different feeling.</span>
        </h1>
        <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, fontWeight: 300 }}>
          Left: no motion spec. Right two: same notification recipe with MOTION.md applied.
        </p>
      </div>

      {/* Side by side panels */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2px',
        width: '100%',
        maxWidth: '1280px',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #1e293b',
      }}>

        {/* Before */}
        <div style={{ background: '#0f0f16', padding: '32px', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444',
            }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Without MOTION.md
            </span>
          </div>
          <div style={{
            fontFamily: 'monospace', fontSize: '11px', color: '#475569',
            background: '#0a0a0e', border: '1px solid #1e293b',
            borderRadius: '6px', padding: '10px 14px', marginBottom: '24px',
          }}>
            <span style={{ color: '#64748b' }}>prompt:</span>{' '}
            <span style={{ color: '#94a3b8' }}>"build me a notification card that animates in"</span>
          </div>
          <div style={{ height: '320px', position: 'relative', overflow: 'hidden' }}>
            <NotificationCardBefore />
          </div>
          <div style={{
            marginTop: '20px', padding: '12px', background: 'rgba(239,68,68,0.06)',
            border: '1px solid rgba(239,68,68,0.15)', borderRadius: '8px',
            fontSize: '12px', color: '#94a3b8', lineHeight: 1.6,
          }}>
            <span style={{ color: '#ef4444', fontWeight: '500' }}>Generic output:</span>{' '}
            0.3s ease fade. No personality. No spring. No brand.
          </div>
        </div>

        {/* After */}
        <div style={{ background: '#0d0d18', padding: '32px', borderLeft: '1px solid #1e293b', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%', background: '#10b981',
            }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              With MOTION.md
            </span>
          </div>
          <div style={{
            fontFamily: 'monospace', fontSize: '11px', color: '#475569',
            background: '#0a0a0e', border: '1px solid #1e293b',
            borderRadius: '6px', padding: '10px 14px', marginBottom: '24px',
          }}>
            <span style={{ color: '#64748b' }}>prompt:</span>{' '}
            <span style={{ color: '#f97316' }}>"read MOTION.md then build the notification card"</span>
          </div>
          <div style={{ height: '320px', position: 'relative', overflow: 'hidden' }}>
            <NotificationCardAfter />
          </div>
          <div style={{
            marginTop: '20px', padding: '12px', background: 'rgba(16,185,129,0.06)',
            border: '1px solid rgba(16,185,129,0.15)', borderRadius: '8px',
            fontSize: '12px', color: '#94a3b8', lineHeight: 1.6,
          }}>
            <span style={{ color: '#10b981', fontWeight: '500' }}>Recipe applied:</span>{' '}
            {notificationRecipeSummary}
          </div>
        </div>

        {/* Crafted */}
        <div style={{ background: '#0d0d18', padding: '32px', borderLeft: '1px solid #1e293b', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%', background: '#f97316',
            }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Notification recipe
            </span>
          </div>
          <div style={{
            fontFamily: 'monospace', fontSize: '11px', color: '#475569',
            background: '#0a0a0e', border: '1px solid #1e293b',
            borderRadius: '6px', padding: '10px 14px', marginBottom: '24px',
          }}>
            <span style={{ color: '#64748b' }}>prompt:</span>{' '}
            <span style={{ color: '#f97316' }}>"read MOTION.md then build the notification card"</span>
          </div>
          <div style={{ height: '320px', position: 'relative', overflow: 'hidden' }}>
            <NotificationCardCrafted />
          </div>
          <div style={{
            marginTop: '20px', padding: '12px', background: 'rgba(249,115,22,0.06)',
            border: '1px solid rgba(249,115,22,0.15)', borderRadius: '8px',
            fontSize: '12px', color: '#94a3b8', lineHeight: 1.6,
          }}>
            <span style={{ color: '#f97316', fontWeight: '500' }}>Recipe applied:</span>{' '}
            {notificationRecipeSummary}
          </div>
        </div>
      </div>

      {/* Command reference */}
      <div style={{
        marginTop: '32px', maxWidth: '900px', width: '100%',
        background: '#0f0f16', border: '1px solid #1e293b',
        borderRadius: '12px', padding: '28px 32px',
      }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
          How to reproduce this
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            ['1', 'npx @edmill/motion-md init --preset linear', 'Generate MOTION.md + SKILL.md'],
            ['2', '# Edit MOTION.md — add the notification recipe', 'Define how notifications should feel'],
            ['3', 'npm run sync:motion', 'Generate lib/motion-tokens.ts from MOTION.md'],
            ['4', 'claude "read MOTION.md then build the notification card"', 'Agent reads spec, applies it'],
          ].map(([num, cmd, desc]) => (
            <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: '600', color: '#f97316', marginTop: '2px',
              }}>{num}</div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#f1f5f9' }}>{cmd}</div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '13px', color: '#334155' }}>
        Built by{' '}
        <a href="https://craftedby.ai/motion-md" style={{ color: '#f97316', textDecoration: 'none' }}>
          craftedby.ai
        </a>
        {' · '}
        <a href="https://github.com/edmill/motion-md" style={{ color: '#475569', textDecoration: 'none' }}>
          github.com/edmill/motion-md
        </a>
      </div>
    </main>
  )
}
