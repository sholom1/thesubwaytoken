import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
      </nav>
      <p>&copy; {new Date().getFullYear()} The Subway Token · Brooklyn, NY</p>
    </footer>
  )
}
