export type Theme = 'light' | 'dark' | 'system';

export const themes: Theme[] = ['light', 'dark', 'system'];

export const themeConfig = {
  light: {
    background: '#ffffff',
    foreground: '#171717',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#CDCDCD',
  },
} as const;

export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}; 