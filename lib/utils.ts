import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom type scale from globals.css; otherwise it
// reads `text-micro` as a colour and drops it next to `text-muted-foreground`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: { text: ["micro", "caption", "label", "body-sm", "body", "kicker", "title", "display"] },
  },
});

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
