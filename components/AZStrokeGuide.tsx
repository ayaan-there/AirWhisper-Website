"use client";

import { useState } from "react";

export interface LetterGuide {
  l: string;
  start: string;
  stroke: string;
  tip: string;
}

export function AZStrokeGuide({ letters }: { letters: LetterGuide[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const current = letters[selectedIndex] || letters[0];

  const goNext = () => {
    setSelectedIndex((prev) => (prev + 1) % letters.length);
  };

  const goPrev = () => {
    setSelectedIndex((prev) => (prev - 1 + letters.length) % letters.length);
  };

  return (
    <div className="mt-10 flex flex-col gap-8">
      {/* Alphabet Selector Strip */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-[var(--line)] pb-6">
        {letters.map((item, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <button
              key={item.l}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Letter ${item.l}`}
              aria-pressed={isSelected}
              className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-bold text-base transition-all duration-150 ${
                isSelected
                  ? "bg-[#5ba5f7] text-white shadow-md scale-105"
                  : "bg-white border border-[var(--line)] text-[var(--ink)] hover:border-[#5ba5f7] hover:text-[#5ba5f7]"
              }`}
            >
              {item.l}
            </button>
          );
        })}
      </div>

      {/* Featured Interactive Spotlight Card */}
      <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm">
        <div className="grid12 items-center gap-8 lg:gap-12">
          {/* Video Demonstration */}
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] shadow-inner">
              <video
                key={current.l}
                src={`/content/how-to-use/letters/${current.l}.mp4`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`AirWrite stroke demo for letter ${current.l}`}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Letter Guidance & Instructions */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[var(--ink)]">
                  {current.l}
                </span>
                <span className="mono text-xs sm:text-sm text-[var(--muted)]">
                  Letter {selectedIndex + 1} of {letters.length}
                </span>
              </div>
              <span className="mono text-xs font-semibold px-3 py-1 rounded-full bg-[var(--paper-raised)] text-[var(--ink)]">
                Starts: {current.start}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div>
                <p className="mono text-xs font-semibold tracking-wider text-[var(--accent-deep)] uppercase">
                  Stroke Motion
                </p>
                <p className="body text-base sm:text-lg mt-1 text-[var(--ink)] leading-relaxed">
                  {current.stroke}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-raised)] p-4 mt-2">
                <p className="mono text-xs font-semibold text-[var(--muted)] uppercase">
                  Tip for Patients &amp; Caregivers
                </p>
                <p className="body text-sm mt-1 text-[var(--ink)]">
                  {current.tip}
                </p>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-[var(--line)]">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[#5ba5f7]"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Previous letter
              </button>

              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[#5ba5f7]"
              >
                Next letter
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

