import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found — AirWhisper",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="min-h-screen">
        <div className="shell pb-24 pt-[calc(var(--nav-h)+clamp(64px,12vw,140px))]">
          <div className="grid12">
            <div className="col-span-12 lg:col-span-3">
              <p className="mono text-[var(--muted)]">Error / 404</p>
            </div>

            <div className="col-span-12 mt-8 lg:col-span-9 lg:mt-0">
              <h1 className="legal-title">This page is out of reach.</h1>
              <p className="body-lg mt-6 max-w-[46ch]">
                The address may have changed, or the page may no longer exist.
                Your words are still where you left them.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                <Button href="/">Back to AirWhisper</Button>
                <Button href="/#start" variant="outline">
                  Request early access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
