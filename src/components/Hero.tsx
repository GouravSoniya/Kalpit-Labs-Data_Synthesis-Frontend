import Jali from "./Jali";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <Reveal intro as="p" className="eyebrow">
          Synthetic data · <span lang="hi">कल्पित</span> · Built in India
        </Reveal>
        <Reveal intro as="h1" delay={0.1}>
          An Indian lab for <span className="gold">imagined data.</span>
        </Reveal>
        <Reveal intro as="p" className="meaning" delay={0.25}>
          Kalpit (<span lang="hi">कल्पित</span>): imagined, conceived, invented. Exactly what we do with data.
        </Reveal>
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
    </section>
  );
}