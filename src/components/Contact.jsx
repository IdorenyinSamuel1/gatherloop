import { event } from '../data/content.js'
import Placeholder from './Placeholder.jsx'

export default function Contact() {
  const { contact } = event

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Contact</h2>
          <p className="section-lead">
            Use the details below once GatherLoop confirms them. Until then, these are marked
            placeholders and should not be published as final contact information.
          </p>
        </div>

        <div className="contact-card">
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <span>{contact.email}</span>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{contact.phone}</dd>
            </div>
          </dl>

          <h3>Social links</h3>
          <ul className="social-list">
            {contact.social.map((item) => (
              <li key={item.label}>
                <span className="link-placeholder" aria-disabled="true">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
