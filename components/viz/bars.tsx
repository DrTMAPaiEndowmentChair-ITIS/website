import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { niceTicks } from "./scale";

function share(value: number, max: number) {
  return `${((value / max) * 100).toFixed(3)}%`;
}

function Gridlines({ ticks, max }: { ticks: number[]; max: number }) {
  return (
    <>
      {ticks.map((t) => (
        <span
          key={t}
          aria-hidden
          className={cn("absolute inset-y-0 w-px", t === 0 ? "bg-border" : "bg-[var(--viz-grid)]")}
          style={{ left: share(t, max) }}
        />
      ))}
    </>
  );
}

function Axis({
  ticks,
  max,
  format,
  unit,
}: {
  ticks: number[];
  max: number;
  format: (v: number) => string;
  unit?: string;
}) {
  return (
    <div className="relative h-5 mt-1" aria-hidden>
      {ticks.map((t, i) => (
        <span
          key={t}
          className={cn(
            "absolute top-1 font-mono text-micro tabular-nums text-muted-foreground whitespace-nowrap",
            i === 0 ? "" : i === ticks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
          )}
          style={{ left: share(t, max) }}
        >
          {format(t)}
          {i === ticks.length - 1 && unit ? ` ${unit}` : ""}
        </span>
      ))}
    </div>
  );
}

export type BarRow = {
  key: string;
  label: string;
  value: number;
  display: string;
  note?: ReactNode;
  tip?: ReactNode;
};

/**
 * Horizontal bars on one shared linear axis. Label column, track with
 * gridlines, value column; zero rows show an explicit "not supported" note
 * instead of an invisible bar.
 */
export function HBarChart({
  rows,
  unit,
  format = (v) => `${v}`,
  emptyLabel = "Not supported",
  label,
}: {
  rows: BarRow[];
  unit?: string;
  format?: (v: number) => string;
  emptyLabel?: string;
  label: string;
}) {
  const { max, ticks } = niceTicks(Math.max(...rows.map((r) => r.value)));
  return (
    <div role="group" aria-label={label}>
      <ul>
        {rows.map((row) => (
          <li
            key={row.key}
            className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3.5rem_1fr_7.5rem] gap-x-4 gap-y-1 py-3 border-b border-border/60 items-center"
          >
            <span className="font-mono text-sm font-medium text-foreground">{row.label}</span>
            <button
              type="button"
              className="viz-mark relative block w-full h-7 cursor-default group/bar"
              aria-label={`${row.label}: ${row.value > 0 ? row.display : emptyLabel}`}
            >
              <Gridlines ticks={ticks} max={max} />
              {row.value > 0 ? (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-3 bg-[var(--viz-accent)] group-hover/bar:brightness-110 transition-[filter]"
                  style={{ width: share(row.value, max) }}
                />
              ) : (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-micro uppercase tracking-widest text-muted-foreground/70">
                  {emptyLabel}
                </span>
              )}
              <span className="viz-tip" data-align={row.value / max > 0.6 ? "right" : "left"}>
                <span className="block font-mono text-xs font-medium text-foreground">
                  {row.value > 0 ? row.display : emptyLabel}
                </span>
                {row.tip ? (
                  <span className="block text-muted-foreground mt-0.5">{row.tip}</span>
                ) : null}
              </span>
            </button>
            <span className="col-start-2 sm:col-start-auto font-mono text-xs sm:text-sm text-foreground tabular-nums sm:text-right whitespace-nowrap">
              {row.value > 0 ? row.display : "—"}
            </span>
            {row.note ? (
              <span className="col-start-2 text-caption leading-relaxed text-muted-foreground">
                {row.note}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3.5rem_1fr_7.5rem] gap-x-4">
        <span />
        <Axis ticks={ticks} max={max} format={format} unit={unit} />
      </div>
    </div>
  );
}

export type SegmentRow = {
  key: string;
  label: string;
  /** One entry per unit (e.g. per machine); segments stack along the bar. */
  units: number[];
  display: string;
  sub?: string;
  tip?: ReactNode;
};

/**
 * Bars built from their parts: each segment is one unit (one machine), with
 * a 2px surface gap between them, so the bar reads both as a total and as a
 * count of contributors.
 */
export function SegmentedBarChart({
  rows,
  unit,
  format = (v) => `${v}`,
  label,
}: {
  rows: SegmentRow[];
  unit?: string;
  format?: (v: number) => string;
  label: string;
}) {
  const totals = rows.map((r) => r.units.reduce((a, b) => a + b, 0));
  const { max, ticks } = niceTicks(Math.max(...totals));
  return (
    <div role="group" aria-label={label}>
      <ul className="space-y-4">
        {rows.map((row, i) => {
          let offset = 0;
          return (
            <li key={row.key}>
              <div className="flex items-baseline justify-between gap-3 mb-1.5">
                <p className="min-w-0 text-xs text-foreground truncate">
                  {row.label}
                  {row.sub ? (
                    <span className="ml-2 font-mono text-micro text-muted-foreground">
                      {row.sub}
                    </span>
                  ) : null}
                </p>
                <p className="font-mono text-xs text-foreground tabular-nums whitespace-nowrap">
                  {row.display}
                </p>
              </div>
              <button
                type="button"
                className="viz-mark relative block w-full h-5 cursor-default group/bar"
                aria-label={`${row.label}: ${row.display}${row.sub ? `, ${row.sub}` : ""}`}
              >
                <Gridlines ticks={ticks} max={max} />
                {row.units.map((u, k) => {
                  const left = share(offset, max);
                  offset += u;
                  return (
                    <span
                      key={k}
                      className="absolute inset-y-1"
                      style={{ left, width: share(u, max) }}
                      aria-hidden
                    >
                      <span className="absolute inset-y-0 left-0 right-[2px] min-w-[2px] bg-[var(--viz-accent)] group-hover/bar:brightness-110 transition-[filter]" />
                    </span>
                  );
                })}
                <span className="viz-tip" data-align={totals[i] / max > 0.6 ? "right" : "left"}>
                  <span className="block font-mono text-xs font-medium text-foreground">
                    {row.display}
                  </span>
                  {row.tip ? (
                    <span className="block text-muted-foreground mt-0.5">{row.tip}</span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <Axis ticks={ticks} max={max} format={format} unit={unit} />
    </div>
  );
}

/** Thin fill-on-track meter with a label and read-out. */
export function Meter({
  label,
  value,
  max,
  display,
}: {
  label: string;
  value: number;
  max: number;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="font-mono text-micro uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="font-mono text-micro tabular-nums text-foreground">{display}</span>
      </div>
      <div
        className="h-1 bg-[var(--viz-track)]"
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={display}
      >
        <div className="h-full bg-[var(--viz-accent)]" style={{ width: share(value, max) }} />
      </div>
    </div>
  );
}
