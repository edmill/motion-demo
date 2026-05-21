import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MOTION.md Demo — craftedby.ai',
  description: 'Before and after: what AI builds without vs with a motion spec.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
