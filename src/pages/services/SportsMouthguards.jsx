import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'How is a custom mouthguard different from a store-bought one?',
    answer:
      'A custom mouthguard is made from an impression or scan of your own teeth, so it generally fits more precisely and comfortably than a generic, one-size version.',
  },
  {
    question: 'How long does it take to get a mouthguard made?',
    answer:
      'This typically takes a couple of visits, allowing time for the mouthguard to be custom-made after your impressions are taken.',
  },
  {
    question: 'How long do mouthguards last?',
    answer:
      "This depends on how often it's used and how well it's cared for. Children may need a new one more frequently as their teeth and jaw grow.",
  },
  {
    question: 'Can I get a mouthguard if I have braces?',
    answer:
      "Yes, mouthguards can be designed to accommodate braces. Let your dentist know if you're currently undergoing orthodontic treatment.",
  },
  {
    question: "What happens if I don't wear a mouthguard during sport?",
    answer:
      "Without protection, there's a greater risk of dental injury, such as chipped, broken, or knocked-out teeth, during contact sport or high-impact activities.",
  },
  {
    question: 'Can adults get custom mouthguards too?',
    answer:
      'Yes, custom mouthguards are suitable for both children and adults involved in sports with a risk of dental injury.',
  },
]

function SportsMouthguards() {
  return (
    <article className="service-page">
      <h1>Sports Mouthguards</h1>

      <p>
        If you or your child play contact sports, a properly fitted
        mouthguard is one of the best ways to help protect your teeth from
        injury.
      </p>
      <p>
        We offer custom-made mouthguards designed to fit comfortably and
        provide good protection.
      </p>

      <h2>What is a Sports Mouthguard?</h2>
      <p>
        A sports mouthguard is a device worn over your teeth during
        physical activity to help cushion against impact and reduce the
        risk of dental injury. Custom-made mouthguards are moulded to fit
        your teeth precisely, offering a better fit than generic,
        store-bought versions.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You or your child play contact sports, such as football, rugby, or hockey</li>
        <li>You participate in activities with a risk of facial or dental impact, such as boxing or martial arts</li>
        <li>Your current mouthguard is old, damaged, or doesn't fit well</li>
        <li>You've had dental treatment, such as braces, and need a mouthguard that accommodates this</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Impressions or scan</h3>
      <p>
        An impression or digital scan of your teeth is taken to create a
        mouthguard that fits your mouth precisely.
      </p>
      <h3>Custom fabrication</h3>
      <p>
        The mouthguard is custom-made based on your impressions, designed
        for comfort and fit.
      </p>
      <h3>Fitting</h3>
      <p>
        Once ready, your mouthguard is checked to make sure it fits
        comfortably and doesn't interfere with breathing or speaking.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Custom fit designed for comfort compared to generic mouthguards</li>
        <li>May help cushion against impact during sport</li>
        <li>Can be made to accommodate braces or other dental work</li>
        <li>Durable and designed for repeated use</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Custom mouthguards are suitable for most patients who play sport,
        including children, though the fit will need to be reviewed as
        children's teeth develop and change. Your dentist can advise on the
        right timing for a new mouthguard as needed.
      </p>

      <h2>Aftercare</h2>
      <p>
        Rinse your mouthguard after each use and store it in a ventilated
        case to keep it clean. Avoid exposing it to high heat, such as
        leaving it in a hot car, as this can distort its shape. Bring it
        along to your regular check-ups so your dentist can check the fit,
        particularly for growing children.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes precise impressions to create a mouthguard that fits
        comfortably, and we're happy to talk through the right option for
        your sport or activity.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you or your child need a mouthguard for sport, get in touch with
        our team to arrange a fitting.
      </p>
    </article>
  )
}

export default SportsMouthguards
