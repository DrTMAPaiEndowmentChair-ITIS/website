import { cn } from "@/lib/utils";

export type UnitGroup = {
  label?: string;
  count: number;
  /** Lit dots for done, hollow rings for in progress. */
  state?: "lit" | "ring";
  /** Lay the dots out as a fixed-width block instead of wrapping freely. */
  columns?: number;
  tip?: string;
};

/**
 * One dot per item. Groups sit side by side with their label beneath, so a
 * count reads both as a quantity and as its parts — the same lit/ring
 * vocabulary as the dot-matrix figures.
 */
export function UnitChart({
  groups,
  size = "sm",
  label,
  className,
}: {
  groups: UnitGroup[];
  size?: "xs" | "sm" | "md";
  label: string;
  className?: string;
}) {
  const dot = { xs: "size-[5px]", sm: "size-2", md: "size-3" }[size];
  const gap = { xs: "gap-[3px]", sm: "gap-1", md: "gap-1.5" }[size];
  const labelled = groups.some((g) => g.label);

  return (
    <div
      role={groups.some((g) => g.tip) ? "group" : "img"}
      aria-label={label}
      className={cn("flex flex-wrap items-start gap-x-5 gap-y-3", className)}
    >
      {groups.map((g, gi) => {
        // Groups with details are focusable so the tooltip works from the keyboard.
        const Mark = g.tip ? "button" : "div";
        return (
          <Mark
            key={gi}
            type={g.tip ? "button" : undefined}
            className={cn("relative min-w-0 text-left", g.tip && "viz-mark cursor-default")}
            aria-label={g.tip ? `${g.label ?? ""} ${g.count}: ${g.tip}` : undefined}
          >
            <span
              className={cn(g.columns ? "grid" : "flex flex-wrap", gap)}
              style={
                g.columns ? { gridTemplateColumns: `repeat(${g.columns}, max-content)` } : undefined
              }
            >
              {Array.from({ length: g.count }, (_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className={cn(
                    dot,
                    "rounded-full",
                    g.state === "ring" ? "ring-1 ring-inset ring-primary" : "bg-primary"
                  )}
                />
              ))}
            </span>
            {labelled ? (
              <span className="block mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                {g.label}
                <span className="ml-1.5 text-foreground tabular-nums">{g.count}</span>
              </span>
            ) : null}
            {g.tip ? (
              <span className="viz-tip" data-align="left" aria-hidden>
                <span className="block text-foreground">{g.tip}</span>
              </span>
            ) : null}
          </Mark>
        );
      })}
    </div>
  );
}
