import { Hero } from "@/components/sections/Hero";
import { ProofBlocks } from "@/components/sections/ProofBlocks";
import { CarrierMarquee } from "@/components/sections/CarrierMarquee";
import { Problem } from "@/components/sections/Problem";
import { Shift } from "@/components/sections/Shift";
import { Flywheel } from "@/components/sections/Flywheel";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhoFor } from "@/components/sections/WhoFor";
import { FAQ } from "@/components/sections/FAQ";
import { ApplySection } from "@/components/sections/ApplySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBlocks />
      <CarrierMarquee />
      <Problem />
      <Shift />
      <Flywheel />
      <CaseStudies />
      <WhoFor />
      <FAQ />
      <ApplySection />
    </>
  );
}
