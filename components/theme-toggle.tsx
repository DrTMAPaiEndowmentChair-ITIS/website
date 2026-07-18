"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" className="opacity-0">
        <HugeiconsIcon icon={Sun01Icon} strokeWidth={2} className="size-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative"
    >
      <HugeiconsIcon
        icon={Sun01Icon}
        strokeWidth={2}
        className="size-4 rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:-rotate-90 dark:scale-85 dark:opacity-0"
      />
      <HugeiconsIcon
        icon={Moon01Icon}
        strokeWidth={2}
        className="absolute size-4 rotate-90 scale-85 opacity-0 transition-[transform,opacity] duration-200 [transition-timing-function:var(--motion-ease-out)] dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
