"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu01Icon, Cancel01Icon, ArrowUpRight01Icon } from "@/components/icons";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    if (dialog.open) dialog.close();
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        ref={triggerRef}
        variant="ghost"
        size="icon-sm"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <Menu01Icon strokeWidth={2} className="size-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      <dialog
        id={dialogId}
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-50 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 shadow-none open:flex"
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute inset-0 bg-black/20"
          onClick={() => dialogRef.current?.close()}
        />
        <div className="relative ml-auto flex h-full w-[300px] max-w-full flex-col border-l border-border bg-background bg-grid shadow-lg sm:w-[340px]">
          <div className="flex items-center justify-between px-4 pt-4">
            <h2
              id={titleId}
              className="text-left font-mono text-micro uppercase tracking-[0.2em] text-muted-foreground"
            >
              Index
            </h2>
            <Button variant="ghost" size="icon-sm" onClick={() => dialogRef.current?.close()}>
              <Cancel01Icon strokeWidth={2} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <Separator className="my-4" />
          <nav className="flex flex-col gap-1 px-2 pb-6">
            {[{ href: "/", label: "Home" }, ...links].map((link: NavLink, i) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                prefetch={!link.external}
                className="flex items-center gap-3 border-b border-border/60 px-3 py-3 font-mono text-sm uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary"
                onClick={() => dialogRef.current?.close()}
              >
                <span className="font-mono text-micro tabular-nums text-muted-foreground">
                  {String(i).padStart(2, "0")}
                </span>
                <span className="flex-1">{link.label}</span>
                {link.external ? (
                  <ArrowUpRight01Icon strokeWidth={2} className="size-3.5 opacity-50" />
                ) : null}
              </Link>
            ))}
            <div className="px-3 pt-6">
              <Link
                href="/apply"
                className="flex h-11 items-center justify-center border border-primary/50 font-mono text-sm uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                onClick={() => dialogRef.current?.close()}
              >
                Apply for research
              </Link>
            </div>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
