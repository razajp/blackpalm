import { ArrowRight, ChevronDown, MapPin, Star } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { copy, images } from '../data'
import { easeOut } from './motion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const reveal = {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[920px] overflow-hidden bg-navy text-white lg:min-h-screen"
    >
      <motion.img
        src={images.hero}
        alt="Cargo vessel moving through an international port"
        className="absolute inset-0 h-[112%] w-full object-cover object-center"
        style={{ y: imageY }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: easeOut }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(17,30,43,0.96) 0%, rgba(17,30,43,0.84) 42%, rgba(17,30,43,0.24) 78%, rgba(17,30,43,0.18) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(17,30,43,0.5) 0%, transparent 28%, transparent 66%, rgba(17,30,43,0.92) 100%)',
        }}
      />

      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
        <div className="origin-left -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
          Fort Lauderdale · Global Logistics
        </div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-shell relative z-10 flex min-h-[920px] items-center pb-44 pt-36 lg:min-h-screen lg:pb-48 lg:pt-40"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          className="max-w-[980px]"
        >
          <motion.div variants={reveal} className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Florida's Premier Logistics Solution hero
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.6rem,8vw,7.2rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
            <motion.span variants={reveal} className="block text-white">
              You Shop,
            </motion.span>
            <motion.span variants={reveal} className="block text-white">
              We <span className="text-accent">Ship.</span>
            </motion.span>
          </h1>

          <motion.div
            variants={reveal}
            className="mt-9 grid max-w-3xl gap-8 border-t border-white/15 pt-7 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-lg text-left text-lg leading-[1.7] text-white/[0.68]">
              {copy.heroSub}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://blackpalm.app/"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_14px_36px_rgba(46,125,82,0.3)]"
              >
                Register Today
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#company"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Discover More
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: easeOut }}
        className="absolute inset-x-0 bottom-0 z-20 border-t border-white/[0.12] bg-navy/40 backdrop-blur-md"
      >
        <div className="container-shell grid min-h-[108px] grid-cols-2 items-center gap-5 py-5 md:grid-cols-[1fr_1fr_1fr_auto]">
          <div className="flex items-center gap-3">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <div>
              <div className="font-display text-lg font-bold text-white">4.8</div>
              <div className="text-xs text-white/45">Google rating</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-accent" />
            <div>
              <div className="text-sm font-semibold text-white">Fort Lauderdale</div>
              <div className="text-xs text-white/45">Florida, USA</div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-semibold text-white">Export · Import · 3PL</div>
            <div className="text-xs text-white/45">One logistics partner</div>
          </div>
          <motion.a
            href="#trust"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeOut' }}
            className="ml-auto hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:flex"
            aria-label="Scroll to company statistics"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
