import { event } from '../data/content.js'
import Placeholder from './Placeholder.jsx'

export default function Speakers() {
  return (
    <section id="speakers" className="section section-alt" aria-labelledby="speakers-title">
      <div className="container">
        <p className="eyebrow">The people</p>
        <h2 id="speakers-title">Speakers</h2>
        <p className="section-lead">
          Speaker details have not been approved yet. The cards below are clearly marked
          placeholders — no names or credentials have been invented.
        </p>

        <div className="card-grid">
          {event.speakers.map((speaker, index) => (
            <article className="speaker-card" key={index}>
              <div className="speaker-avatar" role="img" aria-label="Speaker photo placeholder">
                {speaker.initials}
              </div>
              <div className="speaker-body">
                <Placeholder />
                <h3>{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-bio">{speaker.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
