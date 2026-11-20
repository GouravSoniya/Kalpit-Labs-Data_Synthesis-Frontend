"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

type Props = {
  as?: keyof typeof tags;
  className?: string;
  delay?: number; // seconds, for staggering
  intro?: boolean; // above-the-fold: pops on load, after the preloader
  children: ReactNode;
};

const SEEN_KEY = "kalpit-preloader-seen";
const PRELOADER_WAIT = 3; // seconds, roughly when the curtain lifts

export default function Reveal({ as = "div", className, delay = 0, intro = false, children }: Props) {
  const reduce = useReducedMotion();
  const Tag = tags[as] as typeof motion.div;
  const [base, setBase] = useState<number | null>(intro ? null : 0);

  useEffect(() => {
    if (!intro) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    setBase(seen ? 0 : PRELOADER_WAIT);
  }, [intro]);

  if (reduce) return <Tag className={className}>{children}</Tag>;

  const hidden = { opacity: 0, scale: 0.9, y: 24 };
  const shown = { opacity: 1, scale: 1, y: 0 };
  const transition = { type: "spring" as const, stiffness: 170, damping: 16, delay: (base ?? 0) + delay };

  if (intro) {
    return (
      <Tag className={className} initial={hidden} animate={base === null ? hidden : shown} transition={transition}>
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-60px" }}
      transition={transition}
    >
      {children}
    </Tag>
  );
}