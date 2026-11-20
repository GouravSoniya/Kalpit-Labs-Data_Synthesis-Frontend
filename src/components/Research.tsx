import Reveal from "./Reveal";

const methods = [
  ["Rules and statistics", "Explicit rules and sampled distributions for structured records with known constraints."],
  ["Simulation", "Data from a model of a process or environment, always checked against the real task."],
  ["Generative models", "Text, images and more, paired with filtering, deduplication and label checks."],
];

const reading = [
  ["NVIDIA: What is Synthetic Data Generation?", "https://www.nvidia.com/en-us/glossary/synthetic-data-generation/"],
  ["NVIDIA NeMo: Synthetic Data Generation", "https://docs.nvidia.com/nemo-framework/user-guide/25.02/datacuration/syntheticdata.html"],
];

export default function Research() {
  return (
    <section id="research" className="section">
      <Reveal className="section-head">
        <h2>Research</h2>
        <p>
          Our earlier work built use-case-specific generators with open-source models: four medical generators, a
          loan-fraud generator and a financial-fraud generator with a dataset made available online. It reached
          prototype stage and gives us experiments to learn from.
        </p>
      </Reveal>
      <div className="cols3">
        {methods.map(([t, d], i) => (
          <Reveal key={t} className="plain" delay={i * 0.12}>
            <h3>{t}</h3>
            <p>{d}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="h3" className="sub">Further reading</Reveal>
      <ul className="reading">
        {reading.map(([t, u]) => (
          <li key={u}>
            <a href={u} target="_blank" rel="noopener noreferrer">{t}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}