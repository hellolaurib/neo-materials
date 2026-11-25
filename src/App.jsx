import { Nav, TickerBar } from './sections/Header'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Businesses from './sections/Businesses'
import Applications from './sections/Applications'
import Investors from './sections/Investors'
import Sustainability from './sections/Sustainability'
import News from './sections/News'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'
import useReveal from './useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <TickerBar />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Businesses />
        <Applications />
        <Investors />
        <Sustainability />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
