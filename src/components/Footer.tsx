export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="/">Home</a>
        <a href="/careers.html">Careers</a>
      </nav>
      <p>&copy; {new Date().getFullYear()} The Subway Token · Brooklyn, NY</p>
    </footer>
  )
}
