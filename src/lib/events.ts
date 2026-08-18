import fs from "fs";
import path from "path";
import matter from "@11ty/gray-matter";
import { cache } from "react";

const eventsDirectory = path.join(process.cwd(), "src/content/events");

export interface EventFrontmatter {
  title: string;
  date: string;
  displayDate: string;
  description: string;
  image: string;
  slug: string;
  order: number;
  published: boolean;
  [key: string]: string | number | boolean;
}

export interface EventData extends EventFrontmatter {
  content: string;
}

export const getSortedEventsData = cache(function getSortedEventsData(): EventFrontmatter[] {
  const fileNames = fs.readdirSync(/* turbopackIgnore: true */ eventsDirectory);
  const allEventsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slugFromFile = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(/* turbopackIgnore: true */ fullPath, "utf8");
      const matterResult = matter(fileContents);
      const { ...frontmatterWithoutSlug } = matterResult.data as EventFrontmatter;

      return {
        ...(frontmatterWithoutSlug as Omit<EventFrontmatter, "slug">),
        slug: slugFromFile,
      } as EventFrontmatter;
    });

  return allEventsData
    .filter((event) => event.published)
    .sort((a, b) => {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
});

export const getAllEventSlugs = cache(function getAllEventSlugs() {
  const fileNames = fs.readdirSync(/* turbopackIgnore: true */ eventsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.mdx$/, ""),
      };
    });
});

export const getEventData = cache(async function getEventData(slug: string): Promise<EventData> {
  const fullPath = path.join(eventsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(/* turbopackIgnore: true */ fullPath)) {
    throw new Error(`Event with slug ${slug} not found`);
  }
  const fileContents = fs.readFileSync(/* turbopackIgnore: true */ fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const { ...frontmatterWithoutSlug } = data as EventFrontmatter;

  return {
    ...(frontmatterWithoutSlug as Omit<EventFrontmatter, "slug">),
    slug,
    content,
  } as EventData;
});
