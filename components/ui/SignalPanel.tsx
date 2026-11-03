const bars = [8, 15, 22, 11, 19, 7, 24, 13, 18, 9, 21, 12, 6, 17, 23, 10, 16, 8, 20, 13, 7, 18, 11, 22];

export function SignalPanel() {
  return (
    <figure className="signal-panel hero-panel m-0">
      <figcaption className="signal-head">
        <span className="mono">
          <span className="signal-dot" aria-hidden="true" />
          Live recognition
        </span>
        <span className="mono" style={{ color: "var(--muted-dark)" }}>
          AirWrite
        </span>
      </figcaption>

      <div className="signal-stage">
        <svg
          viewBox="0 0 560 230"
          className="w-full"
          role="img"
          aria-label="A continuous line tracing a wrist gesture, which resolves into the sentence: I'd like some water, please."
        >
          <g stroke="rgba(233,235,228,0.12)" strokeWidth="1">
            <line x1="0" y1="186" x2="560" y2="186" />
            <line x1="0" y1="70" x2="560" y2="70" />
            <line x1="140" y1="0" x2="140" y2="230" />
            <line x1="420" y1="0" x2="420" y2="230" />
          </g>

          <path
            className="trace"
            pathLength={1}
            d="M 34 168 C 52 168 58 120 66 92 C 74 62 86 54 92 84 C 98 116 88 158 78 176 C 70 190 68 158 84 142 C 104 122 140 128 150 152 C 158 172 132 184 122 168 C 112 152 140 132 176 136 C 212 140 214 170 244 166 C 272 162 276 120 292 96 C 304 78 316 82 314 104 C 312 128 292 154 300 168 C 308 182 340 176 360 158 C 386 134 402 104 420 112 C 434 118 424 150 442 156 C 464 164 492 140 528 116"
          />

          <circle cx="34" cy="168" r="3" fill="var(--accent-soft)" />
          <circle cx="528" cy="116" r="3" fill="var(--accent-soft)" />
        </svg>
      </div>

      <div className="signal-transcript">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono mb-3" style={{ color: "var(--muted-dark)" }}>
              Transcript
            </p>
            <p className="signal-quote">
              &ldquo;I&rsquo;d like some water, please.&rdquo;
            </p>
          </div>

          <div className="wave hidden shrink-0 sm:flex" aria-hidden="true">
            {bars.map((height, i) => (
              <span
                key={i}
                style={{
                  height: `${height}px`,
                  animationDelay: `${(i % 7) * 0.09}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="signal-foot mono">
        <span>Gesture &rarr; text &rarr; voice</span>
        <span>180 ms</span>
        <span style={{ color: "var(--accent-soft)" }}>On device</span>
      </div>
    </figure>
  );
}
