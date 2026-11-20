import Reveal from "./Reveal";

const steps = [
  { title: "Agree the requirement", body: "Define what the data is for, the fields and constraints, and the cases that must be covered." },
  { title: "Generate controlled cases", body: "Use rules, statistics, simulation or generative models, whichever the requirement calls for." },
  { title: "Check before delivery", body: "Verify validity, labels and coverage, and keep deliberate edge cases apart from accidental ones." },
  { title: "Test usefulness", body: "Run the data against the real task and compare with the baseline. Creating records alone proves nothing." },
];

const checks = [
  ["Validity", "Does each example meet the schema, rules and label definition?"],
  ["Coverage", "Are the required situations and variations present?"],
  ["Usefulness", "Does it help the intended test or model compared with what exists today?"],
  ["Rights and privacy", "Are the inputs permitted? Synthetic does not automatically mean anonymous."],
];

export default function Approach() {
  return (
    <section id="approach" className="section alt">
      <Reveal className="section-head">
        <h2>Approach</h2>
        <p>
          Start with a clear outcome, generate only what supports it and validate against that outcome. Sometimes a
          simple rules-based solution is enough, and sometimes better real-data collection is the better answer.
        </p>
      </Reveal>
      <ol className="steps">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.1}>
            <span className="step-n">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal as="h3" className="sub">Realistic is not the same as useful</Reveal>
      <dl className="checks">
        {checks.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08}>
            <dt>{t}</dt>
            <dd>{d}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}