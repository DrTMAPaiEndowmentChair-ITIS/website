import { getAllProjectSlugs, getProjectData } from "@/src/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bezel, Kicker } from "@/components/ui/section";
import { shortPartner } from "@/components/viz/research-timeline";
import { monthYear, pct, toYear, yearsLabel } from "@/components/viz/scale";
import React from "react";

export const dynamic = "force-static";
export const dynamicParams = false;

const components = {
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <div className="not-prose my-6 overflow-hidden border border-border">
      {typeof props.src === "string" ? (
        <Image
          {...props}
          src={props.src}
          alt={props.alt || ""}
          className="w-full h-auto object-contain"
          width={800}
          height={400}
          sizes="(max-width: 896px) 100vw, 800px"
        />
      ) : null}
    </div>
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-xl font-medium mt-12 mb-4 text-foreground scroll-mt-24 border-t border-border pt-6"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-base font-medium mt-8 mb-3 text-foreground" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => {
    const childrenArray = React.Children.toArray(props.children);
    const significantChildren = childrenArray.filter((child) => {
      if (typeof child === "string" && child.trim() === "") return false;
      return true;
    });
    if (
      significantChildren.length === 1 &&
      React.isValidElement(significantChildren[0]) &&
      (significantChildren[0] as React.ReactElement).type === "img"
    ) {
      return <>{significantChildren[0]}</>;
    }
    return <p className="text-[15px] leading-relaxed text-muted-foreground mb-4" {...props} />;
  },
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="text-[15px] text-muted-foreground mb-4 list-[square] marker:text-primary pl-6 space-y-1.5"
      {...props}
    />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="text-[15px] text-muted-foreground mb-4 list-decimal marker:font-mono marker:text-primary pl-6 space-y-1.5"
      {...props}
    />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto border border-border">
      <table className="w-full border-collapse text-xs" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-muted dark:bg-white/5" {...props} />
  ),
  tbody: (props: React.ComponentPropsWithoutRef<"tbody">) => (
    <tbody className="divide-y divide-border" {...props} />
  ),
  tr: (props: React.ComponentPropsWithoutRef<"tr">) => (
    <tr className="hover:bg-muted/50 dark:hover:bg-white/5" {...props} />
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-border px-3 py-2 text-left text-xs font-medium text-foreground bg-muted dark:bg-white/5"
      {...props}
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="px-3 py-2 text-xs text-muted-foreground" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
};

export async function generateStaticParams() {
  const projectSlugs = getAllProjectSlugs();
  return projectSlugs.map((project) => ({
    slug: project.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Research Project`,
    description: project.description,
  };
}

export default async function ResearchProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 pt-32 text-center">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  const active = project.status === "current" || !project.completionDate;
  const startYear = toYear(project.date);
  const nowYear = toYear(new Date());
  const endYear = active ? nowYear : toYear(project.completionDate as string);
  const domainMax = Math.ceil(nowYear) + 1;
  const meta = [
    { label: "Partner", value: shortPartner(project.companyName ?? "") },
    {
      label: "Status",
      value: active ? "Active" : "Completed",
    },
    {
      label: "Period",
      value: `${monthYear(project.date)} – ${active ? "Present" : monthYear(project.completionDate as string)}`,
    },
    { label: "Duration", value: yearsLabel(Math.max(0, endYear - startYear)) },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative">
        <div className="shell pt-28 pb-16 lg:pt-36 lg:pb-24">
          <article className="max-w-3xl mx-auto">
            <Kicker label={`Research Project · ${active ? "Active" : "Completed"}`} />
            <h1 className="text-title font-medium mb-5 text-foreground text-balance">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-1.5 mb-8">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Project data sheet */}
            <Bezel className="mb-10" panelClassName="p-0">
              <dl className="grid grid-cols-2 sm:grid-cols-4">
                {meta.map((m, i) => (
                  <div
                    key={m.label}
                    className={`px-4 py-3 border-border ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "sm:border-l" : ""} ${i > 1 ? "max-sm:border-t" : ""}`}
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground flex items-center gap-1.5">
                      {m.label === "Status" ? (
                        <span
                          className={`size-1.5 ${active ? "bg-primary animate-pulse" : "bg-[var(--viz-muted)]"}`}
                          aria-hidden
                        />
                      ) : null}
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {/* Where this project sits in the chair's history */}
              <div className="border-t border-border px-4 pt-3 pb-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Span within the chair&apos;s research, 1996 – today
                </p>
                <div
                  className="relative h-3 bg-[var(--viz-track)]"
                  role="img"
                  aria-label={`Project span ${Math.floor(startYear)} to ${active ? "present" : Math.floor(endYear)}`}
                >
                  {[2000, 2005, 2010, 2015, 2020, 2025].map((y) => (
                    <span
                      key={y}
                      className="absolute inset-y-0 w-px bg-[var(--background)]"
                      style={{ left: pct(y, 1996, domainMax) }}
                      aria-hidden
                    />
                  ))}
                  <span
                    className={`absolute inset-y-0 min-w-1 ${active ? "bg-[var(--viz-accent)]" : "bg-foreground/60"}`}
                    style={{
                      left: pct(startYear, 1996, domainMax),
                      width: `${(((endYear - startYear) / (domainMax - 1996)) * 100).toFixed(3)}%`,
                    }}
                  />
                </div>
                <div className="relative h-4 mt-1">
                  {[2000, 2010, 2020].map((y) => (
                    <span
                      key={y}
                      className="absolute -translate-x-1/2 font-mono text-[9px] text-muted-foreground tabular-nums"
                      style={{ left: pct(y, 1996, domainMax) }}
                    >
                      {y}
                    </span>
                  ))}
                </div>
              </div>
            </Bezel>

            {project.companyDescription ? (
              <div className="mb-10 border-l-2 border-primary pl-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  About the partner
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.companyDescription}
                </p>
              </div>
            ) : null}

            <div className="prose-sm max-w-none">
              <MDXRemote source={project.content} components={components} />
            </div>

            <Separator className="my-10" />

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/#research">Back to All Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/apply">Apply for this Project</Link>
              </Button>
              {project.attachments && project.attachments.length > 0 && (
                <Button asChild variant="outline" size="lg">
                  <Link href={project.attachments[0]} target="_blank">
                    Download Project PDF
                  </Link>
                </Button>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
