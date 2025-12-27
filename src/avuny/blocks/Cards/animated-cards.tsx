'use client'

import { CardHeader, CardTitle, CardContent, Card } from '@/components/ui/card'

import { cn } from '@/utilities/ui'
import { motion, useMotionValue, useTransform } from 'motion/react'

import { useState } from 'react'

// 🌟 Types
export interface AnimatedCardData {
  title: string
  description: string
  color: string // e.g. "from-pink-400 via-pink-500 to-pink-600"
  sparkleColor?: string
  emoji?: string
}

interface AnimatedCardsSectionProps {
  headline?: string
  cards: AnimatedCardData[]
  buttonText?: string
  buttonHref?: string
}

export default function AnimatedCardsSection({
  headline: title = 'Our Stages',
  cards: data,
  buttonText,
  buttonHref,
}: AnimatedCardsSectionProps) {
  return (
    <div className="py-16 px-6 md:px-12 relative overflow-hidden">
      {/* ✨ Background pulse */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.5),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] animate-pulse" />

      {/* Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-500 to-orange-500 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
      )}

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {data.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
          >
            <MagicParallaxCard stage={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Button (optional) */}
      {/* {buttonText && buttonHref && (
        <div className="mt-12 flex justify-center">
          <Link
            href={buttonHref}
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-sky-500 to-orange-400 hover:from-orange-400 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-orange-300/50 dark:hover:shadow-sky-500/40"
          >
            {buttonText}
          </Link>
        </div>
      )} */}

      {/* 🔁 Keyframe for animated border spin */}
      <style>{`
        @keyframes border-spin {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-border-spin {
          background-size: 200% 200%;
          animation: border-spin 6s linear infinite;
        }
      `}</style>
    </div>
  )
}

// 💎 Magic Parallax Card with Colored Sparkles
function MagicParallaxCard({ stage }: { stage: AnimatedCardData }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])
  const [sparkles, setSparkles] = useState<{ x: number; y: number }[]>([])
  const [isHover, setIsHover] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xVal = e.clientX - rect.left - rect.width / 2
    const yVal = e.clientY - rect.top - rect.height / 2
    x.set(xVal / 4)
    y.set(yVal / 4)
    setSparkles((prev) => [
      ...prev.slice(-4),
      { x: e.clientX - rect.left, y: e.clientY - rect.top },
    ])
  }

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false)
        setSparkles([])
        x.set(0)
        y.set(0)
      }}
      className="transition-transform duration-300 relative"
    >
      <Card
        className={cn(
          'relative overflow-hidden group border-none rounded-2xl bg-gradient-to-r p-[2px]',
          stage.color,
        )}
      >
        {/* Animated gradient glow */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 via-orange-400 to-pink-400 blur-xl opacity-0 group-hover:opacity-100 animate-border-spin transition duration-700',
            isHover && 'opacity-100',
          )}
        />

        {/* Inner content */}
        <div className="relative z-10 bg-muted rounded-2xl p-6 h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
          <div className="absolute -top-6 -right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            {stage.emoji}
          </div>

          <CardHeader>
            <CardTitle
              className={cn(
                'text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
                stage.color,
              )}
            >
              {stage.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
          </CardContent>
        </div>

        {/* ✨ Colored Sparkles */}
        {sparkles.map((sparkle, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: sparkle.y,
              left: sparkle.x,
              backgroundColor: stage.sparkleColor ?? 'rgba(255,255,255,0.9)',
              filter: 'blur(1px)',
            }}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        ))}
      </Card>
    </motion.div>
  )
}
