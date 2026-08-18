import fs from "fs";
import path from "path";
import matter from "@11ty/gray-matter";
import { cache } from "react";

const projectsDirectory = path.join(process.cwd(), "src/content/research");
const completedProjectsDirectory = path.join(process.cwd(), "src/content/research/completed");

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
  status?: "current" | "completed";
  completionDate?: string;
  attachments?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface ProjectData extends ProjectFrontmatter {
  content: string;
}

export const getSortedProjectsData = cache(function getSortedProjectsData(
  status: "current" | "completed" = "current"
): ProjectFrontmatter[] {
  const directory = status === "completed" ? completedProjectsDirectory : projectsDirectory;

  const fileNames = fs
    .readdirSync(/* turbopackIgnore: true */ directory)
    .filter((fileName) => fileName.endsWith(".mdx"));

  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(/* turbopackIgnore: true */ fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      status,
      ...matterResult.data,
    } as ProjectFrontmatter;
  });

  return allProjectsData.filter((project) => project.published).sort((a, b) => a.order - b.order);
});

export const getAllProjectSlugs = cache(function getAllProjectSlugs() {
  const currentSlugs = fs
    .readdirSync(/* turbopackIgnore: true */ projectsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ""),
    }));

  const completedSlugs = fs
    .readdirSync(/* turbopackIgnore: true */ completedProjectsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx$/, ""),
    }));

  return [...currentSlugs, ...completedSlugs];
});

export const getProjectData = cache(async function getProjectData(
  slug: string
): Promise<ProjectData> {
  const currentPath = path.join(projectsDirectory, `${slug}.mdx`);
  const completedPath = path.join(completedProjectsDirectory, `${slug}.mdx`);

  let fullPath: string;
  if (fs.existsSync(/* turbopackIgnore: true */ currentPath)) {
    fullPath = currentPath;
  } else if (fs.existsSync(/* turbopackIgnore: true */ completedPath)) {
    fullPath = completedPath;
  } else {
    throw new Error(`Project with slug ${slug} not found`);
  }

  const fileContents = fs.readFileSync(/* turbopackIgnore: true */ fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatterWithDefaults = { ...data } as ProjectFrontmatter;

  if (!frontmatterWithDefaults.companyColor) {
    frontmatterWithDefaults.companyColor = "#E8580C";
  }

  if (!frontmatterWithDefaults.accentColor) {
    frontmatterWithDefaults.accentColor = frontmatterWithDefaults.companyColor;
  }

  frontmatterWithDefaults.status = fullPath.includes("/completed/") ? "completed" : "current";

  return {
    ...frontmatterWithDefaults,
    slug,
    content,
  } as ProjectData;
});
