import { useRef } from 'react'
import { Link } from 'react-router-dom'
import dentists from './data/dentists'

function TeamCarousel() {
  const trackRef = useRef(null)

  function scrollByCard(direction) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.team-tile')
    const amount = card ? card.getBoundingClientRect().width + 24 : 300
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="team-carousel">
      <div className="team-carousel-header">
        <h2>Meet Our Team</h2>
        <p>
          We're committed to delivering thorough dental care in a gentle,
          respectful, and supportive environment, where patients feel valued
          throughout their dental journey.
        </p>
      </div>

      <div className="team-carousel-row">
        <button
          type="button"
          className="services-carousel-arrow"
          aria-label="Scroll left"
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>

        <div className="team-carousel-track" ref={trackRef}>
          {dentists.map((dentist) => (
            <article key={dentist.slug} className="team-tile">
              <img className="team-tile-photo" src={dentist.photo} alt={dentist.name} />
              <div className="team-tile-body">
                <h3>{dentist.name}</h3>
                <p className="team-tile-title">{dentist.title}</p>
                <Link to="/about/meet-the-team" className="team-tile-link">
                  Learn more ↗
                </Link>
              </div>
            </article>
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
    </section>
  )
}

export default TeamCarousel
