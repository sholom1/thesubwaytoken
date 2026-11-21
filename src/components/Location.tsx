const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=541+Myrtle+Avenue+Brooklyn+NY+11205'

export default function Location() {
  return (
    <section className="section">
      <h2>Next Stop: 541 Myrtle Ave</h2>
      <div className="station-sign">
        <span className="bullet bullet-g" aria-hidden="true">
          G
        </span>
        <span className="bus-pill" aria-hidden="true">
          B54
        </span>
        <address className="station-address">
          541 Myrtle Avenue
          <br />
          Brooklyn, NY 11205
        </address>
      </div>
      <p>Reachable by the G train, the B54 bus, and other lines.</p>
      <a
        className="cta-button"
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get directions
      </a>
    </section>
  )
}
