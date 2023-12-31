import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DarkModeContextProvider } from '../store/darkMode'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diego - Front-end developer',
  description: 'Portfolio by Diego Ramos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkModeContextProvider>
        <body className={inter.className} id="home">
          {children}
        </body>
      </DarkModeContextProvider>
    </html>
  )
}
