import ServicesCarousel from '../ServicesCarousel'
import TeamCarousel from '../TeamCarousel'
import HomeFaq from '../HomeFaq'

function Home() {
  return (
    <>
      <div className="home-hero-spacer">
        <section className="home-hero">
          {/* Placeholder gradient — swap for a real photo by giving
              .home-hero-media a background-image instead. */}
          <div className="home-hero-media" aria-hidden="true" />
          <div className="home-hero-overlay" aria-hidden="true" />
          <h1>Caring for Smiles in the Central Coast for over 25 years</h1>
        </section>
      </div>
      <div className="home-services-reveal">
        <ServicesCarousel />
      </div>
      <TeamCarousel />
      <HomeFaq />
    </>
  )
}

export default Home
