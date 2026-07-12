const practicePhotos = [
  'Reception',
  'Waiting Area',
  'Treatment Room',
  'Sterilisation Room',
]

function OurPractice() {
  return (
    <section className="about-page">
      <h1>Our Practice</h1>
      <p>
        Take a look around our practice. We've designed our spaces to feel
        calm and comfortable, with modern equipment to support thorough,
        considered care.
      </p>
      <div className="practice-gallery">
        {practicePhotos.map((label) => (
          <div key={label} className="practice-photo-placeholder">
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="practice-gallery-note">
        Photos coming soon.
      </p>
    </section>
  )
}

export default OurPractice
