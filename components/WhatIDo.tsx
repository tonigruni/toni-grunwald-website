export function ThePitch() {
  return (
    <section id="pitch" className="px-margin-mobile md:px-margin-desktop bg-surface-container-low pt-24 pb-section-gap max-w-[1920px] mx-auto">
      <div className="structural-divider mb-12">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          01 The Pitch
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <p className="font-headline-md text-headline-md leading-snug text-on-surface">
            Most people are great at <em>one</em>{" "}thing and need a team for the rest.
            I&apos;m <strong className="text-primary">effective</strong>{" "}because I&apos;m genuinely good at the whole stack — strategy, product, brand, GTM, even the build.
            Which means I move fast, I don&apos;t get blocked waiting on hand-offs, and I lead teams that{" "}
            <strong className="text-primary">can&apos;t bluff me.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

const toolkit = [
  { area: "Product Strategy & Roadmapping", level: "Core spike" },
  { area: "Go-to-Market & Positioning",     level: "Core spike" },
  { area: "Brand & Design Direction",       level: "Strong" },
  { area: "Marketing & Content",            level: "Strong" },
  { area: "Web Development",                level: "Hands-on" },
  { area: "AI Tooling & Workflows",         level: "Obsessed" },
  { area: "Fundraising & VC Thinking",      level: "Lived it" },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="px-margin-mobile md:px-margin-desktop mt-section-gap max-w-[1920px] mx-auto">
      <div className="structural-divider mb-12">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          02 What I&apos;m Built For
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            My spike is
            <br />
            product &
            <br />
            <span className="text-primary">strategy.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            I think like an investor, build like a founder, and sell like a marketer. That combination is rare, and it&apos;s exactly what early-stage and 0→1 teams are starving for.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I don&apos;t write strategy decks that gather dust. I pressure-test the idea, define the wedge, sequence the roadmap, and stay in the room until it&apos;s live and working.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-6">
          <div className="divide-y divide-structural-line/20">
            {toolkit.map((t) => (
              <div key={t.area} className="py-5 flex items-center justify-between gap-4 group">
                <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                  {t.area}
                </span>
                <span className={`font-label-bold text-label-bold uppercase tracking-widest text-[10px] shrink-0 ${
                  t.level === "Core spike" ? "text-primary" : "text-on-surface-variant"
                }`}>
                  {t.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
