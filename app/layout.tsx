import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { IBM_FONTS } from '@/app/fonts/IBMSansThai'

export const metadata: Metadata = {
  title: 'ESG Hackathon',
  description: 'ESG Hackathon',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='th'>
      <body
        className={`${IBM_FONTS.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
