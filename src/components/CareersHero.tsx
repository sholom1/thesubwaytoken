import { Link } from 'react-router-dom'

export default function CareersHero() {
  return (
    <header className="hero hero-small">
      <Link to="/" aria-label="The Subway Token home">
        <img
          className="hero-logo hero-logo-small"
          src="/logo.png"
          width={512}
          height={512}
          alt="The Subway Token board game café logo"
        />
      </Link>
      <h1 className="page-title">Careers</h1>
      <p className="tagline">Help us build The Subway Token</p>
    </header>
  )
}
