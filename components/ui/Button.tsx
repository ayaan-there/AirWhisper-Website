import type { ReactNode } from "react";

type Variant = "ink" | "accent" | "outline" | "outlineLight" | "paper" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "ink",
  href,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const variantClass =
    variant === "outlineLight" ? "btn-outline-light" : `btn-${variant}`;
  const classes = `btn ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
