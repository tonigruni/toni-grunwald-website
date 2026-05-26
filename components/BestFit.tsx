const strengths = [
  "Take ownership without constant supervision",
  "Structure messy projects with no obvious owner",
  "Work across teams and disciplines",
  "Communicate clearly with technical and non-technical people",
  "Move fast with limited resources",
  "Use AI practically, not just talk about it",
  "Think strategically but still execute hands-on",
];

const notFit = [
  "You need someone who only follows fixed instructions",
  "You need a narrow specialist who stays in one lane",
  "You have a highly structured corporate environment with no appetite for change",
  "You need someone who waits for perfect conditions before moving",
];

export default function BestFit() {
  return (
    <section className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          05 Fit
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter mt-12">

        <div className="col-span-12 md:col-span-6">
          <div className="border-t-2 border-primary pt-8">
            <h3 className="font-headline-md text-headline-md uppercase mb-8">
              Strong fit if you need someone who can:
            </h3>
            <ul className="space-y-4">
              {strengths.map((s) => (
                <li key={s} className="flex gap-4 font-body-md text-body-md text-on-surface-variant">
                  <span className="text-primary mt-1 shrink-0 font-bold">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="border-t-2 border-on-surface/30 pt-8">
            <h3 className="font-headline-md text-headline-md uppercase mb-8 text-on-surface/50">
              Probably not the right fit if:
            </h3>
            <ul className="space-y-4">
              {notFit.map((s) => (
                <li key={s} className="flex gap-4 font-body-md text-body-md text-on-surface-variant/60">
                  <span className="text-on-surface/30 mt-1 shrink-0">✗</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
