import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Are aligners as effective as braces?',
    answer:
      'Aligners work well for many mild to moderate alignment issues. More complex cases may be better suited to traditional braces, which your dentist can advise on after an assessment.',
  },
  {
    question: 'How long does treatment take?',
    answer:
      'This varies depending on how much movement is needed, but treatment often takes several months to over a year.',
  },
  {
    question: 'Do aligners hurt?',
    answer:
      'You may notice mild pressure or discomfort for a few days after starting a new aligner, but it generally settles quickly.',
  },
  {
    question: 'How often do I need to wear them?',
    answer:
      'Aligners are typically worn for around 20 to 22 hours a day, removed only for eating, drinking, and brushing your teeth.',
  },
  {
    question: 'What happens if I lose or damage an aligner?',
    answer:
      "Let us know as soon as possible so we can advise on next steps and avoid delays to your treatment.",
  },
  {
    question: 'Is treatment removable?',
    answer:
      'Yes, aligners can be taken out, which makes it easier to eat and clean your teeth compared to fixed braces.',
  },
]

function Aligners() {
  return (
    <article className="service-page">
      <h1>Aligners</h1>

      <p>
        Clear aligners offer a discreet, removable way to gradually
        straighten your teeth. We can assess whether aligners are a suitable
        option for you and guide you through treatment from start to finish.
      </p>

      <h2>What are Aligners?</h2>
      <p>
        Aligners are a series of custom-made, clear plastic trays that fit
        closely over your teeth. Each set is worn for a set period before
        moving on to the next, gradually and gently guiding your teeth into
        a straighter position.
      </p>

      <h2>Aligner Options We Offer</h2>
      <p>
        We offer a range of clear aligner systems, including SPARK, Angel
        Aligners, ClearCorrect, and SureSmile. Having access to a range of
        systems allows us to recommend the option best suited to your teeth,
        goals, and budget.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You have mild to moderate crowding or gaps between your teeth</li>
        <li>You'd like to straighten your teeth without visible metal braces</li>
        <li>You're looking for a removable option that fits around daily life</li>
        <li>You've had orthodontic treatment before and would like a refresher</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Your consultation</h3>
      <p>
        Every patient is assessed for their eligibility for aligner
        treatment. This starts with a consultation, which includes photos of
        your teeth and smile, a scan, x-rays, and a discussion of your
        treatment options so you know what to expect.
      </p>
      <h3>Advanced digital scanning</h3>
      <p>
        We use the Medit intraoral scanner to capture a detailed digital
        scan of your teeth. This offers a more comfortable experience than
        traditional putty impressions and helps with accurate treatment
        planning.
      </p>
      <h3>Custom treatment plan</h3>
      <p>
        If aligners are suitable, your scan is used to plan the movements
        needed and create your series of custom aligners.
      </p>
      <h3>Wearing your aligners</h3>
      <p>
        You'll wear each set of aligners for the recommended number of hours
        per day, moving on to the next set in the series as advised, with
        regular check-ins to monitor progress.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Discreet appearance compared to traditional braces</li>
        <li>Removable for eating, drinking, and cleaning your teeth</li>
        <li>Custom-fitted to your teeth for a comfortable fit</li>
      </ul>
      <p>
        Results and treatment time vary between individuals depending on
        their starting position and how consistently aligners are worn.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Aligners aren't suitable for every alignment issue. More complex
        movements may need traditional braces or other orthodontic options.
        Your dentist will assess your teeth and discuss whether aligners are
        a good fit for you.
      </p>

      <h2>Aftercare</h2>
      <p>
        Once treatment is complete, a retainer is generally recommended to
        help hold your teeth in their new position. Keeping your aligners
        and teeth clean throughout treatment also helps support a good
        result.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes the time to assess whether aligners are the right fit
        for your smile, and supports you with clear guidance throughout your
        treatment.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're interested in aligners, get in touch with our team to
        arrange a consultation.
      </p>
    </article>
  )
}

export default Aligners

