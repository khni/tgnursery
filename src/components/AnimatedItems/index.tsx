'use client'

import { motion } from 'motion/react'

type AnimatedItemsProps = {
  items?: string[]
  bullet?: React.ReactNode
  delayStep?: number
}

export function AnimatedItems({ items, bullet = '•', delayStep = 0.04 }: AnimatedItemsProps) {
  return (
    <ul className="space-y-2">
      {items?.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-start gap-2 text-sm"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * delayStep }}
        >
          <span className="text-sky-500 dark:text-sky-400">{bullet}</span>
          <span className="leading-relaxed text-slate-700 dark:text-slate-300">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}
