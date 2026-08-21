export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="font-[family-name:var(--font-script)] text-[1.15em] leading-none text-[#0a0a0a]">
        Air
      </span>
      <span className="font-[family-name:var(--font-display)] font-medium tracking-tight text-[#5BA4D9]">
        Whisper
      </span>
    </span>
  );
}
