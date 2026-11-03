interface LegalSidebarProps {
  activeTab: "privacy" | "terms";
  updatedDate: string;
}

export function LegalSidebar({ activeTab, updatedDate }: LegalSidebarProps) {
  return (
    <aside className="col-span-12 lg:col-span-3">
      <nav
        aria-label="Legal documents"
        className="lg:sticky lg:top-[calc(var(--nav-h)+2.5rem)]"
      >
        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-2.5">
          <a
            href="/privacy-policy"
            aria-current={activeTab === "privacy" ? "page" : undefined}
            className={`inline-flex items-center justify-center px-4 py-2 text-[14px] sm:text-[15px] font-medium rounded-full transition-colors duration-150 ${
              activeTab === "privacy"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
                : "border border-[var(--line)] bg-[var(--paper)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
            }`}
          >
            Privacy policy
          </a>
          <a
            href="/terms-of-service"
            aria-current={activeTab === "terms" ? "page" : undefined}
            className={`inline-flex items-center justify-center px-4 py-2 text-[14px] sm:text-[15px] font-medium rounded-full transition-colors duration-150 ${
              activeTab === "terms"
                ? "bg-[var(--ink)] text-[var(--paper)] shadow-sm"
                : "border border-[var(--line)] bg-[var(--paper)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
            }`}
          >
            Terms of service
          </a>
        </div>

        <p className="mono mt-6 text-[12px] uppercase tracking-wider text-[var(--muted)]">
          Updated {updatedDate}
        </p>
      </nav>
    </aside>
  );
}

