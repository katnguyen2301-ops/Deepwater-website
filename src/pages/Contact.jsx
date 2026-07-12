import { Link } from 'react-router-dom'
import locations from '../data/locations'
import GetInTouchForm from '../GetInTouchForm'

function Contact() {
  return (
    <section className="contact">
      <div className="contact-hero">
        <h1>Our Locations</h1>
        <p>
          Explore our locations across the Woy Woy and Umina Beach area,
          where thorough dental care meets a warm, welcoming environment.
        </p>
      </div>

      <div className="location-list">
        {locations.map((location) => (
          <article key={location.slug} className="location-list-card">
            <div className="location-list-photo" aria-hidden="true">
              <span>{location.name}</span>
            </div>
            <div className="location-list-body">
              <h2>{location.name}</h2>
              <p>{location.address}</p>
              <div className="location-list-actions">
                <Link to={`/contact/${location.slug}`} className="btn btn-outline">
                  Find out more
                </Link>
                <a
                  className="btn btn-book"
                  href={`tel:${location.phone.replace(/\s+/g, '')}`}
                >
                  Book Online →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <GetInTouchForm />
    </section>
  )
}

export default Contact
