import Jali from "./Jali";
import Reveal from "./Reveal";

const pillars = [
  { glyph: "क", label: "Generate", title: "Scenario-first datasets", body: "The idea: describe the world you need to test, then generate data for it." },
  { glyph: "ख", label: "Validate", title: "Realism, measured", body: "The goal: statistical checks against real distributions before anyone relies on the data." },
  { glyph: "ग", label: "Protect", title: "Privacy at the core", body: "Learning without exposing private records is the point. Something to prove, not claim." },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-main">
        <div className="hero-text">
          <Reveal intro as="p" className="eyebrow">
            Synthetic data · <span lang="hi">कल्पित</span> · Built in India
          </Reveal>
          <Reveal intro as="h1" delay={0.1}>
            An Indian lab for <span className="gold">imagined data.</span>
          </Reveal>
          <Reveal intro as="p" className="backed" delay={0.18}>
            <span className="backed-main">This startup is supported by <strong>Cartesia</strong></span>
            <span className="backed-sub">through their startup programme</span>
          </Reveal>
          {/* <Reveal intro as="p" className="meaning" delay={0.25}>
            Kalpit (<span lang="hi">कल्पित</span>): imagined, conceived, invented. Exactly what we do with data.
          </Reveal> */}
          <Reveal intro as="p" className="lede" delay={0.35}>
            We&rsquo;re exploring generators that create artificial datasets: data designed to mirror real-world patterns,
            so teams could build and test AI systems without depending on private records.
          </Reveal>
          <Reveal intro delay={0.45}>
            <a className="btn" href="#contact">Start a conversation</a>
          </Reveal>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Reveal intro delay={0.3}>
            <Jali />
          </Reveal>
        </div>
      </div>

      <div className="pillars" role="group" aria-label="What we are exploring">
        {pillars.map((p, i) => (
          <Reveal intro as="article" key={p.label} className="arch" delay={0.5 + i * 0.12}>
            <span className="glyph" lang="hi">{p.glyph}</span>
            <p className="eyebrow">{p.label}</p>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}