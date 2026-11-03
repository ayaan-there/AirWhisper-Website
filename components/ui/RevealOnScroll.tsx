"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  distance?: number;
  duration?: number;
  blur?: boolean;
}

export function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.12,
  className = "",
  as: Tag = "div",
  distance = 50,
  duration = 1.1,
  blur = false,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    const transforms: Record<string, string> = {
      up: `translate3d(0, ${distance}px, 0)`,
      down: `translate3d(0, -${distance}px, 0)`,
      left: `translate3d(-${distance}px, 0, 0)`,
      right: `translate3d(${distance}px, 0, 0)`,
      scale: "scale(0.88)",
      fade: "none",
    };

    el.style.opacity = "0";
    el.style.transform = transforms[direction];
    if (blur) el.style.filter = "blur(8px)";
    el.style.willChange = "transform, opacity, filter";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration * 1.1}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration * 0.8}s cubic-bezier(0.16, 1, 0.3, 1)`;
            el.style.opacity = "1";
            el.style.transform = "none";
            if (blur) el.style.filter = "blur(0px)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold, distance, duration, blur]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Stagger wrapper: reveals each direct child one-by-one with dramatic delays */
interface StaggerProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  staggerMs?: number;
  threshold?: number;
  className?: string;
  distance?: number;
  duration?: number;
  blur?: boolean;
}

export function RevealStagger({
  children,
  direction = "up",
  staggerMs = 150,
  threshold = 0.08,
  className = "",
  distance = 50,
  duration = 1.0,
  blur = false,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    const transforms: Record<string, string> = {
      up: `translate3d(0, ${distance}px, 0)`,
      down: `translate3d(0, -${distance}px, 0)`,
      left: `translate3d(-${distance}px, 0, 0)`,
      right: `translate3d(${distance}px, 0, 0)`,
      scale: "scale(0.88)",
      fade: "none",
    };

    // Set initial hidden state on all children
    items.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = transforms[direction];
      if (blur) child.style.filter = "blur(6px)";
      child.style.willChange = "transform, opacity, filter";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((child, i) => {
            setTimeout(() => {
              child.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration * 1.1}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration * 0.8}s cubic-bezier(0.16, 1, 0.3, 1)`;
              child.style.opacity = "1";
              child.style.transform = "none";
              if (blur) child.style.filter = "blur(0px)";
            }, i * staggerMs);
          });
          observer.unobserve(container);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [direction, staggerMs, threshold, distance, duration, blur]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
