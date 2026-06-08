import { Package, ShoppingCart, UserPlus } from 'lucide-react'
import { motion } from 'framer-motion'
import { copy } from '../data'
import { fadeUp, stagger, viewport } from './motion'

const steps = [
  {
    title: 'Sign up',
    text: 'Begin your shipping journey with Black Palm by signing up for our tailored solutions designed to with your specific needs',
    icon: UserPlus,
  },
  {
    title: 'Shop online',
    text: 'Our user-friendly interface makes managing your shipments easy and convenient.',
    icon: ShoppingCart,
  },
  {
    title: 'Ship to Us',
    text: 'Our secure facilities and robust processes are in place to guarantee the safety and security of your products.',
    icon: Package,
  },
]

export function HowItWorks() {
  return (
    <section id="rates" className="bg-off-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="section-rule" />
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="section-title">
              Simplifying Your <span className="text-accent">Shipping Experience</span>
            </h2>
          </div>
          <p className="max-w-prose text-left leading-[1.75] text-muted lg:col-span-6 lg:col-start-7">
            {copy.how}
          </p>
        </div>

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] top-[72px] hidden h-px origin-left border-t-2 border-dashed border-accent/40 lg:block"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative grid gap-8 lg:grid-cols-3"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className={`group relative min-h-[270px] rounded-2xl border border-black/[0.06] bg-white p-8 text-center shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] ${index === 1 ? 'lg:mt-10' : ''}`}
                >
                  <div className="absolute -left-4 -top-4 select-none font-display text-8xl font-black leading-none text-navy/[0.04]">
                    0{index + 1}
                  </div>
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-accent stroke-[1.5] transition-transform duration-300 group-hover:-rotate-6" />
                  </div>
                  <h3 className="relative mb-2 mt-4 font-display font-bold text-navy">{step.title}</h3>
                  <p className="relative text-sm leading-relaxed text-muted">{step.text}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
