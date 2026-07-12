import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Does root canal treatment hurt?',
    answer:
      "Local anaesthetic is used to numb the area during treatment, so you shouldn't feel pain. Some tenderness afterwards is normal and usually settles within a few days.",
  },
  {
    question: 'How long does it take?',
    answer:
      'Treatment can often be completed in one to two visits, depending on the tooth and the extent of the infection.',
  },
  {
    question: 'How long does a root-treated tooth last?',
    answer:
      "This varies between patients, depending on factors such as the tooth's condition and how well it's cared for afterwards. A crown is often recommended to help protect the tooth going forward.",
  },
  {
    question: 'What are the alternatives?',
    answer:
      'The main alternative is having the tooth removed. Your dentist can talk you through the pros and cons of each option for your situation.',
  },
  {
    question: 'What happens if I delay treatment?',
    answer:
      'Leaving an infected tooth untreated can allow the infection to spread, which may lead to more pain, further complications, or the eventual loss of the tooth.',
  },
  {
    question: 'Will I need a crown afterwards?',
    answer:
      "Often, yes, particularly for back teeth that take more chewing pressure. Your dentist will let you know if this is recommended for your tooth.",
  },
]

function RootCanalTreatment() {
  return (
    <article className="service-page">
      <h1>Root Canal Treatment</h1>

      <p>
        If the nerve inside a tooth becomes infected or badly damaged, root
        canal treatment can often save the tooth rather than needing it
        removed. It has a reputation for being unpleasant, but with modern
        techniques it's generally no more uncomfortable than having a
        filling.
      </p>
      <p>We'll always explain what's involved so you know what to expect.</p>

      <h2>What is Root Canal Treatment?</h2>
      <p>
        Root canal treatment removes infected or damaged tissue from inside
        a tooth (the pulp), cleans the space, and seals it to prevent
        further infection. It's used to treat teeth where the nerve has
        become inflamed or infected, often due to deep decay, a crack, or
        trauma.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>Ongoing tooth pain, especially when biting or chewing</li>
        <li>Sensitivity to hot or cold that lingers after the trigger is removed</li>
        <li>Swelling or tenderness in the gum near a tooth</li>
        <li>A tooth that has darkened in colour</li>
        <li>A deep cavity reaching the nerve</li>
        <li>A cracked tooth exposing the inner pulp</li>
        <li>An abscess found on an X-ray</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Assessment and anaesthetic</h3>
      <p>
        Your dentist will examine the tooth and usually take an X-ray to
        assess the extent of the damage. Local anaesthetic is used so the
        area is numb before treatment begins.
      </p>
      <h3>Cleaning the canal</h3>
      <p>
        A small opening is made in the tooth to access the inner canal. The
        infected or damaged tissue is carefully removed, and the canal is
        cleaned and shaped.
      </p>
      <h3>Sealing the tooth</h3>
      <p>
        Once clean, the canal is filled with a biocompatible material to
        seal it. In many cases, the tooth will also need a crown afterwards
        to protect it and restore its strength, as root-treated teeth can
        become more brittle over time.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Can save a tooth that might otherwise need to be removed</li>
        <li>Helps relieve pain caused by an infected or inflamed nerve</li>
        <li>Treats the infection, which can help prevent it spreading further</li>
        <li>Allows you to keep your natural tooth and bite function</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Root canal treatment is suitable for many patients, but whether it's
        the right option depends on the condition of the tooth, its
        position, and your overall dental health. In some cases, extraction
        may be recommended instead if the tooth is too damaged to be saved.
        Your dentist will assess your tooth and discuss the options with
        you.
      </p>

      <h2>Aftercare</h2>
      <p>
        It's common to have some mild tenderness for a few days after
        treatment, which can usually be managed with over-the-counter pain
        relief if needed. It's best to avoid chewing on the treated tooth
        until any recommended follow-up restoration, such as a crown, has
        been completed. Keeping up with brushing, flossing, and regular
        check-ups will help protect the tooth long term.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes a careful, considered approach to root canal
        treatment, using clear communication so you understand each stage of
        the process. We aim to make the experience as comfortable as
        possible in a relaxed, family-friendly environment.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're experiencing tooth pain or think you may need root canal
        treatment, get in touch with our team. We're happy to answer any
        questions and arrange an assessment.
      </p>
    </article>
  )
}

export default RootCanalTreatment
