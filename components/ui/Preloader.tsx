"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame: number;
    let current = 0;
    const target = 100;
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      current = Math.floor(eased * target);
      setProgress(current);

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => setDone(true), 300);
        setTimeout(() => setHidden(true), 1100);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#05070a" }}
    >
      <div className="w-[min(380px,80vw)] text-center">
        {/* Logo */}
        <div className="mx-auto mb-6 w-12 h-12 relative">
          <div className="absolute inset-0 rounded-full bg-[#0a0e14] border border-[rgba(224,232,226,0.1)]" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5ba5f7]"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
        </div>

        {/* Brand */}
        <p
          className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "var(--bone-dim)" }}
        >
          AirWhisper
        </p>

        {/* Progress bar */}
        <div className="relative h-[1px] bg-[rgba(224,232,226,0.12)] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-[#5ba5f7]"
            style={{
              width: `${progress}%`,
              transition: "width 0.15s linear",
              boxShadow: "0 0 12px rgba(91,164,217,0.4)",
            }}
          />
        </div>

        {/* Meta */}
        <div className="flex justify-between mt-3 text-[10px] tracking-[0.18em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          <span>Loading experience</span>
          <span style={{ color: "var(--bone-dim)", fontVariantNumeric: "tabular-nums" }}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
