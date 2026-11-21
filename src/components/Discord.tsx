import { QRCodeSVG } from 'qrcode.react'
import { DISCORD_INVITE_URL } from '../config'

export default function Discord() {
  return (
    <section className="section">
      <h2>Join the Community</h2>
      <p>Scan the code or tap the button to chat games with us on Discord.</p>
      {DISCORD_INVITE_URL ? (
        <>
          <div className="qr">
            <QRCodeSVG
              value={DISCORD_INVITE_URL}
              size={176}
              level="M"
              marginSize={2}
              fgColor="#000000"
              bgColor="#ffffff"
              title="QR code to join our Discord"
            />
          </div>
          <a
            className="cta-button"
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
        </>
      ) : (
        <div className="qr-placeholder">Discord invite coming soon</div>
      )}
    </section>
  )
}
