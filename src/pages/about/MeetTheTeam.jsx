import dentists from '../../data/dentists'

function MeetTheTeam() {
  return (
    <section className="about-page meet-team-page">
      <h1>Meet the Team</h1>
      <p>
        Our dentists bring years of combined experience and a genuinely
        friendly approach to every appointment. Get to know the team looking
        after your smile.
      </p>
      <div className="team-profile-list">
        {dentists.map((dentist) => (
          <article key={dentist.slug} id={dentist.slug} className="team-profile">
            {dentist.photo && (
              <img className="team-profile-photo" src={dentist.photo} alt={dentist.name} />
            )}
            <div className="team-profile-body">
              <h2>{dentist.name}</h2>
              {dentist.credentials && (
                <p className="team-profile-credentials">{dentist.credentials}</p>
              )}
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
