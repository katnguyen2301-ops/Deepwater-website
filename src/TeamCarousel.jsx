import { Link } from 'react-router-dom'
import dentists from './data/dentists'

function TeamCarousel() {
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

      <div className="team-grid">
        {dentists.map((dentist) => (
          <article key={dentist.slug} className="team-tile">
            <div className="team-tile-heading">
              <h3>{dentist.name}</h3>
              <p className="team-tile-title">{dentist.title}</p>
            </div>
            <Link to="/about/meet-the-team" className="team-tile-photo-link">
              <img className="team-tile-photo" src={dentist.photo} alt={dentist.name} />
            </Link>
            <Link to="/about/meet-the-team" className="team-tile-link">
              Learn more ↗
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamCarousel
