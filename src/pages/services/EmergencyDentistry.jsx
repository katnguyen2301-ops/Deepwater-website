import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'What should I do if my tooth gets knocked out?',
    answer:
      'Try to find the tooth and hold it by the crown, not the root. If possible, gently rinse it and place it back in the socket, or keep it in milk, and see a dentist immediately.',
  },
  {
    question: 'Does emergency treatment hurt?',
    answer:
      "We'll always aim to make you as comfortable as possible, and pain relief is often part of emergency treatment.",
  },
  {
    question: 'How quickly can I be seen?',
    answer:
      "We aim to see emergency patients as soon as possible. Contact us straight away and we'll do our best to fit you in quickly.",
  },
  {
    question: 'What counts as a dental emergency?',
    answer:
      "Severe pain, swelling, knocked-out or badly damaged teeth, and uncontrolled bleeding are all considered emergencies. If you're unsure, it's best to call us.",
  },
  {
    question: "What if I can't get in straight away?",
    answer:
      "We'll give you advice on managing the problem until you can be seen, such as pain relief options or how to protect a damaged tooth.",
  },
  {
    question: 'Can a knocked-out tooth be saved?',
    answer:
      'Sometimes, especially if you act quickly and see a dentist within a short time. It depends on the individual situation.',
  },
]

function EmergencyDentistry() {
  return (
    <article className="service-page">
      <h1>Emergency Dentistry</h1>

      <p>
        Dental emergencies rarely happen at a convenient time. Whether it's a
        knocked-out tooth, sudden pain, or a broken filling, we understand
        how stressful and painful these situations can be.
      </p>
      <p>
        If you're dealing with a dental emergency, contact us as soon as
        possible so we can guide you and arrange to see you promptly.
      </p>

      <h2>What is Emergency Dentistry?</h2>
      <p>
        Emergency dentistry covers urgent dental problems that need prompt
        attention, rather than waiting for a routine check-up. The goal is
        to relieve pain, prevent further damage, and address the issue as
        quickly as possible.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>Severe or sudden tooth pain</li>
        <li>A knocked-out or loose tooth</li>
        <li>A cracked, chipped, or broken tooth</li>
        <li>A lost filling or crown</li>
        <li>Swelling in the face, gums, or jaw</li>
        <li>An abscess or infection</li>
        <li>Ongoing bleeding after an injury to the mouth</li>
      </ul>

      <h2>What happens during treatment?</h2>
      <p>
        When you contact us with an emergency, we'll ask a few questions to
        understand what's happened and how urgent it is. We'll then arrange
        to see you as soon as we can.
      </p>
      <p>
        At your visit, we'll examine the affected area, possibly take an
        X-ray, and talk you through what's going on and the options to treat
        it. From there, treatment depends on the issue, and might involve
        pain relief, a temporary or permanent fix, or referral for further
        care if needed.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Helps relieve pain and discomfort quickly</li>
        <li>Reduces the risk of an issue getting worse</li>
        <li>May improve the chances of saving a damaged or knocked-out tooth</li>
        <li>Gives you clear guidance on what to do next</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Emergency dental care is available to anyone experiencing a dental
        injury or sudden problem. The right treatment will always depend on
        an individual assessment on the day, as every emergency is a little
        different.
      </p>

      <h2>Aftercare</h2>
      <p>
        Aftercare depends on the treatment provided. We'll always explain
        what to expect afterwards, including any pain relief, foods to
        avoid, or signs to watch out for. If you have ongoing pain,
        swelling, or other concerns after your visit, get in touch with us.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our experienced team understands how stressful dental emergencies
        can be. We aim to see you promptly, explain your options clearly,
        and provide personalised care to get you comfortable again.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you're experiencing a dental emergency, please contact us
        straight away. Our team is here to help guide you through what to
        do next.
      </p>
    </article>
  )
}

export default EmergencyDentistry
