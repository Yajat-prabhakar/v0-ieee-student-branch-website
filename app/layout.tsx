import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter, Manrope } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const _manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'IEEE BVIMR Student Branch',
  description: 'IEEE BVIMR Student Branch - Advancing Technology for Humanity. Join 40+ members in Region 10 (Asia Pacific). Explore our events, council, and affinity groups.',
  generator: 'v0.app',
  keywords: 'IEEE, Student Branch, BVIMR, Region 10, Asia Pacific, Technology, Engineering',
  authors: [{ name: 'IEEE BVIMR Student Branch' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'IEEE BVIMR Student Branch',
    description: 'IEEE BVIMR Student Branch - Advancing Technology for Humanity',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${_inter.variable} ${_manrope.variable} font-body antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
