import { useEffect } from 'react'
import CareersHero from '../components/CareersHero'
import WhyJoinUs from '../components/WhyJoinUs'
import OpenRoles from '../components/OpenRoles'
import Footer from '../components/Footer'

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Careers: The Subway Token'
  }, [])

  return (
    <div className="page">
      <CareersHero />
      <main>
        <WhyJoinUs />
        <OpenRoles />
      </main>
      <Footer />
    </div>
  )
}
