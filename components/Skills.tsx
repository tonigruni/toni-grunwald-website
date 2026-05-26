const skillGroups = [
  {
    area: "Product & Strategy",
    icon: "lightbulb",
    items: ["Product discovery", "Go-to-market planning", "MVP scoping", "User journeys", "Roadmap creation", "Market positioning"],
  },
  {
    area: "AI & Automation",
    icon: "smart_toy",
    items: ["AI workflow design", "Prompt engineering", "Content automation", "Process optimisation", "LLM tool integration", "Agent architecture"],
  },
  {
    area: "Operations",
    icon: "settings",
    items: ["Project coordination", "Internal processes", "Team communication", "Documentation", "Workflow design", "Execution management"],
  },
  {
    area: "Marketing & Brand",
    icon: "campaign",
    items: ["Positioning & messaging", "Content strategy", "Web copy", "Campaign concepts", "Community building", "Event communication"],
  },
  {
    area: "Web & Digital",
    icon: "code",
    items: ["Landing page strategy", "Website structure", "UX thinking", "No-code tools", "Dev collaboration", "Design direction"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-section-gap md:mt-[160px] px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
      <div className="structural-divider">
        <div className="section-label font-section-number text-section-number uppercase tracking-widest">
          04 Skills by Value
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-12 mb-12">
        <h2 className="font-headline-lg text-headline-lg uppercase">
          What I bring<br />to the table.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Not a skill cloud. Structured by the value each area creates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-l border-t border-structural-line/20">
        {skillGroups.map((group) => (
          <div key={group.area} className="border-r border-b border-structural-line/20 p-8 group hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-primary mb-4 block text-2xl">
              {group.icon}
            </span>
            <h3 className="font-label-bold text-label-bold uppercase tracking-widest mb-6 text-on-surface group-hover:text-primary transition-colors">
              {group.area}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="font-body-md text-body-md text-on-surface-variant flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1 shrink-0 text-xs">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
