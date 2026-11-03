import { Button } from "./ui/Button";

export function GuideTeaser() {
  return (
    <section
      className="on-dark border-t border-[var(--line-dark)] bg-[var(--dark)] text-white"
      aria-label="The AirWhisper user guide"
    >
      <div className="shell py-16 lg:py-24">
        <p className="mono text-[var(--accent-soft)]">02 / One watch. Every word.</p>

        <div className="mt-8">
          <h2 className="display max-w-[14ch] text-white">
            One watch.
            <br />
            Every word.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/how-to-use" variant="paper">
            Read the complete guide
          </Button>
          <Button href="/how-to-use#watch-setup" variant="outlineLight">
            Apple Watch setup first
          </Button>
        </div>
      </div>
    </section>
  );
}
