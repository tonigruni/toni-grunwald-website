"use client";

import Image from "next/image";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    alt: "migRaven.MAX – AI Compliance Suite GTM",
    category: "// Go-to-Market",
    year: "2024–now",
    title: "migRaven.MAX",
    role: "Marketing Manager · GTM · Brand",
    description: "Owned brand and GTM for the launch of an AI-driven compliance suite into the DACH CISO/IT market. Positioning, website, webinar content, and sales materials — from zero to market.",
  },
  {
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    alt: "Logbird – Developer Observability Tool",
    category: "// Product Launch",
    year: "2025",
    title: "Logbird",
    role: "Founder · Builder · Product",
    description: "Building a developer-focused logging and observability tool. Designed the product from scratch, built the staging environment, and managing the full product lifecycle solo.",
  },
  {
    src: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
    alt: "Micro-VC Fund",
    category: "// Investing",
    year: "—",
    title: "Micro-VC Fund",
    role: "General Partner · Sourcing · Due Diligence",
    description: "Ran a micro-VC fund: sourced, evaluated and backed early-stage software and AI startups. Built the investment thesis, led deal flow, and managed portfolio relationships.",
  },
  {
    src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    alt: "AI Workflows & Automation",
    category: "// AI / Build",
    year: "2024",
    title: "AI Workflows",
    role: "Automation Architect · Builder",
    description: "Designed and built automation workflows using Notion, Airtable, Slack, n8n, and LLMs. Automated content planning, distribution, operational reminders, and reporting pipelines.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          04 Selected Work
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-12 mb-8">
        <h2 className="font-headline-lg text-headline-lg uppercase">
          Things I&apos;ve shipped.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          GTM launches, products built from scratch, a fund, and systems that run themselves.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch md:gap-2 md:h-[560px] gap-1 mt-0">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative aspect-[3/4] md:aspect-auto md:flex-grow md:w-40 md:hover:w-full md:transition-all md:duration-500 group overflow-hidden bg-surface-container"
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <span className="font-label-bold text-label-bold text-primary mb-1 block text-[10px] tracking-widest">
                {project.category} · {project.year}
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-1">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-white/70 text-sm hidden group-hover:block mt-2 max-w-[280px]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
