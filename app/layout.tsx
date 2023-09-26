"use client"
import { AudioPlayer, SideBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import {Toaster} from "react-hot-toast"
import { Providers } from '@/reduxa/provider'


export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Spotify clone for playing song',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex bg-black opacity-95">
        <Providers>
        <SideBar />
        <Toaster />
        {children}
        <AudioPlayer />
        </Providers>
        </body>
    </html>
  )
}
