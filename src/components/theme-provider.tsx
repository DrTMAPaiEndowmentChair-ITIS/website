'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Theme, getSystemTheme } from '@/lib/theme-config';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [cookies, setCookie] = useCookies(['theme']);
  // If cookie is not set or is 'system', force 'light' as default
  const initialTheme: Theme = !cookies.theme || cookies.theme === 'system' ? 'light' : cookies.theme;
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(getSystemTheme());
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update the DOM when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    const resolved = theme === 'system' ? getSystemTheme() : theme;
    
    if (resolved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    setResolvedTheme(resolved);
    setCookie('theme', theme, { path: '/', maxAge: 31536000 }); // 1 year
  }, [theme, setCookie]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const resolved = getSystemTheme();
      setResolvedTheme(resolved);
      const root = window.document.documentElement;
      if (resolved === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 