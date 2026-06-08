import { CheckCircle2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { copy, images } from '../data'
import { Button } from './Button'
import { fadeLeft, fadeRight, stagger, viewport } from './motion'

const services = [
  {
    title: 'Feight Forwarding',
    text: 'From individual shipments to large-scale logistic operations.',
  },
  {
    title: 'Custom Brokerage',
    text: 'Marked by precision, efficiency, and a focus on client satisfaction.',
  },
  {
    title: 'Warehousing',
    text: 'Designed to meet diverse needs.',
  },
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section id="shipping" className="bg-white">
      <div className="section-shell grid items-start gap-14 lg:grid-cols-12">
        <motion.div
          ref={ref}
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative isolate lg:sticky lg:top-28 lg:col-span-5"
        >
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent/15" />
          <div className="media-frame aspect-[4/5] bg-off-white">
            <motion.img
              src={images.services}
              alt="Black Palm customer service agent"
              style={{ y }}
              className="h-[calc(100%+40px)] w-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-7"
        >
          <div className="section-rule" />
          <motion.p variants={fadeRight} className="eyebrow mb-3">
            Our Services
          </motion.p>
          <motion.h2 variants={fadeRight} className="section-title max-w-[13ch]">
            Wide-Ranging Solutions for Your <span className="text-accent">Shipping Needs</span>
          </motion.h2>
          <motion.p variants={fadeRight} className="section-copy mt-6">
            {copy.services}
          </motion.p>
          <motion.div variants={stagger} className="mt-10 grid gap-4">
            {services.map((service) => (
              <motion.div
                key={`${service.title}-${service.text}`}
                variants={fadeRight}
                whileHover={{ x: 6 }}
                className="group flex items-start gap-5 rounded-2xl border border-black/[0.06] bg-white p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_34px_rgba(0,0,0,0.08)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} />
                <div>
                  <h3 className="font-display text-base font-bold text-navy">{service.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{service.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeRight}>
            <Button href="#warehousing" className="mt-10">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
