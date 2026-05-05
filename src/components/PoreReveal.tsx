import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import bone from "@/assets/dental-bone.png";

type Callout = {
  at: number;
  title: string;
  body: string;
  meta: string;
  pos: { top: string; left: string };
  align: "left" | "right";
};

const callouts: Callout[] = [
  {
    at: 0.28,
    title: "Micro-pores",
    body: "Laser-cut openings dispense a precise microdose of serum with every bite.",
    meta: "0.4 mm Ø",
    pos: { top: "32%", left: "52%" },
    align: "right",
  },
  {
    at: 0.55,
    title: "Serum film",
    body: "A thin mint-fresh layer coats teeth and gums as the silicone flexes.",
    meta: "Vet-grade",
    pos: { top: "62%", left: "22%" },
    align: "left",
  },
  {
    at: 0.82,
    title: "Soft-grip silicone",
    body: "Medical-grade, non-toxic, and built for the most aggressive chewers.",
    meta: "FDA tested",
    pos: { top: "26%", left: "70%" },
    align: "right",
  },
];

export function PoreReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Camera move — gentle zoom so the source image stays crisp
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.9]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // Header
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);

  // Progress bar
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.6]) }}
            className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint opacity-30 blur-3xl"
          />
        </div>

        {/* Section header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute left-1/2 top-12 z-20 -translate-x-1/2 px-6 text-center"
        >
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-mint">
            A closer look
          </span>
          <h2 className="font-display text-4xl font-light leading-[1] md:text-6xl text-balance">
            Scroll to zoom in.
          </h2>
        </motion.div>

        {/* Camera stage */}
        <motion.div
          style={{ scale, x, y, rotate }}
          className="relative flex h-full w-full items-center justify-center will-change-transform"
        >
          <img
            src={bone}
            alt="Dental Dog Chew"
            className="w-[min(90%,900px)] select-none drop-shadow-[0_40px_60px_rgba(40,80,120,0.25)]"
            draggable={false}
          />
        </motion.div>

        {/* Callouts (counter-rotate not needed — they sit on the parent stage, not the rotating one) */}
        {callouts.map((c, i) => (
          <CalloutCard key={i} progress={scrollYProgress} {...c} />
        ))}

        {/* Bottom: scroll hint + progress */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          ↓ keep scrolling
        </motion.div>
        <div className="absolute bottom-6 left-1/2 z-20 h-px w-40 -translate-x-1/2 overflow-hidden rounded-full bg-foreground/10">
          <motion.div
            style={{ scaleX: progressScale, transformOrigin: "0% 50%" }}
            className="h-full w-full bg-foreground/60"
          />
        </div>
      </div>
    </section>
  );
}

function CalloutCard({
  progress,
  at,
  title,
  body,
  meta,
  pos,
  align,
}: Callout & { progress: MotionValue<number> }) {
  const [hover, setHover] = useState(false);
  const clamp = (v: number) => Math.max(0, Math.min(1, v));
  const a = clamp(at - 0.1);
  const b = clamp(at);
  const c = clamp(at + 0.16);
  const d = clamp(at + 0.24);
  const stops = [a, Math.max(b, a + 0.001), Math.max(c, b + 0.001), Math.max(d, c + 0.001)];

  const opacity = useTransform(progress, stops, [0, 1, 1, 0]);
  const yMove = useTransform(progress, [stops[0], stops[1], stops[3]], [24, 0, -24]);
  const scale = useTransform(progress, [stops[0], stops[1], stops[3]], [0.92, 1, 0.96]);

  return (
    <motion.div
      style={{ opacity, y: yMove, scale, top: pos.top, left: pos.left }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="absolute z-10 w-72"
    >
      <div
        className={`flex items-start gap-3 ${
          align === "left" ? "flex-row-reverse text-right" : ""
        }`}
      >
        {/* Pulsing dot */}
        <div className="relative mt-3 flex-shrink-0">
          <span className="absolute inset-0 -m-1 animate-ping rounded-full bg-mint/60" />
          <span className="relative block h-3 w-3 rounded-full bg-foreground shadow-[0_0_0_4px_rgba(255,255,255,0.7)]" />
          {/* Animated connector */}
          <motion.div
            initial={false}
            animate={{ width: hover ? 64 : 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className={`absolute top-1/2 h-px bg-gradient-to-r from-foreground/60 to-transparent ${
              align === "left" ? "right-full origin-right rotate-180" : "left-full origin-left"
            }`}
          />
        </div>

        {/* Card */}
        <motion.div
          animate={{
            y: hover ? -2 : 0,
            boxShadow: hover
              ? "0 20px 60px -15px rgba(20,40,80,0.35)"
              : "0 10px 40px -10px rgba(20,40,80,0.25)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={`relative rounded-2xl bg-white/75 p-4 backdrop-blur-xl ring-1 ring-black/5 ${
            align === "left" ? "mr-12" : "ml-12"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-mint">
              Detail
            </div>
            <div className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-foreground/70">
              {meta}
            </div>
          </div>
          <div className="mt-1 font-display text-lg leading-tight">{title}</div>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{body}</p>
          {/* Hover reveal underline */}
          <motion.div
            initial={false}
            animate={{ scaleX: hover ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: align === "left" ? "100% 50%" : "0% 50%" }}
            className="mt-3 h-px w-full bg-gradient-to-r from-mint to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
