import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bone from "@/assets/dental-bone.png";

export function Science() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const stats = [
    { n: "200+", l: "micro-pores per chew" },
    { n: "5ml", l: "serum reservoir" },
    { n: "Vet", l: "formulated & tested" },
  ];

  return (
    <section ref={ref} id="science" className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="relative">
            <motion.div style={{ x, rotate }} className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-mint blur-3xl opacity-50" />
              <img src={bone} alt="" className="w-full" />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-mint">
              The science
            </span>
            <h2 className="font-display text-5xl font-light leading-[1] md:text-7xl text-balance">
              Every bite releases a <em className="text-mint not-italic">microdose</em> of dental care.
            </h2>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Hundreds of micro-pores on the chew surface are infused with a
              vet-formulated enzymatic serum. Pressure from chewing slowly
              dispenses the liquid — coating teeth, breaking down plaque, and
              freshening breath, naturally.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-display text-4xl font-light md:text-5xl">{s.n}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
