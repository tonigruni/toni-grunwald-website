const roles = [
  "Product Manager",
  "Product Operations Manager",
  "Strategy & Operations Manager",
  "AI Product Consultant",
  "Startup Operations Lead",
  "Chief of Staff",
  "Growth / Product Strategy",
  "Client Success / Project Lead",
];

export default function RolesSection() {
  return (
    <section className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop bg-surface-container-low py-24 max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          06 Roles
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter mt-12">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
            Where I&apos;m<br />
            looking<br />
            <span className="text-primary">to land.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I&apos;m especially interested in roles at the intersection of product, strategy, and AI — where ownership matters more than hierarchy and speed matters more than perfection.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-start-7 lg:col-span-6">
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="font-label-bold text-label-bold uppercase tracking-widest border border-on-surface/20 px-5 py-3 text-on-surface hover:border-primary hover:text-primary transition-colors text-[11px]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
