"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SCENES, textScene, type Scene, type SceneName } from "./dot-scenes";

export type SceneSpec = SceneName | `text:${string}`;

type DotMatrixProps = {
  /** Scenes to cycle through; `text:379` renders a 5×7 read-out. */
  scenes: SceneSpec[];
  /** Accessible description of what the figure depicts. */
  label: string;
  /** Cell pitch in CSS pixels. */
  pitch?: number;
  /** Width of the hollow-dot frame band, in cells. */
  frame?: number;
  /** How long each scene holds before morphing to the next, in ms. */
  hold?: number;
  className?: string;
};

const FPS = 20;
const MORPH_MS = 1100;
const SCROLL_IDLE_MS = 150;

function resolve(spec: SceneSpec): Scene {
  return spec.startsWith("text:") ? textScene(spec.slice(5)) : SCENES[spec as SceneName];
}

// Stable per-cell noise so the dissolve looks scattered but never flickers.
function hash(c: number, r: number) {
  const s = Math.sin(c * 127.1 + r * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/**
 * A canvas LED matrix: lit dots for the figure, hollow rings for its dimmer
 * strokes, and a two-cell frame of faint rings. Scenes are animated and
 * dissolve into one another on a diagonal wipe. Pauses offscreen and when the
 * tab is hidden; under reduced motion it draws the first scene once.
 */
export function DotMatrix({
  scenes,
  label,
  pitch = 8,
  frame = 2,
  hold = 3600,
  className,
}: DotMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneKey = scenes.join("|");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resolved = sceneKey.split("|").map((s) => resolve(s as SceneSpec));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let color = "#e8580c";
    let visible = false;
    let raf = 0;
    let last = 0;
    let clock = 0; // seconds of visible time
    let current = 0;
    let sceneStart = 0;
    let morphStart = -1;

    const readColor = () => {
      color =
        getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || color;
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      cols = Math.max(4, Math.floor(width / pitch));
      rows = Math.max(4, Math.floor(height / pitch));
    };

    // Per-cell state: 0 off, 1 dim ring, 2 lit, 3 lit and popping. Frames are
    // only rasterised when some cell changes, which is a fraction of ticks.
    let state = new Uint8Array(0);
    let prev = new Uint8Array(0);
    let rimLayer: HTMLCanvasElement | null = null;

    const geometry = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      return {
        ox: (w - cols * pitch) / 2 + pitch / 2,
        oy: (h - rows * pitch) / 2 + pitch / 2,
      };
    };

    // The frame band never changes, so paint it once per size or theme.
    const paintRim = () => {
      const layer = (rimLayer ??= document.createElement("canvas"));
      layer.width = canvas.width;
      layer.height = canvas.height;
      const lctx = layer.getContext("2d");
      if (!lctx) return;
      const { ox, oy } = geometry();
      const rRing = pitch * 0.26;
      const rim = new Path2D();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (c >= frame && r >= frame && c < cols - frame && r < rows - frame) continue;
          const px = ox + c * pitch;
          const py = oy + r * pitch;
          rim.moveTo(px + rRing, py);
          rim.arc(px, py, rRing, 0, Math.PI * 2);
        }
      }
      lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lctx.strokeStyle = color;
      lctx.lineWidth = 1;
      lctx.globalAlpha = 0.22;
      lctx.stroke(rim);
    };

    const draw = (now: number, force = false) => {
      const ic = cols - frame * 2;
      const ir = rows - frame * 2;
      const aspect = ic / ir;
      const morphing = morphStart >= 0;
      const k = morphing ? (now - morphStart) / MORPH_MS : 0;
      const next = (current + 1) % resolved.length;

      if (state.length !== ic * ir) {
        state = new Uint8Array(ic * ir);
        prev = new Uint8Array(ic * ir);
        force = true;
      }

      let changed = force;
      for (let rr = 0; rr < ir; rr++) {
        for (let cc = 0; cc < ic; cc++) {
          const cell = {
            x: (((cc + 0.5) / ic) * 2 - 1) * aspect,
            y: ((rr + 0.5) / ir) * 2 - 1,
            c: cc,
            r: rr,
            cols: ic,
            rows: ir,
            aspect,
            t: clock,
          };
          let scene = resolved[current];
          let popping = false;
          if (morphing) {
            const delay = (0.55 * (cc / ic) + 0.45 * hash(cc, rr)) * 0.75;
            if (k > delay) {
              scene = resolved[next];
              popping = k - delay < 0.12;
            }
          }
          const v = scene(cell);
          const code = v >= 0.75 ? (popping ? 3 : 2) : v > 0.2 ? 1 : 0;
          const i = rr * ic + cc;
          if (code !== prev[i]) changed = true;
          state[i] = code;
        }
      }

      if (morphing && k >= 1) {
        current = next;
        morphStart = -1;
        sceneStart = now;
      }
      if (!changed) return;
      [prev, state] = [state, prev];

      const { ox, oy } = geometry();
      const lit = new Path2D();
      const pop = new Path2D();
      const dim = new Path2D();
      const rLit = pitch * 0.32;
      const rPop = rLit * 1.35;
      const rRing = pitch * 0.26;
      for (let rr = 0; rr < ir; rr++) {
        for (let cc = 0; cc < ic; cc++) {
          const code = prev[rr * ic + cc];
          if (!code) continue;
          const px = ox + (cc + frame) * pitch;
          const py = oy + (rr + frame) * pitch;
          const radius = code === 1 ? rRing : code === 3 ? rPop : rLit;
          const target = code === 1 ? dim : code === 3 ? pop : lit;
          target.moveTo(px + radius, py);
          target.arc(px, py, radius, 0, Math.PI * 2);
        }
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (rimLayer) ctx.drawImage(rimLayer, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.7;
      ctx.stroke(dim);
      ctx.globalAlpha = 1;
      ctx.fill(lit);
      ctx.globalAlpha = 0.85;
      ctx.fill(pop);
      ctx.globalAlpha = 1;
    };

    // Give the main thread to the page while it is being scrolled; the figure
    // simply holds its frame and resumes when scrolling settles.
    let scrolledAt = 0;
    const onScroll = () => {
      scrolledAt = performance.now();
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - scrolledAt < SCROLL_IDLE_MS) return;
      if (now - last < 1000 / FPS) return;
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      clock += dt;
      if (!sceneStart) sceneStart = now;
      if (resolved.length > 1 && morphStart < 0 && now - sceneStart > hold) morphStart = now;
      draw(now);
    };

    // Hold the animation until the page has loaded and gone idle, so it never
    // competes with first paint or hydration; the first frame is drawn now.
    let ready = false;
    let idleHandle = 0;
    const begin = () => {
      ready = true;
      start();
    };
    const whenIdle = () => {
      idleHandle =
        typeof window.requestIdleCallback === "function"
          ? window.requestIdleCallback(begin, { timeout: 2000 })
          : window.setTimeout(begin, 800);
    };

    const start = () => {
      if (!ready || reduced || raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    readColor();
    resize();
    paintRim();
    draw(performance.now(), true);

    const ro = new ResizeObserver(() => {
      resize();
      paintRim();
      draw(performance.now(), true);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { rootMargin: "64px" }
    );
    io.observe(canvas);

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    const onTheme = () => {
      // The class flips synchronously before the event; read on the next frame.
      requestAnimationFrame(() => {
        readColor();
        paintRim();
        draw(performance.now(), true);
      });
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    window.addEventListener("theme-change", onTheme);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("load", whenIdle);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleHandle);
      window.clearTimeout(idleHandle);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("theme-change", onTheme);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [sceneKey, pitch, frame, hold]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={label}
      className={cn("block size-full", className)}
    />
  );
}
