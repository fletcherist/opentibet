import { Navbar } from '@/components/components'
import './globals.css'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'

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
      {/* <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      <script async type="text/javascript" dangerouslySetInnerHTML={{
        __html: `function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'ru' }, 'google_translate_element');
}
`
      }}>
      </script> */}
    </html>
  )
}
