import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Does teeth whitening hurt?',
    answer:
      "Some people experience mild, temporary sensitivity during or after treatment, but it isn't generally painful.",
  },
  {
    question: 'How long does treatment take?',
    answer:
      'This depends on the method chosen. In-chair whitening can often be completed in a single visit, while take-home whitening is typically used over one to two weeks.',
  },
  {
    question: 'How long do results last?',
    answer:
      'This varies from person to person, depending on diet, lifestyle, and oral hygiene. Touch-up treatments can help maintain your results over time.',
  },
  {
    question: 'What are the alternatives?',
    answer:
      "For discolouration that doesn't respond to whitening, options such as veneers or bonding may be considered. Your dentist can discuss these if relevant.",
  },
  {
    question: "What happens if I don't treat staining?",
    answer:
      'Staining will generally remain or worsen over time, particularly with ongoing exposure to staining foods, drinks, or smoking.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer:
      "Professional whitening carried out under dental supervision is a widely used cosmetic treatment, but it isn't suitable for everyone, which is why an assessment is important beforehand.",
  },
]

function TeethWhitening() {
  return (
    <article className="service-page">
      <h1>Teeth Whitening</h1>

      <p>
        Teeth whitening is a popular way to reduce staining and
        discolouration, helping your smile look brighter. We offer
        professional whitening options and can talk you through what to
        expect.
      </p>

      <h2>What is Teeth Whitening?</h2>
      <p>
        Teeth whitening is a cosmetic treatment that uses a bleaching agent
        to reduce the appearance of stains and discolouration on the
        surface of your teeth. It doesn't change the structure of your
        teeth, but can lighten their overall shade.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>Your teeth have become discoloured or stained over time</li>
        <li>You'd like to reduce staining from food, drink, or smoking</li>
        <li>You have an upcoming event and would like a brighter smile</li>
        <li>You've noticed your teeth look duller than they used to</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Assessment</h3>
      <p>
        Your dentist will check that your teeth and gums are healthy before
        whitening, as treatment isn't suitable if you have untreated decay
        or gum disease.
      </p>
      <h3>Whitening process</h3>
      <p>
        Professional whitening may be carried out in the practice, at home
        using custom-made trays, or a combination of both, depending on the
        option chosen. A bleaching gel is applied to the teeth for a set
        period to gradually lighten their shade.
      </p>
      <h3>Reviewing results</h3>
      <p>
        Your dentist will check the outcome and can advise on maintaining
        your results afterwards.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Can reduce the appearance of staining and discolouration</li>
        <li>Non-invasive, without altering the structure of your teeth</li>
        <li>Options available to suit different preferences and timeframes</li>
      </ul>
      <p>
        Results vary between individuals, and whitening does not
        permanently prevent future staining.
      </p>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Teeth whitening isn't suitable for everyone. It's generally not
        recommended for pregnant or breastfeeding women, and may not be
        appropriate if you have untreated decay, gum disease, or certain
        types of discolouration. Your dentist will assess your teeth and
        discuss whether whitening is a suitable option for you.
      </p>

      <h2>Aftercare</h2>
      <p>
        Some temporary sensitivity to hot or cold is common after
        whitening, which usually settles within a few days. Avoiding
        strongly staining foods and drinks, such as red wine, coffee, or
        tobacco, for a short period afterwards can help maintain your
        results. Ongoing staining is a natural process, so results aren't
        permanent and touch-up treatment may be considered in future.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team carries out a thorough assessment before recommending
        whitening, and takes the time to explain the process and what
        results you might expect based on your individual teeth.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're interested in teeth whitening, get in touch with our team
        to arrange an assessment.
      </p>
    </article>
  )
}

export default TeethWhitening
