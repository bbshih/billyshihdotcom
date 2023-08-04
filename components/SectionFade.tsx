"use client"
import { motion } from "framer-motion"
export default function SectionFade({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
      className={`min-h-screen py-8 px-4 flex flex-col justify-center items-center ${
        className || ""
      }`}
    >
      <div className="max-w-2xl space-y-8">{children}</div>
    </motion.section>
  )
}
