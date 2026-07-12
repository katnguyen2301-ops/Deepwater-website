import { Link, NavLink } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import services from './data/services'
import aboutPages from './data/about'
import locations from './data/locations'
import logo from './assets/deepwater-logo.png'

function Navbar() {
  const practice = locations.find((location) => location.slug === 'deepwater-dental-cosmetics')

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Deepwater Dental & Implant Centre" />
      </Link>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <NavDropdown label="About" basePath="/about" items={aboutPages} />
        <NavDropdown label="Services" basePath="/services" items={services} />
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="navbar-actions">
        <a className="btn btn-call" href={`tel:${practice.phone.replace(/\s+/g, '')}`}>
          Call Now
        </a>
        <NavLink className="btn btn-book" to="/contact">
          Book Appointment
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
