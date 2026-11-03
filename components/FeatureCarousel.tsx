"use client";

import { useEffect, useRef, useState } from "react";

const AIRWRITE_STEPS = [
  {
    title: "Tap Start (or clench)",
    detail: "Voice guidance announces “Start Recording.”",
  },
  {
    title: "Trace the letter in the air",
    detail: "Draw the capital letter with your left arm in one fluid, natural motion.",
  },
  {
    title: "Tap Stop (or clench)",
    detail: "The letter is recognized immediately, spoken aloud, and added to your message.",
  },
];

const ORIENTWRITE_STEPS = [
  {
    title: "Select OrientWrite",
    detail: "Open Writing Modes on your watch and tap OrientWrite. A virtual canvas appears.",
  },
  {
    title: "Tilt wrist to guide the cursor",
    detail: "Tilt left/right to move horizontally, forward/back vertically. Built-in stabilization filters shakes.",
  },
  {
    title: "Trace your letter & finish",
    detail: "Tap Start, guide the cursor to draw the letter, then tap Stop to speak it.",
  },
  {
    title: "Edit with Backspace",
    detail: "Tap the ← button anytime to remove a letter, or tap Done to proceed to Actions.",
  },
];

const SURFACE_TAP_STEPS = [
  {
    title: "Rest wrist on any surface",
    detail: "Rest your arm comfortably on a table, bedrail, chair arm, or your thigh. No lifting required.",
  },
  {
    title: "Single tap → next phrase",
    detail: "One light tap advances to the next pre-saved phrase and speaks it aloud.",
  },
  {
    title: "Double tap → select & send",
    detail: "Two quick successive taps confirm the highlighted phrase and open the send screen.",
  },
  {
    title: "Works with tremors",
    detail: "Senses wrist vibration directly rather than tiny screen buttons, forgiving shakes and tremor.",
  },
];

const slides = [
  {
    id: "airwrite",
    label: "AirWrite",
    tag: "Air gesture · Left wrist",
    title: "AirWrite — draw in the air",
    description:
      "AirWrite recognizes uppercase letters drawn in the air. The motion model was trained specifically on left-wrist kinematics — wearing it on the right wrist will produce wrong predictions.",
    video: "/content/how-to-use/videos/airwrite.mp4",
    videoLabel: "AirWrite on Apple Watch — drawing letters in the air",
    body: "airwrite" as const,
  },
  {
    id: "orientwrite",
    label: "OrientWrite",
    tag: "Wrist tilt · Roll and pitch",
    title: "OrientWrite — tilt the wrist",
    description:
      "For patients with resting tremors or weakness that prevents lifting the arm — roll tilts left and right, pitch tilts forward and back. A 0.05 rad dead-zone filters the shakes.",
    video: "/content/how-to-use/videos/orient-write.mp4",
    videoLabel: "OrientWrite on Apple Watch — wrist-tilt virtual canvas",
    body: "orientwrite" as const,
  },
  {
    id: "surface-tap",
    label: "Surface Tap",
    tag: "Hands-free · Quick Speak only",
    title: "Surface Tap — tap any surface",
    description:
      "For patients who cannot perform pinch or clench. Vibrations from a tap on any surface travel through the wrist to the accelerometer — the watch detects the Z-axis spike and rebound within 250 ms.",
    video: "/content/how-to-use/videos/surface-tap.mp4",
    videoLabel: "Surface Tap on Apple Watch — tapping a bedrail to navigate Quick Speak",
    body: "surface-tap" as const,
  },
];

export function FeatureCarousel() {
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
      className="section border-t border-[var(--line)]"
      aria-roledescription="carousel"
      aria-label="How to use AirWrite, OrientWrite and Surface Tap"
      onKeyDown={onKeyDown}
    >
      <div className="section-pad pb-10 lg:pb-16">
        <div className="shell">
          <div className="grid12 items-end gap-y-8">
            <div className="col-span-12 lg:col-span-7">
              <p className="mono text-[var(--accent-deep)]">
                03 / Three ways
              </p>
              <h2 className="h3 mt-4 max-w-[22ch]">
                How to use each one.
              </h2>
            </div>

            <div className="col-span-12 flex items-center justify-between sm:justify-end sm:gap-6 lg:col-span-5">
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
        </div>

        <div
          ref={viewportRef}
          className="carousel-viewport mt-12"
          tabIndex={0}
          aria-label="AirWrite, OrientWrite and Surface Tap slides — swipe or use arrow keys"
        >
          {slides.map((slide, i) => (
            <article
              key={slide.id}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
              aria-hidden={i !== index}
            >
              <div className="shell">
                <div className="grid12 items-start gap-y-10 lg:gap-x-12">
                  <div className="col-span-12 flex justify-center lg:col-span-5 lg:justify-start">
                    <div className="chesis-frame w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px] mx-auto lg:mx-0">
                      <video
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={slide.videoLabel}
                        className="chesis-video"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/how-to-use/chesis.png"
                        alt=""
                        aria-hidden="true"
                        className="chesis-img"
                      />
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-7">
                    <p className="mono text-xs sm:text-sm font-semibold tracking-[0.12em] text-[var(--accent-deep)]">
                      {slide.tag}
                    </p>
                    <h3 className="h3 mt-3 max-w-[26ch]">{slide.title}</h3>
                    <p className="body mt-4 max-w-[62ch]">{slide.description}</p>

                    {slide.body === "airwrite" && (
                      <ol className="mt-8 space-y-3 border-t border-[var(--line)] pt-6">
                        {AIRWRITE_STEPS.map((step, i) => (
                          <li
                            key={step.title}
                            className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)] pb-4 leading-relaxed last:border-b-0"
                          >
                            <span className="mono text-sm text-[var(--muted)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>
                              <strong className="text-[var(--ink)]">{step.title}.</strong>{" "}
                              <span className="text-[var(--muted)]">{step.detail}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {slide.body === "orientwrite" && (
                      <ol className="mt-8 space-y-3 border-t border-[var(--line)] pt-6">
                        {ORIENTWRITE_STEPS.map((step, i) => (
                          <li
                            key={step.title}
                            className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)] pb-4 leading-relaxed last:border-b-0"
                          >
                            <span className="mono text-sm text-[var(--muted)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>
                              <strong className="text-[var(--ink)]">{step.title}.</strong>{" "}
                              <span className="text-[var(--muted)]">{step.detail}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {slide.body === "surface-tap" && (
                      <ol className="mt-8 space-y-3 border-t border-[var(--line)] pt-6">
                        {SURFACE_TAP_STEPS.map((step, i) => (
                          <li
                            key={step.title}
                            className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)] pb-4 leading-relaxed last:border-b-0"
                          >
                            <span className="mono text-sm text-[var(--muted)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>
                              <strong className="text-[var(--ink)]">{step.title}.</strong>{" "}
                              <span className="text-[var(--muted)]">{step.detail}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
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
                aria-label={`Slide ${i + 1}: ${slide.label}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
