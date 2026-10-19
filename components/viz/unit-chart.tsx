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

const SIZES = {
  xs: { dot: 5, gap: 3 },
  sm: { dot: 8, gap: 4 },
  md: { dot: 12, gap: 6 },
} as const;

/**
 * A block of dots painted as one tiled background rather than one element per
 * dot, so a 156-dot chart costs a single node.
 */
function Dots({
  cols,
  rows,
  dot,
  gap,
  ring,
}: {
  cols: number;
  rows: number;
  dot: number;
  gap: number;
  ring?: boolean;
}) {
  if (!rows) return null;
  const r = dot / 2;
  const at = `circle at ${r}px ${r}px`;
  const image = ring
    ? `radial-gradient(${at}, transparent ${r - 1.6}px, var(--primary) ${r - 1}px, var(--primary) ${r - 0.6}px, transparent ${r}px)`
    : `radial-gradient(${at}, var(--primary) ${r - 0.6}px, transparent ${r}px)`;
  return (
    <span
      className="block"
      style={{
        width: cols * (dot + gap) - gap,
        height: rows * (dot + gap) - gap,
        backgroundImage: image,
        backgroundSize: `${dot + gap}px ${dot + gap}px`,
      }}
    />
  );
}

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
  const { dot, gap } = SIZES[size];
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
        const cols = Math.min(g.columns ?? g.count, g.count);
        const full = Math.floor(g.count / cols);
        const rest = g.count % cols;
        return (
          <Mark
            key={gi}
            type={g.tip ? "button" : undefined}
            className={cn("relative min-w-0 text-left", g.tip && "viz-mark cursor-default")}
            aria-label={g.tip ? `${g.label ?? ""} ${g.count}: ${g.tip}` : undefined}
          >
            <span aria-hidden className="block" style={{ display: "grid", gap }}>
              <Dots cols={cols} rows={full} dot={dot} gap={gap} ring={g.state === "ring"} />
              {rest ? (
                <Dots cols={rest} rows={1} dot={dot} gap={gap} ring={g.state === "ring"} />
              ) : null}
            </span>
            {labelled ? (
              <span className="block mt-2 font-mono text-micro uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
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
