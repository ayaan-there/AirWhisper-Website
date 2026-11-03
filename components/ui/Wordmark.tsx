export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`}>
      <span className="wordmark-mark" aria-hidden="true" />
      <span>AirWhisper</span>
    </span>
  );
}
