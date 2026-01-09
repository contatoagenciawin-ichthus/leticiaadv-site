import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ArticlesSection } from "@/components/articles-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ManifestoParallax } from "@/components/manifesto-parallax";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ManifestoParallax />
      <ArticlesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
