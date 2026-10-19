import { getAllEventSlugs, getEventData } from "@/src/lib/events";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bezel, Kicker } from "@/components/ui/section";
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
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-2xl font-medium mb-4 text-foreground" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-xl font-medium mt-10 mb-3 text-foreground border-t border-border pt-6"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-base font-medium mb-2 text-foreground" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 className="text-sm font-medium mb-2 text-foreground" {...props} />
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
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  em: (props: React.ComponentPropsWithoutRef<"em">) => (
    <em className="text-muted-foreground" {...props} />
  ),
};

export async function generateStaticParams() {
  const eventSlugs = getAllEventSlugs();
  return eventSlugs.map((event) => ({
    slug: event.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const event = await getEventData(slug);
  if (!event) {
    return { title: "Event Not Found" };
  }
  return {
    title: `${event.title} | Event`,
    description: event.description,
  };
}

export default async function EventPage({ params }: { params: Params }) {
  const { slug } = await params;
  const event = await getEventData(slug);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-20 pt-32 text-center">
        <p className="text-muted-foreground">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="shell pt-28 pb-16 lg:pt-36 lg:pb-24">
          <article className="max-w-3xl mx-auto">
            <Kicker label="Event" />
            <h1 className="text-title font-medium mb-3 text-foreground text-balance">
              {event.title}
            </h1>
            <p className="font-mono text-xs text-muted-foreground mb-8">{event.displayDate}</p>

            {event.image && (
              <Bezel className="ticks mb-10" panelClassName="relative aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 896px) 100vw, 768px"
                  priority
                  fetchPriority="high"
                  className="object-cover"
                />
              </Bezel>
            )}

            <div className="prose-sm max-w-none">
              <MDXRemote source={event.content} components={components} />
            </div>

            <Separator className="my-10" />

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/#events">Back to All Events</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
