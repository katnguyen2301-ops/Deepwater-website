import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Do dentures hurt?',
    answer:
      'Getting used to a new denture can involve some initial discomfort or rubbing as your mouth adjusts. Let your dentist know if soreness continues so any adjustments can be made.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'It usually takes a few visits over several weeks to design, try in, and fit a denture properly.',
  },
  {
    question: 'How long do dentures last?',
    answer:
      'This varies, but dentures generally need replacing or relining every several years as your gums and jaw change shape over time.',
  },
  {
    question: 'What are the alternatives?',
    answer:
      "Depending on your situation, alternatives may include a dental bridge or dental implants. Your dentist can discuss what's suitable for you.",
  },
  {
    question: 'What happens if I delay treatment?',
    answer:
      'Missing teeth left unaddressed can affect your bite, chewing, speech, and the position of your remaining teeth over time.',
  },
  {
    question: 'Can I sleep in my dentures?',
    answer:
      "It's often recommended to remove them overnight to give your gums a rest and help prevent irritation, though your dentist can advise based on your situation.",
  },
]

function Dentures() {
  return (
    <article className="service-page">
      <h1>Dentures</h1>

      <p>
        Dentures are a removable option for replacing missing teeth, helping
        to restore your ability to eat and speak comfortably, along with
        your smile.
      </p>
      <p>We'll talk you through the different types available and help find an option that suits your needs.</p>

      <h2>What are Dentures?</h2>
      <p>
        Dentures are removable appliances custom-made to replace missing
        teeth. They can replace all of your teeth (a full denture) or just
        some of them (a partial denture), and are designed to sit
        comfortably over your gums.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You're missing several or all of your teeth</li>
        <li>You'd prefer a removable option rather than a fixed one</li>
        <li>You're not a suitable candidate for implants or a bridge</li>
        <li>An existing denture is old, damaged, or no longer fits well</li>
        <li>You want to restore your ability to chew and speak comfortably</li>
        <li>You'd like to improve the appearance of your smile after tooth loss</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Assessment and impressions</h3>
      <p>
        Your dentist will assess your gums, any remaining teeth, and your
        bite, then take impressions or digital scans to begin designing your
        denture.
      </p>
      <h3>Try-in</h3>
      <p>
        A trial denture is often used to check the fit, bite, and appearance
        before the final version is made, giving you the chance to provide
        feedback.
      </p>
      <h3>Fitting</h3>
      <p>
        Once finalised, your denture is fitted and adjusted as needed for
        comfort. Your dentist will also show you how to care for it.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Restores the ability to eat and speak more comfortably</li>
        <li>Can improve facial appearance affected by missing teeth</li>
        <li>Removable, making them easy to clean</li>
        <li>Available in full or partial options depending on your needs</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Dentures can be an option for many patients missing one or more
        teeth, but the right type depends on the number of teeth missing,
        the condition of your gums, and your personal preferences. Your
        dentist will discuss the options suitable for your situation, which
        may also include implants or a bridge.
      </p>

      <h2>Aftercare</h2>
      <p>
        New dentures can feel a little unusual at first, and some adjustment
        time is normal while you get used to eating and speaking with them.
        Removing and cleaning your dentures daily, along with giving your
        gums a rest overnight, is generally recommended. Regular check-ups
        help make sure your denture continues to fit well over time, as your
        gums and jaw can change shape gradually.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes a careful, personalised approach to denture design,
        checking fit and comfort at every stage. We're happy to explain your
        options clearly and support you through the adjustment period.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're considering dentures or need an existing one adjusted, get
        in touch with our team. We're happy to help.
      </p>
    </article>
  )
}

export default Dentures
