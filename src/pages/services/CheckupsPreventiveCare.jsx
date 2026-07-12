import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Does a check-up hurt?',
    answer:
      "A check-up and clean is generally a comfortable experience. You may feel some mild sensitivity during the clean, particularly around the gumline or if there's a build-up of tartar, but this is usually brief. Let your dentist know if you're feeling any discomfort so they can adjust their approach.",
  },
  {
    question: 'How long does a check-up take?',
    answer:
      'A standard check-up and clean typically takes around 30 to 45 minutes, though this can vary depending on your individual needs and whether X-rays are required.',
  },
  {
    question: 'How often should I have a check-up?',
    answer:
      'Most patients are recommended to visit every six months, but this can vary. Some patients may need more frequent visits, while others may be able to space theirs out further, depending on their individual oral health.',
  },
  {
    question: 'Do I need X-rays every visit?',
    answer:
      "Not necessarily. X-rays are generally recommended periodically, based on your individual risk factors and dental history, rather than at every single visit. Your dentist will advise what's appropriate for you.",
  },
  {
    question: "What if I haven't been to the dentist in years?",
    answer:
      "That's okay — many patients return to dental care after a break. Your dentist will take the time to understand your history and current oral health without judgement, and will explain any findings and options clearly.",
  },
  {
    question: 'What happens if I skip regular check-ups?',
    answer:
      'Without regular monitoring, dental issues such as decay or gum disease may go unnoticed and progress further before being identified. This can sometimes mean more involved treatment is needed than if the issue had been caught earlier.',
  },
  {
    question: 'Are check-ups suitable for children?',
    answer:
      'Yes, check-ups are recommended for children as part of monitoring the development of their teeth and jaw, and to help them become familiar and comfortable with dental visits from an early age.',
  },
  {
    question: "What's the difference between a check-up and a clean?",
    answer:
      "A check-up refers to the examination of your teeth and gums, while a clean refers to the professional removal of plaque and tartar. They're generally carried out together in the same appointment.",
  },
]

function CheckupsPreventiveCare() {
  return (
    <article className="service-page">
      <h1>Check-ups &amp; Preventive Care</h1>

      <p>
        Looking after your smile starts with regular check-ups. These visits
        let your dentist keep an eye on your teeth and gums, catch small
        issues early, and help you avoid more complicated treatment down the
        track.
      </p>
      <p>
        A preventive care appointment usually combines an examination with a
        professional clean. It's a straightforward, comfortable visit
        suitable for the whole family, from young children through to
        grandparents.
      </p>

      <h2>What is a Dental Check-up?</h2>
      <p>
        A dental check-up is a routine examination of your teeth, gums, and
        mouth, allowing your dentist to assess your oral health and identify
        any early signs of decay, gum disease, or other issues. Preventive
        care refers to the steps taken to catch problems early, and
        generally includes an examination, a professional clean, and advice
        tailored to your needs.
      </p>

      <h2>When might this treatment be recommended?</h2>
      <p>
        Most dental professionals recommend a check-up every six months.
        You might be due for one if:
      </p>
      <ul>
        <li>It has been six months or more since your last dental visit</li>
        <li>You've noticed sensitivity, discomfort, or changes in your teeth or gums</li>
        <li>You have a new symptom, such as bleeding gums or bad breath</li>
        <li>You're due for your child's first dental visit</li>
        <li>You're returning to dental care after a break</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <p>
        Your dentist will begin by reviewing your history and asking about
        any concerns, then examine your teeth, gums, and soft tissues,
        checking for signs of decay, gum disease, or other changes. Digital
        X-rays may be recommended to help assess areas not visible to the
        naked eye. A clean is usually carried out afterwards, gently
        removing plaque and tartar and polishing away surface staining. At
        the end of your visit, your dentist will talk you through their
        findings and any recommendations.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>
          Identify early signs of tooth decay or gum disease, when they are
          often easier to manage
        </li>
        <li>Reduce the likelihood of more extensive treatment being needed later</li>
        <li>Removes plaque and tartar that brushing and flossing alone can't reach</li>
        <li>Gives you a better understanding of your own oral hygiene habits</li>
      </ul>

      <h2>Is this treatment suitable for everyone?</h2>
      <p>
        Check-ups are generally suitable for all patients, from young
        children to older adults, but the right frequency and approach
        depends on an individual assessment of your oral health, medical
        history, and any specific risk factors, such as gum disease,
        medications, or pregnancy. Your dentist will talk you through what's
        appropriate for you.
      </p>

      <h2>Aftercare</h2>
      <p>
        There's generally no downtime after a routine check-up and clean.
        Some mild gum sensitivity is common for a day or so afterwards.
        Brushing twice daily, flossing, and limiting sugary or acidic food
        and drinks will help support your oral health between visits.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team takes a thorough and personalised approach to every
        check-up, using modern digital technology and clear communication so
        you understand what we find and why. We aim to create a
        comfortable, family-friendly environment for patients of all ages.
      </p>

      <h2>Book Your Check-up</h2>
      <p>
        If it's time for your next check-up, get in touch with our friendly
        team to book an appointment. We're happy to help.
      </p>
    </article>
  )
}

export default CheckupsPreventiveCare
