import { getAllEventSlugs, getEventData } from '@/lib/events';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';

// Custom MDX components to prevent hydration errors
const components = {
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <div className="not-prose my-8 rounded-lg overflow-hidden shadow-md">
      {typeof props.src === 'string' ? (
        <Image 
          {...props}
          src={props.src}
          alt={props.alt || ''}
          className="w-full h-auto object-contain rounded-lg"
          width={800}
          height={400}
        />
      ) : null}
    </div>
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => {
    const childrenArray = React.Children.toArray(props.children);
    // Filter out empty/whitespace-only text nodes
    const significantChildren = childrenArray.filter(child => {
      if (typeof child === 'string' && child.trim() === '') {
        return false; // Ignore whitespace-only strings
      }
      return true;
    });

    if (
      significantChildren.length === 1 &&
      React.isValidElement(significantChildren[0]) &&
      (significantChildren[0] as React.ReactElement).type === 'img'
    ) {
      // It's a paragraph with only an image (and possibly whitespace)
      return <>{significantChildren[0]}</>;
    }
    // Otherwise, render as a normal paragraph
    return <p className="text-neutral-700 mb-4" {...props} />;
  }
};

// --- Re-import or define SiteNavigation and SiteFooter ---
// Ideally, these are shared components. For now, repeating simplified versions.
// Replace with actual imports: import SiteNavigation from '@/components/layout/SiteNavigation'; etc.

const SiteNavigation = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 z-50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-neutral-900">
        Dr. TMA Pai Endowment Chair
      </Link>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/#research" className="text-neutral-900 hover:text-neutral-600">Research</Link>
        <Link href="/#events" className="text-neutral-900 hover:text-neutral-600">Events</Link>
        <Link href="/chairperson" className="text-neutral-900 hover:text-neutral-600">Chairperson</Link>
        <Link href="/#about" className="text-neutral-900 hover:text-neutral-600">About</Link>
        <Button asChild className="bg-[#E8580C] text-white hover:bg-[#E8580C]/90">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  </nav>
);

const SiteFooter = () => (
  <footer className="py-12 border-t border-neutral-200/50">
    <div className="container mx-auto px-4 text-center text-neutral-600">
      <p>&copy; {new Date().getFullYear()} Dr. TMA Pai Endowment Chair, MAHE, Manipal. All rights reserved.</p>
    </div>
  </footer>
);
// --- End Navigation/Footer ---


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
    return {
      title: 'Event Not Found',
    };
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
    return <div className="container mx-auto px-4 py-20 pt-32 text-center">Event not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNavigation />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <article className="prose lg:prose-xl max-w-4xl mx-auto">
            {event.image && (
              <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
            )}
            <h1>{event.title}</h1>
            <p className="text-lg text-neutral-600 mb-1">Date: {event.displayDate}</p>
            <p className="text-md text-neutral-500 mb-6"><em>Event Date (for sorting): {new Date(event.date).toLocaleDateString()}</em></p>
            
            <div className="mdx-content">
              <MDXRemote source={event.content} components={components} />
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-[#E8580C] text-white hover:bg-[#E8580C]/90">
                <Link href="/#events">Back to All Events</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
} 