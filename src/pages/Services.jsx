import { Navigate, Route, Routes } from 'react-router-dom'
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

function Services() {
  return (
    <section className="services">
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
      </Routes>
    </section>
  )
}

export default Services
