import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cpu, HardDrive, Zap, Monitor, Activity, Server } from "lucide-react";

export const metadata = {
  title: "Computational Resources | Dr. TMA Pai Endowment Chair",
  description:
    "State-of-the-art computational infrastructure featuring high-performance workstations for AI, machine learning, and advanced research.",
};

export default function ComputePage() {
  const workstations = [
    {
      id: "lenovo-p8",
      name: "Lenovo ThinkStation P8",
      quantity: 1,
      category: "Flagship SOTA HPC",
      description:
        "Ultimate powerhouse featuring AMD's most advanced Threadripper Pro processor and professional RTX graphics",
      specs: {
        cpu: "AMD Threadripper Pro 7995WX",
        cpuDetails: "96 cores, 192 threads, 2.5-5.1 GHz boost",
        gpu: "NVIDIA RTX A6000",
        gpuDetails: "48GB GDDR6 with 10,752 CUDA cores",
        memory: "256GB DDR5-5600 ECC RDIMM",
        memoryDetails: "8-channel memory architecture",
        storage: ["1TB PCIe 4.0 NVMe SSD", "4TB 7200RPM Enterprise HDD"],
        pcie: "128 PCIe 5.0 lanes",
        cooling: "Aston Martin-inspired thermal design",
        powerSupply: "1450W 90% efficiency",
        features: "Tool-less upgrades, military-grade testing",
      },
      highlights: [
        "World's most powerful single-socket workstation CPU",
        "Professional-grade GPU with 48GB memory buffer",
        "Enterprise-class reliability and certification",
        "Unprecedented parallel processing capability",
        "Designed for 24/7 operation under heavy loads",
      ],
      aiCapabilities: {
        tier: "Production-Scale AI Development",
        description: "Enterprise-grade infrastructure for deploying and scaling AI solutions in production environments",
        capabilities: [
          "Training large language models with billions of parameters",
          "Production-scale deep learning model deployment",
          "Real-time inference serving for enterprise applications",
          "Multi-GPU distributed training workflows",
          "Large-scale data processing and feature engineering",
        ],
      },
    },
    {
      id: "hp-z6",
      name: "HP Z6 G5 A",
      quantity: 3,
      category: "High-Performance Workstation",
      description:
        "Professional workstation engineered for demanding computational workflows and AI development",
      specs: {
        cpu: "AMD Threadripper Pro 7945WX",
        cpuDetails: "12 cores, 24 threads, 4.7-5.3 GHz boost",
        gpu: "NVIDIA RTX 3080 Ti",
        gpuDetails: "12GB GDDR6X with 10,240 CUDA cores",
        memory: "64GB DDR5-5600 ECC RDIMM",
        memoryDetails: "8-channel memory support up to 1TB",
        storage: ["1TB PCIe 4.0 NVMe SSD"],
        pcie: "128 PCIe 5.0 lanes, 6 expansion slots",
        cooling: "Multi-zone thermal management",
        powerSupply: "1125W 90% efficiency",
        features: "HP Wolf Security, ISV certified",
      },
      highlights: [
        "Enterprise-grade AMD Threadripper Pro architecture",
        "High-bandwidth memory subsystem for data-intensive tasks",
        "Expandable configuration with multiple GPU support",
        "Comprehensive security features built-in",
        "Optimized for AI and machine learning workflows",
      ],
      aiCapabilities: {
        tier: "AI Prototyping & Development",
        description: "Optimized for rapid prototyping, testing, and iterative development of AI models",
        capabilities: [
          "Neural network prototyping and validation",
          "Computer vision model development",
          "Natural language processing experiments",
          "Data science workflow optimization",
          "Model testing and evaluation pipelines",
        ],
      },
    },
    {
      id: "hp-z2",
      name: "HP Z2 G9 Tower",
      quantity: 3,
      category: "Compact Performance Workstation",
      description:
        "Versatile compact workstation designed for development, testing, and mid-scale computational tasks",
      specs: {
        cpu: "Intel Core i7-14700",
        cpuDetails: "20 cores (8P+12E), 28 threads, up to 5.4 GHz boost",
        gpu: "NVIDIA RTX 4070 Super",
        gpuDetails: "12GB GDDR6X with 7168 CUDA cores",
        memory: "32GB DDR5-4800",
        memoryDetails: "Dual-channel, expandable to 128GB",
        storage: ["2TB PCIe 4.0 NVMe SSD"],
        pcie: "PCIe 5.0 x16, PCIe 4.0 x4 slots",
        cooling: "Intelligent thermal design",
        powerSupply: "500W 90% efficiency",
        features: "Tool-free chassis, ISV certified",
      },
      highlights: [
        "Latest Intel 14th generation hybrid architecture",
        "High-performance gaming GPU with 12GB buffer",
        "Compact form factor with full workstation capability",
        "Energy-efficient design for extended operation",
        "Ideal for development and testing workflows",
      ],
      aiCapabilities: {
        tier: "AI Prototyping & Development",
        description: "Compact yet powerful systems for AI experimentation and rapid development cycles",
        capabilities: [
          "Quick AI model prototyping and testing",
          "Small to medium-scale neural network training",
          "Algorithm development and optimization",
          "Data preprocessing and feature engineering",
          "Model inference testing and validation",
        ],
      },
    },
  ];

  const totalSpecs = {
    totalCores: 1 * 96 + 3 * 12 + 3 * 20, // 192 cores total
    totalThreads: 1 * 192 + 3 * 24 + 3 * 28, // 348 threads total
    totalMemory: 1 * 256 + 3 * 64 + 3 * 32, // 544GB total
    totalGpuMemory: 1 * 48 + 3 * 12 + 3 * 12, // 120GB GPU memory total
    totalStorage: "13TB+ combined storage",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#E8580C]/10 text-[#E8580C] rounded-full text-sm font-semibold mb-4">
              Computational Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-neutral-900">
              State-of-the-Art
              <span className="text-[#E8580C]"> Computing Power</span>
            </h1>
            <p className="text-neutral-600 text-lg mb-8 max-w-3xl mx-auto">
              Our laboratory is equipped with cutting-edge computational
              resources featuring the latest AMD Threadripper Pro processors and
              professional-grade GPUs, enabling groundbreaking research in AI,
              machine learning, and advanced computational sciences.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
              >
                <Link href="/apply">Request Access</Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                <Link href="/#research">View Research Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Overview Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Center for Advanced Scientific and Industrial Research -
              Cumulative Computational Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#E8580C]/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-[#E8580C]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-neutral-900">
                      {totalSpecs.totalCores}
                    </p>
                    <p className="text-sm text-neutral-600">CPU Cores</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#E8580C]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#E8580C]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-neutral-900">
                      {totalSpecs.totalThreads}
                    </p>
                    <p className="text-sm text-neutral-600">Threads</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#E8580C]/10 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#E8580C]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-neutral-900">
                      {totalSpecs.totalGpuMemory}GB
                    </p>
                    <p className="text-sm text-neutral-600">GPU Memory</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#E8580C]/10 rounded-lg flex items-center justify-center">
                    <HardDrive className="w-6 h-6 text-[#E8580C]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-neutral-900">
                      {totalSpecs.totalMemory}GB
                    </p>
                    <p className="text-sm text-neutral-600">System Memory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workstation Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Computing Resources
            </h2>
            <div className="space-y-16">
              {workstations.map((workstation) => (
                <div
                  key={workstation.id}
                  className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Left Column - Basic Info */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-[#E8580C] text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                            {workstation.quantity}x
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-neutral-900">
                              {workstation.name}
                            </h3>
                            <p className="text-[#E8580C] font-medium">
                              {workstation.category}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 mb-6">
                          {workstation.description}
                        </p>

                        {/* Neofetch-style specs */}
                        <div className="bg-neutral-900 text-green-400 p-6 rounded-lg font-mono text-sm mb-6">
                          <div className="grid grid-cols-1 gap-1">
                            <div>
                              <span className="text-cyan-400">System:</span>{" "}
                              {workstation.name}
                            </div>
                            <div>
                              <span className="text-cyan-400">CPU:</span>{" "}
                              {workstation.specs.cpu}
                            </div>
                            <div className="ml-6 text-gray-300">
                              {workstation.specs.cpuDetails}
                            </div>
                            <div>
                              <span className="text-cyan-400">GPU:</span>{" "}
                              {workstation.specs.gpu}
                            </div>
                            <div className="ml-6 text-gray-300">
                              {workstation.specs.gpuDetails}
                            </div>
                            <div>
                              <span className="text-cyan-400">Memory:</span>{" "}
                              {workstation.specs.memory}
                            </div>
                            <div className="ml-6 text-gray-300">
                              {workstation.specs.memoryDetails}
                            </div>
                            <div>
                              <span className="text-cyan-400">Storage:</span>{" "}
                              {workstation.specs.storage.join(", ")}
                            </div>
                            <div>
                              <span className="text-cyan-400">PCIe:</span>{" "}
                              {workstation.specs.pcie}
                            </div>
                            <div>
                              <span className="text-cyan-400">Cooling:</span>{" "}
                              {workstation.specs.cooling}
                            </div>
                            <div>
                              <span className="text-cyan-400">Power:</span>{" "}
                              {workstation.specs.powerSupply}
                            </div>
                            <div>
                              <span className="text-cyan-400">Features:</span>{" "}
                              {workstation.specs.features}
                            </div>
                          </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wide">
                            Key Highlights
                          </h5>
                          <div className="space-y-2">
                            {workstation.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[#E8580C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-neutral-700 text-sm">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - AI Capabilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                          {workstation.aiCapabilities.tier}
                        </h4>
                        <p className="text-neutral-600 text-sm mb-4">
                          {workstation.aiCapabilities.description}
                        </p>
                        <div className="space-y-3">
                          {workstation.aiCapabilities.capabilities.map((capability, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-[#E8580C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-neutral-700 text-sm">
                                {capability}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900">
              Research Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  AI & Machine Learning
                </h3>
                <p className="text-neutral-600 text-sm">
                  Train complex neural networks, develop deep learning models,
                  and conduct AI research with our high-performance GPU
                  infrastructure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Scientific Computing
                </h3>
                <p className="text-neutral-600 text-sm">
                  Execute large-scale simulations, computational fluid dynamics,
                  and complex mathematical modeling with massive parallel
                  processing power.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  3D Rendering
                </h3>
                <p className="text-neutral-600 text-sm">
                  Create photorealistic renderings, complex 3D visualizations,
                  and professional world simulations (PINNs, NVidia Omniverse
                  etc) with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-neutral-50/50">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">
              Ready to Leverage Our Computing Power?
            </h2>
            <p className="text-neutral-600 text-lg mb-8">
              Apply for access to our state-of-the-art computational resources
              and accelerate your research.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
              >
                <Link href="/apply">Request Access</Link>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                <Link href="/chairperson">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
