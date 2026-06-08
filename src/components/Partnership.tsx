import { partnerLogos } from '../data'

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

  return (
    <div className="overflow-hidden">
      <div className={`marquee-row flex w-max gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-24 w-52 shrink-0 items-center justify-center p-6"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className="max-h-14 max-w-36 object-contain opacity-50 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Partnership() {
  return (
    <section className="overflow-hidden bg-white py-28">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="section-rule" />
            <p className="eyebrow mb-3">Our 3PLPartnership</p>
            <h2 className="section-title">
              Extending Our Reach for <span className="text-accent">Your Benefit</span>
            </h2>
          </div>
          <p className="max-w-prose text-left leading-[1.75] text-muted lg:col-span-5 lg:col-start-8">
            Partner access presented as a calm operational network, built for shopping, receiving, and forwarding with less friction.
          </p>
        </div>
      </div>
      <div className="mt-14 space-y-8">
        <LogoRow />
        <LogoRow reverse />
      </div>
    </section>
  )
}
