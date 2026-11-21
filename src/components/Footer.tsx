import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
      </nav>
      <p>541 Myrtle Avenue, Brooklyn, NY 11205</p>
      <p>&copy; {new Date().getFullYear()} The Subway Token</p>
    </footer>
  )
}
