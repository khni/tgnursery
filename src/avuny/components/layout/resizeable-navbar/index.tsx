'use client'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
export function ReanimatedSection({ id, component }: { id: string; component: React.ReactNode }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [key, setKey] = useState(0)

  // useEffect(() => {
  //   if (inView) {
  //     setKey((prev) => prev + 1);
  //   }
  // }, [inView]);

  return (
    <section key={key} ref={ref} id={id}>
      <div key={key}>{component}</div>
    </section>
  )
}

export default function StickyNavbarReanimate({
  navItems,
  children,
  start,
  end,
}: {
  navItems: {
    name: string
    link: string
  }[]
  start?: React.ReactNode
  end?: React.ReactNode
  children?: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {start}
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">{end}</div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            {start}
            <div className="flex justify-between items-center gap-2">
              {/* <div>{end}</div> */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">{end}</div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}

      {/* Navbar */}
    </div>
  )
}
