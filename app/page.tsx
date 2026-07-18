import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
  Rocket01Icon,
  UserGroupIcon,
  AnalyticsUpIcon,
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

export default function Home() {
  const researchProjects: ProjectFrontmatter[] = getSortedProjectsData("current");
  const completedProjects: ProjectFrontmatter[] = getSortedProjectsData("completed");
  const upcomingEvents: EventFrontmatter[] = getSortedEventsData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="surface-grid relative overflow-hidden border-b border-border pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/94 to-background/55" />
        <div className="absolute -right-20 top-20 size-[34rem] rounded-full border border-primary/20" />
        <div className="absolute right-12 top-52 size-[22rem] rounded-full border border-primary/15" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <div className="eyebrow animate-in-up mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-primary" />
                  MAHE · Manipal
                </div>
                <h1 className="animate-in-up animation-delay-1 text-4xl font-normal leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                  Advancing Research Through{" "}
                  <em className="font-normal text-primary">Industry Collaborations</em>
                </h1>
                <p className="animate-in-up animation-delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Join us in pushing the boundaries of innovation through
                  cutting-edge research projects and industry partnerships at the
                  Dr. TMA Pai Endowment Chair.
                </p>
                <div className="animate-in-up animation-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
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
              </div>
              <div className="order-1 lg:order-2 animate-in-up animation-delay-3 relative">
                <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2rem] border border-border bg-card/70 p-5 shadow-2xl shadow-foreground/8 backdrop-blur-sm lg:max-w-none">
                  <Image
                    src="/hero-image.png"
                    alt="Manipal Academy of Higher Education, School of Computer Engineering"
                    fill
                    className="interactive-image object-contain p-4 transition-transform duration-250 [transition-timing-function:var(--motion-ease-out)] dark:invert dark:hue-rotate-180"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved up for impact */}
      <section className="border-b border-border bg-card/75 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-border">
              {[
                { value: "20+", label: "Research Projects", icon: Rocket01Icon },
                { value: "10+", label: "Industry Partners", icon: Building01Icon },
                { value: "50+", label: "Student Researchers", icon: UserGroupIcon },
              ].map((stat, index) => (
                <div key={index} className="text-center px-4 py-2">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} className="size-5" />
                  </div>
                  <div className="display-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chair Info Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="eyebrow mb-3">About</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground tracking-tight">
                Dr. TMA Pai Endowment Chair
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3">
                Intelligent Technologies, Industry 4.0 & Sustainability
              </p>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="interactive-card group rounded-2xl border border-border bg-card/75 p-6 transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)]">
                  <h3 className="text-foreground font-medium mb-2 text-base">Intelligent Technologies</h3>
                  <p className="text-xs leading-relaxed">
                    Advanced digital systems including AI, machine learning, and smart automation
                    that enable machines to learn, adapt, and make decisions.
                  </p>
                </div>
                <div className="interactive-card group rounded-2xl border border-border bg-card/75 p-6 transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)]">
                  <h3 className="text-foreground font-medium mb-2 text-base">Industry 4.0</h3>
                  <p className="text-xs leading-relaxed">
                    The fourth industrial revolution with cyber-physical systems, IoT, and
                    data-driven manufacturing for smarter industries.
                  </p>
                </div>
                <div className="interactive-card group rounded-2xl border border-border bg-card/75 p-6 transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)]">
                  <h3 className="text-foreground font-medium mb-2 text-base">Sustainability</h3>
                  <p className="text-xs leading-relaxed">
                    Developing solutions that meet present needs without compromising future
                    generations&apos; ability to meet theirs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section id="research" className="py-20 lg:py-28 bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Research</p>
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  Current Projects
                </h2>
              </div>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <Link href="/#research">
                  View All
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                </Link>
              </Button>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {researchProjects.map((project) => (
                  <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/research/${project.slug}`} className="block h-full group">
                      <Card className="interactive-card h-full border-border transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:bg-transparent">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-medium text-foreground truncate">
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
                              <span key={tagIndex} className="px-2 py-0.5 bg-muted dark:bg-white/10 text-[10px] text-muted-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border mt-auto">
                          <span className="text-xs text-primary flex items-center gap-1">
                            View project
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="motion-arrow size-3" />
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
      <section id="completed-research" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Archive</p>
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  Completed Projects
                </h2>
              </div>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {completedProjects.map((project) => (
                  <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/research/${project.slug}`} className="block h-full group">
                      <Card className="interactive-card h-full border-border transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:bg-transparent">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-9 w-9 items-center justify-center bg-muted dark:bg-white/10 group-hover:bg-primary/10 transition-colors shrink-0">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-medium text-foreground truncate">
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
                              <span key={tagIndex} className="px-2 py-0.5 bg-muted dark:bg-white/10 text-[10px] text-muted-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 border-t border-border mt-auto">
                          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            View results
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="motion-arrow size-3" />
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
      <section className="py-20 lg:py-28 bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Partners</p>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Collaborators & Funding
              </h2>
            </div>

            {/* Government Agencies */}
            <div className="mb-12">
              <p className="text-xs text-muted-foreground text-center mb-6 uppercase tracking-wide">
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
            <div>
              <p className="text-xs text-muted-foreground text-center mb-6 uppercase tracking-wide">
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
      <section id="events" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary mb-2">Events</p>
                <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  Upcoming & Recent
                </h2>
              </div>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {upcomingEvents.map((event) => (
                  <CarouselItem key={event.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/events/${event.slug}`} className="block h-full group">
                      <Card className="interactive-card h-full border-border transition-[transform,box-shadow,border-color] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:bg-transparent">
                        {event.image && (
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-250 [transition-timing-function:var(--motion-ease-out)]"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                        <CardHeader className="pt-3">
                          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                            <HugeiconsIcon icon={Calendar01Icon} strokeWidth={2} className="size-3" />
                            {event.displayDate}
                          </div>
                          <CardTitle className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="text-xs line-clamp-2">{event.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <span className="text-xs text-primary flex items-center gap-1">
                            Learn more
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="motion-arrow size-3" />
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary mb-6">
              <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} className="size-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-foreground tracking-tight">
              Ready to Join Our Research Community?
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Apply now to participate in cutting-edge research projects and
              collaborate with industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
