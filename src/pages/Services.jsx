import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import CheckupsPreventiveCare from './services/CheckupsPreventiveCare'
import ChildrensDentistry from './services/ChildrensDentistry'

function Services() {
  return (
    <section className="services">
      <nav className="subtabs">
        <NavLink to="/services/checkups-preventive-care">
          Check-ups &amp; Preventive Care
        </NavLink>
        <NavLink to="/services/childrens-dentistry">
          Children's Dentistry
        </NavLink>
      </nav>
      <Routes>
        <Route
          index
          element={<Navigate to="checkups-preventive-care" replace />}
        />
        <Route
          path="checkups-preventive-care"
          element={<CheckupsPreventiveCare />}
        />
        <Route
          path="childrens-dentistry"
          element={<ChildrensDentistry />}
        />
      </Routes>
    </section>
  )
}

export default Services
