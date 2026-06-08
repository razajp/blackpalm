import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { copy, images } from '../data'
import { fadeLeft, fadeRight, viewport } from './motion'

export function TrustedPartner() {
  return (
    <section id="company" className="bg-white">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-12">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-6"
        >
          <div className="section-rule" />
          <p className="eyebrow mb-3">About Us</p>
          <h2 className="section-title max-w-[12ch]">Your Trusted Partner in Global Trade</h2>
          <p className="section-copy mt-6">{copy.about}</p>
          <div className="mt-10 grid max-w-md grid-cols-2 gap-5">
            <div className="border-l border-black/[0.08] pl-5">
              <div className="font-display text-3xl font-bold text-navy">2018</div>
              <p className="mt-1 text-sm leading-relaxed text-muted">Established in Florida</p>
            </div>
            <div className="border-l border-black/[0.08] pl-5">
              <div className="font-display text-3xl font-bold text-navy">4.8</div>
              <p className="mt-1 text-sm leading-relaxed text-muted">Client rating signal</p>
            </div>
          </div>
          <a
            href="#shipping"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white"
          >
            Discover More
            <ArrowRight size={17} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative isolate lg:col-span-6"
        >
          <div className="absolute -bottom-5 -right-5 -z-10 h-full w-[88%] rounded-2xl bg-accent/15" />
          <div className="media-frame relative aspect-[6/5] lg:aspect-[5/6]">
            <img src={images.about} alt="Black Palm logistics team" className="h-full w-full object-cover" />
          </div>
          <div className="panel absolute -bottom-7 left-6 max-w-[260px] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">Black Palm Difference</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">Every shipment is handled with care, clarity, and operational discipline.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
