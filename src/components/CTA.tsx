import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bone from "@/assets/dental-bone.png";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} id="order" className="relative overflow-hidden bg-foreground py-32 text-background md:py-48">
      <motion.div
        style={{ scale, rotate }}
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-30"
      >
        <img src={bone} alt="" className="w-[800px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.25em] text-mint">
            Showcase
          </span>
          <h2 className="font-display text-6xl font-light leading-[0.95] md:text-8xl text-balance">
            Built for the <em className="not-italic text-butter">good chew.</em>
          </h2>
          <p className="mt-8 max-w-lg text-lg text-background/70">
            DentalDog is currently in vet-tested prototype. The starter kit
            includes one chew + a 60ml bottle of serum.
          </p>

          <div className="mt-12 flex flex-wrap items-end gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-background/50">Starter kit</div>
              <div className="font-display text-6xl font-light">
                £32<span className="text-2xl text-background/50">.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
