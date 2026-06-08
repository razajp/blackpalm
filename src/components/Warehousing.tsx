import { motion } from 'framer-motion'
import { copy } from '../data'
import { easeOut, stagger, viewport } from './motion'

export function Warehousing() {
  const words = ['Warehousing', 'and', 'Distribution']

  return (
    <section
      id="warehousing"
      className="relative overflow-hidden bg-navy py-32 text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="section-shell relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="eyebrow mb-3">
              3RD Party Logistics
            </motion.p>
            <h2 className="font-display text-fluid-h2 font-bold leading-tight tracking-tight text-white">
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className={`mr-3 inline-block ${index === 2 ? 'text-accent' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: easeOut },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
              className="mt-6 max-w-prose text-left leading-[1.75] text-white/70"
            >
              {copy.warehousing}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-navy"
              >
                Partner with us
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm lg:col-span-5"
          >
            {['Secure storage', 'Space management', 'Advanced security'].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0">
                <span className="text-sm text-white/65">{item}</span>
                <span className="font-display text-sm font-semibold text-white">Included</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
