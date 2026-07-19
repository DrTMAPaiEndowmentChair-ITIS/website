import { getAllEventSlugs, getEventData } from '@/src/lib/events';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const components = {
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <div className="not-prose my-6 overflow-hidden border border-border">
      {typeof props.src === 'string' ? (
        <Image
          {...props}
          src={props.src}
          alt={props.alt || ''}
          className="w-full h-auto object-contain"
          width={800}
          height={400}
        />
      ) : null}
    </div>
  ),
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-2xl font-medium mb-4 text-foreground" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-lg font-medium mb-3 text-foreground" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-base font-medium mb-2 text-foreground" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-sm font-medium mb-2 text-foreground" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => {
    const childrenArray = React.Children.toArray(props.children);
    const significantChildren = childrenArray.filter(child => {
      if (typeof child === 'string' && child.trim() === '') return false;
      return true;
    });
    if (
      significantChildren.length === 1 &&
      React.isValidElement(significantChildren[0]) &&
      (significantChildren[0] as React.ReactElement).type === 'img'
    ) {
      return <>{significantChildren[0]}</>;
    }
    return <p className="text-sm text-muted-foreground mb-4" {...props} />;
  },
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="text-sm text-muted-foreground mb-4 list-disc pl-6 space-y-1" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="text-sm text-muted-foreground mb-4 list-decimal pl-6 space-y-1" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<'li'>) => (
    <li className="text-sm text-muted-foreground" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  em: (props: React.ComponentPropsWithoutRef<'em'>) => (
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
    return { title: 'Event Not Found' };
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
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto">
            {event.image && (
              <div className="relative w-full aspect-video mb-8 overflow-hidden border border-border">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Event
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-foreground tracking-tight leading-[1.1]">
              {event.title}
            </h1>

            <p className="text-xs text-muted-foreground mb-8">
              {event.displayDate}
            </p>

            <div className="prose-sm max-w-none">
              <MDXRemote source={event.content} components={components} />
            </div>

            <Separator className="my-8" />

            <div className="text-center">
              <Button asChild>
                <Link href="/#events">Back to All Events</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
