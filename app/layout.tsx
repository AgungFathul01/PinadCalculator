import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pinad Calculator',
  description: 'Created by agungfathul',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
