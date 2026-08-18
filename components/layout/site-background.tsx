// Fixed ambient background shared by every page: a blueprint grid fading
// down the viewport, the warm corner gradient, and two slowly drifting
// glows. Sections above it stay transparent so the gradient runs
// uninterrupted through the whole site.
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none contain-strict"
    >
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 contain-paint">
        <div className="w-[640px] h-[640px] rounded-full bg-radial from-primary/10 via-primary/[0.04] to-transparent to-70% dark:from-primary/15 animate-float" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 contain-paint">
        <div className="w-[520px] h-[520px] rounded-full bg-radial from-primary/[0.06] to-transparent to-70% dark:from-primary/10 animate-float-delayed" />
      </div>
    </div>
  );
}
