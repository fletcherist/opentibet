import { Navbar } from '@/components/components'
import './globals.css'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'

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
      <body className={inter.className}>
        {children}
      </body>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H4YQQCN7MK" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-H4YQQCN7MK');
        `}
        </Script>
        {/* Ya.Metrika */}
        <Script id="ya-metrika-script">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(95954530, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:false });`}
        </Script>
        <noscript>
          <div>
            <img
              alt=""
              src="https://mc.yandex.ru/watch/95954530"
              style={{ position: 'absolute', left: -9999 }}
            />
          </div>
        </noscript>
      </Head>
    </html>
  )
}
