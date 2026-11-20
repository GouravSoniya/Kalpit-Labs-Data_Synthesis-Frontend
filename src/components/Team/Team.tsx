"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import "./Team.css";

type Member = { name: string; role: string; bio: string };

const team: Member[] = [
  { name: "Shubham Kumar", role: "Founder and CEO", bio: "Mechanical engineering graduate with about two and a half years as an ML engineer. Leads technical direction and product development." },
  { name: "Zulkifl Khairoowala", role: "Co-founder", bio: "PhD researcher in quantum computing. Handles marketing and helps with operations." },
  { name: "Fazil Zaidi", role: "Cybersecurity Analyst", bio: "Supports the team on cybersecurity work and issues." },
  { name: "Faiz Sherwani", role: "General Management and Operations", bio: "Helps Shubham with day-to-day management across the company." },
  { name: "Gourav", role: "Full-stack Intern", bio: "Contributes to full-stack development." },
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 96 96" className="tm-icon" aria-hidden="true" focusable="false">
      <circle cx="48" cy="36" r="16" fill="currentColor" />
      <path d="M16 90c0-18 14.3-30 32-30s32 12 32 30z" fill="currentColor" />
    </svg>
  );
}

export default function Team() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="team" className="section alt">
      <Reveal className="section-head">
        <h2>Team</h2>
        <p>
          We plan to bring in more interns as the work develops, including in AI security and AI research. Those are
          prospective additions, not confirmed members.
        </p>
      </Reveal>

      <div className="tm-wrap" role="region" aria-roledescription="carousel" aria-label="Team members">
        <button
          type="button"
          className="tm-btn tm-prev"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous team member"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <ul className="team tm-track" ref={trackRef} onScroll={update} tabIndex={0} aria-label="Scrollable list of team members">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} delay={(i % 3) * 0.1}>
              <span className="avatar" aria-hidden="true"><PersonIcon /></span>
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p>{m.bio}</p>
            </Reveal>
          ))}
        </ul>

        <button
          type="button"
          className="tm-btn tm-next"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next team member"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}