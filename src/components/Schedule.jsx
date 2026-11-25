import { event } from '../data/content.js'
import Placeholder from './Placeholder.jsx'

export default function Schedule() {
  return (
    <section id="schedule" className="section" aria-labelledby="schedule-title">
      <div className="container">
        <p className="eyebrow">The day</p>
        <h2 id="schedule-title">Conference schedule</h2>
        <p className="section-lead">
          Indicative programme only. Times, titles and facilitators are pending approval.
          <Placeholder />
        </p>

        <div className="table-wrap">
          <table className="schedule-table">
            <caption className="sr-only">Indicative GatherLoop conference programme — not yet approved</caption>
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Session</th>
                <th scope="col">Speaker / facilitator</th>
              </tr>
            </thead>
            <tbody>
              {event.schedule.map((item, index) => (
                <tr key={index}>
                  <td data-label="Time">{item.time}</td>
                  <td data-label="Session" className="session-title">
                    {item.title}
                  </td>
                  <td data-label="Speaker / facilitator">{item.facilitator || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
