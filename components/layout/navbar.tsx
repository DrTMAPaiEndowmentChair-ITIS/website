import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink, type NavItem } from "@/components/layout/nav-link";
import { ArrowRight01Icon } from "@/components/icons";

const navLinks: NavItem[] = [
  { href: "/#research", label: "Research" },
  { href: "/#events", label: "Events" },
  { href: "/compute", label: "Compute" },
  { href: "/chairperson", label: "Chair Professor" },
  { href: "https://blog.ecitis.org", label: "Blog", external: true },
];

/**
 * The sheet's title row rather than a bar laid over it: the page rails run
 * through it, it closes on the same ruled line and registration marks as every
 * section, and it only picks up a translucent fill once content scrolls under.
 */
export function Navbar() {
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50">
      <div className="nav-frame">
        <nav aria-label="Main" className="shell flex h-16 items-center justify-between gap-6">
          <Link href="/" prefetch className="group flex min-w-0 items-center gap-3">
            <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center border border-foreground/20 transition-colors group-hover:border-primary"
            >
              <span className="size-2 bg-primary" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="font-mono text-sm xl:text-[0.9375rem] font-medium leading-tight text-foreground whitespace-nowrap transition-colors group-hover:text-primary">
                Dr. TMA Pai Endowment Chair
              </span>
              <span className="hidden xl:block mt-0.5 font-mono text-micro uppercase tracking-[0.14em] leading-tight text-muted-foreground whitespace-nowrap">
                ITIS · MAHE, Manipal
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex shrink-0 items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <span aria-hidden className="hidden xl:block h-5 w-px bg-border" />
            <div className="-mx-2 flex items-center">
              <ThemeToggle />
            </div>
            <Link
              href="/apply"
              prefetch
              className="group inline-flex h-8 items-center gap-2 border border-primary/50 px-3 font-mono text-micro uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Apply
              <ArrowRight01Icon
                strokeWidth={2}
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <MobileNav links={navLinks} />
          </div>
        </nav>
      </div>
      <div className="section-rule nav-rule" aria-hidden>
        <div className="rule-marks">
          <span className="rule-mark left-0" />
          <span className="rule-mark" />
        </div>
      </div>
    </header>
  );
}
