import type { NextConfig } from "next";

const ONE_HOUR = 60 * 60;
const ONE_YEAR = 60 * 60 * 24 * 365;
const IMMUTABLE = `public, max-age=${ONE_YEAR}, immutable`;

/**
 * Everything under these prefixes is content-addressed by the build (or simply
 * never changes without a filename change), so it can be cached forever.
 */
const IMMUTABLE_PREFIXES = ["companies", "chairperson", "events", "favicon"];
const IMMUTABLE_EXTENSIONS = ["svg", "png", "jpg", "jpeg", "webp", "avif", "woff2", "ico"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["class-variance-authority", "tailwind-merge"],

    // Deliberately left off. Inlining the stylesheet saves one same-origin
    // request on first paint, but measured here it also duplicates the CSS into
    // every RSC payload: index.rsc goes 14.6 KB -> 24.1 KB brotli, i.e. ~9.5 KB
    // added to *every* client-side navigation, for ~0 first-load byte savings.
    // A cached, shared .css file wins for a multi-page site.
    inlineCss: false,

    // Every route here is prerendered at build time and can only change on a
    // redeploy, so prefetched RSC payloads stay valid far longer than the
    // 30s/5min defaults. This makes repeat and back/forward navigation instant
    // and free instead of re-fetching the payload. An hour bounds how stale a
    // long-lived tab can get after a redeploy.
    staleTimes: {
      static: ONE_HOUR,
      dynamic: ONE_HOUR,
    },
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_YEAR,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 75 is the default for content images; 55 is for the patent/award carousel,
    // which renders scans into ~340px cells where the difference is invisible.
    qualities: [55, 75],
    // Widths that the `sizes` props in app/ actually ask for (340px carousel
    // cells, 384px portrait, 800px prose, plus the small logo lockups), so the
    // optimiser can hit them exactly instead of rounding up to the next
    // deviceSize.
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 340, 384],
  },

  headers: async () => [
    {
      source: "/:path*",
      headers: [{ key: "X-DNS-Prefetch-Control", value: "on" }],
    },
    ...IMMUTABLE_PREFIXES.map((prefix) => ({
      source: `/${prefix}/:path*`,
      headers: [{ key: "Cache-Control", value: IMMUTABLE }],
    })),
    ...IMMUTABLE_EXTENSIONS.map((ext) => ({
      source: `/:path*.${ext}`,
      headers: [{ key: "Cache-Control", value: IMMUTABLE }],
    })),
  ],
};

export default nextConfig;
