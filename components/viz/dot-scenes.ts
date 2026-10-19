/**
 * Procedural scenes for the dot-matrix display. Each scene maps a cell to a
 * brightness: 0 = off, 0.5 = dim (hollow ring), 1 = lit. Coordinates are
 * aspect-correct: y runs -1..1 top to bottom, x runs -aspect..aspect, so a
 * circle of radius 0.8 fits the interior height whatever the canvas shape.
 */
export type Cell = {
  x: number;
  y: number;
  c: number;
  r: number;
  cols: number;
  rows: number;
  /** Interior width / height, for scenes that want to use the full width. */
  aspect: number;
  t: number;
};

export type Scene = (cell: Cell) => number;

const LIT = 1;
const DIM = 0.5;

function segmentDistance(px: number, py: number, ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax;
  const dy = by - ay;
  const k = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + k * dx), py - (ay + k * dy));
}

const chip: Scene = ({ x, y, t }) => {
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  // Package outline and die.
  if (Math.max(ax, ay) < 0.5 && Math.max(ax, ay) > 0.4) return LIT;
  if (ax < 0.2 && ay < 0.2)
    return (Math.floor(t * 3) + Math.round((x + y) * 10)) % 3 === 0 ? LIT : DIM;
  // Pins: four per side, a pulse chasing round them.
  const pins = [-0.3, -0.1, 0.1, 0.3];
  const lane = (v: number) => pins.findIndex((p) => Math.abs(v - p) < 0.055);
  const chase = Math.floor(t * 5) % 16;
  if (ay < 0.4 && ax > 0.55 && ax < 0.85) {
    const i = lane(y);
    if (i >= 0) return (x > 0 ? i : 15 - i) === chase ? LIT : DIM;
  }
  if (ax < 0.4 && ay > 0.55 && ay < 0.85) {
    const i = lane(x);
    if (i >= 0) return (y > 0 ? 4 + i : 11 - i) === chase ? LIT : DIM;
  }
  return 0;
};

const gear: Scene = ({ x, y, t }) => {
  const r = Math.hypot(x, y);
  const theta = Math.atan2(y, x) - t * 0.5;
  const tooth = Math.cos(theta * 8) > 0.25;
  if (r < 0.17) return DIM;
  if (r > 0.3 && r < 0.6) return LIT;
  if (r >= 0.6 && r < 0.82 && tooth) return LIT;
  // Spokes across the hub gap.
  if (r >= 0.17 && r <= 0.3 && Math.abs(Math.sin(theta * 3)) < 0.22) return DIM;
  return 0;
};

const leaf: Scene = ({ x, y, t }) => {
  // Rotate 40° and sway gently.
  const a = -0.7 + Math.sin(t * 0.8) * 0.06;
  const u = x * Math.cos(a) - y * Math.sin(a);
  const v = x * Math.sin(a) + y * Math.cos(a);
  // Vesica: inside two offset circles.
  const R = 0.95;
  const d = 0.5;
  const inside = Math.hypot(u, v - d) < R && Math.hypot(u, v + d) < R;
  if (inside) {
    if (Math.abs(v) < 0.05) return DIM; // midrib
    // Veins every 0.22 along the blade.
    const vein = Math.abs(((u - Math.abs(v) * 0.9) % 0.24) + 0.24) % 0.24;
    if (vein < 0.045) return DIM;
    return LIT;
  }
  // Stem off the lower tip.
  if (u < -0.75 && u > -1.15 && Math.abs(v + (u + 0.75) * 0.25) < 0.05) return LIT;
  return 0;
};

const NODES: [number, number][] = [
  [-0.95, -0.45],
  [-0.35, -0.7],
  [-0.45, 0.35],
  [0.25, -0.1],
  [0.95, -0.55],
  [0.8, 0.55],
  [0.05, 0.75],
];
const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [2, 6],
  [6, 5],
  [1, 4],
];

const network: Scene = ({ x: rawX, y, t, aspect }) => {
  // Spread the graph across wide canvases.
  const x = rawX / Math.max(1, Math.min(aspect, 2) * 0.85);
  for (let i = 0; i < NODES.length; i++) {
    const [nx, ny] = NODES[i];
    const d = Math.hypot(x - nx, y - ny);
    if (d < 0.11) return LIT;
    if (d < 0.19) return DIM;
  }
  for (let e = 0; e < EDGES.length; e++) {
    const [ax, ay] = NODES[EDGES[e][0]];
    const [bx, by] = NODES[EDGES[e][1]];
    // A packet travelling along each edge.
    const k = (t * 0.45 + e * 0.37) % 1;
    if (Math.hypot(x - (ax + (bx - ax) * k), y - (ay + (by - ay) * k)) < 0.08) return LIT;
    if (segmentDistance(x, y, ax, ay, bx, by) < 0.035) return DIM;
  }
  return 0;
};

const bars: Scene = ({ x, y, t }) => {
  const n = 7;
  const span = 1.9;
  const w = span / n;
  const i = Math.floor((x + span / 2) / w);
  if (y > 0.82 && y < 0.92 && Math.abs(x) < span / 2) return DIM; // baseline
  if (i < 0 || i >= n) return 0;
  const local = (x + span / 2) / w - i;
  if (local < 0.18 || local > 0.82) return 0;
  const h = 0.35 + (i / (n - 1)) * 0.95 + Math.sin(t * 1.6 + i * 0.9) * 0.12;
  const top = 0.8 - h;
  if (y > top && y < 0.8) return y < top + 0.12 ? LIT : DIM + 0.2;
  return 0;
};

const wave: Scene = ({ x, y, t }) => {
  const env = Math.cos((x / 1.2) * (Math.PI / 2));
  const s1 = Math.sin(x * 2.6 - t * 2.2) * 0.55 * env;
  const s2 = Math.sin(x * 5.2 - t * 3.1 + 1) * 0.25 * env;
  if (Math.abs(y - s1) < 0.085) return LIT;
  if (Math.abs(y - s2) < 0.05) return DIM;
  if (Math.abs(y) < 0.025) return DIM;
  return 0;
};

const globe: Scene = ({ x, y, t }) => {
  const R = 0.82;
  const r = Math.hypot(x, y);
  if (Math.abs(r - R) < 0.06) return LIT;
  if (r > R) return 0;
  const half = Math.sqrt(Math.max(0, 1 - (y * y) / (R * R)));
  for (let k = 0; k < 4; k++) {
    const phase = t * 0.5 + (k * Math.PI) / 4;
    const mx = R * Math.sin(phase) * half;
    if (Math.cos(phase) > 0 && Math.abs(x - mx) < 0.045) return LIT;
  }
  for (const lat of [-0.45, 0, 0.45]) if (Math.abs(y - lat) < 0.03) return DIM;
  return 0;
};

const shield: Scene = ({ x, y, t }) => {
  const ax = Math.abs(x);
  // Flat top, straight sides, tapering to a point.
  const half = y < 0.05 ? 0.62 : 0.62 * (1 - (y - 0.05) / 0.8);
  const inside = y > -0.78 && y < 0.85 && ax < half;
  if (!inside) return 0;
  const edge = y < -0.66 || ax > half - 0.12;
  if (edge) return LIT;
  // Check mark, drawn on with time.
  const p = Math.min(1, (t % 4) / 1.2);
  const d1 = segmentDistance(x, y, -0.28, 0.02, -0.06, 0.26);
  const d2 = segmentDistance(x, y, -0.06, 0.26, 0.32, -0.24);
  if (d1 < 0.07 && x < -0.28 + 0.6 * p) return LIT;
  if (d2 < 0.07 && x < -0.28 + 0.6 * p) return LIT;
  return DIM * 0.6;
};

/* 5×7 glyphs for numeric read-outs. */
const GLYPHS: Record<string, string[]> = {
  "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
  "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  "5": ["11111", "10000", "11110", "00001", "00001", "10001", "01110"],
  "6": ["00110", "01000", "10000", "11110", "10001", "10001", "01110"],
  "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
  "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  "9": ["01110", "10001", "10001", "01111", "00001", "00010", "01100"],
  ".": ["00000", "00000", "00000", "00000", "00000", "01100", "01100"],
  "+": ["00000", "00100", "00100", "11111", "00100", "00100", "00000"],
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  G: ["01110", "10001", "10000", "10111", "10001", "10001", "01111"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
};

/** Centre a short string on the cell grid at the largest integer scale. */
export function textScene(text: string): Scene {
  const chars = [...text.toUpperCase()].map((ch) => GLYPHS[ch] ?? GLYPHS[" "]);
  const w = chars.length * 6 - 1;
  return ({ c, r, cols, rows, t }) => {
    const scale = Math.max(1, Math.floor(Math.min(cols / (w + 2), rows / 9)));
    const ox = Math.floor((cols - w * scale) / 2);
    const oy = Math.floor((rows - 7 * scale) / 2);
    const gx = Math.floor((c - ox) / scale);
    const gy = Math.floor((r - oy) / scale);
    if (gx < 0 || gy < 0 || gy >= 7 || gx >= w) return 0;
    const glyph = chars[Math.floor(gx / 6)];
    const col = gx % 6;
    if (col === 5) return 0;
    if (glyph[gy][col] !== "1") return 0;
    // A slow scanline sweeps the read-out.
    const scan = Math.floor((t * 6) % (rows + 6));
    return Math.abs(r - scan) < scale ? DIM : LIT;
  };
}

export const SCENES = { chip, gear, leaf, network, bars, wave, globe, shield } as const;
export type SceneName = keyof typeof SCENES;
