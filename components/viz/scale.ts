/** Round a positive max up to a clean axis and return evenly spaced ticks. */
export function niceTicks(max: number, target = 5) {
  if (max <= 0) return { max: 1, ticks: [0, 1] };
  const raw = max / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? 10 * mag;
  const top = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let v = 0; v <= top + step / 2; v += step) ticks.push(Number(v.toFixed(6)));
  return { max: top, ticks };
}

/** Fractional year from an ISO date string, e.g. "2016-07-01" → 2016.5. */
export function toYear(iso: string | Date) {
  const d = typeof iso === "string" ? new Date(iso) : iso;
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  const end = Date.UTC(d.getUTCFullYear() + 1, 0, 1);
  return d.getUTCFullYear() + (d.getTime() - start) / (end - start);
}

export function pct(value: number, min: number, max: number) {
  return `${(((value - min) / (max - min)) * 100).toFixed(3)}%`;
}

export function compact(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function monthYear(iso: string | Date) {
  const d = typeof iso === "string" ? new Date(iso) : iso;
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function yearsLabel(years: number) {
  if (years < 1) return `${Math.max(1, Math.round(years * 12))} mo`;
  return `${years.toFixed(1)} yrs`;
}
