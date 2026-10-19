import { cn } from "@/lib/utils";
import { pct } from "./scale";

export type TimelineItem = {
  label: string;
  /** Full description for the tooltip and screen readers. */
  title: string;
  start: number;
  /** Omit for a point milestone; use Infinity for "to present". */
  end?: number;
  period: string;
  current?: boolean;
};

export type TimelineLane = {
  label: string;
  /** Each row is a list of non-overlapping items. */
  rows: TimelineItem[][];
};

/**
 * Swimlane timeline: one lane per strand of a career, spans for tenures and
 * diamonds for milestones. Labels sit inside the spans in ink; current
 * tenures take the accent edge, past ones a neutral edge.
 */
export function CareerTimeline({
  lanes,
  from,
  to,
  ticks,
  label,
}: {
  lanes: TimelineLane[];
  from: number;
  to: number;
  ticks: number[];
  label: string;
}) {
  const now = new Date();
  const nowYear = now.getUTCFullYear() + now.getUTCMonth() / 12;
  const x = (v: number) => pct(Math.min(v, nowYear), from, to);

  return (
    <div
      className="max-md:-mx-4 max-md:overflow-x-auto max-md:px-4 pb-2"
      role="group"
      aria-label={label}
    >
      <p className="md:hidden mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Swipe to scroll the timeline →
      </p>
      <div className="min-w-[760px]">
        {/* Axis */}
        <div className="grid grid-cols-[8.5rem_1fr] gap-4">
          <span />
          <div className="relative h-5 border-b border-border">
            {ticks.map((t) => (
              <span
                key={t}
                className="absolute bottom-1 -translate-x-1/2 font-mono text-[10px] tabular-nums text-muted-foreground"
                style={{ left: pct(t, from, to) }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {lanes.map((lane) => (
          <div
            key={lane.label}
            className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-border/60"
          >
            <p className="py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground self-center">
              {lane.label}
            </p>
            <div className="relative py-1.5">
              {/* Gridlines and today */}
              {ticks.map((t) => (
                <span
                  key={t}
                  aria-hidden
                  className="absolute inset-y-0 w-px bg-[var(--viz-grid)]"
                  style={{ left: pct(t, from, to) }}
                />
              ))}
              <span
                aria-hidden
                className="absolute inset-y-0 w-px bg-primary/50"
                style={{ left: pct(nowYear, from, to) }}
              />
              {lane.rows.map((row, ri) => (
                <div key={ri} className="relative h-7">
                  {row.map((item) => {
                    const late = (item.start - from) / (to - from) > 0.6;
                    if (item.end === undefined) {
                      return (
                        <button
                          type="button"
                          key={item.label}
                          aria-label={`${item.title}, ${item.period}`}
                          className="viz-mark cursor-default absolute top-1/2 -translate-y-1/2 flex w-max items-center gap-1.5 -ml-1"
                          style={{ left: x(item.start) }}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "size-2 rotate-45 ring-2 ring-[var(--background)]",
                              item.current ? "bg-primary" : "bg-foreground/60"
                            )}
                          />
                          <span className="font-mono text-[10px] text-foreground whitespace-nowrap">
                            {item.label}
                          </span>
                          <span className="viz-tip" data-align={late ? "right" : "left"}>
                            <span className="block font-mono text-xs font-medium text-foreground">
                              {item.period}
                            </span>
                            <span className="block text-muted-foreground mt-0.5">{item.title}</span>
                          </span>
                        </button>
                      );
                    }
                    const end = Math.min(item.end, nowYear);
                    return (
                      <button
                        type="button"
                        key={item.label}
                        aria-label={`${item.title}, ${item.period}`}
                        className={cn(
                          "viz-mark cursor-default absolute inset-y-0.5 flex items-center border-l-2 pl-1.5",
                          item.current
                            ? "border-primary bg-primary/15 hover:bg-primary/25"
                            : "border-[var(--viz-muted)] bg-[color-mix(in_oklab,var(--viz-muted)_30%,transparent)] hover:bg-[color-mix(in_oklab,var(--viz-muted)_50%,transparent)]",
                          "transition-colors"
                        )}
                        style={{
                          left: x(item.start),
                          width: `calc(${(((end - item.start) / (to - from)) * 100).toFixed(3)}% - 2px)`,
                        }}
                      >
                        <span className="font-mono text-[10px] text-foreground whitespace-nowrap">
                          {item.label}
                        </span>
                        <span className="viz-tip" data-align={late ? "right" : "left"}>
                          <span className="block font-mono text-xs font-medium text-foreground">
                            {item.period}
                          </span>
                          <span className="block text-muted-foreground mt-0.5">{item.title}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-label text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-4 border-l-2 border-primary bg-primary/15" aria-hidden />
            Current
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="h-3 w-4 border-l-2 border-[var(--viz-muted)] bg-[color-mix(in_oklab,var(--viz-muted)_30%,transparent)]"
              aria-hidden
            />
            Past
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rotate-45 bg-foreground/60" aria-hidden />
            Milestone
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-px bg-primary" aria-hidden />
            Today
          </span>
        </div>
      </div>
    </div>
  );
}
