import { IBM_Plex_Sans_Thai } from 'next/font/google'

export const IBM_FONTS = IBM_Plex_Sans_Thai({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  subsets: ['latin', 'thai'],
  variable: '--font-ibm-plex-sans-thai'
})
