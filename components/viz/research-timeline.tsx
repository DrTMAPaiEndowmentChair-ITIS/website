import Link from "next/link";
import type { ProjectFrontmatter } from "@/src/lib/projects";
import { Bezel, FigCaption } from "@/components/ui/section";
import { monthYear, pct, toYear, yearsLabel } from "./scale";

const DOMAIN_MIN = 1996;
const TICKS = [2000, 2005, 2010, 2015, 2020, 2025];
/** Minimum gap, in years, between two bars sharing a lane. */
const LANE_GAP = 0.25;

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
 * Every project the chair has run on one time axis, packed into as few lanes
 * as will hold them without overlap. Live projects take the accent, completed
 * ones a neutral; names live in the tooltip and the list view, so the figure
 * stays a compact strip instead of a row per project.
 */
export function ResearchTimeline({
  projects,
  fig = "01",
}: {
  projects: ProjectFrontmatter[];
  fig?: string;
}) {
  const nowYear = toYear(new Date());
  const domainMax = Math.ceil(nowYear) + 1;
  const x = (v: number) => pct(v, DOMAIN_MIN, domainMax);

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
        end: Math.max(end, start + 0.15),
        startLabel: monthYear(p.date),
        endLabel: active ? "Present" : monthYear(p.completionDate as string),
        years: Math.max(0, end - start),
      };
    })
    .sort((a, b) => a.start - b.start || a.end - b.end);

  // Greedy interval packing: each project takes the first lane that is free.
  const lanes: (typeof rows)[] = [];
  for (const row of rows) {
    const lane = lanes.find((l) => l[l.length - 1].end + LANE_GAP <= row.start);
    if (lane) lane.push(row);
    else lanes.push([row]);
  }

  const activeCount = rows.filter((r) => r.active).length;
  const first = Math.floor(Math.min(...rows.map((r) => r.start)));

  return (
    <figure className="reveal">
      <Bezel panelClassName="p-4 sm:p-6 lg:p-8">
        <FigCaption
          fig={fig}
          title={`${rows.length} sponsored projects since ${first}`}
          note={
            <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-3 bg-[var(--viz-accent)]" aria-hidden />
                Active · {activeCount}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-3 bg-[var(--viz-muted)]" aria-hidden />
                Completed · {rows.length - activeCount}
              </span>
            </span>
          }
          className="mb-6"
        />

        <div className="relative">
          {/* Gridlines and today, spanning every lane */}
          <div className="absolute inset-x-0 top-0 bottom-8" aria-hidden>
            {TICKS.map((y) => (
              <span
                key={y}
                className="absolute inset-y-0 w-px bg-[var(--viz-grid)]"
                style={{ left: x(y) }}
              />
            ))}
            <span className="absolute inset-y-0 w-px bg-primary/60" style={{ left: x(nowYear) }} />
          </div>

          <ul aria-label="Research projects by start date" className="relative">
            {lanes.map((lane, li) => (
              <li key={li} className="relative h-4 sm:h-5">
                <ul>
                  {lane.map((row) => {
                    const late = (row.start - DOMAIN_MIN) / (domainMax - DOMAIN_MIN) > 0.55;
                    const width = ((row.end - row.start) / (domainMax - DOMAIN_MIN)) * 100;
                    return (
                      <li key={row.slug}>
                        <Link
                          href={`/research/${row.slug}`}
                          className="viz-mark group/bar absolute inset-y-0 flex items-center"
                          style={{
                            left: x(row.start),
                            width: `max(6px, calc(${width.toFixed(3)}% - 2px))`,
                          }}
                          aria-label={`${row.title}, ${row.partner}: ${row.startLabel} to ${row.endLabel}`}
                        >
                          <span
                            className={`block h-2 sm:h-2.5 w-full transition-colors group-hover/bar:bg-foreground ${
                              row.active ? "bg-[var(--viz-accent)]" : "bg-[var(--viz-muted)]"
                            }`}
                          />
                          <span className="viz-tip" data-align={late ? "right" : "left"}>
                            <span className="block font-mono text-xs font-medium text-foreground">
                              {row.startLabel} – {row.endLabel}
                            </span>
                            <span className="block text-muted-foreground">
                              {yearsLabel(row.years)} · {row.partner}
                            </span>
                            <span className="block mt-1 text-foreground">{row.title}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>

          {/* Year axis */}
          <div className="relative h-8 mt-2 border-t border-border" aria-hidden>
            {TICKS.map((y) => (
              <span
                key={y}
                className="absolute top-2 -translate-x-1/2 font-mono text-micro tabular-nums text-muted-foreground"
                style={{ left: x(y) }}
              >
                {y}
              </span>
            ))}
            <span
              className="absolute top-2 -translate-x-1/2 font-mono text-micro uppercase tracking-widest text-primary max-sm:hidden"
              style={{ left: x(nowYear) }}
            >
              Now
            </span>
          </div>
        </div>

        <details className="mt-2">
          <summary className="cursor-pointer select-none font-mono text-micro uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors">
            List all projects
          </summary>
          <div className="mt-3 overflow-x-auto border border-border">
            <table className="w-full text-left text-caption">
              <thead className="bg-muted/60 dark:bg-white/5 font-mono text-micro uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-normal">Project</th>
                  <th className="px-3 py-2 font-normal">Partner</th>
                  <th className="px-3 py-2 font-normal">Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((row) => (
                  <tr key={row.slug}>
                    <td className="px-3 py-2">
                      <Link
                        href={`/research/${row.slug}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {row.title}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">
                      {row.partner}
                    </td>
                    <td className="px-3 py-2 tabular-nums whitespace-nowrap text-muted-foreground">
                      {row.startLabel} – {row.endLabel}
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
