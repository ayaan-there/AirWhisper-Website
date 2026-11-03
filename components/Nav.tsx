"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-to-use", label: "How to use" },
  { href: "/about", label: "About Us" },
  { href: "/privacy-policy", label: "Legal" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="nav" data-scrolled={isScrolled}>
      <nav className="shell" aria-label="Primary">
        <div className="flex h-[var(--nav-h)] items-center justify-between gap-6">
          <a href="/" aria-label="AirWhisper home" className="inline-flex min-h-[48px] items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/how-to-use/airwhisper-logo-light.png"
              alt="AirWhisper"
              className="h-[36px] sm:h-[44px] w-auto transition-transform duration-200 hover:scale-[1.02]"
            />
          </a>

          <div className="hidden items-center gap-8 lg:gap-10 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[16px] lg:text-[17px] font-medium">
                {link.label}
              </a>
            ))}
            <a href="/#start" className="btn btn-ink min-h-[44px] px-7 text-[15px] lg:text-[16px] rounded-full font-medium">
              Early access
            </a>
          </div>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className="absolute left-0 top-0 block h-[1.5px] w-6 bg-[var(--ink)] transition-transform duration-300"
                style={
                  open
                    ? { transform: "translateY(6px) rotate(45deg)" }
                    : undefined
                }
              />
              <span
                className="absolute bottom-0 left-0 block h-[1.5px] w-6 bg-[var(--ink)] transition-transform duration-300"
                style={
                  open
                    ? { transform: "translateY(-6px) rotate(-45deg)" }
                    : undefined
                }
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className="mobile-panel md:hidden"
          data-open={open}
        >
          <div className="flex flex-col border-t border-[var(--line)] pb-6 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-[17px] font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#start"
              className="btn btn-ink mt-4 w-full rounded-full min-h-[46px] text-[16px] font-medium"
              onClick={() => setOpen(false)}
            >
              Early access
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
