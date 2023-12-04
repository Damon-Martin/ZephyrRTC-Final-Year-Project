import type { Metadata } from 'next'
import {NextUIProvider} from "@nextui-org/react";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZephyrRTC',
  description: 'Video Confrencing app built using NextJS using WebRTC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="main-container" className={inter.className}>{children}</body>
    </html>
  )
}
