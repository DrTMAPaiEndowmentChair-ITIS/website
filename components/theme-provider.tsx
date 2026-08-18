import type { ReactNode } from "react";

/**
 * Blocking boot script: apply stored theme before paint to avoid a flash.
 * Kept as a server component wrapper so the rest of the tree stays RSC-friendly.
 */
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark")}catch(e){}})();`,
      }}
    />
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return children;
}
