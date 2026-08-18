import { twMerge } from "tailwind-merge";

type ClassValue = string | false | null | undefined | 0 | ClassValue[];

function toClassName(value: ClassValue): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(toClassName).filter(Boolean).join(" ");
  return "";
}

/** Merge Tailwind classes; keeps last conflicting utility via tailwind-merge. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(inputs.map(toClassName).filter(Boolean).join(" "));
}
