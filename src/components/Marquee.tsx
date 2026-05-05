export function Marquee() {
  const items = [
    "Vet-formulated",
    "Plaque-fighting",
    "Non-toxic silicone",
    "Slow-release pores",
    "Fresh breath",
    "Lab-tested",
    "Built for chewers",
    "Refillable serum",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-cream py-8">
      <div className="flex w-max marquee gap-16 whitespace-nowrap font-display text-3xl text-foreground/70">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
        ))}
      </div>
    </section>
  );
}
