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
          <div className="home-hero-content">
            <h1>Exceptional Dental Care for Every Smile</h1>
            <p className="home-hero-subtitle">Caring for Central Coast Smiles for Over 25 Years.</p>
          </div>
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
