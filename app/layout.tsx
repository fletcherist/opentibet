import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Open Tibet - Эксклюзивные маршруты по доступным ценам',
  description: 'Откройте для себя Тибет',
  openGraph: {
    description: 'Эксклюзивные маршруты в Тибет по доступным ценам',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
