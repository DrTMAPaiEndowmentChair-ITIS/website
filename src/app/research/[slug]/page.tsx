import { getAllProjectSlugs, getProjectData } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc'; // For RSC rendering of MDX
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Re-using button for consistency
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Custom MDX components
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
  // Add styling to other MDX elements as needed
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-neutral-900 font-bold mt-8 mb-4" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-neutral-900 font-semibold mt-6 mb-3" {...props} />,
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
      // It's a paragraph with only an image (and possibly ignorable whitespace)
      // Render only the significant child (the image itself).
      // MDXRemote will then use the custom 'img' component for this image.
      return <>{significantChildren[0]}</>;
    }
    // Otherwise, render as a normal paragraph
    return <p className="text-neutral-800 mb-4" {...props} />;
  },
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="text-neutral-800 mb-4 list-disc pl-6" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="text-neutral-800 mb-4 list-decimal pl-6" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="text-neutral-800 mb-1" {...props} />,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => <thead className="bg-neutral-50" {...props} />,
  tbody: (props: React.ComponentPropsWithoutRef<'tbody'>) => <tbody className="divide-y divide-neutral-200" {...props} />,
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => <tr className="hover:bg-neutral-50/50" {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => (
    <th 
      className="border-b border-neutral-200 px-4 py-3 text-left text-sm font-semibold text-neutral-900 bg-neutral-50" 
      {...props} 
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<'td'>) => (
    <td 
      className="px-4 py-3 text-sm text-neutral-800 whitespace-nowrap" 
      {...props} 
    />
  ),
};

export async function generateStaticParams() {
  const projectSlugs = getAllProjectSlugs(); // No 'await' as it's sync
  return projectSlugs.map((project) => ({
    slug: project.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
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
    // Or handle with notFound() from next/navigation
    return <div className="container mx-auto px-4 py-20 pt-32 text-center">Project not found.</div>;
  }

  // Get company color from project data or use default
  const companyColor = project.companyColor || '#E8580C';
  
  // Create CSS variables for MDX styling
  const mdxCssVars = {
    "--link-color": companyColor,
    "--accent-color": companyColor,
    "--heading-color": "#171717",
    "--text-color": "#333333",
    "--light-bg": `${companyColor}10`
  } as React.CSSProperties;
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12"> {/* Added padding top for fixed nav */}
        <div className="container mx-auto px-4">
          <article className="prose lg:prose-xl max-w-4xl mx-auto text-neutral-900"> {/* Darker text color */}
            {/* Title - Always displayed, no hero image */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">{project.title}</h1>
            
            <p className="text-lg text-neutral-700 mb-4">
              <span 
                className="font-medium mr-2"
                style={{ color: companyColor }}
              >
                Published:
              </span> 
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <div className="mb-6">
              <strong 
                className="text-neutral-900 inline-block mb-2"
                style={{ color: companyColor }}
              >
                Research Tags:
              </strong>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs px-3 py-1 rounded-full" 
                    style={{ 
                      backgroundColor: `${companyColor}15`,
                      color: companyColor,
                      border: `1px solid ${companyColor}30`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="mb-8 p-6 border rounded-lg shadow-sm" 
              style={{ 
                borderColor: `${companyColor}40`,
                backgroundColor: `${companyColor}05`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: companyColor }}
              >
                Collaborating With: {project.companyName}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-neutral-800">{project.companyDescription}</p>
              </div>
            </div>
            
            {/* MDX Content with custom styling */}
            <div 
              className="mdx-content prose-headings:text-neutral-900 prose-p:text-neutral-800 prose-strong:text-neutral-900 prose-li:text-neutral-800 prose-em:text-neutral-800 prose-a:no-underline prose-img:rounded-lg"
              style={mdxCssVars}
            >
              <MDXRemote source={project.content} components={components} />
            </div>

            <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                style={{
                  backgroundColor: companyColor,
                  color: "white"
                }}
                className="hover:opacity-90"
              >
                <Link href="/#research">Back to All Projects</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                style={{
                  borderColor: companyColor,
                  color: companyColor
                }}
                className="hover:bg-opacity-10 hover:bg-[var(--light-bg)]"
              >
                <Link href="/apply">Apply for this Project</Link>
              </Button>
              
              {project.attachments && project.attachments.length > 0 && (
                <Button 
                  asChild 
                  variant="outline" 
                  style={{
                    borderColor: companyColor,
                    color: companyColor
                  }}
                  className="hover:bg-opacity-10 hover:bg-[var(--light-bg)]"
                >
                  <Link href={project.attachments[0]} target="_blank">
                    Download Project PDF
                  </Link>
                </Button>
              )}
            </div>
            

          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// You might need to create an mdx-components.tsx file if you want to customize
// how MDX elements (like h1, p, etc.) are rendered, or provide custom components.
// e.g. import MdxComponents from '@/components/mdx-components'
// and pass it to MDXRemote: <MDXRemote source={project.content} components={MdxComponents} />

// Also, ensure Tailwind Typography plugin is installed and configured for .prose styles
// npm install -D @tailwindcss/typography
// In tailwind.config.ts:
// plugins: [
//   require('@tailwindcss/typography'),
// ], 