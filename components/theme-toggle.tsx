"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Sun01Icon, Moon01Icon } from "@/components/icons";

const THEME_KEY = "theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("theme-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("theme-change", onStoreChange);
  };
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot() {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="relative"
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch {
          /* ignore quota / private mode */
        }
        window.dispatchEvent(new Event("theme-change"));
      }}
    >
      <Sun01Icon
        strokeWidth={2}
        className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
      />
      <Moon01Icon
        strokeWidth={2}
        className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
