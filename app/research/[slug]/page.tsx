import { getAllProjectSlugs, getProjectData } from '@/src/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-lg font-medium mt-8 mb-4 text-foreground" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-base font-medium mt-6 mb-3 text-foreground" {...props} />
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
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto border border-border">
      <table className="w-full border-collapse text-xs" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => (
    <thead className="bg-muted dark:bg-white/5" {...props} />
  ),
  tbody: (props: React.ComponentPropsWithoutRef<'tbody'>) => (
    <tbody className="divide-y divide-border" {...props} />
  ),
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => (
    <tr className="hover:bg-muted/50 dark:hover:bg-white/5" {...props} />
  ),
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th className="border-b border-border px-3 py-2 text-left text-xs font-medium text-foreground bg-muted dark:bg-white/5" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td className="px-3 py-2 text-xs text-muted-foreground" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => (
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
    return { title: 'Project Not Found' };
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

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
        <div className="container relative mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Research Project
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-foreground tracking-tight leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-xs text-muted-foreground mb-6">
              Published{' '}
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
              ))}
            </div>

            <Card className="mb-8 bg-panel">
              <CardContent>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Partner
                </p>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {project.companyName}
                </h3>
                <p className="text-xs text-muted-foreground">{project.companyDescription}</p>
              </CardContent>
            </Card>

            <div className="prose-sm max-w-none">
              <MDXRemote source={project.content} components={components} />
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/#research">Back to All Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/apply">Apply for this Project</Link>
              </Button>
              {project.attachments && project.attachments.length > 0 && (
                <Button asChild variant="outline">
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
