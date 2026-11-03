"use client";

import { useEffect, useRef } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function About() {
  const rootRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Subtle cursor-following light; disabled for touch and reduced-motion
    let onPointerMove: ((e: PointerEvent) => void) | undefined;
    if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
      onPointerMove = (event: PointerEvent) => {
        const rect = root.getBoundingClientRect();
        root.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        root.style.setProperty("--my", `${event.clientY - rect.top}px`);
      };
      root.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    // Reveal the four chapters and draw the signal line as the story enters view
    const phases = Array.from(root.querySelectorAll<HTMLElement>(".aw-phase"));
    const timeline = timelineRef.current;

    let phaseObserver: IntersectionObserver | undefined;
    let lineObserver: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window && !reduceMotion) {
      phaseObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              const index = phases.indexOf(target);
              target.style.transitionDelay = `${index * 120}ms`;
              target.classList.add("is-in");
              phaseObserver?.unobserve(target);
            }
          });
        },
        { threshold: 0.22 }
      );
      phases.forEach((phase) => phaseObserver?.observe(phase));

      if (timeline) {
        lineObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                timeline.style.setProperty("--story-progress", "1");
                lineObserver?.disconnect();
              }
            });
          },
          { threshold: 0.35 }
        );
        lineObserver.observe(timeline);
      }
    } else {
      phases.forEach((phase) => phase.classList.add("is-in"));
      if (timeline) {
        timeline.style.setProperty("--story-progress", "1");
      }
    }

    // Keyboard focus on letters
    const letters = root.querySelectorAll<HTMLElement>(".aw-letter");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        (event.currentTarget as HTMLElement).classList.toggle("is-named");
      }
    };
    letters.forEach((l) => l.addEventListener("keydown", onKey));

    return () => {
      if (onPointerMove) {
        root.removeEventListener("pointermove", onPointerMove);
      }
      phaseObserver?.disconnect();
      lineObserver?.disconnect();
      letters.forEach((l) => l.removeEventListener("keydown", onKey));
    };
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />

      <main
        className="aw-about"
        id="main"
        ref={rootRef}
        tabIndex={-1}
        aria-labelledby="aw-main-title"
      >
        <div className="aw-grid-bg" aria-hidden="true" />
        <div className="aw-spotlight" aria-hidden="true" />
        <div className="aw-grain" aria-hidden="true" />

        <div className="aw-wrap">
          <section className="aw-hero" aria-labelledby="aw-main-title">
            <p className="aw-overline">An independent project by four minds</p>
            <h1 className="aw-headline" id="aw-main-title">
              <span className="line">
                <span>One year. Countless iterations.</span>
              </span>
              <span className="line">
                <span>
                  One belief: <em>everyone deserves to be heard.</em>
                </span>
              </span>
            </h1>

            <div className="aw-wordstage">
              <div className="aw-signal-label">A signal becomes a voice</div>
              <svg
                className="aw-orbit"
                viewBox="0 0 1200 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="orbit-base"
                  d="M20 195 C180 20 310 345 470 180 S760 20 900 170 S1080 300 1180 90"
                />
                <path
                  className="orbit-trace"
                  pathLength={1}
                  d="M20 195 C180 20 310 345 470 180 S760 20 900 170 S1080 300 1180 90"
                />
                <circle className="orbit-dot" r="5">
                  <animateMotion
                    dur="6.5s"
                    repeatCount="indefinite"
                    path="M20 195 C180 20 310 345 470 180 S760 20 900 170 S1080 300 1180 90"
                  />
                </circle>
                <circle className="orbit-dot soft" r="2.5">
                  <animateMotion
                    dur="6.5s"
                    begin="-3.1s"
                    repeatCount="indefinite"
                    path="M20 195 C180 20 310 345 470 180 S760 20 900 170 S1080 300 1180 90"
                  />
                </circle>
              </svg>

              <div className="aw-monogram" aria-label="DAMN Club">
                <span className="aw-letter" data-name="Dhruv" tabIndex={0}>
                  D
                </span>
                <span className="aw-letter" data-name="Ayaan" tabIndex={0}>
                  A
                </span>
                <span className="aw-letter" data-name="Manvi" tabIndex={0}>
                  M
                </span>
                <span className="aw-letter" data-name="Nirali" tabIndex={0}>
                  N
                </span>
              </div>

              <div className="aw-word-meta">
                <div className="aw-club">
                  DAMN CLUB
                  <small>DHRUV&nbsp; /&nbsp; AYAAN&nbsp; /&nbsp; MANVI&nbsp; /&nbsp; NIRALI</small>
                </div>
                <p className="aw-manifesto">
                  We didn&rsquo;t set out to build another app. We set out to
                  explore how{" "}
                  <strong>
                    a movement of the hand could become a message
                  </strong>{" "}
                  — privately, naturally, and from the wrist.
                </p>
              </div>
            </div>

            <div className="aw-scroll-cue">
              <i /> Scroll to follow the signal
            </div>
          </section>

          <section className="aw-story" aria-labelledby="aw-story-heading">
            <div className="aw-story-head">
              <div>
                <p className="aw-section-label">01 — The making of AirWhisper</p>
                <h2 className="aw-story-title" id="aw-story-heading">
                  Not a straight line.
                  <br />
                  <span>A year of becoming.</span>
                </h2>
              </div>
              <p className="aw-story-intro">
                A question became a prototype. A missing dataset became
                something we made ourselves. Wrist movement became a language we
                could begin to recognise. Every iteration brought us closer to
                the reason we started.
              </p>
            </div>

            <div className="aw-timeline" ref={timelineRef}>
              <article className="aw-phase">
                <div className="aw-phase-index">
                  <b>01 / THE QUESTION</b>
                  <span>BEGIN</span>
                </div>
                <span className="aw-phase-mark" aria-hidden="true">
                  01
                </span>
                <h3>Start with a person.</h3>
                <p>
                  We began by thinking about the moments when someone has
                  something to say, but speech is not available to them.
                </p>
              </article>

              <article className="aw-phase">
                <div className="aw-phase-index">
                  <b>02 / THE DATA</b>
                  <span>CREATE</span>
                </div>
                <span className="aw-phase-mark" aria-hidden="true">
                  02
                </span>
                <h3>Build what is missing.</h3>
                <p>
                  There was no ready-made dataset for the gestures we wanted to
                  recognise. So we worked to collect and shape our own.
                </p>
              </article>

              <article className="aw-phase">
                <div className="aw-phase-index">
                  <b>03 / THE MOTION</b>
                  <span>REFINE</span>
                </div>
                <span className="aw-phase-mark" aria-hidden="true">
                  03
                </span>
                <h3>Make movement matter.</h3>
                <p>
                  We explored wrist motion, signal processing and on-device
                  machine learning, learning from every imperfect attempt.
                </p>
              </article>

              <article className="aw-phase">
                <div className="aw-phase-index">
                  <b>04 / THE WHY</b>
                  <span>KEEP GOING</span>
                </div>
                <span className="aw-phase-mark" aria-hidden="true">
                  04
                </span>
                <h3>Give words another way.</h3>
                <p>
                  AirWhisper is our step toward communication that feels more
                  immediate, personal and independent.
                </p>
              </article>
            </div>
          </section>

          <section className="aw-closing" aria-label="Our belief">
            <h2>
              Not built to speak <em>for</em> someone.
              <br />
              Built to help them speak.
            </h2>
            <div className="aw-colophon">
              <strong>DAMN CLUB</strong>
              <br />
              Dhruv · Ayaan · Manvi · Nirali
              <br />
              AirWhisper / One year in motion
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
