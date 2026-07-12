import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import services from './data/services'
import locations from './data/locations'

function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <li className="navbar-dropdown" ref={ref}>
      <button
        type="button"
        className="navbar-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Services
      </button>
      {open && (
        <ul className="navbar-dropdown-menu">
          {services.map((service) => (
            <li key={service.path}>
              <NavLink
                to={`/services/${service.path}`}
                onClick={() => setOpen(false)}
              >
                {service.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function Navbar() {
  const practice = locations[0]

  return (
    <nav className="navbar">
      <span className="navbar-brand">Deepwater</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <ServicesDropdown />
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
