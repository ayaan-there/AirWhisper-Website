"use client";

interface GradientOrbProps {
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  blur?: string;
  className?: string;
}

export function GradientOrb({
  color = "rgba(91, 164, 217, 0.15)",
  size = "400px",
  top,
  left,
  right,
  bottom,
  delay = 0,
  blur = "80px",
  className = "",
}: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur})`,
        animation: `orb-drift ${8 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
