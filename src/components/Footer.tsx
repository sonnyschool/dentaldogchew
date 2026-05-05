export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            <span className="inline-block h-2 w-2 rounded-full bg-mint" />
            DentalDog
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A small team of vets, designers and dog lovers building better
            dental care, one chew at a time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 text-sm">
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Shop</div>
            <ul className="space-y-2">
              <li>Starter kit</li>
              <li>Refill serum</li>
              <li>Bundle</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="space-y-2">
              <li>About</li>
              <li>Science</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Help</div>
            <ul className="space-y-2">
              <li>Contact</li>
              <li>FAQ</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} DentalDog Co. — Made with wagging tails.
      </div>
    </footer>
  );
}
