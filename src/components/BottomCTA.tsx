import { motion } from 'framer-motion'
import { copy } from '../data'
import { Button } from './Button'
import { viewport } from './motion'

export function BottomCTA() {
  return (
    <section className="bg-off-white px-6 py-16 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto max-w-6xl rounded-[28px] bg-navy px-6 py-16 text-center shadow-[0_24px_90px_rgba(27,42,59,0.18)] md:px-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="text-left lg:col-span-7">
            <h2 className="font-display text-[clamp(34px,4.5vw,56px)] font-bold leading-[1.08] text-white">
              Effortless Solutions for Every Shipment
            </h2>
            <p className="mt-6 max-w-prose text-left leading-[1.75] text-white/70">
              {copy.cta}
            </p>
          </div>
          <div className="flex lg:col-span-5 lg:justify-end">
            <Button href="https://blackpalm.app/">
              Register Today
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
