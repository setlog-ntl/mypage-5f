'use client';

import { AnimatedReveal } from './animated-reveal';
import type { ValueItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  values: ValueItem[];
}

export function ValuesSection({ values }: Props) {
  const { locale, t } = useLocale();

  return (
    <section id="values" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          >
            {t('values.title')}
          </h2>
        </AnimatedReveal>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {values.map((value, i) => {
            const title = locale === 'en' && value.titleEn ? value.titleEn : value.title;
            const desc = locale === 'en' && value.descEn ? value.descEn : value.desc;
            return (
              <AnimatedReveal key={i} delay={i * 100} variant="scale">
                <div
                  className="p-6 rounded-2xl card-lift"
                  style={{ background: 'var(--surface-elevated)', border: '1px solid var(--surface-border)' }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'var(--brand-primary-subtle)' }}
                  >
                    <span className="text-2xl">{value.emoji}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
