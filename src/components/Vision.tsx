import Reveal from "./Reveal";

const horizons = [
  {
    name: "Now",
    items: [
      "Build the voice-agent evaluation platform we're working on, so teams can test their agents before deployment.",
      "Find pilot customers and aim to bring in the first one or two clients.",
      "Explore available funding opportunities.",
    ],
  },
  {
    name: "Next",
    items: [
      "Turn pilot use into customers for the product we've built.",
      "Pursue funding to support further development and the team.",
      "Make workflows and pipelines modular and automated where practical.",
      "Build a team that can run, maintain and improve those systems.",
    ],
  },
  {
    name: "Later",
    items: [
      "Grow Kalpit into an engineering and applied AI lab taking on projects with simulation, synthetic data and adversarial methods.",
      "Stay open to new problems and domains rather than settling on one product or workflow.",
    ],
  },
];

export default function Vision() {
  return (
    <section id="vision" className="section">
      <Reveal className="section-head">
        <h2>Vision</h2>
        <p>
          Kalpit helps teams build better systems when the data they need is missing, hard to collect or hard to access.
          We keep experimenting around real problems instead of limiting ourselves to one product.
        </p>
      </Reveal>
      <div className="horizons">
        {horizons.map((h, i) => (
          <Reveal key={h.name} className="horizon" delay={i * 0.12}>
            <h3>{h.name}</h3>
            <ul>
              {h.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="note">
        These are priorities, not fixed deadlines. Customers, funding, hiring and automation are goals we are working
        towards, not outcomes already secured.
      </Reveal>
    </section>
  );
}