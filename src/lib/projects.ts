import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/research');
const completedProjectsDirectory = path.join(process.cwd(), 'src/content/research/completed');

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tags: string[];
  companyName: string;
  companyLogo: string;
  companyDescription: string;
  companyColor?: string; // Company-specific accent color
  accentColor?: string; // Project-specific accent color
  order: number;
  published: boolean;
  date: string;
  slug: string;
  heroImage?: string;
  status?: 'current' | 'completed'; // Add status field
  completionDate?: string; // Add completion date for completed projects
  [key: string]: any; // Allow other properties
}

export interface ProjectData extends ProjectFrontmatter {
  content: string;
}

export function getSortedProjectsData(status: 'current' | 'completed' = 'current'): ProjectFrontmatter[] {
  // Determine which directory to read from
  const directory = status === 'completed' ? completedProjectsDirectory : projectsDirectory;
  
  // Get file names under the appropriate directory
  const fileNames = fs.readdirSync(directory)
    .filter(fileName => fileName.endsWith('.mdx')); // Only get MDX files

  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug and ensure status is set
    return {
      slug,
      status, // Explicitly set the status based on the directory
      ...matterResult.data,
    } as ProjectFrontmatter;
  });

  // Filter projects by published status and sort by order
  return allProjectsData
    .filter((project) => project.published)
    .sort((a, b) => a.order - b.order);
}

export function getAllProjectSlugs() {
  const currentSlugs = fs.readdirSync(projectsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }));

  const completedSlugs = fs.readdirSync(completedProjectsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => ({
      slug: fileName.replace(/\.mdx$/, ''),
    }));

  return [...currentSlugs, ...completedSlugs];
}

export async function getProjectData(slug: string): Promise<ProjectData> {
  // Try to find the project in both directories
  const currentPath = path.join(projectsDirectory, `${slug}.mdx`);
  const completedPath = path.join(completedProjectsDirectory, `${slug}.mdx`);
  
  let fullPath: string;
  if (fs.existsSync(currentPath)) {
    fullPath = currentPath;
  } else if (fs.existsSync(completedPath)) {
    fullPath = completedPath;
  } else {
    throw new Error(`Project with slug ${slug} not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Ensure the slug from the URL parameter is used for consistency
  const { /* slug: slugFromFrontmatter, */ ...frontmatterWithoutSlug } = data as ProjectFrontmatter;

  // Set default company colors based on slug if not provided
  const frontmatterWithDefaults = {...frontmatterWithoutSlug};
  if (!frontmatterWithDefaults.companyColor) {
    switch(slug) {
      case 'ai-in-healthcare':
        frontmatterWithDefaults.companyColor = '#0078D7'; // Blue for HealthTech
        break;
      case 'sustainable-energy':
        frontmatterWithDefaults.companyColor = '#3CB043'; // Green for GreenPower
        break;
      case 'iot-smart-cities':
        frontmatterWithDefaults.companyColor = '#FF5733'; // Orange/Red for UrbanTech
        break;
      case 'blockchain-supply-chain':
        frontmatterWithDefaults.companyColor = '#6B46C1'; // Purple for ChainLogistics
        break;
      default:
        frontmatterWithDefaults.companyColor = '#E8580C'; // Default accent color
    }
  }
  
  // Set project accent color to company color if not specified
  if (!frontmatterWithDefaults.accentColor) {
    frontmatterWithDefaults.accentColor = frontmatterWithDefaults.companyColor;
  }

  // Set status based on which directory the file was found in
  frontmatterWithDefaults.status = fullPath.includes('/completed/') ? 'completed' : 'current';

  return {
    ...frontmatterWithDefaults,
    slug, // Use slug from the function argument (URL)
    content,
  } as ProjectData;
}