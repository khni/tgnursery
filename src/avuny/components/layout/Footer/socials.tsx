'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Globe } from 'lucide-react'
import { SiteGeneral } from '@/payload-types'

type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'youtube'

interface SocialLinksProps {
  socials?: NonNullable<SiteGeneral['primaryContact']>['socials']
  title?: string
  className?: string
}

const socialIcons: Record<SocialType, React.ReactNode> = {
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
}

export function SocialLinks({ socials, title = 'Follow Us', className = '' }: SocialLinksProps) {
  if (!socials?.length) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`space-y-3 ${className}`}
    >
      {title && <h4 className="font-semibold text-lg">{title}</h4>}

      <div className="flex justify-center md:justify-start gap-4">
        {socials.map((social) => (
          <Link
            key={social.id}
            href={social.url}
            aria-label={social.name || social.type}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-sky-500 transition-colors"
          >
            {socialIcons[social.type] ?? <Globe className="w-5 h-5" />}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
