"use client";
import { motion, useScroll } from "framer-motion";
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-slate-500 origin-[0%] z-10"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
