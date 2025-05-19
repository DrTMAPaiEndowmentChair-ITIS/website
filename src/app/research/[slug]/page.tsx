import { getAllProjectSlugs, getProjectData } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc'; // For RSC rendering of MDX
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Re-using button for consistency

// Custom MDX components
const components = {
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <div className="my-8 rounded-lg overflow-hidden shadow-md">
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
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="text-neutral-800 mb-4" {...props} />,
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

// Re-using Navigation and Footer (Simplified stubs, ideally import from actual components)
// You'll need to adjust these to import your actual Nav and Footer components
const SiteNavigation = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 z-50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-neutral-900">
        Dr. TMA Pai Endowment Chair
      </Link>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/#research" className="text-neutral-900 hover:text-neutral-600">Research</Link>
        <Link href="/#events" className="text-neutral-900 hover:text-neutral-600">Events</Link>
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


export async function generateStaticParams() {
  const projectSlugs = getAllProjectSlugs(); // No 'await' as it's sync
  return projectSlugs.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);
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

export default async function ResearchProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);

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
      <SiteNavigation /> {/* Add your actual Navigation component here */}
      
      <main className="flex-grow pt-24 pb-12"> {/* Added padding top for fixed nav */}
        <div className="container mx-auto px-4">
          <article className="prose lg:prose-xl max-w-4xl mx-auto text-neutral-900"> {/* Darker text color */}
            {project.heroImage && (
              <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={project.heroImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                  priority
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent"
                >
                  <h1 className="text-white text-2xl md:text-3xl font-bold m-0">{project.title}</h1>
                </div>
              </div>
            )}
            
            {!project.heroImage && <h1 className="text-neutral-900">{project.title}</h1>}
            
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
                {project.companyLogo && (
                  <div 
                    className="relative h-20 w-20 flex-shrink-0 p-2 rounded-md flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: `${companyColor}15` }}
                  >
                    <Image src={project.companyLogo} alt={project.companyName} fill className="object-contain p-2" />
                  </div>
                )}
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
            
            {/* Related links section */}
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: `${companyColor}10` }}>
              <h3 className="text-lg font-semibold mb-3" style={{ color: companyColor }}>
                Related Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="#" 
                    className="text-neutral-800 hover:text-[color:var(--link-color)]"
                    style={{ color: companyColor }}
                  >
                    Research Publications
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-neutral-800 hover:text-[color:var(--link-color)]"
                    style={{ color: companyColor }}
                  >
                    Project Timeline
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-neutral-800 hover:text-[color:var(--link-color)]"
                    style={{ color: companyColor }}
                  >
                    Partner Organizations
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      
      <SiteFooter /> {/* Add your actual Footer component here */}
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