import type * as React from "react";
import { cn } from "@/lib/utils";

/** Full-bleed hairline that crosses both page rails with a registration mark. */
export function SectionRule({ label, className }: { label?: string; className?: string }) {
  return (
    <div className={cn("section-rule", className)} aria-hidden>
      <div className="rule-marks">
        <span className="rule-mark left-0" />
        {label ? (
          <span className="absolute right-4 -top-px -translate-y-full pb-1 font-mono text-micro uppercase tracking-[0.2em] text-muted-foreground/70">
            {label}
          </span>
        ) : null}
        <span className="rule-mark" />
      </div>
    </div>
  );
}

/** A page section: opens on a rule, then pads its content inside the shell. */
export function Section({
  index,
  className,
  innerClassName,
  children,
  rule = true,
  ...props
}: React.ComponentProps<"section"> & {
  index?: string;
  innerClassName?: string;
  rule?: boolean;
}) {
  return (
    <section className={cn("relative", className)} {...props}>
      {rule ? <SectionRule label={index ? `Sec. ${index}` : undefined} /> : null}
      <div className={cn("shell py-16 sm:py-20 lg:py-28", innerClassName)}>{children}</div>
    </section>
  );
}

export function Kicker({
  index,
  label,
  className,
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-kicker uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2",
        className
      )}
    >
      {index ? (
        <>
          <span className="text-muted-foreground tabular-nums">{index}</span>
          <span className="h-px w-5 bg-border" aria-hidden />
        </>
      ) : null}
      {label}
    </p>
  );
}

/** Kicker, section title, and optional lede, left- or centre-aligned. */
export function SectionHeader({
  index,
  label,
  title,
  lede,
  align = "left",
  action,
  className,
  as: Heading = "h2",
}: {
  index?: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14 reveal",
        action ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" : null,
        centered && "text-center",
        className
      )}
    >
      <div className={cn(centered && "mx-auto max-w-2xl")}>
        <Kicker index={index} label={label} className={cn(centered && "justify-center")} />
        <Heading
          className={cn(
            "font-medium text-foreground text-balance",
            Heading === "h1" ? "text-display" : "text-title"
          )}
        >
          {title}
        </Heading>
        {lede ? (
          <p
            className={cn(
              "text-body text-muted-foreground mt-4 text-pretty",
              centered ? "mx-auto max-w-xl" : "max-w-xl"
            )}
          >
            {lede}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/** Tinted outer frame + hairline inner panel. */
export function Bezel({
  className,
  panelClassName,
  hover = false,
  children,
  ...props
}: React.ComponentProps<"div"> & { panelClassName?: string; hover?: boolean }) {
  return (
    <div className={cn("bezel", hover && "bezel-hover", className)} {...props}>
      <div className={cn("bezel-panel", panelClassName)}>{children}</div>
    </div>
  );
}

/** Technical-drawing caption: "FIG. 02 — Title" with an optional note. */
export function FigCaption({
  fig,
  title,
  note,
  className,
}: {
  fig: string;
  title: React.ReactNode;
  note?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1", className)}>
      <p className="font-mono text-label uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-primary">Fig. {fig}</span>
        <span className="mx-2 text-border">—</span>
        <span className="text-foreground">{title}</span>
      </p>
      {note ? <p className="text-label text-muted-foreground">{note}</p> : null}
    </div>
  );
}
