import reception from '../../assets/practice/reception.jpg'
import waitingArea1 from '../../assets/practice/waiting-area-1.jpg'
import waitingArea2 from '../../assets/practice/waiting-area-2.jpg'
import treatmentRoom1 from '../../assets/practice/treatment-room-1.jpg'
import treatmentRoom2 from '../../assets/practice/treatment-room-2.jpg'
import xrayRoom from '../../assets/practice/xray-room.jpg'

const practicePhotos = [
  { label: 'Reception', src: reception },
  { label: 'Waiting Area', src: waitingArea1 },
  { label: 'Waiting Area', src: waitingArea2 },
  { label: 'Treatment Room', src: treatmentRoom1 },
  { label: 'Treatment Room', src: treatmentRoom2 },
  { label: 'X-Ray Room', src: xrayRoom },
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
        {practicePhotos.map(({ label, src }, i) => (
          <img
            key={label + i}
            className="practice-photo"
            src={src}
            alt={label}
          />
        ))}
      </div>
    </section>
  )
}

export default OurPractice
