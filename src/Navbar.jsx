import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Deepwater</span>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
