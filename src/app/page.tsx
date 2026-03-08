import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ValuesSection } from '@/components/values-section';
import { HighlightsSection } from '@/components/highlights-section';
import { GallerySection } from '@/components/gallery-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection config={siteConfig} />
        <AboutSection config={siteConfig} />
        <ValuesSection values={siteConfig.values} />
        <HighlightsSection highlights={siteConfig.highlights} />
        {siteConfig.galleryImages.length > 0 && (
          <GallerySection images={siteConfig.galleryImages} />
        )}
        <ContactSection config={siteConfig} />
      </main>
      <Footer />
    </>
  );
}
