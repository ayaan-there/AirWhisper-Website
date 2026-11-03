"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui/Button";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("AirWhisper early access");
    const body = encodeURIComponent(
      `Hi AirWhisper team,\n\nI'd like to request early access.\n\nEmail: ${email}\n\n`
    );

    window.location.href = `mailto:airwhisper@proton.me?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="start"
      className="on-accent section-pad bg-[#5ba5f7] text-white"
    >
      <div className="shell">
        <div className="grid12 gap-y-14 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono text-white/90">06 / Early access</p>

            <h2 className="h2 mt-8 max-w-[14ch] text-white">
              Everyone deserves to be heard.
            </h2>

            <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-white/90 sm:text-lg">
              We&rsquo;re working with care centres, therapists, and families to
              put AirWhisper in the hands of the people who need it. Tell us
              where to reach you.
            </p>

            <p className="mono mt-10 text-white/90">
              Free for qualifying patients / No credit card
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="early-access-email" className="mono text-white/90">
                  Email address
                </label>
                <input
                  id="early-access-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitted(false);
                  }}
                  className="field"
                />
              </div>

              <Button type="submit" variant="paper" className="w-full">
                Request early access
              </Button>

              <p
                className="min-h-[1.25rem] text-sm leading-relaxed text-white/90"
                role="status"
                aria-live="polite"
              >
                {submitted
                  ? "Your email app should open with a message ready to send."
                  : ""}
              </p>
            </form>

            <p className="mt-2 text-sm leading-relaxed text-white/90">
              We use your email only to contact you about early access.{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-white"
              >
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
