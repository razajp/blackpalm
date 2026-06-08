import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navItems } from '../data'
import { Logo } from './Logo'
import { easeOut } from './motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 64)

      let currentHref = '#home'
      for (const item of navItems) {
        const element = document.querySelector(item.href)
        if (element && element.getBoundingClientRect().top <= 140) {
          currentHref = item.href
        }
      }
      setActiveHref(currentHref)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navColor = scrolled ? 'text-[#374151]' : 'text-white/[0.72]'
  const activeColor = scrolled ? 'text-accent' : 'text-white'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
    >
      <div
        className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 transition-all duration-500 md:px-6 ${
          scrolled
            ? 'rounded-2xl border border-black/[0.06] bg-white/[0.92] shadow-[0_14px_50px_rgba(17,30,43,0.12)] backdrop-blur-xl'
            : 'border-b border-white/15 bg-transparent'
        }`}
      >
        <Logo light={!scrolled} />

        <motion.nav
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
              }}
              className={`relative py-2 text-[13px] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                activeHref === item.href
                  ? `${activeColor} after:scale-x-100`
                  : `${navColor} after:scale-x-0 hover:text-accent hover:after:scale-x-100`
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        <a
          href="https://blackpalm.app/"
          className={`group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 lg:inline-flex ${
            scrolled
              ? 'bg-navy text-white hover:bg-navy-dark'
              : 'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/15'
          }`}
        >
          Export / Import
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          aria-label="Open menu"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
            scrolled ? 'border-black/10 text-navy' : 'border-white/25 text-white'
          }`}
          onClick={() => setOpen(true)}
        >
          <Menu size={20} strokeWidth={1.7} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
                onClick={() => setOpen(false)}
              >
                <X size={21} strokeWidth={1.7} />
              </button>
            </div>

            <nav className="mt-16 border-t border-white/10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.055, duration: 0.4, ease: easeOut }}
                  className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-semibold text-white"
                >
                  {item.label}
                  <span className="font-body text-xs font-medium text-white/35">0{index + 1}</span>
                </motion.a>
              ))}
            </nav>

            <a
              href="https://blackpalm.app/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white"
            >
              Export / Import
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
