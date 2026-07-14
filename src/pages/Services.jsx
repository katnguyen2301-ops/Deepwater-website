import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import CheckupsPreventiveCare from './services/CheckupsPreventiveCare'
import ChildrensDentistry from './services/ChildrensDentistry'
import EmergencyDentistry from './services/EmergencyDentistry'
import ToothColouredFillings from './services/ToothColouredFillings'
import RootCanalTreatment from './services/RootCanalTreatment'
import DentalCrowns from './services/DentalCrowns'
import DentalBridges from './services/DentalBridges'
import DentalImplants from './services/DentalImplants'
import Dentures from './services/Dentures'
import ToothExtractions from './services/ToothExtractions'
import WisdomTeeth from './services/WisdomTeeth'
import GumDiseaseTreatment from './services/GumDiseaseTreatment'
import TeethGrindingJawPain from './services/TeethGrindingJawPain'
import TeethWhitening from './services/TeethWhitening'
import SportsMouthguards from './services/SportsMouthguards'
import serviceImages from '../data/serviceImages'

function ServiceLayout() {
  const location = useLocation()
  const slug = location.pathname.split('/').filter(Boolean).pop()
  const image = serviceImages[slug]

  return (
    <>
      {image && (
        <img
          className="service-hero-image"
          src={image}
          alt=""
          style={{ viewTransitionName: `service-image-${slug}` }}
        />
      )}
      <Outlet />
    </>
  )
}

function Services() {
  return (
    <section className="services">
      <Routes>
        <Route
          index
          element={<Navigate to="checkups-preventive-care" replace />}
        />
        <Route element={<ServiceLayout />}>
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
          <Route
            path="root-canal-treatment"
            element={<RootCanalTreatment />}
          />
          <Route
            path="dental-crowns"
            element={<DentalCrowns />}
          />
          <Route
            path="dental-bridges"
            element={<DentalBridges />}
          />
          <Route
            path="dental-implants"
            element={<DentalImplants />}
          />
          <Route
            path="dentures"
            element={<Dentures />}
          />
          <Route
            path="tooth-extractions"
            element={<ToothExtractions />}
          />
          <Route
            path="wisdom-teeth"
            element={<WisdomTeeth />}
          />
          <Route
            path="gum-disease-treatment"
            element={<GumDiseaseTreatment />}
          />
          <Route
            path="teeth-grinding-jaw-pain"
            element={<TeethGrindingJawPain />}
          />
          <Route
            path="teeth-whitening"
            element={<TeethWhitening />}
          />
          <Route
            path="sports-mouthguards"
            element={<SportsMouthguards />}
          />
        </Route>
      </Routes>
    </section>
  )
}

export default Services
