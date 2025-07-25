import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Barlow, Fraunces } from "next/font/google"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-barlow",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Sunnyside Agency - We Are Creatives",
  description: "Transform your brand with our full-service creative agency",
  icons: {
    icon: "/icons/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  )
}
