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
  Rocket01Icon,
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
  const stats = [
    { value: researchProjects.length, label: "Active projects", icon: Rocket01Icon },
    { value: completedProjects.length, label: "Completed projects", icon: AnalyticsUpIcon },
    { value: upcomingEvents.length, label: "Published events", icon: Calendar01Icon },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-background to-background" />
        <div className="absolute -right-32 top-16 size-[34rem] rounded-full border border-primary/10" />
        <div className="absolute -right-12 top-36 size-[22rem] rounded-full border border-primary/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <Badge variant="secondary" className="mb-6 uppercase tracking-wider">
                  MAHE, Manipal
                </Badge>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                  Advancing Research Through{" "}
                  <span className="text-primary">Industry Collaborations</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Research projects and industry partnerships across intelligent
                  technologies, Industry 4.0, and sustainability at the Dr. TMA
                  Pai Endowment Chair.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              <div className="relative">
                <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border bg-card/80 shadow-[0_24px_80px_-48px_var(--foreground)] backdrop-blur-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/hero-image.png"
                      alt="Manipal Academy of Higher Education, School of Computer Engineering"
                      fill
                      className="object-contain p-8 transition-transform duration-500 hover:scale-[1.015]"
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t bg-muted/40 px-5 py-3 text-xs text-muted-foreground">
                    <span>School of Computer Engineering</span>
                    <span>MAHE, Manipal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-card/70 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-6 py-4 sm:justify-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-3xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chair Info Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                About
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Dr. TMA Pai Endowment Chair
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Intelligent Technologies, Industry 4.0 & Sustainability
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader className="md:grid md:grid-cols-[auto_1fr] md:items-start md:gap-x-5">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary md:row-span-2">
                      <HugeiconsIcon icon={CpuIcon} strokeWidth={2} />
                    </div>
                    <CardTitle>Intelligent Technologies</CardTitle>
                    <CardDescription>
                    Advanced digital systems including AI, machine learning, and smart automation
                    that enable machines to learn, adapt, and make decisions.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <HugeiconsIcon icon={Building01Icon} strokeWidth={2} />
                    </div>
                    <CardTitle>Industry 4.0</CardTitle>
                    <CardDescription>
                    The fourth industrial revolution with cyber-physical systems, IoT, and
                    data-driven manufacturing for smarter industries.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} />
                    </div>
                    <CardTitle>Sustainability</CardTitle>
                    <CardDescription>
                    Developing solutions that meet present needs without compromising future
                    generations&apos; ability to meet theirs.
                    </CardDescription>
                  </CardHeader>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section id="research" className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Research
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
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
                      <Card className="h-full transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                        <CardHeader>
                          <div className="mb-2 flex items-center gap-3">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-medium text-foreground">
                                {project.companyName}
                              </p>
                            </div>
                          </div>
                          <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <span className="flex items-center gap-1 text-sm font-medium text-primary">
                            View project
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden md:flex" />
              <CarouselNext className="-right-4 hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Completed Research Projects */}
      <section id="completed-research" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Archive
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  Completed Projects
                </h2>
              </div>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {completedProjects.map((project) => (
                  <CarouselItem key={project.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/research/${project.slug}`} className="block h-full group">
                      <Card className="h-full transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                        <CardHeader>
                          <div className="mb-2 flex items-center gap-3">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                              {getCompanyIcon(project.companyName, project.companyLogo)}
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-medium text-foreground">
                                {project.companyName}
                              </p>
                              {project.completionDate && (
                                <p className="text-[10px] text-muted-foreground">
                                  Completed {new Date(project.completionDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                                </p>
                              )}
                            </div>
                          </div>
                          <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                            View results
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden md:flex" />
              <CarouselNext className="-right-4 hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Partners
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Collaborators & Funding
              </h2>
            </div>

            <div className="mb-12">
              <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
                Government Agencies
              </p>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { name: "DST", logo: "/companies/dst-logo.svg", invertDark: true },
                  { name: "BIRAC", logo: "/companies/birac.svg", invertDark: false },
                  { name: "AICTE", logo: "/companies/aicte-logo.svg", invertDark: false },
                ].map((agency) => (
                  <Card key={agency.name} size="sm">
                    <CardContent className="flex h-20 items-center justify-center">
                      <Image
                        src={agency.logo}
                        alt={agency.name}
                        width={80}
                        height={40}
                        className={`object-contain opacity-75 transition-opacity hover:opacity-100 ${agency.invertDark ? "dark:invert dark:hue-rotate-180" : ""}`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
                Industry Partners
              </p>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { name: "Schneider Electric", logo: "/companies/schneider-logo.svg" },
                  { name: "TE Connectivity", logo: "/companies/te-connectivity-logo.svg" },
                  { name: "IBM", logo: "/companies/IBM_logo.svg" },
                ].map((company) => (
                  <Card key={company.name} size="sm">
                    <CardContent className="flex h-20 items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={40}
                        className="object-contain opacity-75 transition-opacity hover:opacity-100"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Events
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  Upcoming & Recent
                </h2>
              </div>
            </div>
            <Carousel className="w-full" opts={{ align: "start" }}>
              <CarouselContent className="-ml-4">
                {upcomingEvents.map((event) => (
                  <CarouselItem key={event.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link href={`/events/${event.slug}`} className="block h-full group">
                      <Card className="h-full transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                        {event.image && (
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <HugeiconsIcon icon={Calendar01Icon} strokeWidth={2} />
                            {event.displayDate}
                          </div>
                          <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <span className="flex items-center gap-1 text-sm font-medium text-primary">
                            Learn more
                            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 hidden md:flex" />
              <CarouselNext className="-right-4 hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t bg-gradient-to-br from-primary/[0.08] via-background to-background py-20 lg:py-28">
        <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Contribute to an active research project
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Submit your background and research interests for review by the chair team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Apply Now
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/chairperson">Chair Professor</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
