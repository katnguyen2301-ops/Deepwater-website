import { Link } from 'react-router-dom'

function PromoBanner() {
  return (
    <div className="promo-banner">
      <p>
        <span>✨ 20% off Aligners</span> — get the straight smile you deserve.
        <Link to="/services/aligners">Learn more ↗</Link>
      </p>
    </div>
  )
}

export default PromoBanner
