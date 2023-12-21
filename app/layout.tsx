import { Navbar } from '@/components/components'
import './globals.css'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import Script from 'next/script'

const inter = Unbounded({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Open Tibet — Эксклюзивные маршруты по доступным ценам',
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
    <html>
      <body className={inter.className} id='google_translate_element'>
        {children}
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-H4YQQCN7MK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-H4YQQCN7MK');
        `}
      </Script>
    </html>
  )
}
