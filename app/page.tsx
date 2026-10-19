import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bezel, Kicker, Section, SectionHeader } from "@/components/ui/section";
import { DotMatrix, type SceneSpec } from "@/components/viz/dot-matrix";
import { ResearchTimeline } from "@/components/viz/research-timeline";
import { getSortedProjectsData, type ProjectFrontmatter } from "@/src/lib/projects";
import { getSortedEventsData, type EventFrontmatter } from "@/src/lib/events";
import {
  FlashIcon,
  PlugSocketIcon,
  CpuIcon,
  CloudIcon,
  Building01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  FileEditIcon,
  Agreement01Icon,
  Rocket01Icon,
} from "@/components/icons";

const getCompanyIcon = (companyName: string, companyLogo?: string) => {
  if (["dst", "birac", "aicte"].includes(companyName.toLowerCase())) {
    if (companyLogo) {
      return (
        <Image
          src={companyLogo}
          alt={companyName}
          width={32}
          height={32}
          className="object-contain"
        />
      );
    }
  }

  const iconClass = "size-4 text-primary";
  switch (companyName.toLowerCase()) {
    case "schneider electric":
      return <FlashIcon strokeWidth={2} className={iconClass} />;
    case "te connectivity":
      return <PlugSocketIcon strokeWidth={2} className={iconClass} />;
    case "amd":
      return <CpuIcon strokeWidth={2} className={iconClass} />;
    case "ibm":
      return <CloudIcon strokeWidth={2} className={iconClass} />;
    default:
      return <Building01Icon strokeWidth={2} className={iconClass} />;
  }
};

const MARQUEE_PARTNERS = ["Schneider Electric", "TE Connectivity", "IBM", "DST", "BIRAC", "AICTE"];

const PILLARS: { index: string; scene: SceneSpec; title: string; body: string }[] = [
  {
    index: "01",
    scene: "network",
    title: "Intelligent Technologies",
    body: "AI, machine learning, and automation that learn and adapt.",
  },
  {
    index: "02",
    scene: "gear",
    title: "Industry 4.0",
    body: "Cyber-physical systems, IoT, and data-driven manufacturing.",
  },
  {
    index: "03",
    scene: "leaf",
    title: "Sustainability",
    body: "Engineering for today that doesn't borrow from tomorrow.",
  },
];

const APPLY_STEPS = [
  {
    index: "01",
    Icon: FileEditIcon,
    title: "Submit Application",
    body: "Share your background and interests.",
  },
  {
    index: "02",
    Icon: Agreement01Icon,
    title: "Review & Matching",
    body: "We match you with an active project.",
  },
  {
    index: "03",
    Icon: Rocket01Icon,
    title: "Begin Research",
    body: "Build with industry mentors and publish.",
  },
];

function yearOf(iso?: string) {
  return iso ? new Date(iso).getUTCFullYear() : undefined;
}

function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  const completed = project.status === "completed";
  const partner = project.companyName || "MIT, MAHE";
  return (
    <Link href={`/research/${project.slug}`} className="group block h-full">
      <Bezel className="h-full" panelClassName="flex flex-col p-5">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center border border-primary/20 bg-primary/[0.06]">
              {getCompanyIcon(partner, project.companyLogo)}
            </span>
            <span className="truncate font-mono text-caption text-foreground">{partner}</span>
          </div>
          {completed ? (
            <span className="shrink-0 font-mono text-micro tabular-nums text-muted-foreground">
              {yearOf(project.date)}–{yearOf(project.completionDate)}
            </span>
          ) : (
            <span className="shrink-0 inline-flex items-center gap-1.5 font-mono text-micro uppercase tracking-[0.18em] text-primary">
              <span className="size-1.5 bg-primary animate-pulse" aria-hidden />
              Active
            </span>
          )}
        </div>
        <h3 className="font-sans text-body font-medium leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {project.title}
        </h3>
        <p className="text-body-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-border px-1.5 py-0.5 font-mono text-micro text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Bezel>
    </Link>
  );
}

function EventCard({ event }: { event: EventFrontmatter }) {
  return (
    <Link href={`/events/${event.slug}`} className="group block h-full">
      <Bezel className="h-full" panelClassName="flex flex-col">
        {event.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-5">
          <p className="flex items-center gap-2 font-mono text-micro text-muted-foreground mb-2">
            <Calendar01Icon strokeWidth={2} className="size-3" />
            {event.displayDate}
          </p>
          <h3 className="font-sans text-body font-medium leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {event.title}
          </h3>
          <p className="text-body-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>
      </Bezel>
    </Link>
  );
}

function CardRail({ children }: { children: ReactNode }) {
  return (
    <Carousel className="w-full reveal" opts={{ align: "start" }}>
      <CarouselContent className="-ml-4">{children}</CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 border-border hover:border-primary/50" />
      <CarouselNext className="hidden md:flex -right-4 border-border hover:border-primary/50" />
    </Carousel>
  );
}

export default function Home() {
  const researchProjects: ProjectFrontmatter[] = getSortedProjectsData("current");
  const completedProjects: ProjectFrontmatter[] = getSortedProjectsData("completed");
  const upcomingEvents: EventFrontmatter[] = getSortedEventsData();
  const totalProjects = researchProjects.length + completedProjects.length;

  const heroStats = [
    { value: `${totalProjects}`, label: "Research projects", href: "#timeline" },
    { value: "10+", label: "Industry partners", href: "#partners" },
    { value: "50+", label: "Student researchers", href: "/apply" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero — fills the first viewport, read-out strip anchored at the bottom */}
      <section className="relative min-h-svh flex flex-col">
        <div className="shell relative flex-1 flex items-center pt-28 pb-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center w-full">
            <div>
              <Kicker label="MAHE, Manipal · Endowment Chair" className="mb-6" />
              <h1 className="text-display font-medium mb-6 text-foreground text-balance">
                Advancing Research Through{" "}
                <span className="text-primary">Industry Collaborations</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg leading-relaxed text-pretty">
                Sponsored research with industry and government partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Apply for Research
                    <ArrowRight01Icon strokeWidth={2} data-icon="inline-end" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="#research">Explore Projects</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="ticks relative aspect-square max-w-[15rem] sm:max-w-sm mx-auto lg:max-w-none">
                {/* The PNG ships an opaque #FAFAFA plate, so it would mask the
                    ambient background. brightness lifts that plate to pure
                    white, which multiply then drops entirely; in dark mode
                    invert turns the same plate black and screen drops it. */}
                <Image
                  src="/hero-image.png"
                  alt="Research and Innovation"
                  fill
                  sizes="(max-width: 640px) 20rem, (max-width: 1024px) 28rem, 34rem"
                  className="object-contain brightness-[1.021] mix-blend-multiply dark:invert dark:hue-rotate-180 dark:mix-blend-screen"
                  priority
                />
                <span className="absolute left-0 -top-6 font-mono text-micro uppercase tracking-[0.2em] text-muted-foreground">
                  Fig. 00 — Institution
                </span>
                <span className="absolute right-0 -bottom-6 font-mono text-micro tracking-[0.15em] text-muted-foreground tabular-nums">
                  13.3525° N · 74.7924° E
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Read-out strip */}
        <div className="shell relative pb-8">
          <div className="ruler grid grid-cols-3 border-t border-border">
            {heroStats.map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="group px-2 sm:px-6 pt-6 pb-2 text-center border-l border-border first:border-l-0"
              >
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="font-mono text-micro sm:text-micro text-muted-foreground uppercase tracking-[0.18em] mt-2">
                  {stat.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 01 About */}
      <Section index="01" className="cv-auto">
        <SectionHeader
          index="01"
          label="About"
          align="center"
          title="Three research fronts"
          lede="Led by Dr. Manohara Pai M.M. at MIT, MAHE."
        />
        <div className="grid md:grid-cols-3 gap-4 reveal">
          {PILLARS.map((pillar) => (
            <Bezel key={pillar.title} hover panelClassName="flex flex-col p-5 sm:p-6">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-sans text-lg font-medium text-foreground">{pillar.title}</h3>
                <span className="font-mono text-micro text-muted-foreground/70 tracking-widest">
                  {pillar.index}
                </span>
              </div>
              <p className="text-body-sm leading-relaxed text-muted-foreground mb-6">
                {pillar.body}
              </p>
              <div className="mt-auto h-44 border border-primary/15 bg-primary/[0.025]">
                <DotMatrix
                  scenes={[pillar.scene]}
                  pitch={6}
                  label={`${pillar.title} illustration`}
                />
              </div>
            </Bezel>
          ))}
        </div>
      </Section>

      {/* 02 Current research */}
      <Section index="02" id="research" className="cv-auto scroll-mt-16">
        <SectionHeader index="02" label="Research" title="Current Projects" />
        <CardRail>
          {researchProjects.map((project) => (
            <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CardRail>
      </Section>

      {/* 03 Track record */}
      <Section index="03" id="timeline" className="cv-auto scroll-mt-16">
        <SectionHeader
          index="03"
          label="Track record"
          title="Three decades of sponsored research"
        />
        <ResearchTimeline projects={[...completedProjects, ...researchProjects]} />
      </Section>

      {/* 04 Archive */}
      <Section index="04" id="completed-research" className="cv-auto scroll-mt-16">
        <SectionHeader index="04" label="Archive" title="Completed Projects" />
        <CardRail>
          {completedProjects.map((project) => (
            <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CardRail>
      </Section>

      {/* 05 Partners */}
      <Section
        index="05"
        id="partners"
        className="cv-auto scroll-mt-16"
        innerClassName="pb-0 sm:pb-0 lg:pb-0"
      >
        <SectionHeader index="05" label="Partners" align="center" title="Collaborators & Funding" />
      </Section>
      <div className="cv-auto">
        {/* Partner marquee — full bleed */}
        <div className="marquee relative overflow-hidden border-y border-border py-3 mb-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {MARQUEE_PARTNERS.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-muted-foreground px-8"
                  >
                    {name}
                    <span className="ml-16 size-1 bg-primary/60" aria-hidden />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="shell pb-16 sm:pb-20 lg:pb-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-6">
            {[
              {
                title: "Government Agencies",
                items: [
                  { name: "DST", logo: "/companies/dst-logo.png", invertDark: true },
                  { name: "BIRAC", logo: "/companies/birac.png", invertDark: false },
                  { name: "AICTE", logo: "/companies/aicte-logo.png", invertDark: false },
                ],
              },
              {
                title: "Industry Partners",
                items: [
                  {
                    name: "Schneider Electric",
                    logo: "/companies/schneider-logo.svg",
                    invertDark: false,
                  },
                  {
                    name: "TE Connectivity",
                    logo: "/companies/te-connectivity-logo.svg",
                    invertDark: false,
                  },
                  { name: "IBM", logo: "/companies/IBM_logo.svg", invertDark: false },
                ],
              },
            ].map((group) => (
              <div key={group.title} className="reveal">
                <p className="font-mono text-label text-muted-foreground mb-4 uppercase tracking-[0.18em] flex items-center gap-3">
                  {group.title}
                  <span className="h-px flex-1 bg-border" aria-hidden />
                  <span className="tabular-nums">{group.items.length}</span>
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <Bezel
                      key={item.name}
                      hover
                      panelClassName="flex items-center justify-center h-24 p-5 group/logo"
                    >
                      {/* brightness-0 flattens the mark to black and invert lifts it
                          to white — a predictable silhouette, unlike invert +
                          hue-rotate, which shifts a coloured logo off brand. */}
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={80}
                        height={40}
                        className={`object-contain h-auto max-h-10 opacity-75 group-hover/logo:opacity-100 transition-opacity ${item.invertDark ? "dark:brightness-0 dark:invert dark:opacity-80" : ""}`}
                      />
                    </Bezel>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 06 Events */}
      <Section index="06" id="events" className="cv-auto scroll-mt-16">
        <SectionHeader
          index="06"
          label="Events"
          title="Upcoming & Recent"
          action={
            <span className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 font-mono text-micro uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 bg-primary" aria-hidden />
              {upcomingEvents.length} events
            </span>
          }
        />
        <CardRail>
          {upcomingEvents.map((event) => (
            <CarouselItem key={event.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <EventCard event={event} />
            </CarouselItem>
          ))}
        </CardRail>
      </Section>

      {/* 07 Apply */}
      <Section index="07" className="cv-auto">
        <SectionHeader index="07" label="Join" align="center" title="How to apply" />

        <ol className="relative grid sm:grid-cols-3 gap-4 mb-10 reveal">
          {/* Connector between steps */}
          <span
            className="absolute left-[16.6%] right-[16.6%] top-[2.1rem] hidden sm:block h-px bg-[repeating-linear-gradient(to_right,var(--primary)_0_4px,transparent_4px_8px)] opacity-50"
            aria-hidden
          />
          {APPLY_STEPS.map((step) => (
            <li key={step.index} className="relative">
              <Bezel hover panelClassName="p-5 sm:p-6 text-left">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex size-9 items-center justify-center bg-primary text-primary-foreground">
                    <step.Icon strokeWidth={2} className="size-4" />
                  </span>
                  <span className="font-mono text-micro text-muted-foreground tracking-widest">
                    Step {step.index}
                  </span>
                </div>
                <h3 className="font-sans text-base font-medium text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </Bezel>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row gap-3 justify-center reveal">
          <Button asChild size="lg">
            <Link href="/apply">
              Apply Now
              <ArrowRight01Icon strokeWidth={2} data-icon="inline-end" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/chairperson">Meet the Chair Professor</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
