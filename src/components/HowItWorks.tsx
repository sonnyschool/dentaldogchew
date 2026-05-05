import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bone from "@/assets/dental-bone.png";

const steps = [
  {
    n: "Step 01",
    title: "Fill the chamber",
    body: "Twist open the side cap and pour in 5ml of the dental serum. One fill lasts about a week.",
  },
  {
    n: "Step 02",
    title: "Hand it to your pup",
    body: "Give it to your dog like any other toy. They chew, they play, they love it.",
  },
  {
    n: "Step 03",
    title: "Serum does the rest",
    body: "Pressure activates the pores, releasing a perfect microdose with every bite. Cleaning happens passively.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 30]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="how" ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-mint">
            How it works
          </span>
          <h2 className="font-display text-5xl font-light leading-[1.05] md:text-7xl text-balance">
            Three steps. Zero <em className="text-mint not-italic">drama.</em>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
          <div className="space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-[80px_1fr] gap-8 border-t border-border pt-8"
              >
                <div className="font-display text-sm text-muted-foreground">{s.n}</div>
                <div>
                  <h3 className="font-display text-4xl font-light md:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-muted-foreground">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <motion.div style={{ rotate, y }} className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-butter blur-3xl opacity-40" />
                <img src={bone} alt="" className="w-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
