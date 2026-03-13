'use client'
import { Toaster } from 'crm-project-ui'
import { Footer } from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'
import { CrmSdk } from '@projeto-crm-2026/crm-sdk'

import 'crm-project-ui/index.css'
import './globals.css'
import { FONT_FAMILY } from '@/constants/font'
import { CRM_PUB_KEY } from '@/constants/environments/crm-pub-key'

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
        <CrmSdk publicKey={CRM_PUB_KEY} workspaceId="crm-webpage" />
      </body>
    </html>
  )
}
