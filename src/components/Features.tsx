import { motion } from "framer-motion";

const features = [
  {
    n: "01",
    title: "Slow-release pores",
    body: "Hundreds of precision-laser pores meter out the dental serum so your dog gets a perfect dose with every chew.",
  },
  {
    n: "02",
    title: "Vet-grade serum",
    body: "Formulated with enzymes that break down plaque biofilm, neutralize odor, and strengthen enamel — safe to swallow.",
  },
  {
    n: "03",
    title: "Built to last",
    body: "Medical-grade silicone shell stands up to the most aggressive chewers. Refill the serum, reuse for months.",
  },
  {
    n: "04",
    title: "Tested & loved",
    body: "Reviewed by 50+ veterinarians and chewed by 50,000+ dogs of every size, breed, and personality.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-foreground py-32 text-background md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-mint">
            Features
          </span>
          <h2 className="font-display text-5xl font-light leading-[1.05] md:text-7xl text-balance">
            Engineered for the <em className="not-italic text-butter">happiest</em> mouths.
          </h2>
        </div>

        <div className="grid gap-px bg-background/10 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-foreground p-10 transition-colors hover:bg-background/[0.03] md:p-14"
            >
              <div className="mb-12 font-display text-sm text-mint">{f.n}</div>
              <h3 className="font-display text-3xl font-light md:text-4xl">{f.title}</h3>
              <p className="mt-4 max-w-md text-background/60">{f.body}</p>
              <div className="absolute bottom-10 right-10 text-2xl opacity-0 transition group-hover:opacity-100 md:bottom-14 md:right-14">
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
