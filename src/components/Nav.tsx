import { motion, useScroll, useTransform } from "framer-motion";

export function Nav() {
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, [0, 100], [24, 14]);
  const width = useTransform(scrollY, [0, 200], ["min(720px, 92%)", "min(560px, 92%)"]);

  return (
    <motion.header
      style={{ top, width }}
      className="fixed left-1/2 z-50 -translate-x-1/2"
    >
      {/* Liquid glass pill */}
      <div className="relative">
        {/* glass blur layer */}
        <div className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-2xl backdrop-saturate-150" />
        {/* gradient sheen */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/60 via-white/10 to-white/30" />
        {/* inner highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_-1px_0_0_rgba(255,255,255,0.3)]" />
        {/* outer ring + shadow */}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(20,40,80,0.25)]" />

        <nav className="relative flex items-center justify-between gap-2 px-2 py-2">
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-4 py-2 font-display text-base font-medium tracking-tight text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(120,200,230,0.8)]" />
            DentalDog
          </a>

          <div className="hidden items-center gap-1 sm:flex">
            <PillLink href="#science">Science</PillLink>
            <PillLink href="#features">Features</PillLink>
            <PillLink href="#how">How</PillLink>
          </div>

          <a
            href="#order"
            className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-foreground/95 px-4 py-2 text-xs font-medium text-background shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] transition hover:scale-[1.04]"
          >
            <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-white/15" />
            <span className="relative">Order</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-white/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}
