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
  companyColor?: string;
  accentColor?: string;
  order: number;
  published: boolean;
  date: string;
  slug: string;
  heroImage?: string;
  status?: 'current' | 'completed';
  completionDate?: string;
  attachments?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface ProjectData extends ProjectFrontmatter {
  content: string;
}

export function getSortedProjectsData(status: 'current' | 'completed' = 'current'): ProjectFrontmatter[] {
  const directory = status === 'completed' ? completedProjectsDirectory : projectsDirectory;

  const fileNames = fs.readdirSync(directory)
    .filter(fileName => fileName.endsWith('.mdx'));

  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      status,
      ...matterResult.data,
    } as ProjectFrontmatter;
  });

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

  const frontmatterWithDefaults = { ...data } as ProjectFrontmatter;

  if (!frontmatterWithDefaults.companyColor) {
    frontmatterWithDefaults.companyColor = '#E8580C';
  }

  if (!frontmatterWithDefaults.accentColor) {
    frontmatterWithDefaults.accentColor = frontmatterWithDefaults.companyColor;
  }

  frontmatterWithDefaults.status = fullPath.includes('/completed/') ? 'completed' : 'current';

  return {
    ...frontmatterWithDefaults,
    slug,
    content,
  } as ProjectData;
}
