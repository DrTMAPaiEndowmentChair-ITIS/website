import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const eventsDirectory = path.join(process.cwd(), 'src/content/events');

export interface EventFrontmatter {
  title: string;
  date: string; // ISO date string for sorting e.g., "2024-06-15"
  displayDate: string; // User-friendly date e.g., "June 15, 2024"
  description: string;
  image: string;
  slug: string;
  order: number;
  published: boolean;
  [key: string]: any; // Allow other properties
}

export interface EventData extends EventFrontmatter {
  content: string;
}

export function getSortedEventsData(): EventFrontmatter[] {
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEventsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slugFromFile = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const { /* slug, */ ...frontmatterWithoutSlug } = matterResult.data as EventFrontmatter;

      return {
        ...(frontmatterWithoutSlug as Omit<EventFrontmatter, 'slug'>),
        slug: slugFromFile,
      } as EventFrontmatter;
    });

  // Sort by order, then by date (newest first if order is same, though order should be unique)
  return allEventsData
    .filter((event) => event.published)
    .sort((a, b) => {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      // If order is the same, sort by date (more recent dates first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getAllEventSlugs() {
  const fileNames = fs.readdirSync(eventsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.mdx$/, ''),
      };
    });
}

export async function getEventData(slug: string): Promise<EventData> {
  const fullPath = path.join(eventsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Event with slug ${slug} not found`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { /* slug: slugFromFrontmatter, */ ...frontmatterWithoutSlug } = data as EventFrontmatter;

  return {
    ...(frontmatterWithoutSlug as Omit<EventFrontmatter, 'slug'>),
    slug, // Use slug from the function argument (URL)
    content,
  } as EventData;
} 