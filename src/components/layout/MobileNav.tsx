"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                <Link href="/" className="text-xl font-bold text-neutral-900">
                  Dr. TMA Pai Endowment Chair
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 bg-white">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#research"
                      className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#events"
                      className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chairperson"
                      className="block text-lg text-neutral-600 hover:text-neutral-900 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Chairperson
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-neutral-200">
                <Button
                  asChild
                  className="w-full bg-[#E8580C] hover:bg-[#E8580C]/90 text-white"
                >
                  <Link
                    href="/apply"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
