const CONDITIONS = [
  {
    name: "Amyotrophic Lateral Sclerosis (ALS)",
    detail:
      "Progressive loss of finger dexterity and speech dysarthria. Wrist movement often remains viable in early-to-mid stages.",
  },
  {
    name: "Parkinson's Disease",
    detail:
      "Severe action and resting tremors, limb rigidity, and bradykinesia (slowness of movement). Touchscreen buttons are virtually unusable.",
  },
  {
    name: "Post-Stroke Hemiplegia & Aphasia",
    detail:
      "Unilateral paralysis and expressive language deficits after stroke. AirWhisper reads gross wrist movement on whichever side works.",
  },
  {
    name: "Traumatic Brain Injury (TBI) & Road Traffic Accidents (RTA)",
    detail:
      "Motor ataxia, limb trauma, or vocal cord paralysis from accidents — severe enough that reaching a screen is replaced by wrist motion.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="on-dark relative overflow-hidden border-b border-[var(--line-dark)] bg-[var(--dark)] text-white"
    >
      <video
        src="/content/how-to-use/videos/patient-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"
      />

      <div className="relative py-16 lg:py-24">
        <div className="shell">
          <div className="grid12 items-end gap-y-12">
            <div className="col-span-12 flex flex-col gap-7 lg:col-span-7">
              <p className="mono text-white/85">01 / The Problem</p>
              <h2 className="display max-w-[13ch] text-white">
                26.3 million reasons.
              </h2>
              <p className="body-lg max-w-[48ch] text-white/85">
                Over 26.3 million people globally rely on Augmentative &amp;
                Alternative Communication (AAC). Traditional touchscreen AAC
                demands fine-finger motor control that patients with tremors or
                paralysis do not possess — and eye-tracking rigs cost thousands
                and can’t be used in bed or transit.
              </p>

              <div className="mt-2 grid grid-cols-3 gap-px border border-white/25 bg-white/25">
                {[
                  { value: "17.5%", label: "Mild motor impairment" },
                  { value: "43.8%", label: "Moderate motor impairment" },
                  { value: "38.7%", label: "Severe motor impairment" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-start justify-center gap-2 bg-black/70 p-3 backdrop-blur-[2px] sm:p-5"
                  >
                    <span className="stat-value" style={{ fontSize: "1.35rem" }}>
                      {stat.value}
                    </span>
                    <span className="mono text-[0.6rem] leading-tight text-white/75 sm:text-[0.65rem]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="body max-w-[48ch] text-white/75">
                AirWhisper turns the sensors already inside an Apple Watch —
                accelerometer, gyroscope, attitude — into a touchless
                communication terminal. Instead of pointing at a screen, you
                move your wrist the way you already move it.
              </p>
            </div>

            <div className="col-span-12 border border-white/15 bg-black/55 p-5 backdrop-blur-[3px] sm:p-7 lg:col-span-4 lg:col-start-9">
              <h3 className="h4 text-white">Target conditions</h3>
              <p className="body mt-2 text-white/75">
                AirWhisper is engineered for the specific motor and speech
                constraints of:
              </p>
              <ul className="mt-5 flex flex-col divide-y divide-white/15 border-t border-white/15">
                {CONDITIONS.map((condition) => (
                  <li key={condition.name} className="py-4">
                    <p className="font-semibold leading-snug text-white">
                      {condition.name}
                    </p>
                    <p className="body mt-1 text-[0.875rem] text-white/75">
                      {condition.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mono mt-5 border-t border-white/15 pt-4 text-white/60">
                AirWhisper in daily use — wrist-level communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
