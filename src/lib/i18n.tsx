'use client';

import { useSyncExternalStore, useCallback } from 'react';

export type Locale = 'ko' | 'en';

const translations: Record<Locale, Record<string, string>> = {
  ko: {
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.values': '가치관',
    'nav.gallery': '갤러리',
    'nav.contact': '연락처',
    'hero.cta': '더 알아보기',
    'about.title': '나의 이야기',
    'values.title': '가치관',
    'highlights.title': '하이라이트',
    'gallery.title': '갤러리',
    'contact.title': '함께 이야기 나눠요',
    'contact.desc': '협업, 강연, 브랜드 캠페인 — 무엇이든 편하게 연락 주세요.',
    'contact.email': '이메일 보내기',
    'theme.light': '라이트 모드로 전환',
    'theme.dark': '다크 모드로 전환',
    'lang.switchLabel': 'Switch to English',
    'lang.toggle': 'EN',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.values': 'Values',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.cta': 'Learn More',
    'about.title': 'My Story',
    'values.title': 'Values',
    'highlights.title': 'Highlights',
    'gallery.title': 'Gallery',
    'contact.title': "Let's Talk",
    'contact.desc': 'Collaboration, speaking, brand campaigns — feel free to reach out.',
    'contact.email': 'Send Email',
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    'lang.switchLabel': '한국어로 전환',
    'lang.toggle': '한국어',
  },
};

/* ── module-level state ── */
let currentLocale: Locale = 'ko';
const listeners = new Set<() => void>();

function getLocale() {
  return currentLocale;
}
function getServerLocale() {
  return 'ko' as Locale;
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

export function setLocale(l: Locale) {
  if (l === currentLocale) return;
  currentLocale = l;
  try {
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
  } catch {}
  listeners.forEach((cb) => cb());
}

/* hydrate from localStorage once */
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('locale');
    if (saved === 'ko' || saved === 'en') {
      currentLocale = saved;
      document.documentElement.lang = saved;
    }
  } catch {}
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getLocale, getServerLocale);
  const t = useCallback(
    (key: string) => translations[locale]?.[key] ?? key,
    [locale],
  );
  return { locale, setLocale, t };
}
