import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 한국어 교육 플랫폼',
  description: '프리미엄 AI 기반 한국어 학습 플랫폼',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-zinc-100">
        {children}
      </body>
    </html>
  )
}
