import { event } from '../data/content.js'
import Placeholder from './Placeholder.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow">A GatherLoop event</p>
        <h1 id="hero-title">{event.name}</h1>
        <p className="hero-tagline">{event.tagline}</p>
        <p className="hero-intro">{event.intro}</p>

        <div className="hero-meta" aria-label="Event details">
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <strong>{event.date}</strong>
            <Placeholder label="TBC" />
          </div>
          <div className="meta-item">
            <span className="meta-label">Venue</span>
            <strong>{event.venue}</strong>
            <Placeholder label="TBC" />
          </div>
          <div className="meta-item">
            <span className="meta-label">Location</span>
            <strong>{event.city}</strong>
            <Placeholder label="TBC" />
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#tickets">
            Get your tickets
          </a>
          <a className="btn btn-secondary" href="#about">
            Learn about the conference
          </a>
        </div>
      </div>
    </section>
  )
}
