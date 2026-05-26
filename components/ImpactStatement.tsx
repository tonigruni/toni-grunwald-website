const competencies = [
  {
    label: "Speed without sloppiness",
    desc: "I move fast by removing friction, not by cutting corners. Structure first, then velocity.",
  },
  {
    label: "Strategy that ships",
    desc: "I don't produce strategy documents that sit in Notion. I produce strategies that become systems, tools, and launched products.",
  },
  {
    label: "AI as infrastructure",
    desc: "I treat AI as operational infrastructure, not a novelty. It's built into how I work, not bolted on.",
  },
];

export default function ImpactStatement() {
  return (
    <section className="mt-section-gap bg-primary py-32 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="font-display-xl text-[20vw] leading-none text-white whitespace-nowrap">
          EXECUTION
        </h2>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-12 gap-gutter items-start">
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-headline-lg text-headline-lg text-white uppercase leading-tight">
            I don&apos;t just manage projects. I move them.
          </h3>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8 divide-y divide-white/20">
          {competencies.map((c) => (
            <div key={c.label} className="py-5">
              <span className="font-label-bold text-label-bold text-white uppercase block mb-1">
                {c.label}
              </span>
              <span className="font-body-md text-body-md text-white/60 leading-snug">
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
