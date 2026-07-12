import { useState } from 'react'
import locations from './data/locations'

const practiceEmail = locations.find(
  (location) => location.slug === 'deepwater-dental-cosmetics',
).email

function GetInTouchForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = `Website enquiry from ${form.firstName} ${form.lastName}`.trim()
    const bodyLines = [
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      '',
      form.message,
    ].filter(Boolean)

    const mailtoUrl = `mailto:${practiceEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailtoUrl
  }

  return (
    <section className="get-in-touch">
      <h2>Get in Touch</h2>
      <p>
        Have any questions? Want to drop any feedback or share your dental
        issue? We would love to hear from you.
      </p>

      <form className="get-in-touch-form" onSubmit={handleSubmit}>
        <div className="get-in-touch-row">
          <label className="get-in-touch-field">
            First Name
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="get-in-touch-field">
            Last Name
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="get-in-touch-field">
          Email*
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="get-in-touch-field">
          Phone
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        </label>

        <label className="get-in-touch-field">
          Message
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="get-in-touch-submit">
          Submit
        </button>
      </form>

      <div className="social-links">
        <a
          href="https://www.instagram.com/deepwaterdental/"
          target="_blank"
          rel="noreferrer"
          aria-label="Deepwater Dental on Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.467.182-.8.399-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.858-.05 1.054-.059 1.37-.059 4.04s.01 2.986.059 4.04c.045.976.207 1.505.344 1.858.182.467.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.858.344 1.054.05 1.37.059 4.04.059s2.986-.01 4.04-.059c.976-.045 1.505-.207 1.858-.344.467-.182.8-.399 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.858.05-1.054.059-1.37.059-4.04s-.01-2.986-.059-4.04c-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.858-.344-1.054-.05-1.37-.059-4.04-.059Zm0 3.064a5.134 5.134 0 1 1 0 10.268 5.134 5.134 0 0 1 0-10.268Zm0 1.802a3.332 3.332 0 1 0 0 6.664 3.332 3.332 0 0 0 0-6.664Zm5.338-1.998a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/deepwaterdental/"
          target="_blank"
          rel="noreferrer"
          aria-label="Deepwater Dental on Facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default GetInTouchForm
