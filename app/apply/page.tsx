import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bezel, Kicker, Section, SectionHeader } from "@/components/ui/section";
import { CheckmarkCircle01Icon, HelpCircleIcon, Mail01Icon } from "@/components/icons";

export const metadata = {
  title: "Apply for Research | Dr. TMA Pai Endowment Chair",
  description:
    "Apply to work on cutting-edge research projects with industry partners at Dr. TMA Pai Endowment Chair, MAHE, Manipal.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="shell pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="max-w-3xl">
            <Kicker label="Join Us" />
            <h1 className="text-display font-medium mb-5 text-foreground text-balance">
              Apply for <span className="text-primary">Research</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl leading-relaxed text-pretty">
              Work on sponsored projects with industry partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" asChild size="lg">
                <Link href="/#research">View Projects</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/chairperson">Meet the Chair Professor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Application form */}
      <Section index="01" innerClassName="pt-10 sm:pt-12 lg:pt-14">
        <Bezel panelClassName="flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 sm:px-6 py-3">
            <h2 className="font-sans text-base font-medium text-foreground">
              Research Application Form
            </h2>
            <span className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 bg-primary animate-pulse" aria-hidden />
              Form 01 · Microsoft Forms
            </span>
          </div>
          <div className="w-full overflow-hidden sm:p-4">
            <iframe
              width="100%"
              height="700"
              src="https://forms.office.com/r/kN5F0Qiee2?embed=true"
              frameBorder="0"
              style={{
                border: "none",
                maxWidth: "100%",
              }}
              allowFullScreen
              title="Research Application Form"
              className="block min-h-[640px] sm:min-h-[760px]"
            />
          </div>
        </Bezel>
      </Section>

      {/* 02 Process */}
      <Section index="02">
        <SectionHeader index="02" label="Process" title="What Happens Next" />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-4 reveal">
          <Bezel panelClassName="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <CheckmarkCircle01Icon strokeWidth={2} className="size-5 text-primary" />
              <h3 className="font-sans text-base font-medium text-foreground">What to Expect</h3>
            </div>
            <ol className="relative space-y-4 pl-6 before:absolute before:left-[3px] before:top-1.5 before:bottom-1.5 before:w-px before:bg-[repeating-linear-gradient(to_bottom,var(--primary)_0_3px,transparent_3px_7px)] before:opacity-60">
              {[
                "Application review within 1-2 weeks",
                "Interview with research team leads",
                "Project assignment based on skills",
                "Mentorship from industry experts",
                "Access to research facilities",
              ].map((step, i) => (
                <li key={step} className="relative">
                  <span
                    className="absolute -left-6 top-1.5 size-[7px] bg-primary ring-2 ring-[var(--background)]"
                    aria-hidden
                  />
                  <p className="font-mono text-micro uppercase tracking-[0.18em] text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm text-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </Bezel>

          <Bezel panelClassName="flex flex-col p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <HelpCircleIcon strokeWidth={2} className="size-5 text-primary" />
              <h3 className="font-sans text-base font-medium text-foreground">Need Help?</h3>
            </div>
            <p className="text-body-sm text-muted-foreground mb-6 leading-relaxed">
              Questions about applying? Email us.
            </p>
            <a
              href="mailto:drtmapaichair.itis@manipal.edu"
              className="mt-auto inline-flex items-center gap-2 border border-border px-3 py-2 text-xs text-foreground hover:border-primary/50 hover:text-primary transition-colors w-fit"
            >
              <Mail01Icon strokeWidth={2} className="size-3.5" />
              drtmapaichair.itis@manipal.edu
            </a>
          </Bezel>
        </div>
      </Section>
    </div>
  );
}
