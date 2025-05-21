import { getAllEventSlugs, getEventData } from '@/lib/events';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-4xl font-bold mb-6 text-black" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-3xl font-bold mb-4 text-black" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-2xl font-semibold mb-3 text-black" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-xl font-semibold mb-2 text-black" {...props} />
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
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <article className="prose lg:prose-xl max-w-4xl mx-auto">
            {event.image && (
              <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
            )}
            <h1 className="text-4xl font-bold mb-6 text-black">{event.title}</h1>
            <p className="text-lg text-neutral-600 mb-1">Date: {event.displayDate}</p>            
            <div className="mdx-content prose-headings:text-black">
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
      
      <Footer />
    </div>
  );
} 