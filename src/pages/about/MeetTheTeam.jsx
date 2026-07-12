import dentists from '../../data/dentists'

function MeetTheTeam() {
  return (
    <section className="about-page">
      <h1>Meet the Team</h1>
      <p>
        Our dentists bring years of combined experience and a genuinely
        friendly approach to every appointment. Get to know the team looking
        after your smile.
      </p>
      <div className="team-list">
        {dentists.map((dentist) => (
          <article key={dentist.slug} className="dentist-card">
            {dentist.photo && (
              <img className="dentist-photo" src={dentist.photo} alt={dentist.name} />
            )}
            <div className="dentist-card-body">
              <h3>{dentist.name}</h3>
              {dentist.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MeetTheTeam
