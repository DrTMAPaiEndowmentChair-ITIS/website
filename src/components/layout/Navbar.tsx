import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-16 py-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col py-1 max-w-[60%] sm:max-w-none"
          >
            <span className="text-sm sm:text-lg lg:text-xl font-bold text-neutral-900 leading-tight">
              Dr. TMA Pai Endowment Chair, MAHE, Manipal
            </span>
            <span className="text-xs sm:text-sm text-[#E8580C] font-normal leading-tight">
              Intelligent Technologies, Industry 4.0 & Sustainability
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/#research"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Research
            </Link>
            <Link
              href="/#events"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Events
            </Link>
            <Link
              href="/compute"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Compute
            </Link>
            <Link
              href="/chairperson"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm lg:text-base whitespace-nowrap"
            >
              Chair Professor
            </Link>
            <Button
              asChild
              className="bg-[#E8580C] hover:bg-[#E8580C]/90 text-white text-sm lg:text-base px-3 lg:px-4"
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
