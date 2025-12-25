import Image from 'next/image'

import { ThemeSwitcher } from '@/providers/Theme/ThemeSelector'

import Footer from '@/avuny/components/layout/Footer'
import { getPayloadMediaUrl } from '@/avuny/utils'
import StickyNavbarReanimate from '@/avuny/components/layout/resizeable-navbar'

type MainLayoutProps = {
  children: React.ReactNode
  navItems: {
    name: string
    link: string
  }[]
  branding: any
  footer: any
  primaryContact: any
}

export default function MainLayout({
  children,
  navItems,
  branding,
  footer,
  primaryContact,
}: MainLayoutProps) {
  const NavbarLogo = () => (
    <Image
      src={getPayloadMediaUrl(branding?.logo) || ''}
      alt="Logo"
      width={60}
      height={30}
      priority
    />
  )

  return (
    <StickyNavbarReanimate
      start={<NavbarLogo />}
      end={
        <div className="flex items-center gap-2">
          <ThemeSwitcher variant="dropdown" />
        </div>
      }
      navItems={navItems}
    >
      {children}
      <Footer data={{ footer, primaryContact }} />
    </StickyNavbarReanimate>
  )
}
