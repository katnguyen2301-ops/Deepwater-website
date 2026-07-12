import locations from '../data/locations'

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <div className="location-grid">
        {locations.map((location, i) => (
          <article key={location.slug} className={`location-card location-card-${i % 3}`}>
            <h2>{location.name}</h2>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${location.phone.replace(/\s+/g, '')}`}>{location.phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a>
            </p>
            <p>
              <strong>Address:</strong> {location.address}
            </p>
            <div className="location-hours">
              <strong>Business Hours:</strong>
              <ul>
                {location.hours.map((entry) => (
                  <li key={entry.day}>
                    <span>{entry.day}</span>
                    <span>{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="location-map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              View on map
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Contact
