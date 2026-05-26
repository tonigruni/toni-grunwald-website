import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import { ThePitch } from "@/components/WhatIDo";
import WhatIDo from "@/components/WhatIDo";
import TechStack from "@/components/TechStack";
import UnfairAdvantage from "@/components/UnfairAdvantage";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ImpactStatement from "@/components/ImpactStatement";
import BestFit from "@/components/BestFit";
import RolesSection from "@/components/RolesSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <ThePitch />
      <WhatIDo />
      <UnfairAdvantage />
      <TechStack />
      <Projects />
      <Skills />
      <ImpactStatement />
      <BestFit />
      <RolesSection />
      <FooterSection />
    </>
  );
}
