'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Facebook, Phone, MapPin, Crown, Briefcase, Sparkles, ShieldCheck } from 'lucide-react'

import { cn } from '@/utilities/ui'
import { SocialLinks } from '@/avuny/components/layout/Footer/socials'
import { Separator } from '@/components/ui/separator'
import { FooterData } from '@/avuny/components/layout/Footer/types'

interface FooterClientProps {
  data: FooterData
  className?: string
}

export default function Footer({ data, className }: FooterClientProps) {
  const year = new Date().getFullYear()

  const creditLabel =
    data.footer.creditType === 'designed-developed' ? 'Designed & Developed by' : 'Developed by'

  return (
    <footer className={cn('bg-background text-foreground border-t border-border mt-16', className)}>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-2"
          >
            <div className="flex items-center gap-1">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full
      bg-sky-500/10 text-sky-500 dark:text-sky-400 dark:bg-sky-400/10"
              >
                <ShieldCheck className="h-5 w-5" />
              </span>

              <h1 className="text-2xl font-semibold tracking-tight text-sky-600 dark:text-sky-400">
                {data.footer.headline}
              </h1>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {data.footer.subheadline}
            </p>
          </motion.div>
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-lg">Contact Us</h4>

            {data.primaryContact?.phones &&
              data.primaryContact.phones.map((phone) => (
                <div
                  key={phone.id}
                  className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phone.phone}</span>
                </div>
              ))}

            {data.primaryContact?.addresses &&
              data.primaryContact.addresses.map((address) => (
                <div
                  key={address.id}
                  className="flex items-start justify-center md:justify-start gap-2 text-muted-foreground"
                >
                  <MapPin className="w-4 h-4 mt-1 shrink-0" />
                  <span>{address.address}</span>
                </div>
              ))}
          </motion.div>

          {/* Socials */}
          <SocialLinks socials={data.primaryContact?.socials} />
        </div>

        <Separator className="my-10" />

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            © {year} {data.footer.companyName}. All rights reserved.{' '}
            <span className="block sm:inline">
              {creditLabel}{' '}
              {data.footer.developerUrl ? (
                <a
                  href={data.footer.developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sky-500"
                >
                  {data.footer.developerName}
                </a>
              ) : (
                data.footer.developerName
              )}
            </span>
          </p>

          {/* <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-sky-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sky-500">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
