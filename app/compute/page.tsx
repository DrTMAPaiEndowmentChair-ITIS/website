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
  {
    value: `${(totalSpecs.memory / 1024).toFixed(2)}TB`,
    label: "System memory",
    note: "Unified and DDR5",
    icon: HardDriveIcon,
  },
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="absolute top-1/2 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Infrastructure
            </p>
            <h1 className="mb-6 text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              High-Performance{" "}
              <span className="text-primary">Computing Lab</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Access a heterogeneous research fleet with Apple unified memory,
              AMD Threadripper Pro processors, and professional NVIDIA graphics.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
              {fleetStats.map((stat) => (
                <div key={stat.label} className="px-4 py-6 text-center">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center bg-primary/10 text-primary">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="size-4" />
                  </div>
                  <div className="text-xl font-medium tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workstations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Hardware
              </p>
              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Computing Resources
              </h2>
            </div>

            <div className="space-y-4">
              {workstations.map((ws) => (
                <article
                  key={ws.id}
                  className="group border border-border bg-card transition-colors hover:border-primary/50 dark:bg-transparent"
                >
                  <div className="p-4 sm:p-6">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center bg-primary/10 text-sm font-medium text-primary">
                          {ws.quantity}x
                        </span>
                        <div>
                          <h3 className="text-sm font-medium text-foreground sm:text-base">{ws.name}</h3>
                          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{ws.tier}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                      {[
                        { label: "CPU", value: ws.cpu, detail: ws.cpuSpecs },
                        { label: "GPU", value: ws.gpu, detail: ws.gpuSpecs },
                        { label: "Memory", value: ws.memory, detail: ws.id === "mac-studio-m3-ultra" ? "Unified architecture" : "ECC RDIMM" },
                        { label: "Storage", value: ws.storage, detail: ws.id === "mac-studio-m3-ultra" ? "Internal SSD" : "PCIe 4.0/5.0" },
                      ].map((spec) => (
                        <div key={spec.label} className="bg-muted/50 p-3 dark:bg-white/5">
                          <p className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                          <p className="text-xs font-medium text-foreground">{spec.value}</p>
                          <p className="mt-0.5 text-[10px] text-muted-foreground">{spec.detail}</p>
                        </div>
                      ))}
                    </div>

                    {ws.source && (
                      <a
                        href={ws.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-[10px] text-muted-foreground transition-colors hover:text-primary"
                      >
                        View verified configuration
                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3 -rotate-45" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted/30 py-16 dark:bg-transparent lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Applications
              </p>
              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Research Capabilities
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((cap) => (
                <Card key={cap.title} className="group transition-colors hover:border-primary/50 dark:bg-transparent">
                  <CardContent>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <HugeiconsIcon icon={cap.icon} strokeWidth={2} className="size-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-sm font-medium tracking-tight text-foreground">{cap.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
              <HugeiconsIcon icon={Rocket01Icon} strokeWidth={2} className="size-6" />
            </div>
            <h2 className="mb-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Ready to Accelerate Your Research?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Apply for access to our computational resources and start your research project today.
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
