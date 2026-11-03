const features = [
  {
    category: "Latency",
    title: "Under 200 ms",
    description:
      "Recognition happens while you move, so conversation keeps its rhythm.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    category: "Model",
    title: "Learns your hand",
    description:
      "On-device personalisation adapts to the way you form each letter — not the other way around.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M7.7 7.2 16.2 8M7 7.8l4 8.4M17 8.7l-4.2 7.4" />
        </g>
      </svg>
    ),
  },
  {
    category: "Privacy",
    title: "Stays on your watch",
    description:
      "AirWrite recognition runs locally. Raw movement stays in memory and is discarded when the session ends.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="4" y="10" width="16" height="11" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
        </g>
      </svg>
    ),
  },
  {
    category: "Library",
    title: "10 phrases",
    description:
      "QuickSpeak keeps everyday requests one gesture away. Add your own for the words you use most.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M5 4h11v16H5z" />
          <path d="M16 7h3v13H8v-3M8 8h5M8 12h5M8 16h3" />
        </g>
      </svg>
    ),
  },
  {
    category: "People",
    title: "Your people",
    description:
      "Save up to five contacts and send a message without opening your phone.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.5a3 3 0 0 1 0 5.8M17 14.5c2.3.8 4 3 4 5.5" />
        </g>
      </svg>
    ),
  },
];

const spans = [
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-6 lg:col-span-6",
  "col-span-12 md:col-span-6 lg:col-span-6",
];

export function Features() {
  return (
    <section
      id="capabilities"
      className="on-dark relative overflow-hidden border-t border-[var(--line-dark)] bg-[var(--dark)]"
      style={{ ["--cell-line" as string]: "rgba(255, 255, 255, 0.16)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/how-to-use/compassionate-care.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40"
      />

      <div className="section-pad relative">
        <div className="shell">
          <div className="grid12">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono text-[var(--accent-soft)]">04 / Capabilities</p>
            </div>

            <div className="col-span-12 mt-8 lg:col-span-9 lg:mt-0">
              <h2 className="h2 text-white">Built for the body you have.</h2>
              <p className="body-lg mt-8 max-w-[52ch] text-white/80">
                Every decision starts with the person using it, not the
                technology.
              </p>
            </div>
          </div>

          <div className="mt-16 grid12 gap-y-4 lg:mt-24">
            {features.map((feature, i) => (
              <article
                key={feature.title}
                className={`feature-cell ${spans[i]} border-t border-white/15 bg-black/20 p-4 backdrop-blur-[2px] sm:p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="mono text-white/55">
                    {feature.category}
                  </span>
                  <span
                    className="feature-glyph"
                    style={{ color: "var(--accent-soft)" }}
                  >
                    {feature.icon}
                  </span>
                </div>

                <h3 className="h4 mt-12 text-white lg:mt-16">
                  {feature.title}
                </h3>
                <p className="body mt-3 max-w-[38ch] text-white/75">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
