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
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex max-w-[58%] flex-col sm:max-w-none">
            <span className="text-sm font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-base">
              Dr. TMA Pai Endowment Chair
            </span>
            <span className="truncate text-[10px] leading-tight text-muted-foreground sm:text-xs">
              Intelligent Technologies, Industry 4.0 & Sustainability
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-1 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
                {link.external && (
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    strokeWidth={2}
                    className="opacity-50 transition-opacity group-hover:opacity-100"
                  />
                )}
              </Link>
            ))}

            <Separator orientation="vertical" className="mx-2 h-5" />

            <ThemeToggle />

            <Button asChild size="sm" className="ml-2">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-sm">Navigation</SheetTitle>
                </SheetHeader>
                <Separator />
                <nav className="flex flex-col gap-1 px-4">
                  <Button variant="ghost" className="justify-start" asChild>
                    <Link href="/" onClick={() => setOpen(false)}>
                      Home
                    </Link>
                  </Button>
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" className="justify-start" asChild>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                        {link.external && (
                          <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            strokeWidth={2}
                            data-icon="inline-end"
                          />
                        )}
                      </Link>
                    </Button>
                  ))}
                  <Separator />
                  <div className="pt-2">
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
