"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./ui/Wordmark";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a]">
              <div className="h-3 w-3 rounded-full bg-[#5BA4D9]" />
            </div>
            <Wordmark className="text-lg font-medium" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#how"
              className="text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors"
            >
              How it works
            </a>
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors"
            >
              Features
            </a>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-gray-600 hover:text-[#0a0a0a] transition-colors"
            >
              Terms
            </a>
            <a
              href="#start"
              className="rounded-lg bg-[#0a0a0a] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5BA4D9] transition-colors"
            >
              Get early access
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#how"
                className="text-sm text-gray-600 hover:text-[#0a0a0a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#features"
                className="text-sm text-gray-600 hover:text-[#0a0a0a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-[#0a0a0a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-gray-600 hover:text-[#0a0a0a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms of Service
              </a>
              <a
                href="#start"
                className="rounded-lg bg-[#0a0a0a] px-5 py-2.5 text-sm font-medium text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get early access
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
