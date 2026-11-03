const currentYear = new Date().getFullYear();

export function Footer({ showLargeMark = false }: { showLargeMark?: boolean } = {}) {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="shell pt-8 lg:pt-10">
        <div className="grid12 gap-y-12 pb-14 lg:pb-20">
          <div className="col-span-12 lg:col-span-5">
            <a href="/" aria-label="AirWhisper home" className="inline-flex min-h-[36px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/how-to-use/airwhisper-logo-light.png"
                alt="AirWhisper"
                className="h-[32px] sm:h-[38px] w-auto transition-transform duration-200 hover:scale-[1.02]"
              />
            </a>
            <p className="body mt-5 max-w-[34ch]">
              Accessibility technology that turns wrist movement into
              communication.
            </p>
            <p className="mono mt-6 max-w-[38ch] text-[var(--muted)]">
              An accessibility aid, not a medical device. Not intended for
              emergency communication.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          >
            <h2 className="mono mb-5 text-[var(--muted)]">Navigate</h2>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/how-to-use", label: "How to use" },
                { href: "/about", label: "About Us" },
                { href: "/privacy-policy", label: "Privacy policy" },
                { href: "/terms-of-service", label: "Terms of service" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-[24px] items-center text-[0.9375rem] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h2 className="mono mb-5 text-[var(--muted)]">Contact</h2>
            <a
              href="mailto:airwhisper@proton.me"
              className="text-link text-[0.9375rem]"
            >
              airwhisper@proton.me
            </a>
            <p className="body mt-5 max-w-[32ch]">
              For early access, research partnerships, or accessibility
              questions.
            </p>
          </div>
        </div>

        {showLargeMark && (
          <div className="border-t border-[var(--line)] pt-10 pb-14 lg:pt-14 lg:pb-20">
            <svg
              className="footer-mark"
              viewBox="0 0 1140 250"
              role="img"
              aria-label="AirWhisper"
            >
              <text
                x="0"
                y="205"
                fontFamily="var(--font-display), 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontWeight="700"
                fontSize="238"
                letterSpacing="-0.055em"
                textLength="1140"
                lengthAdjust="spacingAndGlyphs"
              >
                <tspan fill="currentColor">Air</tspan>
                <tspan fill="#5ba5f7">Whisper</tspan>
              </text>
            </svg>
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-[var(--line)] py-8 pb-12 sm:py-9 sm:pb-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[var(--muted)]">
            &copy; {currentYear} AirWhisper
          </p>
          <p className="mono text-[var(--muted)]">
            Made for people, not platforms.
          </p>
        </div>
      </div>
    </footer>
  );
}
