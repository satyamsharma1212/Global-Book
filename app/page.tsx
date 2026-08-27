import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import HowItWorks from "@/components/HowItWorks";
import WorkOverview from "@/components/WorkOverview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoCards />
      <HowItWorks />
      <WorkOverview />
      <FAQ />
      <CTA />
    </>
  );
}