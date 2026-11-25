import { event } from '../data/content.js'

export default function About() {
  const { about } = event

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <p className="eyebrow">The event</p>
        <h2 id="about-title">{about.heading}</h2>
        <div className="intro-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="two-column">
          <div className="panel">
            <h3>Who should attend</h3>
            <ul className="check-list">
              {about.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3>What you will take away</h3>
            <ul className="check-list">
              {about.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
