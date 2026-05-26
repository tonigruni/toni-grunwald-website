const principles = [
  {
    number: "01",
    heading: "Bias to ship",
    body: "A rough thing live on Friday beats a perfect deck on Monday. I'd rather learn from the market than argue in a meeting.",
  },
  {
    number: "02",
    heading: "Grit, not drama",
    body: "German engineering values, founder stamina. I take ownership, I finish what I start, and I don't need babysitting.",
  },
  {
    number: "03",
    heading: "Full-stack range",
    body: "I can do the work in every lane — so I unblock teams, fill gaps fast, and make decisions with real context.",
  },
];

const stats = [
  { value: "3+",  label: "Startups built" },
  { value: "1",   label: "Micro-VC fund run" },
  { value: "10+", label: "Years operating" },
  { value: "0→1", label: "My natural habitat" },
];

export default function UnfairAdvantage() {
  return (
    <section id="track-record" className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          03 How I Operate
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-structural-line/20 mt-12 mb-16">
        {stats.map((s, i) => (
          <div key={s.label} className={`p-8 ${i < stats.length - 1 ? "border-r border-structural-line/20" : ""}`}>
            <div className="font-headline-lg text-headline-lg text-primary font-black mb-1">{s.value}</div>
            <div className="font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant text-[10px]">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            The person
            <br />
            who figures
            <br />
            <span className="text-primary">it out.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I can talk to founders, clients, designers, developers, marketers, lawyers, investors, and users — and translate between all of them. That makes me useful in companies where things are moving fast, priorities are unclear, and someone needs to bring structure, speed, and ownership.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-6 divide-y divide-structural-line/20">
          {principles.map((p) => (
            <div key={p.number} className="py-8 group md:hover:pl-3 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-section-number text-section-number text-primary">{p.number}</span>
                <h3 className="font-headline-md text-headline-md uppercase group-hover:text-primary transition-colors">
                  {p.heading}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
