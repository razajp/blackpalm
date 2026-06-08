import { Instagram, Mail, MapPin, Music2, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { fadeUp, stagger, viewport } from './motion'

const usefulLinks = ['About', 'Services', 'Warehousing', 'Track AWB']
const companyLinks = ['Team', 'Career', 'Knowledge', 'Blog', 'Contact Us']
const policies = ['Terms', 'Privacy Policy', 'Shipping Policy']

export function Footer() {
  return (
    <footer id="contact" className="bg-navy py-20 text-white">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="container-shell"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div variants={fadeUp} className="md:col-span-5">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Florida's premier export-import logistics solution
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: 'Facebook', icon: Send },
                { label: 'Instagram', icon: Instagram },
                { label: 'TikTok', icon: Music2 },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href="#contact"
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <FooterColumn title="Useful Links" items={usefulLinks} className="md:col-span-2" />
          <FooterColumn title="Company" items={companyLinks} className="md:col-span-2" />

          <motion.div variants={fadeUp} className="md:col-span-3">
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
              Contact
            </h3>
            <div className="space-y-4">
              <ContactLine icon={MapPin} text="2640 NW 4th St, Fort Lauderdale, FL 33311" />
              <ContactLine icon={Phone} text="754-302-2356" />
              <ContactLine icon={Mail} text="info@blackpalmei.com" />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/30">
            <p className="text-white/30">© 2024 Black Palm Export Import LLC. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-5">
              {policies.map((policy) => (
                <a key={policy} href="#contact" className="transition-colors duration-200 hover:text-white/60">
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

function FooterColumn({ title, items, className = '' }: { title: string; items: string[]; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
        {title}
      </h3>
      <div className="grid gap-3">
        {items.map((item) => (
          <a key={item} href="#contact" className="footer-link">
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

function ContactLine({
  icon: Icon,
  text,
}: {
  icon: typeof MapPin
  text: string
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-white/70">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
      <span>{text}</span>
    </div>
  )
}
