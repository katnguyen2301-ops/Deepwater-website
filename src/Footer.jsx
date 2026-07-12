import { Link } from 'react-router-dom'
import services from './data/services'
import locations from './data/locations'
import logo from './assets/deepwater-logo.png'
import SocialLinks from './SocialLinks'
import imageCredits from './data/imageCredits'

const suburbs = [
  'Woy Woy',
  'Umina Beach',
  'Ettalong Beach',
  'Booker Bay',
  'Blackwall',
  'Pearl Beach',
  'Patonga',
]

const midpoint = Math.ceil(services.length / 2)
const servicesColumnOne = services.slice(0, midpoint)
const servicesColumnTwo = services.slice(midpoint)

function Footer() {
  const practice = locations[0]

  return (
    <footer className="site-footer">
      <img className="footer-logo" src={logo} alt="Deepwater Dental & Implant Centre" />

      <p className="footer-disclaimer">
        Patient images, if shown, are published with consent and are
        intended for educational purposes only. Results vary between
        individuals, and all dental procedures carry risks. Please seek
        professional advice from your dentist to determine whether a
        treatment is appropriate for your circumstances.
      </p>

      <div className="footer-grid">
        <div>
          <h2>Get In Touch</h2>
          <p>{practice.name}</p>
          <p>
            <a href={`tel:${practice.phone.replace(/\s+/g, '')}`}>{practice.phone}</a>
          </p>
          <p>{practice.address}</p>
          <p>
            <a href={`mailto:${practice.email}`}>{practice.email}</a>
          </p>
        </div>

        <div>
          <h2>Services</h2>
          <div className="footer-services">
            <ul>
              {servicesColumnOne.map((service) => (
                <li key={service.path}>
                  <Link to={`/services/${service.path}`}>{service.label}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {servicesColumnTwo.map((service) => (
                <li key={service.path}>
                  <Link to={`/services/${service.path}`}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2>Clinic Hours</h2>
          {practice.hours.map((entry) => (
            <p key={entry.day}>
              {entry.day}
              <br />
              {entry.time}
            </p>
          ))}
        </div>
      </div>

      <ul className="footer-suburbs">
        {suburbs.map((suburb) => (
          <li key={suburb}>{suburb}</li>
        ))}
      </ul>

      <div className="footer-bottom">
        <span>All Rights Reserved by Deepwater Dental &amp; Cosmetics</span>
        <SocialLinks className="footer-social-links" />
      </div>

      <details className="footer-credits">
        <summary>Photo credits</summary>
        <ul>
          {imageCredits.map((credit) => (
            <li key={credit.source}>
              &ldquo;{credit.title}&rdquo; by {credit.author}, licensed under{' '}
              {credit.license}.{' '}
              <a href={credit.source} target="_blank" rel="noreferrer">
                Source
              </a>
            </li>
          ))}
        </ul>
      </details>
    </footer>
  )
}

export default Footer
