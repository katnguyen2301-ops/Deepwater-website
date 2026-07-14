import ServicesCarousel from '../ServicesCarousel'
import TeamCarousel from '../TeamCarousel'
import HomeFaq from '../HomeFaq'
import HealthFundsBanner from '../HealthFundsBanner'
import heroBackground from '../assets/hero-background.jpg'

function Home() {
  return (
    <>
      <div className="home-hero-spacer">
        <section className="home-hero">
          <div
            className="home-hero-media"
            style={{ backgroundImage: `url(${heroBackground})` }}
            aria-hidden="true"
          />
          <div className="home-hero-overlay" aria-hidden="true" />
          <h1>Caring for Smiles in the Central Coast for over 25 years</h1>
        </section>
      </div>
      <div className="home-services-reveal">
        <ServicesCarousel />
        <HealthFundsBanner />
      </div>
      <TeamCarousel />
      <HomeFaq />
    </>
  )
}

export default Home
