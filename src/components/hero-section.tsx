'use client';

import { useRef, useState, useEffect } from 'react';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

function HeroDefault({ config, name, tagline, parallaxY, fadeOpacity, t }: {
  config: SiteConfig;
  name: string;
  tagline: string;
  parallaxY: string;
  fadeOpacity: number;
  t: (key: string) => string;
}) {
  return (
    <>
      {config.heroImageUrl && (
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxY})` }}
        >
          <img src={config.heroImageUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      {!config.heroImageUrl && (
        <div className="absolute inset-0 z-0 mesh-gradient-bg" />
      )}
      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
        style={{ opacity: fadeOpacity }}
      >
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-primary)] bg-[length:200%_auto] bg-clip-text text-transparent animate-fade-up"
        >
          {name}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-up animate-fade-up-d1">
          {tagline}
        </p>
        <a
          href="#about"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300 animate-fade-up animate-fade-up-d2 btn-press hover-glow"
        >
          {t('hero.cta')}
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px]" fill="currentColor" style={{ color: 'var(--bg-primary, #ffffff)' }}>
          <path d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z" className="dark:fill-[#0f0f0f]" />
        </svg>
      </div>
    </>
  );
}

function HeroEditorial({ config, name, tagline, parallaxY, fadeOpacity, t }: {
  config: SiteConfig;
  name: string;
  tagline: string;
  parallaxY: string;
  fadeOpacity: number;
  t: (key: string) => string;
}) {
  return (
    <>
      <div className="absolute inset-0 z-0 mesh-gradient-bg" />
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 hero-editorial"
        style={{ opacity: fadeOpacity }}
      >
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 animate-fade-up">
            Personal Brand
          </p>
          <h1
            className="text-7xl lg:text-9xl font-bold leading-none mb-6 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-primary)] bg-[length:200%_auto] bg-clip-text text-transparent animate-fade-up"
          >
            {name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-sm animate-fade-up animate-fade-up-d1">
            {tagline}
          </p>
          <a
            href="#about"
            className="self-start inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white font-semibold text-base shadow-lg hover:scale-105 transition-all duration-300 animate-fade-up animate-fade-up-d2 btn-press hover-glow"
          >
            {t('hero.cta')}
          </a>
        </div>

        {/* Right: hero image or decorative block */}
        <div
          className="relative overflow-hidden rounded-2xl animate-fade-up animate-fade-up-d1"
          style={{ transform: `translateY(${parallaxY})` }}
        >
          {config.heroImageUrl ? (
            <img
              src={config.heroImageUrl}
              alt={name}
              className="w-full h-full object-cover aspect-[4/5]"
            />
          ) : (
            <div
              className="aspect-[4/5] w-full rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--brand-primary-subtle, rgba(238,91,43,0.08)) 0%, color-mix(in oklch, var(--brand-secondary, #f59e0b) 10%, transparent) 100%)',
                border: '1px solid var(--surface-border)',
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export function HeroSection({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const { locale, t } = useLocale();
  const name = locale === 'en' && config.nameEn ? config.nameEn : config.name;
  const tagline = locale === 'en' && config.taglineEn ? config.taglineEn : config.tagline;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const h = el.offsetHeight;
      if (h > 0) setScrollY(Math.max(0, Math.min(1, -rect.top / h)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxY = `${scrollY * 30}%`;
  const fadeOpacity = Math.max(0, 1 - scrollY * 1.25);
  const isEditorial = config.designPreset === 'editorial';

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {isEditorial ? (
        <HeroEditorial
          config={config}
          name={name}
          tagline={tagline}
          parallaxY={parallaxY}
          fadeOpacity={fadeOpacity}
          t={t}
        />
      ) : (
        <HeroDefault
          config={config}
          name={name}
          tagline={tagline}
          parallaxY={parallaxY}
          fadeOpacity={fadeOpacity}
          t={t}
        />
      )}
    </section>
  );
}
