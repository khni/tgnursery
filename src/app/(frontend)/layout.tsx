import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import ogImage from '../../../public/opengraph-image.jpg'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import MainLayout from '@/avuny/components/layout'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { navItems } from '@/avuny/features/navItems'
import { buildNav } from '@/utilities/buildNav'
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })
  const { footer, branding, primaryContact } = await payload.findGlobal({ slug: 'site-general' })

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <MainLayout
            branding={branding}
            footer={footer}
            primaryContact={primaryContact}
            navItems={navItems}
          >
            {/* <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            /> */}

            {/* <Header /> */}
            {children}
          </MainLayout>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'TG Nursery – Summer & Winter Camps in Mohandseen',
  description:
    'Join TG Nursery in Mohandseen for enriching Summer and Winter camps. Fun activities, learning, and skill development for your child.',
  openGraph: {
    title: 'TG Nursery – Summer & Winter Camps in Mohandseen',
    description:
      'Enroll your child in Topo Gigio Nursery camps. Fun, learning, and creativity for every child in Mohandseen.',
    url: getServerSideURL(),
    type: 'website',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: 'TG Nursery ',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "Topo Gigio Nursery – Summer & Winter Camps in Mohandseen",
  //   description: "Enroll your child in Topo Gigio Nursery camps. Fun, learning, and creativity for every child in Mohandseen.",
  //   creator: '@TopoGigioNursery', // your Twitter handle
  //   images: [`${getServerSideURL()}/og-image.jpg`],
  // },
  icons: {
    icon: '/favicon.ico', // standard favicon
    // shortcut: '/favicon-16x16.png', // optional smaller shortcut icon
    // apple: '/apple-touch-icon.png'   // optional Apple touch icon
  },
}
