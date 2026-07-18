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
import { cn } from "@/lib/utils";
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
      <section className="relative overflow-hidden pt-24 pb-20 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-background to-background" />
        <div className="absolute -right-32 top-16 size-[34rem] rounded-full border border-primary/10" />
        <div className="absolute -right-12 top-36 size-[22rem] rounded-full border border-primary/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <Badge variant="secondary" className="mb-6 uppercase tracking-wider">
                  MAHE, Manipal
                </Badge>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.75rem]">
                  Advancing research{" "}
                  <span className="text-primary">with industry</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Applied research in intelligent systems, industrial automation,
                  cybersecurity, software quality, and sustainability.
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
                <figure className="relative mx-auto max-w-md overflow-hidden rounded-2xl border bg-card shadow-[0_24px_80px_-48px_var(--foreground)] lg:mr-0">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src="/chairperson/image.jpg"
                      alt="Dr. Manohara M.M. Pai"
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-[1.015]"
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <figcaption className="border-t px-5 py-4">
                    <p className="font-semibold text-foreground">Dr. Manohara M.M. Pai</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Senior Professor, School of Computer Engineering
                    </p>
                  </figcaption>
                </figure>
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
                Research agenda
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Intelligent technologies, Industry 4.0, and applied sustainability
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader className="md:grid md:grid-cols-[auto_1fr] md:items-start md:gap-x-5">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary md:row-span-2">
                    <HugeiconsIcon icon={CpuIcon} strokeWidth={2} />
                  </div>
                  <CardTitle>Intelligent Systems</CardTitle>
                  <CardDescription>
                    LLM-assisted industrial automation, software quality analysis,
                    and cybersecurity recommendation systems.
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
                    Current work includes migration from IEC 61131-3 PLC codebases
                    to IEC 61499 distributed automation.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} />
                  </div>
                  <CardTitle>Applied Sustainability</CardTitle>
                  <CardDescription>
                    The portfolio includes battery health estimation, smart
                    aquaculture, and sensor-based healthcare systems.
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
            <div className="mb-10">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Research
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  Active research
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Three current projects apply AI to industrial automation,
                  software engineering, and cybersecurity.
                </p>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              {researchProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/research/${project.slug}`}
                  className={cn("group block", index === 0 && "lg:row-span-2")}
                >
                  <Card
                    className={cn(
                      "h-full transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md",
                      index === 0 && "min-h-[26rem]"
                    )}
                  >
                    <CardHeader>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {getCompanyIcon(project.companyName, project.companyLogo)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-medium text-muted-foreground">
                            {project.companyName || "Chair research team"}
                          </p>
                        </div>
                        <Badge variant={index === 0 ? "default" : "secondary"}>
                          Active
                        </Badge>
                      </div>
                      <CardTitle className={cn(
                        "transition-colors group-hover:text-primary",
                        index === 0 && "max-w-xl text-2xl leading-tight sm:text-3xl"
                      )}>
                        {project.title}
                      </CardTitle>
                      <CardDescription className={cn(index !== 0 && "line-clamp-2")}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      {index === 0 && (
                        <dl className="mb-6 grid gap-3 sm:grid-cols-3">
                          {[
                            { label: "Source", value: "IEC 61131-3" },
                            { label: "Target", value: "IEC 61499" },
                            { label: "Method", value: "LLM-assisted migration" },
                          ].map((item) => (
                            <div key={item.label} className="rounded-lg bg-muted p-3">
                              <dt className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                                {item.label}
                              </dt>
                              <dd className="mt-1 text-sm font-semibold text-foreground">
                                {item.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, index === 0 ? 5 : 3).map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary">
                        View project
                        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
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
                  Research archive
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Completed work across AI, industrial systems, healthcare,
                  cloud computing, mobility, and incubation.
                </p>
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
                                {project.companyName || "Chair research team"}
                              </p>
                            </div>
                            <Badge variant="secondary">Completed</Badge>
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
                Funding and collaborators
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Government agencies and industry teams represented across the
                published project portfolio.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Government agencies</CardTitle>
                  <CardDescription>DST, BIRAC, and AICTE</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 divide-x p-0">
                  {[
                    { name: "DST", logo: "/companies/dst-logo.svg", invertDark: true },
                    { name: "BIRAC", logo: "/companies/birac.svg", invertDark: false },
                    { name: "AICTE", logo: "/companies/aicte-logo.svg", invertDark: false },
                  ].map((agency) => (
                    <div key={agency.name} className="flex h-28 items-center justify-center p-4">
                      <Image
                        src={agency.logo}
                        alt={agency.name}
                        width={80}
                        height={40}
                        style={{ width: "auto", height: "auto" }}
                        className={`object-contain opacity-75 transition-opacity hover:opacity-100 ${agency.invertDark ? "dark:invert dark:hue-rotate-180" : ""}`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Industry partners</CardTitle>
                  <CardDescription>Automation, connectivity, and cloud</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 divide-x p-0">
                  {[
                    { name: "Schneider Electric", logo: "/companies/schneider-logo.svg" },
                    { name: "TE Connectivity", logo: "/companies/te-connectivity-logo.svg" },
                    { name: "IBM", logo: "/companies/IBM_logo.svg" },
                  ].map((company) => (
                    <div key={company.name} className="flex h-28 items-center justify-center p-4">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={40}
                        style={{ width: "auto", height: "auto" }}
                        className="object-contain opacity-75 transition-opacity hover:opacity-100"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
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
                  Recent Events
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Workshops and programmes published by the chair, most recently
                  updated in May 2025.
                </p>
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
