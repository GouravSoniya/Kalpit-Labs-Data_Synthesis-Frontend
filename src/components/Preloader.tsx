"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const R = 70;
const C = 100;
const STAR = `M${C} ${C - R}Q${C} ${C} ${C + R} ${C}Q${C} ${C} ${C} ${C + R}Q${C} ${C} ${C - R} ${C}Q${C} ${C} ${C} ${C - R}Z`;
const CROSSES = [
  "M30 30L50 50M50 30L30 50",
  "M150 30L170 50M170 30L150 50",
  "M30 150L50 170M50 150L30 170",
  "M150 150L170 170M170 150L150 170",
];
const SEEN_KEY = "kalpit-preloader-seen";
const DURATION = 2400; // ms before the curtain lifts

export default function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen || reduce) {
      setVisible(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, DURATION);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {visible && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading Kalpit Labs"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "grid",
            placeItems: "center",
            background: "#f6efe1",
            borderRadius: "0 0 50% 50% / 0 0 90px 90px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ position: "relative", width: 200, height: 200, margin: "0 auto" }}>
              <svg viewBox="0 0 200 200" width="200" height="200" fill="none" stroke="#b5573a" strokeWidth="1.6" aria-hidden="true">
                <motion.path
                  d={STAR}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
                {CROSSES.map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
                  />
                ))}
              </svg>
              <motion.span
                lang="hi"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 220, damping: 14 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--deva)",
                  fontSize: 44,
                  color: "#c9962f",
                }}
              >
                क
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              style={{ margin: "20px 0 0", fontFamily: "var(--serif)", fontSize: 20, color: "#231a12" }}
            >
              Kalpit Labs
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              style={{ margin: "4px 0 0", fontFamily: "var(--font-sans)", fontSize: 13, fontStyle: "italic", color: "#7a5a35" }}
            >
              imagined data
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}