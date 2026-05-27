import CalBookingButton from "@/components/CalBookingButton";

export default function FooterSection() {
  return (
    <section className="mt-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-highest/30 border-t-2 border-structural-line pt-24 pb-12">
      <div className="grid grid-cols-12 gap-gutter mb-24">
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-headline-lg text-headline-lg uppercase mb-8 leading-tight font-black">
            Let&apos;s build<br />
            something<br />
            <span className="text-primary">that ships.</span>
          </h2>
          <a
            href="mailto:toni.grunwald@gmail.com"
            className="font-body-lg text-body-lg md:font-headline-md md:text-headline-md text-primary hover:underline transition-all whitespace-nowrap"
          >
            toni.grunwald@gmail.com
          </a>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end items-start md:items-end gap-8 text-left md:text-right">
          <p className="font-body-lg text-body-lg max-w-sm ml-auto">
            I&apos;m looking for my next 0→1 challenge — a team that wants to move fast and ship real things. If that&apos;s you, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <CalBookingButton
              calLink="toni-grunwald/30min"
              className="inline-block border-2 border-on-surface text-on-surface px-10 py-4 font-label-bold text-label-bold uppercase hover:border-primary hover:text-primary transition-colors cursor-pointer"
            />
            <a
              href="mailto:toni.grunwald@gmail.com?subject=Let's%20talk"
              className="inline-block bg-on-surface text-surface px-10 py-4 font-label-bold text-label-bold uppercase hover:bg-primary transition-colors"
            >
              Let&apos;s talk ↗
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-end border-t border-structural-line/20 pt-12 gap-gutter">
        <div className="font-headline-lg text-headline-lg font-black text-on-surface">
          TG.
        </div>
        <div className="font-body-md text-body-md text-on-surface-variant">
          © 2026 Toni Grunwald · Built to ship.
        </div>
        <div className="flex gap-8">
          <a
            href="#projects"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            Work
          </a>
          <a
            href="https://www.linkedin.com/in/toni-grunwald/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
