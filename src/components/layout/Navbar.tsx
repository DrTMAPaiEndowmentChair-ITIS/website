import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-neutral-900">
          Dr. TMA Pai Endowment Chair, MAHE, Manipal
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/#research"
            className="text-neutral-900 hover:text-neutral-600"
          >
            Research
          </Link>
          <Link
            href="/#events"
            className="text-neutral-900 hover:text-neutral-600"
          >
            Events
          </Link>
          <Link
            href="/chairperson"
            className="text-neutral-900 hover:text-neutral-600"
          >
            Chairperson
          </Link>
          <Link
            href="/#about"
            className="text-neutral-900 hover:text-neutral-600"
          >
            About
          </Link>
          <Button asChild className="bg-[#E8580C] text-white hover:bg-[#E8580C]/90">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 