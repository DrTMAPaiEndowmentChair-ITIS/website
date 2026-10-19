import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bezel, FigCaption, Kicker, Section, SectionHeader } from "@/components/ui/section";
import { DotMatrix, type SceneSpec } from "@/components/viz/dot-matrix";
import { HBarChart, Meter, SegmentedBarChart } from "@/components/viz/bars";
import { Rocket01Icon, ArrowRight01Icon } from "@/components/icons";

export const metadata = {
  title: "Computational Resources | Dr. TMA Pai Endowment Chair",
  description:
    "State-of-the-art computational infrastructure featuring high-performance workstations for AI, machine learning, and advanced research.",
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
    storageTB: 5,
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
    storageTB: 1,
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
    storageTB: 2,
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
    storageTB: 16,
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
  { systems: 0, cores: 0, threads: 0, memory: 0, acceleratorMemory: 0, fp32Tflops: 0 }
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
    0
  ),
}));

function formatMemory(gigabytes: number) {
  return gigabytes >= 1000 ? `${(gigabytes / 1000).toFixed(2)}TB` : `${gigabytes}GB`;
}

function formatCompute(tflops: number, estimated = false) {
  if (tflops === 0) return "—";
  const value =
    tflops >= 1000 ? `${(tflops / 1000).toFixed(2)} PFLOPS` : `${tflops.toFixed(0)} TFLOPS`;
  return `${estimated ? "≈" : ""}${value}`;
}

const fleetMax = {
  cores: Math.max(...workstations.map((w) => w.cpuCores)),
  memory: Math.max(...workstations.map((w) => w.memoryGB)),
  accelerator: Math.max(...workstations.map((w) => w.acceleratorMemoryGB)),
  storage: Math.max(...workstations.map((w) => w.storageTB)),
};

const capabilities: { scene: SceneSpec; title: string; description: string }[] = [
  {
    scene: "network",
    title: "AI & Machine Learning",
    description: "Train complex neural networks and deploy production-scale deep learning models.",
  },
  {
    scene: "wave",
    title: "Scientific Computing",
    description: "Execute large-scale simulations and computational modeling.",
  },
  {
    scene: "globe",
    title: "3D Visualization",
    description: "Create photorealistic renderings and complex visualizations.",
  },
];

const heroReadouts = [
  { value: `≈${totalSpecs.fp32Tflops.toFixed(0)}`, unit: "TFLOPS", label: "Fleet FP32" },
  { value: `${totalSpecs.cores}`, unit: "cores", label: "CPU" },
  { value: formatMemory(totalSpecs.acceleratorMemory), unit: "", label: "Accel. memory" },
  { value: formatMemory(totalSpecs.memory), unit: "", label: "System memory" },
];

export default function ComputePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="shell pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
            <div>
              <Kicker label="Infrastructure · Lab 01" />
              <h1 className="text-display font-medium mb-6 text-foreground text-balance">
                High-Performance <span className="text-primary">Computing Lab</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl leading-relaxed text-pretty">
                Access state-of-the-art computational resources featuring Apple silicon, AMD
                Threadripper Pro processors, and professional-grade GPUs for cutting-edge research.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Request Access
                    <ArrowRight01Icon strokeWidth={2} data-icon="inline-end" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/#research">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Instrument panel */}
            <Bezel panelClassName="flex flex-col">
              <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Fleet monitor
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                  <span className="size-1.5 bg-primary animate-pulse" aria-hidden />
                  {totalSpecs.systems} systems online
                </span>
              </div>
              <div className="h-56 sm:h-64">
                <DotMatrix
                  scenes={["chip", `text:${totalSpecs.fp32Tflops.toFixed(0)}TF`, "bars", "wave"]}
                  pitch={7}
                  label={`Animated read-out cycling through a processor, the fleet total of about ${totalSpecs.fp32Tflops.toFixed(0)} FP32 TFLOPS, a bar chart, and a waveform`}
                />
              </div>
              <dl className="grid grid-cols-2 sm:grid-cols-4 border-t border-border">
                {heroReadouts.map((r, i) => (
                  <div
                    key={r.label}
                    className={`px-4 py-3 border-border ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      {r.label}
                    </dt>
                    <dd className="mt-1 font-mono text-lg sm:text-xl font-medium text-foreground">
                      {r.value}
                      {r.unit ? (
                        <span className="ml-1 text-[10px] font-normal text-muted-foreground">
                          {r.unit}
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </Bezel>
          </div>
        </div>
      </section>

      {/* 01 Capacity */}
      <Section index="01">
        <SectionHeader
          index="01"
          label="Capacity"
          title="Available Compute"
          lede="Dense peak throughput across the fleet at each numeric precision, then where that throughput and memory actually live."
        />

        <figure className="reveal mb-4">
          <Bezel panelClassName="p-4 sm:p-6 lg:p-8">
            <FigCaption
              fig="01"
              title="Peak throughput by precision"
              note="Dense peak · sparsity off"
              className="mb-4"
            />
            <HBarChart
              label="Fleet peak throughput by numeric precision"
              unit="TFLOPS"
              format={(v) => (v >= 1000 ? `${v / 1000}K` : `${v}`)}
              rows={precisionCompute.map((p) => ({
                key: p.label,
                label: p.label,
                value: p.tflops,
                display: formatCompute(p.tflops, p.estimated),
                note: p.accelerators === "None" ? undefined : p.accelerators,
                tip:
                  p.accelerators === "None"
                    ? "No accelerator in the fleet supports FP4"
                    : p.accelerators,
              }))}
            />
          </Bezel>
        </figure>

        <div className="grid lg:grid-cols-2 gap-4 reveal">
          <figure>
            <Bezel panelClassName="p-4 sm:p-6">
              <FigCaption fig="02" title="FP32 by system family" className="mb-1" />
              <p className="text-[11px] text-muted-foreground mb-6">
                Each segment is one machine. Fleet total ≈{totalSpecs.fp32Tflops.toFixed(1)} TFLOPS.
              </p>
              <SegmentedBarChart
                label="Fleet FP32 throughput by system family, one segment per machine"
                unit="TF"
                rows={fleetCompute.map((w) => ({
                  key: w.id,
                  label: w.name,
                  sub: `${w.quantity} × ${w.fp32Tflops}`,
                  units: Array.from({ length: w.quantity }, () => w.fp32Tflops),
                  display: `${w.fp32Estimated ? "≈" : ""}${w.fleetTflops.toFixed(1)} TF`,
                  tip: `${((w.fleetTflops / totalSpecs.fp32Tflops) * 100).toFixed(1)}% of fleet FP32 · ${w.gpu}`,
                }))}
              />
            </Bezel>
          </figure>
          <figure>
            <Bezel panelClassName="p-4 sm:p-6">
              <FigCaption fig="03" title="Accelerator memory by family" className="mb-1" />
              <p className="text-[11px] text-muted-foreground mb-6">
                Each segment is one machine. Mac Studio memory is unified with the CPU.
              </p>
              <SegmentedBarChart
                label="Fleet accelerator memory by system family, one segment per machine"
                format={(v) => (v === 0 ? "0" : v >= 1000 ? `${v / 1000} TB` : `${v} GB`)}
                rows={fleetCompute.map((w) => ({
                  key: w.id,
                  label: w.name,
                  sub: `${w.quantity} × ${w.acceleratorMemoryGB} GB`,
                  units: Array.from({ length: w.quantity }, () => w.acceleratorMemoryGB),
                  display: formatMemory(w.quantity * w.acceleratorMemoryGB),
                  tip: `${(((w.quantity * w.acceleratorMemoryGB) / totalSpecs.acceleratorMemory) * 100).toFixed(1)}% of fleet accelerator memory · ${w.gpuSpecs}`,
                }))}
              />
            </Bezel>
          </figure>
        </div>

        <ul className="font-mono flex flex-wrap gap-x-5 gap-y-2 mt-5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {[
            "Dense peak",
            "Sparsity off",
            "Neural Engine excluded",
            "≈ M3 estimate",
            "FP4 unsupported",
          ].map((note) => (
            <li key={note} className="flex items-center gap-2">
              <span className="size-1 bg-primary/60" aria-hidden />
              {note}
            </li>
          ))}
        </ul>
      </Section>

      {/* 02 Hardware */}
      <Section index="02">
        <SectionHeader
          index="02"
          label="Hardware"
          title="Compute Ranking"
          lede="Ranked by fleet FP32. Meters compare each machine with the strongest in the lab on that spec."
        />

        <ol className="space-y-4">
          {fleetCompute.map((ws, rank) => (
            <li key={ws.id} className="reveal">
              <Bezel hover panelClassName="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-11 border border-primary/30 bg-primary/[0.06] font-mono text-sm text-primary">
                      {String(rank + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-medium text-foreground">
                        {ws.name}
                      </h3>
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
                        {ws.quantity}× available · {ws.tier}
                      </p>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-xl font-medium text-foreground">
                      {ws.fp32Estimated ? "≈" : ""}
                      {ws.fleetTflops.toFixed(1)}
                      <span className="text-[10px] font-normal text-muted-foreground ml-1">
                        TFLOPS
                      </span>
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Fleet FP32 · {((ws.fleetTflops / totalSpecs.fp32Tflops) * 100).toFixed(1)}% of
                      lab
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
                  {[
                    {
                      label: "CPU",
                      value: ws.cpu,
                      sub: ws.cpuSpecs,
                      meter: {
                        label: "Cores",
                        v: ws.cpuCores,
                        max: fleetMax.cores,
                        d: `${ws.cpuCores}`,
                      },
                    },
                    {
                      label: "GPU",
                      value: ws.gpu,
                      sub: ws.gpuSpecs,
                      meter: {
                        label: "Accel. mem",
                        v: ws.acceleratorMemoryGB,
                        max: fleetMax.accelerator,
                        d: `${ws.acceleratorMemoryGB} GB`,
                      },
                    },
                    {
                      label: "Memory",
                      value: ws.memory,
                      sub: ws.memorySpecs,
                      meter: {
                        label: "RAM",
                        v: ws.memoryGB,
                        max: fleetMax.memory,
                        d: `${ws.memoryGB} GB`,
                      },
                    },
                    {
                      label: "Storage",
                      value: ws.storage,
                      sub: ws.storageSpecs,
                      meter: {
                        label: "Capacity",
                        v: ws.storageTB,
                        max: fleetMax.storage,
                        d: `${ws.storageTB} TB`,
                      },
                    },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col bg-card dark:bg-background p-3 sm:p-4"
                    >
                      <p className="font-mono text-[10px] text-primary uppercase tracking-[0.18em] mb-1.5">
                        {spec.label}
                      </p>
                      <p className="text-[13px] font-medium text-foreground leading-snug">
                        {spec.value}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 mb-4">{spec.sub}</p>
                      <div className="mt-auto">
                        <Meter
                          label={spec.meter.label}
                          value={spec.meter.v}
                          max={spec.meter.max}
                          display={spec.meter.d}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Bezel>
            </li>
          ))}
        </ol>
      </Section>

      {/* 03 Capabilities */}
      <Section index="03">
        <SectionHeader
          index="03"
          label="Applications"
          align="center"
          title="Research Capabilities"
        />
        <div className="grid sm:grid-cols-3 gap-4 reveal">
          {capabilities.map((cap) => (
            <Bezel key={cap.title} hover panelClassName="flex flex-col p-5">
              <div className="h-36 border border-primary/15 bg-primary/[0.025] mb-5">
                <DotMatrix scenes={[cap.scene]} pitch={6} label={`${cap.title} illustration`} />
              </div>
              <h3 className="font-sans text-base font-medium text-foreground mb-1.5">
                {cap.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{cap.description}</p>
            </Bezel>
          ))}
        </div>
      </Section>

      {/* 04 CTA */}
      <Section index="04">
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="inline-flex items-center justify-center size-12 border border-primary/30 bg-primary/[0.06] text-primary mb-6">
            <Rocket01Icon strokeWidth={2} className="size-5" />
          </div>
          <h2 className="text-title font-medium mb-4 text-foreground text-balance">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Apply for access to our computational resources and start your research project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/apply">
                Request Access
                <ArrowRight01Icon strokeWidth={2} data-icon="inline-end" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/chairperson">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
