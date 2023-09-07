import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Pokefun',
  description: 'The ultimate Pokemon quiz application!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
