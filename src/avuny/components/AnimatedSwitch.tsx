'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ReactNode } from 'react'

interface AnimatedSwitchProps {
  show: boolean
  first: ReactNode
  second: ReactNode
}

export function AnimatedSwitch({ show, first, second }: AnimatedSwitchProps) {
  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="first"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {first}
        </motion.div>
      ) : (
        <motion.div
          key="second"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          {second}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
