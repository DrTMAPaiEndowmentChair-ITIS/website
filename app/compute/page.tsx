import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CpuIcon,
  HardDriveIcon,
  ChipIcon,
  Activity01Icon,
  ComputerIcon,
  Rocket01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

export const metadata = {
  title: "Computational Resources | Dr. TMA Pai Endowment Chair",
  description: "State-of-the-art computational infrastructure featuring high-performance workstations for AI, machine learning, and advanced research.",
};

const workstations = [
  {
    id: "mac-studio-m3-ultra",
    name: "Apple Mac Studio",
    quantity: 4,
    tier: "AI / Unified Memory",
    cpu: "Apple M3 Ultra",
    cpuSpecs: "32-core CPU · 819GB/s",
    gpu: "80-core Apple GPU",
    gpuSpecs: "32-core Neural Engine",
    memory: "512GB unified memory",
    storage: "4TB SSD",
    source: "https://www.apple.com/in/shop/buy-mac/mac-studio/m3-ultra-chip-32-core-cpu-80-core-gpu-512gb-memory-4tb-storage",
  },
  {
    id: "lenovo-p8",
    name: "Lenovo ThinkStation P8",
    quantity: 1,
    tier: "Flagship",
    cpu: "AMD Threadripper Pro 7995WX",
    cpuSpecs: "96 cores / 192 threads",
    gpu: "NVIDIA RTX A6000",
    gpuSpecs: "48GB GDDR6",
    memory: "256GB DDR5",
    storage: "1TB NVMe + 4TB HDD",
  },
  {
    id: "hp-z6",
    name: "HP Z6 G5 A",
    quantity: 3,
    tier: "High-Performance",
    cpu: "AMD Threadripper Pro 7945WX",
    cpuSpecs: "12 cores / 24 threads",
    gpu: "NVIDIA RTX 3080 Ti",
    gpuSpecs: "12GB GDDR6X",
    memory: "64GB DDR5",
    storage: "1TB NVMe SSD",
  },
  {
    id: "hp-z2",
    name: "HP Z2 G9 Tower",
    quantity: 3,
    tier: "Development",
    cpu: "Intel Core i7-14700",
    cpuSpecs: "20 cores / 28 threads",
    gpu: "NVIDIA RTX 4070 Super",
    gpuSpecs: "12GB GDDR6X",
    memory: "32GB DDR5",
    storage: "2TB NVMe SSD",
  },
];

const totalSpecs = {
  systems: 4 + 1 + 3 + 3,
  cores: 4 * 32 + 1 * 96 + 3 * 12 + 3 * 20,
  memory: 4 * 512 + 1 * 256 + 3 * 64 + 3 * 32,
};

const fleetStats = [
  { value: totalSpecs.systems, label: "Workstations", note: "Four hardware tiers", icon: ComputerIcon },
  { value: totalSpecs.cores, label: "CPU cores", note: "Across the complete fleet", icon: CpuIcon },
  { value: "2.53TB", label: "System memory", note: "Unified and DDR5", icon: HardDriveIcon },
  { value: "30TB", label: "Local storage", note: "High-speed working capacity", icon: ChipIcon },
];

const capabilities = [
  {
    icon: ChipIcon,
    title: "AI & Machine Learning",
    description: "Train complex neural networks and deploy production-scale deep learning models.",
  },
  {
    icon: Activity01Icon,
    title: "Scientific Computing",
    description: "Execute large-scale simulations and computational modeling.",
  },
  {
    icon: ComputerIcon,
    title: "3D Visualization",
    description: "Create photorealistic renderings and complex visualizations.",
  },
];

export default function ComputePage() {
  return (
    <div className="compute-page min-h-screen">
      {/* Hero Section */}
      <section className="compute-hero relative overflow-hidden border-b border-border bg-background pb-16 pt-32 text-foreground lg:pb-20 lg:pt-40">
        <div className="compute-hero-grid absolute inset-0 opacity-45" />
        <div className="absolute left-1/2 top-24 size-[38rem] -translate-x-1/2 rounded-full border border-primary/20 shadow-[0_0_160px_40px_color-mix(in_oklab,var(--primary)_12%,transparent)]" />
        <div className="absolute left-1/2 top-40 size-[26rem] -translate-x-1/2 rounded-full border border-foreground/8" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="animate-in-up mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
                Advanced Research Infrastructure
              </div>
              <h1 className="animate-in-up animation-delay-1 text-5xl font-normal leading-[0.96] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[5rem]">
                Compute without{" "}
                <em className="font-normal text-primary">compromise.</em>
              </h1>
              <p className="animate-in-up animation-delay-2 mx-auto mb-9 mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                One research fleet spanning extreme unified memory, professional GPU
                acceleration, and workstation-class parallel processing.
              </p>
              <div className="animate-in-up animation-delay-3 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Request Access
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/#research">View Projects</Link>
                </Button>
              </div>
            </div>

            <div className="animate-in-up animation-delay-3 mt-14 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground shadow-2xl shadow-foreground/15">
              <div className="flex items-center justify-between border-b border-background/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-background/45">
                    Fleet architecture
                  </p>
                </div>
                <p className="font-mono text-[9px] text-background/35">HETEROGENEOUS / LOCAL</p>
              </div>
              <div className="grid gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
                {workstations.map((ws, index) => (
                  <div key={ws.id} className="group relative bg-foreground/95 p-5">
                    <div className="mb-8 flex items-start justify-between">
                      <span className="font-mono text-[9px] text-background/30">NODE {String(index + 1).padStart(2, "0")}</span>
                      <span className="rounded-full border border-background/10 px-2 py-1 font-mono text-[9px] text-background/45">
                        {ws.quantity}×
                      </span>
                    </div>
                    <p className="text-sm font-medium text-background">{ws.name}</p>
                    <p className="mt-1 text-[10px] text-background/40">{ws.cpu}</p>
                    <div className="mt-5 flex gap-1" aria-hidden="true">
                      {Array.from({ length: ws.quantity }).map((_, nodeIndex) => (
                        <span
                          key={nodeIndex}
                          className="h-1 flex-1 rounded-full bg-primary/75 transition-transform duration-200 [transition-timing-function:var(--motion-ease-out)] group-hover:scale-y-150"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card/90 backdrop-blur-sm dark:bg-card/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {fleetStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative border-border px-4 py-7 even:border-l lg:border-l lg:px-7 lg:py-8"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-muted-foreground/55">0{index + 1}</span>
                    <div className="flex size-8 items-center justify-center rounded-full border border-border bg-background text-primary transition-[transform,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] group-hover:rotate-6 group-hover:border-primary/35">
                      <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="size-3.5" />
                    </div>
                  </div>
                  <p className="display-serif text-3xl tracking-tight text-foreground sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground">{stat.label}</p>
                  <p className="mt-1 hidden text-[10px] text-muted-foreground sm:block">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workstations Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow mb-3">Hardware / 04 tiers</p>
                <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  The research fleet
                </h2>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                Purpose-built systems for large-model inference, simulation,
                visualization, and day-to-day accelerated development.
              </p>
            </div>

            <div className="space-y-5">
              {workstations.map((ws, index) => {
                const isFeatured = ws.id === "mac-studio-m3-ultra";

                return (
                  <article
                    key={ws.id}
                    className={`interactive-card group relative overflow-hidden rounded-2xl border transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] ${
                      isFeatured
                        ? "border-primary/25 bg-foreground text-background shadow-2xl shadow-foreground/10"
                        : "border-border bg-card/80 shadow-sm backdrop-blur-sm"
                    }`}
                  >
                    {isFeatured && (
                      <>
                        <div className="compute-card-grid absolute inset-0 opacity-25" />
                        <div className="absolute -right-20 -top-24 size-72 rounded-full border border-primary/25 shadow-[0_0_100px_20px_color-mix(in_oklab,var(--primary)_10%,transparent)]" />
                      </>
                    )}
                    <div className="relative p-5 sm:p-7">
                      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                        <div className="flex items-center gap-4">
                          <span className={`flex size-12 items-center justify-center rounded-full border font-mono text-xs font-semibold ${
                            isFeatured
                              ? "border-primary/35 bg-primary/10 text-primary"
                              : "border-border bg-muted/65 text-primary"
                          }`}>
                            {ws.quantity}×
                          </span>
                          <div>
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              <h3 className={`text-base font-medium sm:text-lg ${isFeatured ? "text-background" : "text-foreground"}`}>
                                {ws.name}
                              </h3>
                              {isFeatured && (
                                <span className="rounded-full bg-primary px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                                  Featured cluster
                                </span>
                              )}
                            </div>
                            <p className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${isFeatured ? "text-background/40" : "text-muted-foreground"}`}>
                              0{index + 1} / {ws.tier}
                            </p>
                          </div>
                        </div>
                        <p className={`font-mono text-[9px] ${isFeatured ? "text-background/35" : "text-muted-foreground"}`}>
                          RESEARCH NODE · {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4 ${
                        isFeatured ? "border-background/10 bg-background/10" : "border-border bg-border"
                      }`}>
                        {[
                          { label: "CPU", value: ws.cpu, detail: ws.cpuSpecs },
                          { label: "GPU", value: ws.gpu, detail: ws.gpuSpecs },
                          { label: "Memory", value: ws.memory, detail: isFeatured ? "Unified architecture" : "ECC RDIMM" },
                          { label: "Storage", value: ws.storage, detail: isFeatured ? "Internal SSD" : "PCIe 4.0/5.0" },
                        ].map((spec) => (
                          <div key={spec.label} className={`min-h-28 p-4 sm:p-5 ${isFeatured ? "bg-foreground/95" : "bg-card"}`}>
                            <p className={`mb-5 font-mono text-[8px] uppercase tracking-[0.18em] ${isFeatured ? "text-background/35" : "text-muted-foreground"}`}>
                              {spec.label}
                            </p>
                            <p className={`text-xs font-medium sm:text-sm ${isFeatured ? "text-background" : "text-foreground"}`}>
                              {spec.value}
                            </p>
                            <p className={`mt-1 text-[9px] ${isFeatured ? "text-background/40" : "text-muted-foreground"}`}>
                              {spec.detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {ws.source && (
                        <a
                          href={ws.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium text-background/45 transition-colors hover:text-primary"
                        >
                          Configuration verified with Apple
                          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="motion-arrow size-3 -rotate-45" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-muted/35 py-20 dark:bg-card/25 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
              <div>
                <p className="eyebrow mb-3">Applications</p>
                <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                  Built for difficult work.
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:justify-self-end">
                From memory-intensive foundation models to parallel simulation and
                photoreal visualization, each tier has a clear role.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((cap, index) => (
                <Card key={cap.title} className="interactive-card group relative min-h-64 border-border bg-card/80 transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:bg-card/40">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-primary transition-transform duration-200 [transition-timing-function:var(--motion-ease-out)] group-hover:rotate-6">
                        <HugeiconsIcon icon={cap.icon} strokeWidth={1.7} className="size-5" />
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground/55">0{index + 1}</span>
                    </div>
                    <div className="mt-auto pt-12">
                      <h3 className="text-base font-medium tracking-tight text-foreground">{cap.title}</h3>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{cap.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="surface-grid relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center shadow-2xl shadow-foreground/5 sm:px-12 lg:py-20">
            <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
              <HugeiconsIcon icon={Rocket01Icon} strokeWidth={1.7} className="size-5" />
            </div>
            <p className="eyebrow mb-4">Access the lab</p>
            <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-5xl">
              Bring the difficult problem.
            </h2>
            <p className="mx-auto mb-8 mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Apply for access to the computational resources, technical guidance,
              and research environment needed to solve it.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/apply">
                  Request Access
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/chairperson">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
