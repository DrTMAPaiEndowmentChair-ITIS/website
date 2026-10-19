"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight01Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type NavItem = { href: string; label: string; external?: boolean };

/**
 * A drawing-sheet tab: mono label, with a lit square marking the page you are
 * on. Hash links into the home page never count as the current page.
 */
export function NavLink({ href, label, external, className }: NavItem & { className?: string }) {
  const pathname = usePathname();
  const current = !external && !href.includes("#") && pathname.startsWith(href);
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      prefetch={!external}
      aria-current={current ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center gap-2 whitespace-nowrap font-mono text-micro uppercase tracking-[0.08em] xl:tracking-[0.14em] transition-colors",
        current ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "size-1.5 transition-colors",
          current
            ? "bg-primary"
            : "bg-transparent ring-1 ring-inset ring-current opacity-40 group-hover:opacity-100"
        )}
      />
      {label}
      {external ? (
        <ArrowUpRight01Icon
          strokeWidth={2}
          className="size-3 -ml-1 opacity-50 group-hover:opacity-100 transition-opacity"
        />
      ) : null}
    </Link>
  );
}
