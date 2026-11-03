"use client";

import { useRef, useState } from "react";

export interface LetterGuide {
  l: string;
  start: string;
  stroke: string;
  tip: string;
}

const WORD = "AIRWHISPER";
const ALL_AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function WordStrokePractice({ letters }: { letters: LetterGuide[] }) {
  const [showAll, setShowAll] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Map letters for O(1) lookup
  const letterMap = useRef<Record<string, LetterGuide>>({});
  if (Object.keys(letterMap.current).length === 0) {
    letters.forEach((item) => {
      letterMap.current[item.l.toUpperCase()] = item;
    });
  }

  const currentSequence = showAll ? ALL_AZ : WORD.split("");
  const activeChar = currentSequence[charIndex] || currentSequence[0] || "A";
  const activeGuide =
    letterMap.current[activeChar.toUpperCase()] || letters[0];

  // Next / Prev handlers
  const handleNext = () => {
    setCharIndex((prev) => (prev + 1) % currentSequence.length);
  };

  const handlePrev = () => {
    setCharIndex(
      (prev) => (prev - 1 + currentSequence.length) % currentSequence.length
    );
  };

  const toggleMode = () => {
    setShowAll((v) => !v);
    setCharIndex(0);
  };

  return (
    <div className="mt-8 flex flex-col gap-8">
      {/* Letter Selector Ribbon */}
      <div className="flex flex-col gap-3">
        <p className="mono text-xs text-[var(--muted)]">
          {showAll
            ? "ALL LETTERS (A–Z) — CLICK TO VIEW STROKE:"
            : "CLICK A LETTER TO SEE HOW IT\u2019S DRAWN:"}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {currentSequence.map((char, idx) => {
              const isSelected = idx === charIndex;
              return (
                <button
                  key={`${char}-${idx}`}
                  type="button"
                  onClick={() => setCharIndex(idx)}
                  aria-label={`Letter ${char}`}
                  aria-pressed={isSelected}
                  className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl font-bold text-lg transition-all duration-150 ${
                    isSelected
                      ? "bg-[#5ba5f7] text-white shadow-md scale-105"
                      : "bg-white border border-[var(--line)] text-[var(--ink)] hover:border-[#5ba5f7] hover:text-[#5ba5f7]"
                  }`}
                >
                  {char}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleMode}
            className="ml-auto inline-flex h-11 sm:h-12 items-center gap-2 rounded-xl border border-[var(--line)] bg-white px-4 text-sm font-semibold text-[var(--ink)] shadow-xs transition-all duration-200 hover:border-[#5ba5f7] hover:text-[#5ba5f7]"
          >
            {showAll ? (
              <>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back to AIRWHISPER
              </>
            ) : (
              <>
                See all A–Z
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Letter Spotlight Stage */}
      <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm">
        <div className="grid12 items-center gap-8 lg:gap-12">
          {/* Left: Video Demonstration */}
          <div className="col-span-12 flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-raised)] shadow-inner">
              <video
                key={activeChar}
                src={`/content/how-to-use/letters/${activeChar}.mp4`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`AirWrite stroke tutorial for letter ${activeChar}`}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Motion Guide & Coaching Info */}
          <div className="col-span-12 flex flex-col justify-center lg:col-span-7">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[var(--ink)]">
                  {activeChar}
                </span>
                <span className="mono text-xs sm:text-sm text-[var(--muted)]">
                  {showAll
                    ? `Letter ${charIndex + 1} of ${currentSequence.length}`
                    : `Letter ${charIndex + 1} of ${currentSequence.length} in \u201C${WORD}\u201D`}
                </span>
              </div>
              <span className="mono text-xs font-semibold px-3 py-1 rounded-full bg-[var(--paper-raised)] text-[var(--ink)]">
                Starts: {activeGuide.start}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div>
                <p className="mono text-xs font-semibold tracking-wider text-[var(--accent-deep)] uppercase">
                  Stroke Motion
                </p>
                <p className="body text-base sm:text-lg mt-1 text-[var(--ink)] leading-relaxed">
                  {activeGuide.stroke}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--line)] bg-[var(--paper-raised)] p-4 mt-2">
                <p className="mono text-xs font-semibold text-[var(--muted)] uppercase">
                  Coaching Tip for Best Recognition
                </p>
                <p className="body text-sm mt-1 text-[var(--ink)]">
                  {activeGuide.tip}
                </p>
              </div>
            </div>

            {/* Navigation Steppers */}
            <div className="mt-8 flex items-center justify-between border-t border-[var(--line)] pt-4">
              <button
                type="button"
                onClick={handlePrev}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[#5ba5f7]"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Previous letter
              </button>

              <button
                type="button"
                onClick={handleNext}
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
