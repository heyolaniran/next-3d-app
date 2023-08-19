import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next 3D with IA',
  description: 'Interactive catalog Model with IA',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
