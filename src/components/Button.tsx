import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'green' | 'navy' | 'outlineGreen' | 'outlineWhite'
  className?: string
}

const variants = {
  green:
    'bg-accent text-white hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 border border-accent',
  navy:
    'bg-navy text-white hover:bg-navy-dark hover:shadow-lg border border-navy',
  outlineGreen:
    'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white',
  outlineWhite:
    'bg-transparent text-white border-2 border-white/40 hover:border-white/80 hover:bg-white/10',
}

export function Button({ children, href = '#contact', variant = 'green', className = '' }: ButtonProps) {
  return (
    <motion.a
      href={href}
      className={`group relative isolate inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      initial={false}
      animate="rest"
      whileInView="rest"
    >
      <span className="absolute inset-0 -z-10 translate-x-[-120%] bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
      <span>{children}</span>
      <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
        <ArrowRight size={17} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
      </motion.span>
    </motion.a>
  )
}
