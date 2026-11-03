"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: "airwrite",
    label: "AirWrite — draw letters in the air",
    tag: "Air gesture · Left wrist",
    title: "AirWrite",
    description:
      "Draw capital letters in the air with broad arm movements. The on-device model recognises each letter and speaks it aloud — no typing, no screen touch required.",
    video: "/content/how-to-use/videos/how-to-1.mp4",
    videoLabel: "AirWrite tutorial — how to draw letters in the air",
  },
  {
    id: "orientwrite",
    label: "OrientWrite — wrist-tilt virtual canvas",
    tag: "Wrist tilt · Roll and pitch",
    title: "OrientWrite",
    description:
      "For hands that can't lift into the air — tilt the wrist to move a cursor across a virtual canvas and trace letters. Roll moves horizontally, pitch moves vertically.",
    video: "/content/how-to-use/videos/how-to-2.mp4",
    videoLabel: "OrientWrite tutorial — wrist-tilt virtual canvas",
  },
  {
    id: "surface-tap",
    label: "Surface Tap — tap the table to speak",
    tag: "Hands-free · Any surface",
    title: "Surface Tap",
    description:
      "Tap any nearby surface — a bedrail, a tray table, your own leg — and the watch hears it through the wrist. One tap advances, two confirms. It works with tremor and with no finger precision at all.",
    video: "/content/how-to-use/videos/how-to-4.mp4",
    videoLabel: "Surface Tap tutorial — tapping any surface to navigate",
  },
];

export function ThreeWaysCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(el.scrollLeft / Math.max(1, el.clientWidth));
        setIndex(Math.max(0, Math.min(slides.length - 1, i)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <section
      id="how"
      className="section border-t border-[var(--line)] bg-white"
      aria-roledescription="carousel"
      aria-label="How to use AirWrite, OrientWrite and Surface Tap"
      onKeyDown={onKeyDown}
    >
      <div className="section-pad pb-10 lg:pb-16">
        <div className="shell">
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <p className="mono text-[var(--accent-deep)]">
              03 / Three ways to be heard
            </p>

            <div className="flex shrink-0 items-center gap-4 sm:gap-6">
              <p className="mono text-[var(--muted)]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Previous feature"
                  onClick={() => goTo(index - 1)}
                  disabled={index === 0}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Next feature"
                  onClick={() => goTo(index + 1)}
                  disabled={index === slides.length - 1}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <h2 className="w-full text-[clamp(2.75rem,7.5vw,7.5rem)] font-bold tracking-[-0.038em] leading-[0.95] text-[var(--ink)]">
              Three ways to be heard.
            </h2>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="carousel-viewport mt-10 lg:mt-14"
          tabIndex={0}
          aria-label="AirWrite, OrientWrite and Surface Tap — swipe or use arrow keys"
        >
          {slides.map((slide, i) => (
            <article
              key={slide.id}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={i !== index}
            >
              <div className="shell">
                <div className="grid12 items-center gap-y-10 lg:gap-x-12">
                  <div className="col-span-12 flex items-center justify-center lg:col-span-6 lg:justify-start">
                    <video
                      src={slide.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={slide.videoLabel}
                      className="aspect-square w-full max-w-[540px] object-contain bg-white"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <p className="mono text-xs sm:text-sm font-semibold tracking-[0.12em] text-[var(--muted)]">
                      {slide.tag}
                    </p>
                    <h3 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink)] leading-[1.08]">
                      {slide.title}
                    </h3>
                    <p className="mt-6 max-w-[50ch] text-lg sm:text-xl lg:text-2xl leading-relaxed text-[var(--muted)]">
                      {slide.description}
                    </p>
                    <Link
                      href="/how-to-use"
                      className="text-link mt-8 inline-flex text-base sm:text-lg font-semibold"
                    >
                      Full walkthrough in the guide
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="shell">
          <div className="mt-8 flex items-center justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                className="carousel-dot"
                aria-current={index === i ? "true" : undefined}
                aria-label={`Slide ${i + 1}: ${slide.title}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
