import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Scanner from "@/components/ui/Scanner";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Scanner
          color1="#5BA4D9"
          color2="#A8D0EE"
          color3="#FFFFFF"
          speed={0.4}
          sweepSpeed={0.28}
          sweepWidth={2.6}
          sweepFalloff={6.5}
          scale={1.6}
          frequency={1.4}
          ripple={0.55}
          bandDensity={13}
          lineSharpness={5}
          glow={0.16}
          scanDirection="vertical"
          colorSpread={0.45}
          brightness={0.9}
          contrast={1.45}
          softness={2.2}
          vignette={0.2}
          scanline={false}
          grain={false}
          opacity={0.45}
          mouseInteraction={true}
          mouseRadius={0.6}
          mouseStrength={0.8}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <HowItWorks />
        <Features />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
