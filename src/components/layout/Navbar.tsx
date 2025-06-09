import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-neutral-900">
            Dr. TMA Pai Endowment Chair, MAHE, Manipal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#research"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/#events"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Events
            </Link>
            <Link
              href="/compute"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Compute
            </Link>
            <Link
              href="/chairperson"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Chairperson
            </Link>
            <Button
              asChild
              className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
