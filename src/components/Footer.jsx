import { event } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <img src="./gatherloop-mark.svg" alt="" width="32" height="32" />
          <p className="footer-name">{event.shortName}</p>
          <p className="footer-note">Static conference website — no backend or payment processing.</p>
        </div>
        <p className="copyright">
          &copy; {year} GatherLoop. Event details pending confirmation.
        </p>
      </div>
    </footer>
  )
}
