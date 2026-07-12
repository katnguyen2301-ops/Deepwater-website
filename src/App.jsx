import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services/*" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
