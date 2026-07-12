import { useRef } from 'react'
import { Link } from 'react-router-dom'
import services from './data/services'
import serviceImages from './data/serviceImages'

function ServicesCarousel() {
  const trackRef = useRef(null)

  function scrollByCard(direction) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.service-tile')
    const amount = card ? card.getBoundingClientRect().width + 24 : 300
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="services-carousel">
      <h2>Our Services</h2>
      <p className="services-carousel-subtitle">
        We offer a range of dental services, combining thorough care with a
        personalised approach to help support a healthy smile.
      </p>

      <div className="services-carousel-row">
        <button
          type="button"
          className="services-carousel-arrow"
          aria-label="Scroll left"
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>

        <div className="services-carousel-track" ref={trackRef}>
          {services.map((service, i) => (
            <Link
              key={service.path}
              to={`/services/${service.path}`}
              className="service-tile"
            >
              {serviceImages[service.path] ? (
                <img
                  className="service-tile-image"
                  src={serviceImages[service.path]}
                  alt=""
                />
              ) : (
                <div
                  className={`service-tile-image service-tile-image-${i % 4}`}
                  aria-hidden="true"
                />
              )}
              <h3>{service.label}</h3>
              <p>{service.blurb}</p>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="services-carousel-arrow"
          aria-label="Scroll right"
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>

      <Link to="/contact" className="btn btn-book services-carousel-cta">
        Book Appointment
      </Link>
    </section>
  )
}

export default ServicesCarousel
