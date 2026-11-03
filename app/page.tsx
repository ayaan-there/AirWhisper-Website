import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { GuideTeaser } from "@/components/GuideTeaser";
import { ThreeWaysCarousel } from "@/components/ThreeWaysCarousel";
import { Features } from "@/components/Features";
import { Privacy } from "@/components/Privacy";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Problem />
        <GuideTeaser />
        <ThreeWaysCarousel />
        <Features />
        <Privacy />
        <CTA />
      </main>

      <Footer showLargeMark={true} />
    </>
  );
}
