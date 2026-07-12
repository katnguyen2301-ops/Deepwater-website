import FaqAccordion from '../../FaqAccordion'

const faqs = [
  {
    question: 'Does getting an implant hurt?',
    answer:
      "The procedure is carried out under local anaesthetic, so you shouldn't feel pain during placement. Some discomfort or swelling afterwards is normal and can usually be managed with pain relief.",
  },
  {
    question: 'How long does the whole process take?',
    answer:
      'It varies, but the full process, from placement to attaching the final crown, often takes several months, allowing time for healing.',
  },
  {
    question: 'How long do implants last?',
    answer:
      'This depends on individual factors such as oral hygiene, bone health, and lifestyle, so your dentist can give you a better idea based on your situation.',
  },
  {
    question: 'What are the alternatives?',
    answer:
      'Alternatives include a dental bridge or a removable denture. Your dentist can discuss which option may suit your needs.',
  },
  {
    question: 'What happens if I delay treatment?',
    answer:
      'Over time, the jawbone in the area of a missing tooth can gradually shrink, which may affect suitability for an implant later on. Your dentist can advise on timing based on your situation.',
  },
  {
    question: 'Am I too old for a dental implant?',
    answer:
      "Age alone doesn't rule out implants. Suitability is based more on your general health, bone density, and gum health than your age.",
  },
]

function DentalImplants() {
  return (
    <article className="service-page">
      <h1>Dental Implants</h1>

      <p>
        A dental implant is another option for replacing a missing tooth.
        Unlike a bridge, it doesn't rely on the neighbouring teeth for
        support, as it's anchored directly into the jawbone.
      </p>
      <p>We'll assess your individual suitability and talk you through the process if you're considering this option.</p>

      <h2>What is a Dental Implant?</h2>
      <p>
        A dental implant is a small titanium post that's placed into the
        jawbone to act as an artificial tooth root. Once in place, it
        supports a replacement tooth, known as a crown, which is attached on
        top.
      </p>
      <p>
        Implants are used to replace one or more missing teeth, and in some
        cases, to help support other restorations such as bridges or
        dentures.
      </p>

      <h2>When might this be recommended?</h2>
      <ul>
        <li>You're missing one or more teeth</li>
        <li>You'd prefer an option that doesn't involve altering neighbouring teeth</li>
        <li>You have a gap that's affecting your bite, speech, or confidence</li>
        <li>You currently wear a denture and would like a more stable alternative</li>
        <li>
          You have sufficient bone density to support an implant, or are
          considering options to build it up
        </li>
      </ul>

      <h2>What happens during treatment?</h2>
      <h3>Assessment and planning</h3>
      <p>
        Your dentist will assess your jawbone, gum health, and overall
        suitability, often using X-rays or a 3D scan, to plan the position
        of the implant carefully.
      </p>
      <h3>Placing the implant</h3>
      <p>
        The implant is placed into the jawbone under local anaesthetic. Over
        the following months, the bone gradually fuses around the implant in
        a process called osseointegration, which helps anchor it securely.
      </p>
      <h3>Attaching the crown</h3>
      <p>
        Once healed, a connector piece (abutment) and a custom-made crown
        are attached to the implant, completing the restoration.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Doesn't require altering the neighbouring teeth</li>
        <li>Designed to function and feel like a natural tooth</li>
        <li>May help maintain jawbone structure in the area of the missing tooth</li>
        <li>Can offer a stable, long-term option for suitable candidates</li>
      </ul>

      <h2>Is this suitable for everyone?</h2>
      <p>
        Implants aren't suitable for every patient. Suitability depends on
        factors such as jawbone density, gum health, general health, and
        lifestyle factors like smoking. Some patients may need additional
        treatment, such as bone grafting, before an implant can be placed.
        Your dentist will carry out a thorough assessment to determine if
        implants are a suitable option for you.
      </p>

      <h2>Aftercare</h2>
      <p>
        Some swelling, tenderness, or bruising is common in the days
        following implant placement, and this generally settles within a
        week or so. Good oral hygiene is important throughout the healing
        process and beyond, and your dentist will let you know about any
        dietary or activity precautions during recovery. Regular check-ups
        will help monitor the implant over time.
      </p>

      <h2>Frequently Asked Questions</h2>
      <FaqAccordion items={faqs} />

      <h2>Why Choose Our Practice?</h2>
      <p>
        Our team carries out thorough assessments to determine if implants
        are suitable for you, and we're happy to walk you through each stage
        of the process. We use modern imaging and planning to support
        careful, personalised treatment.
      </p>

      <h2>Book an Appointment</h2>
      <p>
        If you're considering a dental implant, get in touch with our team
        for an assessment. We're happy to answer your questions and talk
        through your options.
      </p>
    </article>
  )
}

export default DentalImplants
