import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })


export const metadata: Metadata = {
  title: 'Fullstack Biccas',
  description: 'We’re here to Increase your Productivity',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} >{children}</body>
    </html>
  )
}
