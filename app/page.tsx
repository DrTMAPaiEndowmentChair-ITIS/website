import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSortedProjectsData, ProjectFrontmatter } from "@/src/lib/projects";
import { getSortedEventsData, EventFrontmatter } from "@/src/lib/events";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlashIcon,
  PlugSocketIcon,
  CpuIcon,
  CloudIcon,
  Building01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  AnalyticsUpIcon,
  AiBrain01Icon,
  Factory01Icon,
  Leaf01Icon,
  FileEditIcon,
  Agreement01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";

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

  const iconClass = "size-5 text-primary";
  switch (companyName.toLowerCase()) {
    case "schneider electric":
      return <HugeiconsIcon icon={FlashIcon} strokeWidth={2} className={iconClass} />;
    case "te connectivity":
      return <HugeiconsIcon icon={PlugSocketIcon} strokeWidth={2} className={iconClass} />;
    case "amd":
      return <HugeiconsIcon icon={CpuIcon} strokeWidth={2} className={iconClass} />;
    case "ibm":
      return <HugeiconsIcon icon={CloudIcon} strokeWidth={2} className={iconClass} />;
    default:
      return <HugeiconsIcon icon={Building01Icon} strokeWidth={2} className={iconClass} />;
  }
};

const SectionKicker = ({ index, label }: { index: string; label: string }) => (
  <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
    <span className="text-muted-foreground">{index}</span>
    <span className="mx-2 text-border">/</span>
    {label}
  </p>
);

const CountChip = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
    <span className="size-1.5 bg-primary" aria-hidden />
    {label}
  </span>
);

const HERO_DOMAINS = ["AI / ML", "IoT & Edge", "Industry 4.0", "Cybersecurity", "Cloud", "Sustainability"];

const MARQUEE_PARTNERS = ["Schneider Electric", "TE Connectivity", "IBM", "DST", "BIRAC", "AICTE"];

const PILLARS = [
  {
    index: "01",
    icon: AiBrain01Icon,
    title: "Intelligent Technologies",
    body: "Advanced digital systems including AI, machine learning, and smart automation that enable machines to learn, adapt, and make decisions.",
  },
  {
    index: "02",
    icon: Factory01Icon,
    title: "Industry 4.0",
    body: "The fourth industrial revolution with cyber-physical systems, IoT, and data-driven manufacturing for smarter industries.",
  },
  {
    index: "03",
    icon: Leaf01Icon,
    title: "Sustainability",
    body: "Developing solutions that meet present needs without compromising future generations' ability to meet theirs.",
  },
];

const APPLY_STEPS = [
  {
    index: "01",
    icon: FileEditIcon,
    title: "Submit Application",
    body: "Tell us about your background and the research areas you want to work in.",
  },
  {
    index: "02",
    icon: Agreement01Icon,
    title: "Review & Matching",
    body: "The chair reviews your application and matches you with an active project.",
  },
  {
    index: "03",
    icon: Rocket01Icon,
    title: "Begin Research",
    body: "Join the team, collaborate with industry mentors, and publish your work.",
  },
];

export default function Home() {
  const researchProjects: ProjectFrontmatter[] = getSortedProjectsData("current");
  const completedProjects: ProjectFrontmatter[] = getSortedProjectsData("completed");
  const upcomingEvents: EventFrontmatter[] = getSortedEventsData();

  return (
    <div className="min-h-screen">
      {/* Hero Section — fills the first viewport, stats anchored at the bottom */}
      <section className="relative min-h-svh flex flex-col overflow-hidden">
        {/* Background: blueprint grid + gradient, running behind the transparent navbar */}
        <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
          <div className="w-[640px] h-[640px] rounded-full bg-radial from-primary/10 via-primary/[0.04] to-transparent to-70% dark:from-primary/15 animate-float" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3">
          <div className="w-[520px] h-[520px] rounded-full bg-radial from-primary/[0.06] to-transparent to-70% dark:from-primary/10 animate-float-delayed" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8 flex-1 flex items-center pt-24 pb-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge variant="secondary" className="mb-6 font-mono text-[10px] uppercase tracking-widest">
                  MAHE, Manipal
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 leading-[1.1] tracking-tight text-foreground">
                  Advancing Research Through{" "}
                  <span className="text-primary">Industry Collaborations</span>
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
                  Join us in pushing the boundaries of innovation through
                  cutting-edge research projects and industry partnerships at the
                  Dr. TMA Pai Endowment Chair.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="/apply">
                      Apply for Research
                      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="lg">
                    <Link href="#research">Explore Projects</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {HERO_DOMAINS.map((domain) => (
                    <span
                      key={domain}
                      className="border border-border/70 bg-background/50 dark:bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-square max-w-xs sm:max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="/hero-image.png"
                    alt="Research and Innovation"
                    fill
                    className="object-contain dark:invert dark:hue-rotate-180"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container relative mx-auto px-4 lg:px-8 pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-border border-t border-border pt-6">
              {[
                { value: "20+", label: "Research Projects" },
                { value: "10+", label: "Industry Partners" },
                { value: "50+", label: "Student Researchers" },
              ].map((stat, index) => (
                <div key={index} className="text-center px-4 py-2">
                  <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chair Info Section */}
      <section className="min-h-svh flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 reveal">
              <SectionKicker index="01" label="About" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                Dr. TMA Pai Endowment Chair
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
                An endowed chair at Manipal Academy of Higher Education dedicated to
                research at the intersection of intelligent systems, industrial
                transformation, and sustainable development — carried out hand in hand
                with industry and government partners.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground reveal">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-6 bg-muted/50 dark:bg-white/5 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <HugeiconsIcon icon={pillar.icon} strokeWidth={2} className="size-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest">
                      {pillar.index}
                    </span>
                  </div>
                  <h3 className="text-foreground font-medium mb-2 text-base">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
            {/* Facts strip */}
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border mt-6 reveal">
              {[
                { label: "Chair Holder", value: "Dr. Manohara Pai M.M.", href: "/chairperson" },
                { label: "Institution", value: "MIT, MAHE, Manipal" },
                { label: "Mandate", value: "Industry-collaborative research" },
              ].map((fact) => (
                <div key={fact.label} className="px-6 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {fact.label}
                  </p>
                  {fact.href ? (
                    <Link href={fact.href} className="text-xs text-foreground hover:text-primary transition-colors">
                      {fact.value} →
                    </Link>
                  ) : (
                    <p className="text-xs text-foreground">{fact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section id="research" className="min-h-svh flex items-center py-24 bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 reveal">
              <SectionKicker index="02" label="Research" />
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  Current Projects
                </h2>
                <CountChip label={`${researchProjects.length} active`} />
              </div>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">
                Ongoing investigations with industry partners — from generative AI for
                industrial automation to software qualimetry and threat analysis.
              </p>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {researchProjects.map((project) => (
                  <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/research/${project.slug}`} className="block h-full group">
                      <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 dark:bg-transparent">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-mono text-[11px] font-medium text-foreground truncate">
                                {project.companyName}
                              </p>
                            </div>
                          </div>
                          <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-2">
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-0.5 bg-muted dark:bg-white/10 font-mono text-[10px] text-muted-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border mt-auto">
                          <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                            View project
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3" />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 border-border hover:border-primary/50" />
              <CarouselNext className="hidden md:flex -right-4 border-border hover:border-primary/50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Completed Research Projects */}
      <section id="completed-research" className="min-h-svh flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 reveal">
              <SectionKicker index="03" label="Archive" />
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  Completed Projects
                </h2>
                <CountChip label={`${completedProjects.length} delivered`} />
              </div>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">
                Two decades of delivered research — spanning healthcare devices,
                connected vehicles, smart aquaculture, and industrial analytics.
              </p>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {completedProjects.map((project) => (
                  <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/research/${project.slug}`} className="block h-full group">
                      <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 dark:bg-transparent">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center bg-muted dark:bg-white/10 group-hover:bg-primary/10 transition-colors shrink-0">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-mono text-[11px] font-medium text-foreground truncate">
                                {project.companyName}
                              </p>
                              {project.completionDate && (
                                <p className="text-[10px] text-muted-foreground">
                                  Completed {new Date(project.completionDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                                </p>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 pb-2">
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-0.5 bg-muted dark:bg-white/10 font-mono text-[10px] text-muted-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border mt-auto">
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1 group-hover:gap-2">
                            View results
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3" />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 border-border hover:border-primary/50" />
              <CarouselNext className="hidden md:flex -right-4 border-border hover:border-primary/50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="min-h-svh flex flex-col justify-center py-24 bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 reveal">
              <SectionKicker index="04" label="Partners" />
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Collaborators & Funding
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
                Research at the chair is grounded in real problems — sponsored, co-developed,
                and deployed with global industry leaders and national funding agencies.
              </p>
            </div>
          </div>
        </div>

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

        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Government Agencies */}
            <div className="mb-12 reveal">
              <p className="font-mono text-xs text-muted-foreground text-center mb-6 uppercase tracking-wide">
                Government Agencies
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { name: "DST", logo: "/companies/dst-logo.svg", invertDark: true },
                  { name: "BIRAC", logo: "/companies/birac.svg", invertDark: false },
                  { name: "AICTE", logo: "/companies/aicte-logo.svg", invertDark: false },
                ].map((agency, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-background dark:bg-transparent border border-border hover:border-primary/30 transition-colors group"
                  >
                    <Image
                      src={agency.logo}
                      alt={agency.name}
                      width={80}
                      height={40}
                      className={`object-contain opacity-70 group-hover:opacity-100 transition-opacity ${agency.invertDark ? "dark:invert dark:hue-rotate-180 dark:opacity-80 dark:group-hover:opacity-100" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div className="reveal">
              <p className="font-mono text-xs text-muted-foreground text-center mb-6 uppercase tracking-wide">
                Industry Partners
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { name: "Schneider Electric", logo: "/companies/schneider-logo.svg" },
                  { name: "TE Connectivity", logo: "/companies/te-connectivity-logo.svg" },
                  { name: "IBM", logo: "/companies/IBM_logo.svg" },
                ].map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-background dark:bg-transparent border border-border hover:border-primary/30 transition-colors group"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={40}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-svh flex items-center py-24">
        <div className="container mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between gap-8 mb-10 reveal">
              <div>
                <SectionKicker index="05" label="Events" />
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                    Upcoming & Recent
                  </h2>
                  <CountChip label={`${upcomingEvents.length} events`} />
                </div>
                <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">
                  Workshops, hackathons, CTFs, and panels that bring students and
                  industry practitioners into the same room.
                </p>
              </div>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {upcomingEvents.map((event) => (
                  <CarouselItem key={event.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/events/${event.slug}`} className="block h-full group">
                      <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 dark:bg-transparent">
                        {event.image && (
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                        <CardHeader className="pt-3">
                          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                            <HugeiconsIcon icon={Calendar01Icon} strokeWidth={2} className="size-3" />
                            {event.displayDate}
                          </div>
                          <CardTitle className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-xs line-clamp-2">{event.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3" />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 border-border hover:border-primary/50" />
              <CarouselNext className="hidden md:flex -right-4 border-border hover:border-primary/50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-svh flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="container mx-auto px-4 lg:px-8 relative w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary mb-6">
                <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} className="size-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-foreground tracking-tight">
                Ready to Join Our Research Community?
              </h2>
              <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
                Apply now to participate in cutting-edge research projects and
                collaborate with industry leaders. Here is how it works:
              </p>
            </div>

            {/* Application steps */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10 reveal">
              {APPLY_STEPS.map((step) => (
                <div
                  key={step.index}
                  className="group relative p-6 bg-background/60 dark:bg-white/5 border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-9 w-9 items-center justify-center bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <HugeiconsIcon icon={step.icon} strokeWidth={2} className="size-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest">
                      {step.index}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center reveal">
              <Button asChild size="lg">
                <Link href="/apply">
                  Apply Now
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/chairperson">Meet the Chair Professor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
