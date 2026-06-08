import { Award, Monitor, SlidersHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { copy } from '../data'
import { fadeUp, stagger, viewport } from './motion'

const supportCards = [
  {
    title: 'State-of-the-Art Technology',
    text: 'Utilize our advanced online tools for tracking, scheduling, and managing your shipments with ease.',
    icon: Monitor,
    featured: true,
  },
  {
    title: 'Tailored Solutions',
    text: 'We offer customized solutions to match your specific shipping requirements, ensuring efficiency and cost-effectiveness.',
    icon: SlidersHorizontal,
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-off-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="section-rule" />
            <p className="eyebrow mb-3">Why Choose Black Palm</p>
            <h2 className="section-title">
              Dedicated to Your <span className="text-accent">Shipping Success</span>
            </h2>
          </div>
          <p className="max-w-prose text-left leading-[1.75] text-muted lg:col-span-6 lg:col-start-7">
            {copy.why}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            whileHover={{ y: -6 }}
            className="premium-card group lg:col-span-6 lg:min-h-[360px]"
          >
            <Award className="mb-8 h-8 w-8 text-accent stroke-[1.5] transition-transform duration-300 group-hover:rotate-6" />
            <h3 className="mb-4 max-w-sm font-display text-fluid-h3 font-bold text-navy">
              Expertise in Logistics
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Leveraging years of experience in the logistics industry, we understand the intricacies of export-import processes.
            </p>
            <div className="mt-12 h-px w-full bg-black/[0.06]" />
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="font-display text-2xl font-bold text-navy">10k+</div>
                <p className="mt-1 text-sm leading-relaxed text-muted">Shipments managed</p>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-navy">500+</div>
                <p className="mt-1 text-sm leading-relaxed text-muted">Clients supported</p>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-8 lg:col-span-6"
          >
            {supportCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className={`premium-card group ${card.featured ? 'border-t-4 border-accent' : ''}`}
                >
                  <Icon className="mb-6 h-7 w-7 text-accent stroke-[1.5] transition-transform duration-300 group-hover:rotate-6" />
                  <h3 className="mb-3 font-display text-lg font-bold text-navy">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{card.text}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
