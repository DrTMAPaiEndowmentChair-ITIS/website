import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ArrowUpRight01Icon } from "@/components/icons";

const navLinks = [
  { href: "/#research", label: "Research" },
  { href: "/#events", label: "Events" },
  { href: "/compute", label: "Compute" },
  { href: "/chairperson", label: "Chair Professor" },
  { href: "https://blog.ecitis.org", label: "Blog", external: true },
] as const;

export function Navbar() {
  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50 border-b border-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" prefetch className="flex flex-col py-1 max-w-[55%] sm:max-w-none group">
            <span className="font-mono text-sm sm:text-base font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
              Dr. TMA Pai Endowment Chair
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-normal leading-tight tracking-wide uppercase">
              Intelligent Technologies, Industry 4.0 & Sustainability
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                prefetch={!("external" in link && link.external)}
                className="relative px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                {link.label}
                {"external" in link && link.external ? (
                  <ArrowUpRight01Icon
                    strokeWidth={2}
                    className="size-3 opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                ) : null}
              </Link>
            ))}

            <div className="w-px h-5 bg-border mx-2" />

            <ThemeToggle />

            <Button asChild size="sm" className="ml-2">
              <Link href="/apply" prefetch>
                Apply Now
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <MobileNav links={[...navLinks]} />
          </div>
        </div>
      </div>
    </nav>
  );
}
