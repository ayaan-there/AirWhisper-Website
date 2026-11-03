import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-[calc(var(--nav-h)+clamp(24px,4vw,56px))] lg:pb-16">
      <div className="shell">
        <div className="pt-2 lg:pt-6">
          <h1 className="display" aria-label="Your words. Your way.">
            <span className="hero-line">
              <span>Your words.</span>
            </span>
            <span className="hero-line">
              <span>Your way.</span>
            </span>
          </h1>
        </div>

        <div className="mt-10 lg:mt-16">
          <div className="hero-enter flex flex-col gap-8">
            <div className="flex flex-wrap gap-3">
              <Button href="#start">Request early access</Button>
              <Button href="#how" variant="outline">
                See how it works
              </Button>
            </div>

            <p className="mono text-[var(--muted)]">
              Free for qualifying patients. No credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
