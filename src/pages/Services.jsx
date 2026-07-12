import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import CheckupsPreventiveCare from './services/CheckupsPreventiveCare'
import ChildrensDentistry from './services/ChildrensDentistry'
import EmergencyDentistry from './services/EmergencyDentistry'
import ToothColouredFillings from './services/ToothColouredFillings'

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
        <NavLink to="/services/emergency-dentistry">
          Emergency Dentistry
        </NavLink>
        <NavLink to="/services/tooth-coloured-fillings">
          Tooth-Coloured Fillings
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
        <Route
          path="emergency-dentistry"
          element={<EmergencyDentistry />}
        />
        <Route
          path="tooth-coloured-fillings"
          element={<ToothColouredFillings />}
        />
      </Routes>
    </section>
  )
}

export default Services
