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
    id: "lenovo-p8",
    name: "Lenovo ThinkStation P8",
    quantity: 1,
    tier: "Flagship",
    cpu: "AMD Threadripper Pro 7995WX",
    cpuSpecs: "96 cores / 192 threads",
    gpu: "NVIDIA RTX A6000",
    gpuSpecs: "48GB GDDR6",
    memory: "256GB DDR5",
    memorySpecs: "ECC RDIMM",
    storage: "1TB NVMe + 4TB HDD",
    storageSpecs: "PCIe 4.0/5.0",
    cpuCores: 96,
    cpuThreads: 192,
    memoryGB: 256,
    acceleratorMemoryGB: 48,
    fp32Tflops: 38.7,
    tf32Tflops: 77.4,
    bf16Tflops: 154.8,
    fp16Tflops: 154.8,
    fp8Tflops: 0,
    fp4Tflops: 0,
    fp32Estimated: false,
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
    memorySpecs: "ECC RDIMM",
    storage: "1TB NVMe SSD",
    storageSpecs: "PCIe 4.0/5.0",
    cpuCores: 12,
    cpuThreads: 24,
    memoryGB: 64,
    acceleratorMemoryGB: 12,
    fp32Tflops: 34.2,
    tf32Tflops: 68.4,
    bf16Tflops: 136.8,
    fp16Tflops: 136.8,
    fp8Tflops: 0,
    fp4Tflops: 0,
    fp32Estimated: false,
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
    memorySpecs: "ECC RDIMM",
    storage: "2TB NVMe SSD",
    storageSpecs: "PCIe 4.0/5.0",
    cpuCores: 20,
    cpuThreads: 28,
    memoryGB: 32,
    acceleratorMemoryGB: 12,
    fp32Tflops: 35.5,
    tf32Tflops: 71,
    bf16Tflops: 142,
    fp16Tflops: 142,
    fp8Tflops: 284,
    fp4Tflops: 0,
    fp32Estimated: false,
  },
  {
    id: "mac-studio-m3-ultra",
    name: "Apple Mac Studio",
    quantity: 4,
    tier: "AI Workstation",
    cpu: "Apple M3 Ultra",
    cpuSpecs: "32-core CPU (24 performance + 8 efficiency)",
    gpu: "80-core Apple GPU",
    gpuSpecs: "819GB/s unified memory bandwidth",
    memory: "512GB Unified Memory",
    memorySpecs: "32-core Neural Engine",
    storage: "16TB SSD",
    storageSpecs: "Internal flash storage",
    cpuCores: 32,
    cpuThreads: 32,
    memoryGB: 512,
    acceleratorMemoryGB: 512,
    fp32Tflops: 32.8,
    tf32Tflops: 0,
    bf16Tflops: 0,
    fp16Tflops: 65.6,
    fp8Tflops: 0,
    fp4Tflops: 0,
    fp32Estimated: true,
  },
];

const totalSpecs = workstations.reduce(
  (totals, workstation) => ({
    systems: totals.systems + workstation.quantity,
    cores: totals.cores + workstation.quantity * workstation.cpuCores,
    threads: totals.threads + workstation.quantity * workstation.cpuThreads,
    memory: totals.memory + workstation.quantity * workstation.memoryGB,
    acceleratorMemory:
      totals.acceleratorMemory + workstation.quantity * workstation.acceleratorMemoryGB,
    fp32Tflops: totals.fp32Tflops + workstation.quantity * workstation.fp32Tflops,
  }),
  { systems: 0, cores: 0, threads: 0, memory: 0, acceleratorMemory: 0, fp32Tflops: 0 },
);

const fleetCompute = workstations
  .map((workstation) => ({
    ...workstation,
    fleetTflops: workstation.quantity * workstation.fp32Tflops,
  }))
  .sort((a, b) => b.fleetTflops - a.fleetTflops);

const precisionDefinitions = [
  { label: "FP4", field: "fp4Tflops", estimated: false, accelerators: "None" },
  { label: "FP8", field: "fp8Tflops", estimated: false, accelerators: "3× RTX 4070 Super" },
  {
    label: "FP16",
    field: "fp16Tflops",
    estimated: true,
    accelerators: "4× M3 Ultra · 1× RTX A6000 · 3× RTX 3080 Ti · 3× RTX 4070 Super",
  },
  {
    label: "BF16",
    field: "bf16Tflops",
    estimated: false,
    accelerators: "1× RTX A6000 · 3× RTX 3080 Ti · 3× RTX 4070 Super",
  },
  {
    label: "TF32",
    field: "tf32Tflops",
    estimated: false,
    accelerators: "1× RTX A6000 · 3× RTX 3080 Ti · 3× RTX 4070 Super",
  },
  {
    label: "FP32",
    field: "fp32Tflops",
    estimated: true,
    accelerators: "4× M3 Ultra · 1× RTX A6000 · 3× RTX 3080 Ti · 3× RTX 4070 Super",
  },
] as const;

const precisionCompute = precisionDefinitions.map((definition) => ({
  ...definition,
  tflops: workstations.reduce(
    (total, workstation) => total + workstation.quantity * workstation[definition.field],
    0,
  ),
}));

const maxPrecisionTflops = Math.max(...precisionCompute.map((precision) => precision.tflops));

const computeBarStyles = ["bg-primary", "bg-primary/80", "bg-primary/60", "bg-primary/35"];

function formatMemory(gigabytes: number) {
  return gigabytes >= 1000 ? `${(gigabytes / 1000).toFixed(2)}TB` : `${gigabytes}GB`;
}

function formatCompute(tflops: number, estimated = false) {
  if (tflops === 0) return "—";
  const value = tflops >= 1000 ? `${(tflops / 1000).toFixed(2)} PFLOPS` : `${tflops.toFixed(0)} TFLOPS`;
  return `${estimated ? "≈" : ""}${value}`;
}

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
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 dark:bg-primary/10" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Infrastructure
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 leading-[1.1] tracking-tight text-foreground">
              High-Performance{" "}
              <span className="text-primary">Computing Lab</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Access state-of-the-art computational resources featuring Apple silicon,
              AMD Threadripper Pro processors, and professional-grade GPUs for cutting-edge research.
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
      <section className="border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {[
                {
                  value: `≈${totalSpecs.fp32Tflops.toFixed(0)}`,
                  label: "FP32 TFLOPS",
                  icon: Activity01Icon,
                },
                { value: totalSpecs.cores, label: "CPU Cores", icon: CpuIcon },
                {
                  value: formatMemory(totalSpecs.acceleratorMemory),
                  label: "Accelerator Memory",
                  icon: ChipIcon,
                },
                {
                  value: formatMemory(totalSpecs.memory),
                  label: "System Memory",
                  icon: HardDriveIcon,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center py-6 px-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 mb-2 bg-primary/10 text-primary">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="size-4" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compute Visualizations */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Capacity
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Available Compute
              </h2>
            </div>

            <div className="border border-border bg-panel mb-4">
              <div className="font-mono hidden md:grid md:grid-cols-[0.65fr_3fr_1.15fr] gap-6 px-5 py-3 border-b border-border text-[9px] uppercase tracking-wide text-muted-foreground">
                <span>Precision</span>
                <span>Available accelerators</span>
                <span className="text-right">Dense peak</span>
              </div>
              {precisionCompute.map((precision) => (
                <div
                  key={precision.label}
                  className="grid md:grid-cols-[0.65fr_3fr_1.15fr] gap-3 md:gap-6 px-5 py-4 border-b border-border last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4 md:block">
                    <p className="font-mono text-sm font-medium text-foreground">
                      {precision.label}
                    </p>
                    <p className="md:hidden text-sm font-medium text-primary tabular-nums whitespace-nowrap">
                      {formatCompute(precision.tflops, precision.estimated)}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {precision.accelerators}
                  </p>
                  <div>
                    <p className="hidden md:block text-right text-sm font-medium text-primary tabular-nums whitespace-nowrap">
                      {formatCompute(precision.tflops, precision.estimated)}
                    </p>
                    <div className="h-1.5 bg-muted mt-2 overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(precision.tflops / maxPrecisionTflops) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.45fr_1fr] gap-4">
              <div className="border border-border bg-panel p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-4 mb-8">
                  <h3 className="text-sm font-medium text-foreground">Fleet FP32</h3>
                  <p className="text-xl sm:text-2xl font-medium text-primary tabular-nums">
                    ≈{totalSpecs.fp32Tflops.toFixed(1)}
                    <span className="text-[10px] text-muted-foreground ml-1">TFLOPS</span>
                  </p>
                </div>

                <div
                  className="space-y-5"
                  role="img"
                  aria-label={`Bar chart of fleet FP32 compute totaling approximately ${totalSpecs.fp32Tflops.toFixed(1)} TFLOPS`}
                >
                  {fleetCompute.map((workstation, index) => {
                    const percentage = (workstation.fleetTflops / totalSpecs.fp32Tflops) * 100;

                    return (
                      <div key={workstation.id}>
                        <div className="flex items-end justify-between gap-3 mb-2">
                          <div>
                            <p className="text-xs font-medium text-foreground">{workstation.name}</p>
                            <p className="text-[10px] text-muted-foreground">
                              {workstation.quantity} {workstation.quantity === 1 ? "system" : "systems"}
                            </p>
                          </div>
                          <p className="text-xs font-medium text-foreground tabular-nums">
                            {workstation.fp32Estimated ? "≈" : ""}
                            {workstation.fleetTflops.toFixed(1)}
                            <span className="text-[10px] text-muted-foreground ml-1">TFLOPS</span>
                          </p>
                        </div>
                        <div className="h-2 bg-muted overflow-hidden">
                          <div
                            className={`h-full ${computeBarStyles[index]}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border border-border bg-panel p-5 sm:p-6 flex flex-col">
                <h3 className="text-sm font-medium text-foreground">FP32 Share</h3>

                <div
                  className="flex h-12 mt-8 mb-8 overflow-hidden"
                  role="img"
                  aria-label="Stacked bar showing each workstation family's share of total FP32 compute"
                >
                  {fleetCompute.map((workstation, index) => (
                    <div
                      key={workstation.id}
                      className={`${computeBarStyles[index]} first:rounded-l-sm last:rounded-r-sm`}
                      style={{ width: `${(workstation.fleetTflops / totalSpecs.fp32Tflops) * 100}%` }}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  {fleetCompute.map((workstation, index) => (
                    <div key={workstation.id} className="flex items-center gap-3">
                      <span className={`size-2.5 shrink-0 ${computeBarStyles[index]}`} />
                      <span className="text-xs text-muted-foreground flex-1">{workstation.name}</span>
                      <span className="text-xs font-medium text-foreground tabular-nums">
                        {((workstation.fleetTflops / totalSpecs.fp32Tflops) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="font-mono flex flex-wrap gap-x-5 gap-y-2 mt-4 text-[9px] uppercase tracking-wide text-muted-foreground">
              <span>Dense peak</span>
              <span>Sparsity off</span>
              <span>Neural Engine excluded</span>
              <span>≈ M3 estimate</span>
              <span>FP4 unsupported</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workstations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Hardware
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Compute Ranking
              </h2>
            </div>

            <div className="space-y-4">
              {fleetCompute.map((ws, rank) => (
                <div
                  key={ws.id}
                  className="group border border-border bg-panel hover:border-primary/50 transition-colors"
                >
                  <div className="p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary text-xs font-medium">
                          #{rank + 1}
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-base font-medium text-foreground">{ws.name}</h3>
                          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide">
                            {ws.quantity}× available · {ws.tier}
                          </p>
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-lg font-medium text-primary tabular-nums">
                          {ws.fp32Estimated ? "≈" : ""}
                          {ws.fleetTflops.toFixed(1)}
                          <span className="text-[10px] text-muted-foreground ml-1">TFLOPS</span>
                        </p>
                        <p className="text-[10px] text-muted-foreground">Fleet FP32</p>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mb-1">CPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.cpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.cpuSpecs}</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mb-1">GPU</p>
                        <p className="text-xs font-medium text-foreground">{ws.gpu}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.gpuSpecs}</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Memory</p>
                        <p className="text-xs font-medium text-foreground">{ws.memory}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.memorySpecs}</p>
                      </div>
                      <div className="bg-muted/50 dark:bg-white/5 p-3">
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Storage</p>
                        <p className="text-xs font-medium text-foreground">{ws.storage}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{ws.storageSpecs}</p>
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Applications
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Research Capabilities
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {capabilities.map((cap, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-colors bg-panel">
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
