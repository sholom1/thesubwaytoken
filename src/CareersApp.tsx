import CareersHero from './components/CareersHero'
import WhyImBuilding from './components/WhyImBuilding'
import OpenRoles from './components/OpenRoles'
import Footer from './components/Footer'

export default function CareersApp() {
  return (
    <div className="page">
      <CareersHero />
      <main>
        <WhyImBuilding />
        <OpenRoles />
      </main>
      <Footer />
    </div>
  )
}
