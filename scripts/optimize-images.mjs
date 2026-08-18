/**
 * One-shot source-image optimiser.
 *
 * Every raster under public/ was committed straight from the camera/scanner:
 * 2000px+ originals rendered into boxes a few hundred CSS pixels wide. next/image
 * re-encodes on request, but oversized sources still bloat the repo and make the
 * first (uncached) optimisation of each variant slow, so we normalise the sources
 * to the largest size any layout actually asks for.
 *
 * Widths below are 2x the largest CSS box each image is rendered into (see the
 * `sizes` props in app/), which is all a retina display can resolve.
 *
 * Run with: bun scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, unlink, writeFile } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";

/** @type {{match: RegExp, width: number, encode: (p: sharp.Sharp) => sharp.Sharp, ext: string}[]} */
const RULES = [
  {
    // Hero line art: text and flat colour, so keep it lossless-ish — it is the
    // homepage LCP and gets re-encoded to AVIF on the way out.
    match: /^public\/hero-image\./,
    width: 1100,
    ext: ".png",
    encode: (p) => p.png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }),
  },
  {
    // Patent scans and award photos: mixed text + photography, so no chroma
    // subsampling (keeps small type legible).
    match: /^public\/chairperson\/patents\//,
    width: 1000,
    ext: ".jpg",
    encode: (p) => p.jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" }),
  },
  {
    match: /^public\/chairperson\/image\./,
    width: 1000,
    ext: ".jpg",
    encode: (p) => p.jpeg({ quality: 82, mozjpeg: true }),
  },
  {
    // Event photography, widest render is the 896px article hero.
    match: /^public\/events\//,
    width: 1600,
    ext: ".jpg",
    encode: (p) => p.jpeg({ quality: 80, mozjpeg: true }),
  },
  {
    // Launcher icons: fixed dimensions, just badly compressed.
    match: /^public\/favicon\/.*\.png$/,
    width: Infinity,
    ext: ".png",
    encode: (p) => p.png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }),
  },
  {
    match: /^public\/companies\/.*\.png$/,
    width: 400,
    ext: ".png",
    encode: (p) => p.png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }),
  },
];

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) await walk(p, out);
    else if (/\.(png|jpe?g|webp|avif)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

const files = (await walk("public")).sort();
let before = 0;
let after = 0;
/** @type {[string, string][]} */
const renames = [];

for (const file of files) {
  const rule = RULES.find((r) => r.match.test(file));
  if (!rule) {
    console.log(`skip   ${file}`);
    continue;
  }

  const original = (await stat(file)).size;
  const meta = await sharp(file).metadata();

  let pipe = sharp(file).rotate(); // honour EXIF orientation before we strip it
  if (Number.isFinite(rule.width) && meta.width > rule.width) {
    pipe = pipe.resize({ width: rule.width, withoutEnlargement: true });
  }
  // Every source here is fully opaque; flattening lets the JPEG encoder work and
  // keeps PNG palettes from spending entries on a constant alpha channel.
  const buf = await rule.encode(pipe.flatten({ background: "#ffffff" })).toBuffer();

  const target = join(dirname(file), basename(file, extname(file)) + rule.ext);
  if (buf.length >= original && target === file) {
    // Already smaller than anything we would produce; leave it alone.
    console.log(`${String(Math.round(original / 1024)).padStart(6)}K   keep         ${file}`);
    before += original;
    after += original;
    continue;
  }
  await writeFile(target, buf);
  if (target !== file) {
    await unlink(file);
    renames.push([file, target]);
  }

  before += original;
  after += buf.length;
  const pct = Math.round((1 - buf.length / original) * 100);
  console.log(
    `${String(Math.round(original / 1024)).padStart(6)}K -> ${String(Math.round(buf.length / 1024)).padStart(5)}K  (-${String(pct).padStart(2)}%)  ${file}${target !== file ? ` -> ${basename(target)}` : ""}`
  );
}

console.log(
  `\ntotal ${(before / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB (-${Math.round((1 - after / before) * 100)}%)`
);
if (renames.length) {
  console.log("\nrenamed (references must be updated):");
  for (const [from, to] of renames) console.log(`  ${from} -> ${to}`);
}
