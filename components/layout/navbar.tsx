"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";

const navLinks = [
  { href: "/#research", label: "Research" },
  { href: "/#events", label: "Events" },
  { href: "/compute", label: "Compute" },
  { href: "/chairperson", label: "Chair Professor" },
  { href: "https://blog.ecitis.org", label: "Blog", external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-col py-1 max-w-[55%] sm:max-w-none group">
            <span className="text-sm sm:text-base font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
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
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="relative px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                {link.label}
                {link.external && (
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={2}
                    className="size-3 opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </Link>
            ))}

            <div className="w-px h-5 bg-border mx-2" />

            <ThemeToggle />

            <Button asChild size="sm" className="ml-2">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-sm">Navigation</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center justify-between"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      {link.external && (
                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          strokeWidth={2}
                          className="size-3.5 opacity-50"
                        />
                      )}
                    </Link>
                  ))}
                  <Separator className="my-3" />
                  <div className="px-3">
                    <Button asChild className="w-full">
                      <Link href="/apply" onClick={() => setOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
