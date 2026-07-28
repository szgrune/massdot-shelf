import type {Metadata} from 'next'
import localFont from 'next/font/local'
import {Noto_Sans} from 'next/font/google'

import './globals.css'

const deAetna = localFont({
  src: '../../public/fonts/DeAetna-Subhead.woff2',
  variable: '--font-deaetna',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-noto-sans',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MassDOT Shelf',
    template: '%s · MassDOT Shelf',
  },
  description:
    'Summer 2026 work from The Lab at the Massachusetts Department of Transportation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${deAetna.variable} ${notoSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
