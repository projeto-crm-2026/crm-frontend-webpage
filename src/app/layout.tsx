import type { Metadata } from 'next'
import { Toaster } from 'crm-project-ui'
import { Footer } from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'

import 'crm-project-ui/index.css'
import './globals.css'
import { FONT_FAMILY } from '@/constants/font'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`bg-neutral-50 text-neutral-700 ${FONT_FAMILY.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
