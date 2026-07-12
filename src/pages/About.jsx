import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import dentists from '../data/dentists'

function TeamList() {
  return (
    <div className="team-list">
      {dentists.map((dentist) => (
        <article key={dentist.slug} className="dentist-card">
          <h3>{dentist.name}</h3>
          {dentist.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </article>
      ))}
    </div>
  )
}

function About() {
  return (
    <section className="about">
      <nav className="subtabs">
        <NavLink to="/about/team" end>
          Meet Our Team
        </NavLink>
      </nav>
      <Routes>
        <Route index element={<Navigate to="team" replace />} />
        <Route path="team" element={<TeamList />} />
      </Routes>
    </section>
  )
}

export default About
