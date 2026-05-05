import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bone from "@/assets/dental-bone.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[110vh] overflow-hidden pt-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-mint opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-butter opacity-30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          style={{ y: titleY, opacity }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Vet-formulated · Cruelty-free
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] font-light leading-[0.95] text-balance">
            <SplitWord text="Cleaner" delay={0.1} />{" "}
            <span className="italic text-mint">teeth.</span>
            <br />
            <SplitWord text="Happier" delay={0.4} />{" "}
            <span className="italic">tails.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground text-balance"
          >
            A chew toy with micro-pores that release a vet-grade dental serum
            with every bite. Plaque, gone. Breath, fresh. Tail, wagging.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex justify-center"
          >
            <a
              href="#science"
              className="text-sm text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline"
            >
              See the science ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Floating product */}
        <motion.div
          style={{ y, rotate, scale }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="float-slow">
            <img
              src={bone}
              alt="Dental Dog Chew bone toy with porous surface"
              className="mx-auto w-full max-w-3xl drop-shadow-[0_60px_60px_rgba(40,80,120,0.25)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}
