import Reveal from "./Reveal";

// TODO: confirm the real contact address with Shubham before release.
const EMAIL = "hello@kalpitlabs.com";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal as="h2">Have a data problem?</Reveal>
      <Reveal as="p" delay={0.1}>
        If your team is missing data, or wants to test an AI system, including voice agents, without private records,
        tell us about it. We&rsquo;re looking for pilot teams to learn with.
      </Reveal>
      <Reveal delay={0.2}>
        <a className="btn" href={`mailto:${EMAIL}`}>Email {EMAIL}</a>
      </Reveal>
    </section>
  );
}