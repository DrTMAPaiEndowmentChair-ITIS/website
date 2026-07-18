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
      <section className="surface-grid relative overflow-hidden border-b border-border pt-32 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full border border-primary/20 shadow-[0_0_120px_30px_color-mix(in_oklab,var(--primary)_12%,transparent)]" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow animate-in-up mb-5">
              Infrastructure
            </p>
            <h1 className="animate-in-up animation-delay-1 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              High-Performance{" "}
              <em className="font-normal text-primary">Computing Lab</em>
            </h1>
            <p className="animate-in-up animation-delay-2 mx-auto mt-7 mb-9 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Access state-of-the-art computational resources featuring Apple M3 Ultra,
              AMD Threadripper Pro processors, and professional-grade NVIDIA GPUs.
            </p>
            <div className="animate-in-up animation-delay-3 flex flex-col sm:flex-row gap-3 justify-center">
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
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {[
                { value: totalSpecs.systems, label: "Workstations", icon: ComputerIcon },
                { value: totalSpecs.cores, label: "CPU Cores", icon: CpuIcon },
                { value: "2.53TB", label: "Total Memory", icon: HardDriveIcon },
                { value: "2TB + 120GB", label: "Unified + VRAM", icon: ChipIcon },
              ].map((stat, index) => (
                <div key={index} className="text-center py-6 px-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 mb-2 rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="size-4" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Hardware
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Computing Resources
              </h2>
            </div>

            <div className="space-y-4">
              {workstations.map((ws) => (
                <div
                  key={ws.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                          {ws.quantity}x
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-base font-medium text-foreground">{ws.name}</h3>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{ws.tier}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="rounded-xl bg-muted/60 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">CPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.cpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.cpuSpecs}</p>
                      </div>
                      <div className="rounded-xl bg-muted/60 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">GPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.gpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.gpuSpecs}</p>
                      </div>
                      <div className="rounded-xl bg-muted/60 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Memory</p>
                        <p className="text-xs font-medium text-foreground">{ws.memory}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {ws.id === "mac-studio-m3-ultra" ? "Unified architecture" : "ECC RDIMM"}
                        </p>
                      </div>
                      <div className="rounded-xl bg-muted/60 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Storage</p>
                        <p className="text-xs font-medium text-foreground">{ws.storage}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {ws.id === "mac-studio-m3-ultra" ? "Internal SSD" : "PCIe 4.0/5.0"}
                        </p>
                      </div>
                    </div>
                    {ws.source && (
                      <a
                        href={ws.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        Configuration verified with Apple
                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3 -rotate-45" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Applications
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Research Capabilities
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {capabilities.map((cap, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-colors dark:bg-transparent">
                  <CardContent>
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <HugeiconsIcon icon={cap.icon} strokeWidth={2} className="size-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-foreground mb-2 tracking-tight">{cap.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={Rocket01Icon} strokeWidth={2} className="size-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-foreground tracking-tight">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Apply for access to our computational resources and start your research project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
