import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { WordStrokePractice } from "@/components/WordStrokePractice";

export const metadata: Metadata = {
  title: "How to Use — AirWhisper",
  description:
    "Step-by-step setup and usage guide for AirWhisper: Apple Watch settings, Quick Speak, AirWrite, OrientWrite, Surface Tap, messaging, and troubleshooting.",
};

const LETTERS = [
  { l: "A", start: "Bottom left", stroke: "Up diagonal to apex → down to bottom right → loop back across center bar", tip: "One continuous triangular motion, no lifting" },
  { l: "B", start: "Top left", stroke: "Down stem → round top loop → round bottom loop", tip: "Keep the two loops distinct" },
  { l: "C", start: "Top right", stroke: "Up slightly → broad left arc → down right", tip: "Broad elbow arcs prevent flat curves" },
  { l: "D", start: "Top left", stroke: "Down stem → arc right → full bottom closure", tip: "Classifier checks the full bottom loop" },
  { l: "E", start: "Top right", stroke: "Top bar → down spine → bottom bar → middle bar", tip: "Keep the spine vertical" },
  { l: "F", start: "Top right", stroke: "Top bar → down spine → middle crossbar", tip: "Like E, but stop after the middle bar" },
  { l: "G", start: "Top right", stroke: "Counter-clockwise C → sweep up on right → hook inward", tip: "Accentuate the horizontal hook" },
  { l: "H", start: "Top left", stroke: "Down left stem → down right stem → center bar", tip: "Draw as fluid double uprights" },
  { l: "I", start: "Top center", stroke: "Straight vertical drop", tip: "A crisp, decisive stroke works best" },
  { l: "J", start: "Top right", stroke: "Sweep left across top → down center → hook left at bottom", tip: "Make the bottom hook prominent" },
  { l: "K", start: "Top left", stroke: "Down stem → diagonal right → diagonal down-right", tip: "Emphasize the junction" },
  { l: "L", start: "Top left", stroke: "Down stroke → sharp corner → horizontal right", tip: "Pause at the corner to register the angle" },
  { l: "M", start: "Bottom left", stroke: "Up left → down center → up right → down right", tip: "Sharp high peaks" },
  { l: "N", start: "Bottom left", stroke: "Up left stem → sharp diagonal → up right stem", tip: "Distinct diagonal descent" },
  { l: "O", start: "Top center", stroke: "Full counter-clockwise circle back to start", tip: "Big, wide circular sweep" },
  { l: "P", start: "Bottom left", stroke: "Up stem → top half-loop back to stem", tip: "Do not draw a lower loop (distinguishes D)" },
  { l: "Q", start: "Top center", stroke: "Full O circle → short diagonal tail at bottom right", tip: "Make the tail flick distinct" },
  { l: "R", start: "Bottom left", stroke: "Up stem → round top loop → diagonal leg down-right", tip: "Keep the leg extended" },
  { l: "S", start: "Top right", stroke: "Curve left → diagonal center → curve right under", tip: "Fluid serpentine, no mid-stops" },
  { l: "T", start: "Top left", stroke: "Horizontal bar → return center → down stem", tip: "Keep the top bar wide" },
  { l: "U", start: "Top left", stroke: "Down left → round bottom cup → up right", tip: "Keep bottom rounded, not pointed" },
  { l: "V", start: "Top left", stroke: "Down diagonal to center → up diagonal to right", tip: "Make the bottom junction sharp" },
  { l: "W", start: "Top left", stroke: "Down → up center → down → up right", tip: "Like inverted M; keep valleys sharp" },
  { l: "X", start: "Top left", stroke: "Diagonal down-right → diagonal from top right down-left", tip: "Distinct cross-intersection" },
  { l: "Y", start: "Top left", stroke: "Two short diagonals into center → down tail", tip: "Keep the tail centered" },
  { l: "Z", start: "Top left", stroke: "Horizontal right → sharp diagonal down-left → horizontal right", tip: "Exaggerate the parallel horizontals" },
];

const WATCH_SETUP = [
  {
    number: "01",
    title: "Turn ON AssistiveTouch & Hand Gestures",
    why: "Lets patients control the watch using hand gestures — pinch, double pinch, clench — without touching small screen buttons.",
    how: [
      "Open Settings on the Apple Watch (or the Watch app on iPhone).",
      "Scroll to Accessibility.",
      "Select AssistiveTouch and toggle it ON.",
      "Tap Hand Gestures and toggle Hand Gestures ON.",
    ],
    detail: "Recommended shortcuts — Pinch: next element · Double Pinch: previous · Clench: tap / select · Double Clench: quick actions.",
  },
  {
    number: "02",
    title: "Turn OFF Wrist Detection",
    why: "Tremors, contractures, or resting the arm on a bedrail or table make watchOS think the watch was taken off — locking the screen and killing motion sensors. Off keeps it awake.",
    how: [
      "Open the Watch app on iPhone (or Settings on the watch).",
      "Tap Passcode.",
      "Scroll to the bottom and find Wrist Detection.",
      "Toggle Wrist Detection OFF and confirm.",
    ],
    detail: "Without this, the watch can present a passcode prompt mid-message and terminate your sensor stream.",
  },
  {
    number: "03",
    title: "Set Wake Duration to 70 Seconds",
    why: "The default 15-second timeout turns the screen black before a patient with tremors or slow movement can finish a stroke.",
    how: [
      "Open Settings on the Apple Watch.",
      "Tap Display & Brightness.",
      "Scroll down to Wake Duration.",
      "Select Wake for 70 Seconds.",
    ],
    detail: "70 seconds means you can start an arm stroke, review the recognized letter, and trigger the tap without the screen sleeping mid-word.",
  },
];

const QUICK_PHRASES_STEPS = [
  "Open the AirWhisper app on your iPhone and go to the Home screen.",
  "Tap “Manage Quick Phrases.”",
  "Type a phrase in the text field and tap Add. The phrase appears in the list immediately.",
  "Add up to 10 phrases — when the list is full, the least-used phrase is automatically replaced, with an alert.",
  "Phrases sync to your Apple Watch over Bluetooth and back up to iCloud.",
];

const TROUBLESHOOTING = [
  {
    symptom: "Watch screen goes black while drawing",
    cause: "Wake Duration is set to the default (15 seconds)",
    remedy: "Settings → Display & Brightness → Wake Duration → set to Wake for 70 Seconds.",
  },
  {
    symptom: "Passcode prompt appears during arm movement",
    cause: "Wrist Detection is ON — sensor lost contact during tremor",
    remedy: "Settings → Passcode → turn Wrist Detection OFF.",
  },
  {
    symptom: "Letters are consistently misrecognized",
    cause: "Watch is worn on the right hand",
    remedy: "AirWrite requires the LEFT wrist. Move the watch to your left wrist.",
  },
  {
    symptom: "Surface Tap doesn’t detect taps",
    cause: "Tap too lightly, or calibration doesn’t match the surface",
    remedy: "Tap Recalibrate on the watch and perform 3 firmer baseline taps.",
  },
  {
    symptom: "SMS fails to send",
    cause: "iPhone disconnected, or number format is invalid",
    remedy: "Ensure cellular data / Wi-Fi is on, and contacts have international codes (+ prefix).",
  },
];

export default function HowToUse() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main" tabIndex={-1}>
        {/* INTRO / JUMP LINKS */}
        <section className="relative border-b border-[var(--line)] pb-12 pt-[calc(var(--nav-h)+clamp(32px,4vw,56px))] lg:pb-20">
          <div className="shell">
            <h1 className="display max-w-[14ch]">
              How to use
              <br />
              AirWhisper.
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#watch-setup" className="btn btn-ink">
                Start with Apple Watch setup
              </a>
              <a href="#az" className="btn btn-outline">
                Jump to the A–Z stroke guide
              </a>
            </div>
          </div>
        </section>

        {/* APPLE WATCH SETUP */}
        <section id="watch-setup" className="section on-dark bg-[var(--dark)] text-[var(--on-dark)]">
          <div className="section-pad">
            <div className="shell">
              <div className="grid12">
                <div className="col-span-12 lg:col-span-3">
                  <p className="mono text-[var(--accent-soft)]">
                    01 / Apple Watch Setup
                  </p>
                </div>
                <div className="col-span-12 mt-6 lg:col-span-9 lg:mt-0">
                  <h2 className="h2 text-[var(--on-dark)]">Do this first.</h2>
                  <p className="body mt-4 max-w-[56ch] text-[var(--muted-dark)]">
                    Three mandatory watchOS settings. Without them, the watch
                    sleeps mid-word, or locks itself with a passcode prompt the
                    moment a patient’s arm rests on a bedrail.
                  </p>
                </div>
              </div>

              <div className="mt-14 grid gap-0 sm:grid-cols-3">
                {WATCH_SETUP.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col gap-5 border-t border-[var(--line-dark)] py-8 pr-6 sm:border-l-0 sm:py-10 lg:pl-8 lg:first:border-l-0 lg:border-l lg:border-[var(--line-dark)] lg:first:border-l-0"
                  >
                    <span className="mono text-[var(--accent-soft)]">
                      {step.number}
                    </span>
                    <h3 className="h3 text-[var(--on-dark)]">{step.title}</h3>
                    <p className="body text-[var(--muted-dark)]">
                      <strong className="text-[var(--on-dark)]">Why:</strong>{" "}
                      {step.why}
                    </p>
                    <ol className="ml-4 list-decimal space-y-2 text-[var(--muted-dark)]">
                      {step.how.map((s) => (
                        <li key={s} className="leading-relaxed">
                          {s}
                        </li>
                      ))}
                    </ol>
                    <p className="mono mt-auto border-t border-[var(--line-dark)] pt-4 text-[var(--muted-dark)]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUICK PHRASES HOW TO */}
        <section className="section-pad border-t border-[var(--line)] bg-[var(--paper-raised)]">
          <div className="shell">
            <div className="grid12 items-start gap-y-10 lg:gap-x-12">
              <div className="col-span-12 flex justify-center lg:col-span-5 lg:justify-start">
                <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-white p-3 sm:p-5 shadow-sm">
                  <video
                    src="/content/how-to-use/videos/how-to-3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Quick Speak tutorial — scrolling the pinned phrase list and tapping HELP on the Apple Watch"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <p className="mono text-[var(--accent-deep)]">
                  02 / Quick Phrases
                </p>
                <h2 className="h3 mt-3 max-w-[22ch]">Pre-saved sentences, spoken instantly.</h2>
                <p className="body mt-4 max-w-[56ch] text-[var(--muted)]">
                  “HELP” is always pinned at the top. Once you use a phrase, it
                  automatically promotes for faster access next time. Up to 10
                  phrases, synced over Bluetooth and backed up to iCloud.
                </p>

                <ol className="mt-8 space-y-4 border-t border-[var(--line)] pt-6">
                  {QUICK_PHRASES_STEPS.map((step, i) => (
                    <li
                      key={step}
                      className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-[var(--line)] pb-4 last:border-b-0"
                    >
                      <span className="mono text-sm text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-[var(--ink)]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <FeatureCarousel />

        {/* ACTIONS */}
        <section className="section on-accent section-pad bg-[#5ba5f7] text-white">
          <div className="shell">
            <div className="grid12">
              <div className="col-span-12 lg:col-span-3">
                <p className="mono text-white/90">04 / Actions</p>
              </div>
              <div className="col-span-12 mt-6 lg:col-span-9 lg:mt-0">
                <h2 className="h3 max-w-[24ch] text-white">Say it, send it, save it.</h2>
                <p className="mt-4 max-w-[56ch] text-[1rem] leading-relaxed text-white/90">
                  Once text is composed — or selected from Quick Speak — the
                  Action Required screen gives you three choices:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-px bg-white/30 sm:grid-cols-3">
                  {[
                    {
                      t: "Speak Aloud",
                      d: "Full sentence synthesized through the Apple Watch speaker at full volume — for doctors, nurses, or family in the room.",
                    },
                    {
                      t: "Send To",
                      d: "Sends SMS instantly to a My People contact via the cloud gateway (Render + Twilio). Delivery confirmation appears on the watch.",
                    },
                    {
                      t: "Save as Phrase",
                      d: "Adds the composed text directly to Quick Speak. Up to 10 phrases — the least-used phrase is automatically replaced when full.",
                    },
                  ].map((a) => (
                    <div key={a.t} className="flex flex-col gap-3 bg-[#5ba5f7] p-5 sm:p-6">
                      <h3 className="mono text-white/90">{a.t}</h3>
                      <p className="leading-relaxed text-white">{a.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORD STROKE PRACTICE */}
        <section id="az" className="section-pad border-t border-[var(--line)]">
          <div className="shell">
            <div className="grid12">
              <div className="col-span-12 lg:col-span-3">
                <p className="mono text-[var(--accent-deep)]">
                  05 / Alphabet Stroke Guide
                </p>
              </div>
              <div className="col-span-12 mt-6 lg:col-span-9 lg:mt-0">
                <h2 className="h3 max-w-[24ch]">Start here to learn the strokes.</h2>
                <p className="body mt-4 max-w-[56ch]">
                  Practice continuous single-stroke arm movements with starter words to achieve immediate, 100% recognition accuracy. Draw from the shoulder and elbow with your left wrist.
                </p>
              </div>
            </div>

            <WordStrokePractice letters={LETTERS} />
          </div>
        </section>

        {/* iPHONE COMPANION + TROUBLESHOOTING */}
        <section className="section-pad border-t border-[var(--line)] bg-[var(--paper-raised)]">
          <div className="shell">
            <div className="grid12 gap-y-12">
              <div className="col-span-12 lg:col-span-6">
                <p className="mono text-[var(--accent-deep)]">
                  06 / iPhone Companion App
                </p>
                <h2 className="h4 mt-4">Manage everything from your phone.</h2>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      t: "Watch Settings",
                      d: "Motion sensitivity slider (0–100% cursor speed for heavy tremors → light shakes). Voice Guidance toggle. Tap Detector toggle. All sync over Bluetooth WCSession.",
                    },
                    {
                      t: "Manage Quick Phrases",
                      d: "Type common needs — “Please adjust my pillow”, “I need suction”, “Yes”, “No” — and tap Add. Changes sync to the watch in real time.",
                    },
                    {
                      t: "My People",
                      d: "Emergency contacts synced from the iPhone, shown instantly on the Send To screen for one-tap SMS.",
                    },
                    {
                      t: "Message History",
                      d: "Chronological audit log of every distress phrase and custom message sent — recipient, text, and timestamp.",
                    },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="mono text-[var(--muted)]">&rarr;</span>
                      <div>
                        <p className="font-semibold leading-snug">{item.t}</p>
                        <p className="body mt-1 text-[0.9375rem]">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <p className="mono text-[var(--accent-deep)]">
                  07 / Troubleshooting
                </p>
                <h2 className="h4 mt-4">Common fixes.</h2>

                {TROUBLESHOOTING.map((row) => (
                  <div
                    key={row.symptom}
                    className="border-t border-[var(--line)] py-4 first:mt-4"
                  >
                    <p className="font-semibold leading-snug">{row.symptom}</p>
                    <p className="body mt-1 text-[0.8125rem]">
                      <strong>Cause:</strong> {row.cause}
                    </p>
                    <p className="body mt-1 text-[0.8125rem]">
                      <strong>Fix:</strong> {row.remedy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOADS */}
        <section className="section-pad border-t border-[var(--line)]">
          <div className="shell">
            <div className="grid12 gap-y-10">
              <div className="col-span-12 lg:col-span-7">
                <p className="mono text-[var(--accent-deep)]">
                  08 / Downloads
                </p>
                <h2 className="h4 mt-4">The full guide, offline.</h2>
                <p className="body mt-3 max-w-[52ch]">
                  The complete AirWhisper guide — clinical context, the Apple
                  Watch setup, feature-by-feature how-tos, and troubleshooting.
                  Available to read offline or print to PDF.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/content/how-to-use/AirWhisper_Complete_Guide.html"
                    download
                    className="btn btn-ink"
                  >
                    Guide (.html / Save as PDF)
                  </a>
                  <a
                    href="/content/how-to-use/AirWhisper_Complete_Guide.md"
                    download
                    className="btn btn-outline"
                  >
                    Guide (.md)
                  </a>
                  <a
                    href="/content/how-to-use/AirWhisper_Complete_Guide.docx"
                    download
                    className="btn btn-outline"
                  >
                    Guide (.docx)
                  </a>
                  <a
                    href="/content/how-to-use/AirWhisper_Keynote.pdf"
                    download
                    className="btn btn-outline"
                  >
                    Keynote (.pdf)
                  </a>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <p className="mono text-[var(--muted)]">On this page</p>
                <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed text-[var(--muted)]">
                  <li>Patient demonstration video (Target Conditions)</li>
                  <li>Apple Watch setup — AssistiveTouch, Wrist Detection, Wake Duration</li>
                  <li>AirWrite, OrientWrite, Surface Tap and Quick Speak app tutorials in the watch frame</li>
                  <li>Swipeable AirWrite / OrientWrite / Surface Tap deep-dive with videos</li>
                  <li>iPhone companion app and troubleshooting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showLargeMark={false} />
    </>
  );
}
