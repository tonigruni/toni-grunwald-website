"use client";

import React from "react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const socialLinks: { icon: React.ReactNode; href: string }[] = [];

export default function Hero() {
  return (
    <MinimalistHero
      showHeader={false}
      mainText="Founder-grade product & strategy operator. I've started companies, run a fund, and built the marketing, the brand and the code when there was no one to hand it to."
      readMoreLink="#pitch"
      imageSrc="/toni hero profile.png"
      imageAlt="Toni Grunwald – Product Strategist & Startup Operator"
      overlayText={{
        part1: "0→1",
        part2: "operator.",
      }}
      socialLinks={socialLinks}
      locationText="Product · Strategy · 0→1"
    />
  );
}
