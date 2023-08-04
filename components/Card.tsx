"use client"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { useState } from "react"
const cardVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      duration: 3,
    },
  },
}

function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return hash
}

function intToRGB(i: number): string {
  const c = (i & 0x00ffffff).toString(16).toUpperCase()
  return "#" + "00000".substring(0, 6 - c.length) + c
}

function getColorFromString(str: string): string {
  return intToRGB(hashCode(str))
}

export default function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="bg-emerald-800 text-3xl border-4 text-white p-4 mb-4 cursor-pointer"
      style={{ backgroundColor: getColorFromString(title) }}
      variants={cardVariants}
      onClick={() => setIsVisible(!isVisible)}
    >
      {title}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            className="text-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
