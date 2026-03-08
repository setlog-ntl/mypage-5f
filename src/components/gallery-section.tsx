'use client';

import { AnimatedReveal } from './animated-reveal';
import { useLocale } from '@/lib/i18n';

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  const { t } = useLocale();

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedReveal>
          <h2
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          >
            {t('gallery.title')}
          </h2>
        </AnimatedReveal>

        <div className="masonry-gallery">
          {images.map((src, i) => (
            <AnimatedReveal key={i} delay={i * 50}>
              <div className="relative group break-inside-avoid mb-4 rounded-xl overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
