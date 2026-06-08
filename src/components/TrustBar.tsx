import { motion } from 'framer-motion'
import { fadeUp, viewport } from './motion'

export function TrustBar() {
  const stats = [
    { value: '500+', label: 'Clients' },
    { value: '10,000+', label: 'Shipments' },
    { value: '15+', label: 'Years Experience' },
    { value: '4.8★', label: 'Rating' },
  ]

  return (
    <section id="trust" className="border-b border-black/[0.06] bg-white">
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="container-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between"
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="contents">
            {index > 0 && <div className="hidden h-10 w-px bg-gray-200 md:block" />}
            <motion.div variants={fadeUp} whileHover={{ y: -3 }} className="group min-w-40 text-left md:px-8">
              <div className="font-display text-2xl font-bold text-navy transition-colors duration-300 group-hover:text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
