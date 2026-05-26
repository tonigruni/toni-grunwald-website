"use client";

const base = "https://cdn.jsdelivr.net/npm/simple-icons/icons";

const tools = [
  { name: "Notion",      slug: "notion" },
  { name: "Airtable",    slug: "airtable" },
  { name: "n8n",         slug: "n8n" },
  { name: "Slack",       slug: "slack" },
  { name: "Figma",       slug: "figma" },
  { name: "Linear",      slug: "linear" },
  { name: "Vercel",      slug: "vercel" },
  { name: "GitHub",      slug: "github" },
  { name: "Supabase",    slug: "supabase" },
  { name: "OpenAI",      slug: "openai" },
  { name: "Anthropic",   slug: "anthropic" },
  { name: "Webflow",     slug: "webflow" },
];

const items = [...tools, ...tools];

export default function TechStack() {
  return (
    <section className="py-12 bg-surface overflow-hidden">
      <style>{`
        @keyframes scroll-techstack {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .techstack-track {
          animation: scroll-techstack 70s linear infinite;
        }
        .techstack-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <p className="font-section-number text-section-number uppercase tracking-widest text-on-surface-variant text-center mb-10">
        My Work Stack
      </p>

      <div className="overflow-hidden">
        <div className="flex w-max techstack-track">
          {items.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 px-10 shrink-0 group cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${base}/${tool.slug}.svg`}
                alt={tool.name}
                width={28}
                height={28}
                className="w-7 h-7 transition-opacity duration-300 opacity-35 group-hover:opacity-90"
                style={{ filter: "grayscale(1) brightness(0)" }}
                loading="lazy"
              />
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface/35 group-hover:text-on-surface/70 transition-colors whitespace-nowrap text-[10px]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
