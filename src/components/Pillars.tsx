import Reveal from "./Reveal";

const pillars = [
  { glyph: "क", label: "Generate", title: "Scenario-first datasets", body: "The idea: describe the world you need to test, then generate data for it." },
  { glyph: "ख", label: "Validate", title: "Realism, measured", body: "The goal: statistical checks against real distributions before anyone relies on the data." },
  { glyph: "ग", label: "Protect", title: "Privacy at the core", body: "Learning without exposing private records is the point. Something to prove, not claim." },
];

export default function Pillars() {
  return (
    <section className="pillars" aria-label="What we are exploring">
      {pillars.map((p, i) => (
        <Reveal as="article" key={p.label} className="arch" delay={i * 0.12}>
          <span className="glyph" lang="hi">{p.glyph}</span>
          <p className="eyebrow">{p.label}</p>
          <h2>{p.title}</h2>
          <p>{p.body}</p>
        </Reveal>
      ))}
    </section>
  );
}