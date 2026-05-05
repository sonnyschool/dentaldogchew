import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Science } from "@/components/Science";
import { PoreReveal } from "@/components/PoreReveal";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DentalDog — A chew toy that brushes their teeth" },
      {
        name: "description",
        content:
          "DentalDog is a porous chew toy that releases vet-grade dental serum with every bite. Vet-formulated and tested.",
      },
      { property: "og:title", content: "DentalDog — A chew toy that brushes their teeth" },
      {
        property: "og:description",
        content:
          "Porous chew toy that releases vet-grade dental serum with every bite. Cleaner teeth, fresher breath.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="bg-background">
        <Hero />
        <Marquee />
        <Science />
        <PoreReveal />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
