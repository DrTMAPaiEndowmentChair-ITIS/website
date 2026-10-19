import Link from "next/link";
import type { ProjectFrontmatter } from "@/src/lib/projects";
import { Bezel, FigCaption } from "@/components/ui/section";
import { monthYear, pct, toYear, yearsLabel } from "./scale";

const DOMAIN_MIN = 1996;
const TICKS = [2000, 2005, 2010, 2015, 2020, 2025];

/** Collapse sponsor strings like "Schneider Electric, BGRT, Bengaluru" to a short name. */
export function shortPartner(name: string) {
  const known: [RegExp, string][] = [
    [/schneider/i, "Schneider Electric"],
    [/\bIBM\b/, "IBM"],
    [/TE Connectivity/i, "TE Connectivity"],
    [/BIRAC/, "BIRAC"],
    [/AICTE/, "AICTE"],
    [/NSTEDB/, "NSTEDB · DST"],
    [/\bTDB\b/, "TDB · DST"],
    [/\bDST\b/, "DST"],
  ];
  if (!name.trim()) return "MIT, MAHE";
  return known.find(([re]) => re.test(name))?.[1] ?? name.split(",")[0];
}

function shortTitle(title: string) {
  // Drop long parenthetical subtitles but keep short qualifiers like "(TDB)".
  return title.replace(/\s*\(([^)]{11,})\)\s*/g, " ").trim();
}

/**
 * Range chart of every project the chair has run, one row per project from
 * start to completion. Live projects run to today in the accent; completed
 * ones sit in a neutral so the eye lands on what is active now.
 */
export function ResearchTimeline({
  projects,
  fig = "01",
}: {
  projects: ProjectFrontmatter[];
  fig?: string;
}) {
  const now = new Date();
  const nowYear = toYear(now);
  const domainMax = Math.ceil(nowYear) + 1;

  const rows = projects
    .map((p) => {
      const active = p.status === "current" || !p.completionDate;
      const start = toYear(p.date);
      const end = active ? nowYear : toYear(p.completionDate as string);
      return {
        slug: p.slug,
        title: shortTitle(p.title),
        partner: shortPartner(p.companyName ?? ""),
        active,
        start,
        end: Math.max(end, start + 0.08),
        startLabel: monthYear(p.date),
        endLabel: active ? "Present" : monthYear(p.completionDate as string),
        years: Math.max(0, end - start),
      };
    })
    .sort((a, b) => a.start - b.start || a.end - b.end);

  const activeCount = rows.filter((r) => r.active).length;
  const first = Math.floor(Math.min(...rows.map((r) => r.start)));
  const span = Math.floor(nowYear) - first;
  const longest = rows.reduce((a, b) => (b.years > a.years ? b : a));

  const stats = [
    { value: rows.length, label: "Projects charted" },
    { value: first, label: "First sponsored project" },
    { value: `${span} yrs`, label: "Of continuous research" },
    { value: activeCount, label: "Active now" },
  ];

  return (
    <figure className="reveal">
      <Bezel panelClassName="p-4 sm:p-6 lg:p-8">
        <FigCaption
          fig={fig}
          title="Project timeline, 1996 – present"
          note={`Longest: ${longest.title} (${yearsLabel(longest.years)})`}
          className="mb-6"
        />

        <dl className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-border mb-8">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-3 border-r border-b border-border">
              <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </dt>
              <dd className="font-mono text-xl sm:text-2xl font-medium text-foreground mt-1">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 text-label text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-4 bg-[var(--viz-accent)]" aria-hidden />
            Active
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-4 bg-[var(--viz-muted)]" aria-hidden />
            Completed
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-px bg-primary" aria-hidden />
            Today
          </span>
        </div>

        <div className="relative">
          {/* Year axis, aligned with the track column */}
          <div className="md:grid md:grid-cols-[minmax(11rem,17rem)_1fr] md:gap-4">
            <div className="hidden md:block" />
            <div className="relative h-5 border-b border-border">
              {TICKS.map((y) => (
                <span
                  key={y}
                  className="absolute bottom-1 -translate-x-1/2 font-mono text-[10px] tabular-nums text-muted-foreground"
                  style={{ left: pct(y, DOMAIN_MIN, domainMax) }}
                >
                  {y}
                </span>
              ))}
              <span
                className="absolute bottom-1 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest text-primary max-sm:hidden"
                style={{ left: pct(nowYear, DOMAIN_MIN, domainMax) }}
              >
                Now
              </span>
            </div>
          </div>

          <ol aria-label="Research projects by start date">
            {rows.map((row) => {
              const left = pct(row.start, DOMAIN_MIN, domainMax);
              const width = `${(((row.end - row.start) / (domainMax - DOMAIN_MIN)) * 100).toFixed(3)}%`;
              const late = (row.start - DOMAIN_MIN) / (domainMax - DOMAIN_MIN) > 0.55;
              return (
                <li key={row.slug}>
                  <Link
                    href={`/research/${row.slug}`}
                    className="viz-mark group/row grid md:grid-cols-[minmax(11rem,17rem)_1fr] md:gap-4 md:items-center py-1.5 md:py-0 border-b border-border/60 hover:bg-primary/[0.04] transition-colors"
                    aria-label={`${row.title}, ${row.partner}: ${row.startLabel} to ${row.endLabel}`}
                  >
                    <span className="flex min-w-0 items-baseline gap-2 md:py-1.5 pb-1">
                      <span className="truncate text-xs text-muted-foreground group-hover/row:text-foreground transition-colors">
                        {row.title}
                      </span>
                      <span className="md:hidden shrink-0 font-mono text-[9px] text-muted-foreground/70 tabular-nums">
                        {Math.floor(row.start)}–{row.active ? "now" : Math.floor(row.end)}
                      </span>
                    </span>
                    <span className="relative block h-3 md:h-7">
                      {TICKS.map((y) => (
                        <span
                          key={y}
                          className="absolute inset-y-0 w-px bg-[var(--viz-grid)]"
                          style={{ left: pct(y, DOMAIN_MIN, domainMax) }}
                          aria-hidden
                        />
                      ))}
                      <span
                        className="absolute inset-y-0 w-px bg-primary/50"
                        style={{ left: pct(nowYear, DOMAIN_MIN, domainMax) }}
                        aria-hidden
                      />
                      <span
                        className={`absolute top-1/2 -translate-y-1/2 h-2.5 md:h-3 min-w-1 transition-[filter] group-hover/row:brightness-110 ${
                          row.active
                            ? "bg-[var(--viz-accent)]"
                            : "bg-[var(--viz-muted)] group-hover/row:bg-foreground/50"
                        }`}
                        style={{ left, width }}
                      >
                        {row.active ? (
                          <span
                            className="absolute -right-1 top-1/2 -translate-y-1/2 size-1.5 bg-primary animate-pulse"
                            aria-hidden
                          />
                        ) : null}
                        <span className="viz-tip" data-align={late ? "right" : "left"}>
                          <span className="block font-mono text-xs font-medium text-foreground">
                            {row.startLabel} – {row.endLabel}
                          </span>
                          <span className="block text-muted-foreground">
                            {yearsLabel(row.years)} · {row.partner}
                          </span>
                          <span className="block mt-1 text-foreground">{row.title}</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        <details className="mt-6 group/table">
          <summary className="cursor-pointer select-none font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors">
            View as table
          </summary>
          <div className="mt-3 overflow-x-auto border border-border">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/60 dark:bg-white/5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-normal">Project</th>
                  <th className="px-3 py-2 font-normal">Partner</th>
                  <th className="px-3 py-2 font-normal">Start</th>
                  <th className="px-3 py-2 font-normal">End</th>
                  <th className="px-3 py-2 font-normal text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((row) => (
                  <tr key={row.slug}>
                    <td className="px-3 py-2 text-foreground">{row.title}</td>
                    <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">
                      {row.partner}
                    </td>
                    <td className="px-3 py-2 tabular-nums whitespace-nowrap">{row.startLabel}</td>
                    <td className="px-3 py-2 tabular-nums whitespace-nowrap">{row.endLabel}</td>
                    <td className="px-3 py-2 tabular-nums text-right whitespace-nowrap">
                      {yearsLabel(row.years)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </Bezel>
    </figure>
  );
}
