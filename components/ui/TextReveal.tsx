"use client";

import { useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  staggerMs?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** If true, animate immediately on mount (for hero). Otherwise wait for scroll. */
  immediate?: boolean;
  /** Delay before animation starts (ms) */
  startDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  staggerMs = 70,
  as: Tag = "h2",
  immediate = false,
  startDelay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".wr-word");

    // Set initial state
    words.forEach((w) => {
      w.style.display = "inline-block";
      w.style.opacity = "0";
      w.style.transform = "translate3d(0, 120%, 0) rotateX(25deg)";
      w.style.willChange = "transform, opacity";
      w.style.transformOrigin = "bottom center";
    });

    const reveal = () => {
      if (triggered.current) return;
      triggered.current = true;

      words.forEach((w, i) => {
        setTimeout(() => {
          w.style.transition = `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)`;
          w.style.opacity = "1";
          w.style.transform = "none";
        }, startDelay + i * staggerMs);
      });
    };

    if (immediate) {
      // Small delay for page load
      const timer = setTimeout(reveal, startDelay || 100);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs, immediate, startDelay]);

  const words = text.split(" ");
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} style={{ perspective: "600px" }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <span className="wr-word">
            {word}
          </span>
          {i < words.length - 1 && <span className="wr-word">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
