import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CpuIcon,
  HardDriveIcon,
  ChipIcon,
  Activity01Icon,
  ComputerIcon,
  Rocket01Icon,
  ArrowRight01Icon,
  FlashIcon,
  CloudIcon,
} from "@hugeicons/core-free-icons";

export const metadata = {
  title: "Computational Resources | Dr. TMA Pai Endowment Chair",
  description: "State-of-the-art computational infrastructure featuring high-performance workstations for AI, machine learning, and advanced research.",
};

const workstations = [
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
  cores: 1 * 96 + 3 * 12 + 3 * 20,
  threads: 1 * 192 + 3 * 24 + 3 * 28,
  memory: 1 * 256 + 3 * 64 + 3 * 32,
  gpuMemory: 1 * 48 + 3 * 12 + 3 * 12,
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
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 dark:bg-primary/10" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Infrastructure
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 leading-[1.1] tracking-tight text-foreground">
              High-Performance{" "}
              <span className="text-primary">Computing Lab</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Access state-of-the-art computational resources featuring AMD Threadripper Pro
              processors and professional-grade NVIDIA GPUs for cutting-edge research.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                { value: totalSpecs.cores, label: "CPU Cores", icon: CpuIcon },
                { value: totalSpecs.threads, label: "Threads", icon: Activity01Icon },
                { value: `${totalSpecs.gpuMemory}GB`, label: "GPU Memory", icon: ChipIcon },
                { value: `${totalSpecs.memory}GB`, label: "System RAM", icon: HardDriveIcon },
              ].map((stat, index) => (
                <div key={index} className="text-center py-6 px-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 mb-2 bg-primary/10 text-primary">
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
                  className="group border border-border bg-card dark:bg-transparent hover:border-primary/50 transition-colors"
                >
                  <div className="p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary text-sm font-medium">
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
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">CPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.cpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.cpuSpecs}</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">GPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.gpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.gpuSpecs}</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Memory</p>
                        <p className="text-xs font-medium text-foreground">{ws.memory}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">ECC RDIMM</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Storage</p>
                        <p className="text-xs font-medium text-foreground">{ws.storage}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">PCIe 4.0/5.0</p>
                      </div>
                    </div>
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
