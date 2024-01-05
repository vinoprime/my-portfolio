import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProviders } from "./providers"
import { Lines } from "@/Components/Lines"
import { Header } from "@/Components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinoth Thulukanam',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProviders>
          <Lines />
          <Header />
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}
