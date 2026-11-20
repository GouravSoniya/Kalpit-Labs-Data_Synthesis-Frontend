import Reveal from "./Reveal";

const team = [
  { name: "Shubham Kumar", role: "Founder and CEO", bio: "Mechanical engineering graduate with about two and a half years as an ML engineer. Leads technical direction and product development." },
  { name: "Zulkifl Khairoowala", role: "Co-founder", bio: "PhD researcher in quantum computing. Handles marketing and helps with operations." },
  { name: "Fazil Zaidi", role: "Cybersecurity Analyst", bio: "Supports the team on cybersecurity work and issues." },
  { name: "Faiz Sherwani", role: "General Management and Operations", bio: "Helps Shubham with day-to-day management across the company." },
  { name: "Gourav", role: "Full-stack Intern", bio: "Contributes to full-stack development." },
];

export default function Team() {
  return (
    <section id="team" className="section alt">
      <Reveal className="section-head">
        <h2>Team</h2>
        <p>
          We plan to bring in more interns as the work develops, including in AI security and AI research. Those are
          prospective additions, not confirmed members.
        </p>
      </Reveal>
      <ul className="team">
        {team.map((m, i) => (
          <Reveal as="li" key={m.name} delay={(i % 3) * 0.1}>
            <span className="avatar" aria-hidden="true">{m.name[0]}</span>
            <h3>{m.name}</h3>
            <p className="role">{m.role}</p>
            <p>{m.bio}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}