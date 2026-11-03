const steps = [
  {
    number: "01",
    title: "Wear your watch",
    description:
      "AirWhisper runs on Apple Watch and reads accelerometer, gyroscope, and orientation data through CoreMotion.",
    diagram: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="20" y="14" width="24" height="36" />
          <path d="M25 14V7h14v7M25 50v7h14v-7" />
          <circle cx="32" cy="32" r="8" />
          <path d="M32 28v4l3 2" />
        </g>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Make a movement",
    description:
      "Air-write a letter, tilt your wrist, or tap a surface. Choose the input that works for your body.",
    diagram: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
        <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
          <path d="M24 47V29a3 3 0 0 1 6 0v8m0-8v-5a3 3 0 0 1 6 0v5m0-5v-3a3 3 0 0 1 6 0v8m0-8a3 3 0 0 1 6 0v13c0 8-5 14-12 14h-2c-4 0-7-2-9-5l-5-8a3 3 0 0 1 5-3l3 3" />
          <path d="M10 14c5-4 10-4 15 0" opacity="0.45" />
        </g>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Speak, or show text",
    description:
      "CoreML turns the movement into words in under 200 milliseconds — spoken aloud or shown as text.",
    diagram: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16">
        <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
          <path d="M12 27v10M20 21v22M28 14v36M36 22v20M44 18v28M52 27v10" />
        </g>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="on-dark section-pad border-t border-[var(--line)] bg-[var(--dark)] text-[var(--on-dark)]"
    >
      <div className="shell">
        <div className="grid12">
          <div className="col-span-12 lg:col-span-3">
            <p className="mono text-[var(--accent-soft)]">02 / How it works</p>
          </div>

          <div className="col-span-12 mt-8 lg:col-span-9 lg:mt-0">
            <h2 className="h2">
              Three moves.
              <br />
              One voice.
            </h2>
            <p className="body-lg mt-8 max-w-[52ch] text-[var(--muted-dark)]">
              AirWhisper reads motion your wrist already makes. There is nothing
              new to learn about your own body.
            </p>
          </div>
        </div>

        <ol className="mt-16 lg:mt-24">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid12 items-baseline border-t border-[var(--line-dark)] py-8 lg:py-10"
            >
              <div className="col-span-2 mono text-[var(--accent-soft)]">
                {step.number}
              </div>

              <div className="col-span-10 lg:col-span-3">
                <h3 className="h3">{step.title}</h3>
              </div>

              <div className="col-span-12 mt-4 lg:col-span-5 lg:mt-0">
                <p className="body text-[var(--muted-dark)]">
                  {step.description}
                </p>
              </div>

              <div className="hidden justify-end text-[var(--accent-soft)] opacity-80 lg:col-span-2 lg:flex">
                {step.diagram}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line-dark)] pt-6">
          <p className="mono text-[var(--muted-dark)]">
            AirWrite / OrientWrite / SurfaceTap
          </p>
          <p className="mono text-[var(--muted-dark)]">
            Motion sensors only. No camera.
          </p>
        </div>
      </div>
    </section>
  );
}
