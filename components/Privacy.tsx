const points = [
  {
    title: "On-device by default",
    description:
      "AirWrite recognition runs on Apple Watch with CoreML. Understanding you does not require a connection.",
  },
  {
    title: "Learning is opt-in",
    description:
      "Federated learning only runs if you choose it. Your device sends model updates — not handwriting or messages — and differential privacy is applied before aggregation.",
  },
  {
    title: "You control the record",
    description:
      "Delete your account and its server-side data at any time. Signing out clears contacts, phrases, and message history from the device.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="section-pad bg-[var(--paper-raised)]">
      <div className="shell">
        <div>
          <h2 className="h2 whitespace-normal md:whitespace-nowrap [text-wrap:initial] md:[text-wrap:nowrap] md:text-[clamp(2.2rem,4.9vw,5.6rem)]">
            Your data stays on your wrist.
          </h2>
        </div>

        <div className="mt-16 grid12 gap-y-14 lg:mt-24">
          <div className="col-span-12 lg:col-span-5">
            <p className="body-lg max-w-[42ch]">
              Your movement is processed on your watch. Session data lives in
              memory, then disappears. What you say is never used to build an
              ad profile.
            </p>

            <div className="mt-10 border-t border-[var(--line)] pt-5">
              <p className="mono mb-4 text-[var(--muted)]">Recognition path</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="mono border border-[var(--line)] px-3 py-2">
                  Watch
                </span>
                <span className="mono text-[var(--muted)]" aria-hidden="true">
                  &rarr;
                </span>
                <span className="mono border border-[var(--line)] px-3 py-2">
                  CoreML
                </span>
                <span className="mono text-[var(--muted)]" aria-hidden="true">
                  &rarr;
                </span>
                <span className="mono border border-[var(--line)] px-3 py-2">
                  Words
                </span>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--muted)]">
                No camera. No microphone. Motion sensors only.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ol>
              {points.map((point, i) => (
                <li
                  key={point.title}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-[var(--line)] py-6 first:border-t-0 first:pt-0"
                >
                  <span className="mono pt-1 text-[var(--muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="h4">{point.title}</h3>
                    <p className="body mt-2">{point.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
