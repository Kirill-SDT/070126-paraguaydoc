import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paraguaydoc — ВНЖ и ПМЖ Парагвая | Прозрачная иммиграция',
  description: 'Оформление ВНЖ и ПМЖ Парагвая с четкими сроками и ценами. Базовый ВНЖ $1,400 (6-7 мес), Ускоренный $2,200 (2.5-4 мес), ПМЖ через SUACE от $6,000.',
  openGraph: {
    title: 'Paraguaydoc — Иммиграция в Парагвай',
    description: 'Прозрачная иммиграция в Парагвай с четкими сроками и ценами',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-display">
        {children}
      </body>
    </html>
  )
}
