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
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <Badge variant="outline" className="mb-6">
                  MAHE, Manipal
                </Badge>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Industry-backed research in{" "}
                  <span className="text-primary">intelligent systems</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  The Dr. TMA Pai Endowment Chair connects MAHE researchers with
                  industry partners across intelligent technologies, Industry 4.0,
                  and sustainability.
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
                <Card className="mx-auto max-w-lg">
                  <CardContent className="relative aspect-[4/3] p-6 sm:p-8">
                    <Image
                      src="/hero-image.png"
                      alt="Manipal Academy of Higher Education, School of Computer Engineering"
                      fill
                      className="object-contain p-6"
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-5xl">
            <CardContent className="grid grid-cols-1 divide-y p-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 p-6 sm:justify-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <HugeiconsIcon icon={stat.icon} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                    {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chair Info Section */}
      <section className="border-y bg-muted/30 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <Badge variant="secondary" className="mb-4">About the chair</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Dr. TMA Pai Endowment Chair
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Intelligent Technologies, Industry 4.0 & Sustainability
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Intelligent Technologies</CardTitle>
                    <CardDescription>
                    Advanced digital systems including AI, machine learning, and smart automation
                    that enable machines to learn, adapt, and make decisions.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Industry 4.0</CardTitle>
                    <CardDescription>
                    The fourth industrial revolution with cyber-physical systems, IoT, and
                    data-driven manufacturing for smarter industries.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
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
      <section id="research" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Research</Badge>
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
      <section id="completed-research" className="border-y bg-muted/30 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Archive</Badge>
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
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-3">Partners</Badge>
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
      <section id="events" className="border-y bg-muted/30 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <Badge variant="outline" className="mb-3">Events</Badge>
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
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-4xl">
            <CardHeader className="text-center">
              <Badge variant="secondary" className="mx-auto mb-2">Applications</Badge>
              <CardTitle className="text-2xl sm:text-3xl">
                Contribute to an active research project
              </CardTitle>
              <CardDescription className="mx-auto max-w-xl">
                Submit your background and research interests for review by the chair team.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Apply Now
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/chairperson">Chair Professor</Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
