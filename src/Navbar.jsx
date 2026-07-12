import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import services from './data/services'

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
  return (
    <nav className="navbar">
      <span className="navbar-brand">Deepwater</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <ServicesDropdown />
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
