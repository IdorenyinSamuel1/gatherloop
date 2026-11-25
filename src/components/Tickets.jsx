import { useState } from 'react'
import { event } from '../data/content.js'
import Placeholder from './Placeholder.jsx'

export default function Tickets() {
  const [noticeShown, setNoticeShown] = useState(false)

  return (
    <section id="tickets" className="section section-alt" aria-labelledby="tickets-title">
      <div className="container">
        <p className="eyebrow">Registration</p>
        <h2 id="tickets-title">Tickets</h2>
        <p className="section-lead">
          Ticket categories and prices below are placeholders only. No payment system is
          connected to this static website.
        </p>

        <div className="card-grid ticket-grid">
          {event.tickets.map((ticket) => (
            <article className="ticket-card" key={ticket.name}>
              <Placeholder />
              <h3>{ticket.name}</h3>
              <p className="ticket-price">{ticket.price}</p>
              <p className="ticket-note">{ticket.note}</p>
              <ul>
                {ticket.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="registration-panel">
          <div>
            <h3>Registration</h3>
            <p>
              The approved ticket or registration link has not been supplied. This button is a
              clearly labelled placeholder — it does not process payments or collect data.
            </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => setNoticeShown(true)}>
            Registration link pending
          </button>
        </div>

        <p className="registration-notice" role="status" aria-live="polite">
          {noticeShown
            ? 'Registration is not open on this website. GatherLoop must supply an approved ticket link before launch.'
            : ''}
        </p>
      </div>
    </section>
  )
}
