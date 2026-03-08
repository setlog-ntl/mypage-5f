import { ThemeToggle } from './theme-toggle';

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
        <a
          href="https://www.linkmap.biz/sites?utm_source=badge&utm_medium=referral&utm_campaign=personal-brand"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 transition-all text-[11px] font-medium"
          aria-label="Made with Linkmap"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          Made with Linkmap
        </a>
        <ThemeToggle />
      </div>
    </footer>
  );
}
