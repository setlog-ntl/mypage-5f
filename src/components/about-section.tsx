'use client';

import { AnimatedReveal } from './animated-reveal';
import type { SiteConfig } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
}

export function AboutSection({ config }: Props) {
  const { locale, t } = useLocale();
  const story = locale === 'en' && config.storyEn ? config.storyEn : config.story;

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <AnimatedReveal variant="slide-left">
          <div className="border-l-4 pl-6" style={{ borderColor: 'var(--brand-primary)' }}>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100"
            >
              {t('about.title')}
            </h2>

            <p
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line"
            >
              {story}
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
