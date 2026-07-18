import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon, GithubIcon, ArrowUpRight01Icon, Mail01Icon, Location01Icon } from "@hugeicons/core-free-icons";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/#research" },
    { label: "Events", href: "/#events" },
    { label: "Compute", href: "/compute" },
    { label: "Chair Professor", href: "/chairperson" },
    { label: "Apply", href: "/apply" },
  ],
  external: [
    { label: "Blog", href: "https://blog.ecitis.org" },
    { label: "Manipal Pure", href: "https://researcher.manipal.edu/en/persons/manohara-m-m-pai" },
    { label: "ORCID", href: "https://orcid.org/0000-0003-2164-2945" },
    { label: "Google Scholar", href: "https://scholar.google.co.in/citations?user=Zr3-m3IAAAAJ" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/dr-tma-pai-endowment-chair-itis/", icon: Linkedin01Icon },
    { label: "GitHub", href: "https://github.com/Dr-TMA-Pai-Endowment-Chair-ITIS", icon: GithubIcon },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="group mb-4 inline-block">
                <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  Dr. TMA Pai Endowment Chair
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  MAHE, Manipal
                </span>
              </Link>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                Advancing research in Intelligent Technologies, Industry 4.0 & Sustainability
                through industry collaborations.
              </p>
              <div className="flex gap-2">
                {footerLinks.social.map((link) => (
                  <Button key={link.label} variant="outline" size="icon-sm" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <HugeiconsIcon icon={link.icon} strokeWidth={2} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Resources
              </p>
              <ul className="flex flex-col gap-2">
                {footerLinks.external.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={2}
                        className="size-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:drtmapaichair.itis@manipal.edu"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-start gap-2"
                  >
                    <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-3.5 mt-0.5 shrink-0" />
                    <span>drtmapaichair.itis@manipal.edu</span>
                  </a>
                </li>
                <li className="text-xs text-muted-foreground flex items-start gap-2">
                  <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3.5 mt-0.5 shrink-0" />
                  <span>
                    MIT, MAHE<br />
                    Manipal, Karnataka 576104<br />
                    India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator />
        <div className="flex flex-col items-center justify-between gap-4 py-4 text-[10px] text-muted-foreground sm:flex-row">
          <p>{new Date().getFullYear()} Dr. TMA Pai Endowment Chair. All rights reserved.</p>
          <p>
            <Link href="/chairperson" className="hover:text-foreground transition-colors">
              Dr. Manohara Pai M.M.
            </Link>
            {" "}&middot;{" "}
            <span>Senior Professor, MIT, Manipal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
