"use client";

const words = ["Product", "Strategy", "Go-to-Market", "Brand", "0→1", "Speed", "AI", "Execution", "Positioning", "Shipping"];
const items = [...words, ...words];

export default function ToolsMarquee() {
  return (
    <section className="py-10 bg-on-surface overflow-hidden">
      <style>{`
        @keyframes scroll-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: scroll-marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="overflow-hidden">
        <div className="flex w-max marquee-track items-center">
          {items.map((word, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-headline-lg text-headline-lg font-black uppercase text-surface/20 px-8 tracking-tight whitespace-nowrap">
                {word}
              </span>
              <span className="text-primary text-2xl font-black select-none">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
