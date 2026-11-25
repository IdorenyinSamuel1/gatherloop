import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Speakers from './components/Speakers.jsx'
import Schedule from './components/Schedule.jsx'
import Tickets from './components/Tickets.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Tickets />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
