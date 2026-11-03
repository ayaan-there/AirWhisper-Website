const stats = [
  {
    value: "200",
    prefix: "<",
    unit: "ms",
    label: "Gesture to speech",
    description: "Recognition happens while you move.",
  },
  {
    value: "200",
    prefix: "",
    unit: "+",
    label: "Quick phrases",
    description: "Everyday requests, one gesture away.",
  },
  {
    value: "3",
    prefix: "",
    unit: "",
    label: "Ways to write",
    description: "AirWrite, OrientWrite, and SurfaceTap.",
  },
  {
    value: "0",
    prefix: "",
    unit: "",
    label: "Touch required",
    description: "No grip, reach, or repeated motion.",
  },
];

export function Stats() {
  return (
    <section
      className="border-t border-[var(--line)]"
      aria-label="AirWhisper at a glance"
    >
      <div className="shell">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "py-8 lg:py-10",
                i % 2 === 1 ? "border-l border-[var(--line)] pl-5" : "",
                i > 1 ? "border-t border-[var(--line)] lg:border-t-0" : "",
                i > 0 ? "lg:border-l lg:border-[var(--line)] lg:pl-6" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className="stat-value">
                {stat.prefix}
                {stat.value}
                {stat.unit ? <sup>{stat.unit}</sup> : null}
              </p>
              <p className="mono mt-4 text-[var(--accent-deep)]">{stat.label}</p>
              <p className="mt-1.5 text-[0.9375rem] leading-snug text-[var(--muted)]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
