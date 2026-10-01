import { useEffect } from 'react'
import Hero from '../components/Hero'
import Concept from '../components/Concept'
import Location from '../components/Location'
import ContactSignup from '../components/ContactSignup'
import Footer from '../components/Footer'

export default function HomePage() {
  useEffect(() => {
    document.title = 'The Subway Token: NYC Subway Board Game Cafe, Brooklyn'
  }, [])

  return (
    <div className="page">
      <Hero />
      <main>
        <Concept />
        <Location />
        <ContactSignup />
      </main>
      <Footer />
    </div>
  )
}
