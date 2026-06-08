import { BottomCTA } from './components/BottomCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { Partnership } from './components/Partnership'
import { Services } from './components/Services'
import { ScrollProgress } from './components/ScrollProgress'
import { TrustedPartner } from './components/TrustedPartner'
import { TrustBar } from './components/TrustBar'
import { Warehousing } from './components/Warehousing'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <TrustedPartner />
        <WhyChooseUs />
        <Services />
        <Warehousing />
        <HowItWorks />
        <Partnership />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
