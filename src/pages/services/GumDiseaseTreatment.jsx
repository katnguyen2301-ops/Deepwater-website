import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Does gum disease treatment hurt?',
    answer:
      'A standard clean is generally comfortable. For deeper cleaning, local anaesthetic may be used if needed, and any sensitivity afterwards is usually mild and temporary.',
  },
  {
    question: 'How long does treatment take?',
    answer:
      'This depends on the severity of the gum disease, ranging from a single clean to a series of visits for more advanced cases.',
  },
  {
    question: 'Can gum disease be reversed?',
    answer:
      'Early-stage gum disease (gingivitis) can often be improved with treatment and better oral hygiene. More advanced gum disease can generally be managed and controlled, though some effects may not be fully reversible.',
  },
  {
    question: 'What are the alternatives?',
    answer:
      'Treatment is generally recommended for gum disease, as leaving it untreated can allow it to progress. Your dentist can explain the specific options for your situation.',
  },
  {
    question: 'What happens if I delay treatment?',
    answer:
      'Untreated gum disease can progress and may lead to further bone loss, loose teeth, and in some cases, tooth loss.',
  },
  {
    question: 'How can I prevent gum disease?',
    answer:
      'Brushing twice daily, flossing regularly, and attending routine check-ups all help support healthy gums.',
  },
]

function GumDiseaseTreatment() {
  return (
    <article className="service-page">
      <h1>Gum Disease Treatment</h1>

      <p>
        Healthy gums are just as important as healthy teeth. Gum disease is
        common, but if left untreated it can lead to more serious problems,
        so early treatment can make a real difference.
      </p>
      <p>We'll assess your gum health as part of your regular check-ups and recommend treatment if needed.</p>

      <h2>What is Gum Disease?</h2>
      <p>
        Gum disease is inflammation and infection of the gums and, in more
        advanced stages, the structures supporting your teeth. It generally
        starts with gingivitis, an early and usually reversible stage
        involving red, swollen gums, and can progress to periodontitis, a
        more advanced form that can affect the bone supporting your teeth.
      </p>

      <h2>When might treatment be recommended?</h2>
      <ul>
        <li>Gums that bleed when brushing or flossing</li>
        <li>Red, swollen, or tender gums</li>
        <li>Persistent bad breath</li>
        <li>Gums that appear to be receding</li>
        <li>Teeth that feel loose or have shifted</li>
        <li>A build-up of plaque or tartar identified during a check-up</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Assessment</h3>
      <p>
        Your dentist will examine your gums, checking for signs of
        inflammation, bleeding, and any loss of the bone or tissue
        supporting your teeth.
      </p>
      <h3>Professional cleaning</h3>
      <p>
        Treatment usually starts with a thorough clean to remove plaque and
        tartar from around and below the gumline, sometimes called scaling.
      </p>
      <h3>Ongoing care</h3>
      <p>
        Depending on the severity, further visits or more specific treatment
        may be recommended, along with guidance on improving your oral
        hygiene routine at home.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps reduce inflammation and bleeding of the gums</li>
        <li>May help prevent gum disease progressing to more advanced stages</li>
        <li>Supports the long-term health of the structures supporting your teeth</li>
        <li>Can improve bad breath associated with gum disease</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Gum disease treatment is relevant for most patients showing signs of
        the condition, but the right approach depends on how advanced it is
        and your individual oral health. Your dentist will assess your gums
        and recommend a treatment plan suited to your situation.
      </p>

      <h2>Aftercare</h2>
      <p>
        Some sensitivity is common for a short time after a deeper clean,
        which usually settles. Maintaining a good daily oral hygiene
        routine, including thorough brushing and flossing, is important for
        supporting your gum health going forward. Your dentist may also
        recommend more frequent check-ups while your gums are monitored.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes gum health seriously as part of every check-up, and
        we're happy to explain any findings and treatment options clearly.
        We focus on practical, personalised advice to help support your gum
        health long term.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you've noticed changes in your gums, or it's time for your next
        check-up, get in touch with our team. We're happy to help.
      </p>
    </article>
  )
}

export default GumDiseaseTreatment
