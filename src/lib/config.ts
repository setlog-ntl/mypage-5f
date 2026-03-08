export interface ValueItem {
  emoji: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface HighlightItem {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_VALUES: ValueItem[] = [
  {
    emoji: '\u2726',
    title: '\uC9C4\uC815\uC131',
    titleEn: 'Authenticity',
    desc: '\uAD11\uACE0\uCC98\uB7FC \uB290\uAEF4\uC9C0\uC9C0 \uC54A\uB294 \uCF58\uD150\uCE20. \uB0B4\uAC00 \uC9C1\uC811 \uC368\uBD24\uAC70\uB098 \uBFFF\uB294 \uAC83\uB9CC \uC774\uC57C\uAE30\uD569\uB2C8\uB2E4.',
    descEn: "Content that never feels like an ad \u2014 I only talk about things I've personally used or believe in.",
  },
  {
    emoji: '\u2726',
    title: '\uC77C\uAD00\uC131',
    titleEn: 'Consistency',
    desc: '2019\uB144\uBD80\uD130 \uD55C \uC8FC\uB3C4 \uAC70\uB974\uC9C0 \uC54A\uC740 \uB274\uC2A4\uB808\uD130. \uAFB8\uC900\uD568\uC774 \uC2E0\uB8B0\uB97C \uB9CC\uB4E0\uB2E4\uACE0 \uC0DD\uAC01\uD574\uC694.',
    descEn: 'A newsletter published every single week since 2019. I believe consistency builds trust.',
  },
  {
    emoji: '\u2726',
    title: '\uD638\uAE30\uC2EC',
    titleEn: 'Curiosity',
    desc: '\uC0C8\uB85C\uC6B4 \uD50C\uB7AB\uD3FC, \uC0C8\uB85C\uC6B4 \uD3EC\uB9F7, \uC0C8\uB85C\uC6B4 \uC0AC\uB78C. \uBC30\uC6C0\uC744 \uBA48\uCD94\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC81C \uC6D0\uB3D9\uB825\uC785\uB2C8\uB2E4.',
    descEn: 'New platforms, new formats, new people \u2014 never stopping learning is what keeps me going.',
  },
];

const DEMO_HIGHLIGHTS: HighlightItem[] = [
  { label: '\uAD6C\uB3C5\uC790 \uD569\uC0B0', labelEn: 'Total Subscribers', value: '84,000+', valueEn: '84,000+' },
  { label: '\uD611\uC5C5 \uBE0C\uB79C\uB4DC', labelEn: 'Brand Collabs', value: '120+', valueEn: '120+' },
  { label: '\uB274\uC2A4\uB808\uD130 \uC5F0\uC18D \uBC1C\uD589', labelEn: 'Newsletter Streak', value: '312\uC8FC', valueEn: '312 Weeks' },
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '\uC774\uC9C0\uC6D0',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Jiwon Lee',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '\uCF58\uD150\uCE20\uB85C \uC138\uC0C1\uC744 \uC5F0\uACB0\uD558\uB294 \uD06C\uB9AC\uC5D0\uC774\uD130',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Creator who connects the world through content',
  heroImageUrl: process.env.NEXT_PUBLIC_HERO_IMAGE_URL || null,
  story:
    process.env.NEXT_PUBLIC_STORY ||
    '\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 \uC774\uC9C0\uC6D0\uC785\uB2C8\uB2E4. 5\uB144\uC0B4 \uB514\uC9C0\uD138 \uCF58\uD150\uCE20\uB97C \uB9CC\uB4E4\uBA70 \uBE0C\uB79C\uB4DC\uC640 \uC0AC\uB78C \uC0AC\uC774\uC758 \uB2E4\uB9AC\uB97C \uB193\uACE0 \uC788\uC5B4\uC694.',
  storyEn:
    process.env.NEXT_PUBLIC_STORY_EN ||
    "Hi, I'm Jiwon Lee. For the past five years I've been building bridges between brands and people through digital content.",
  values: parseJSON<ValueItem[]>(process.env.NEXT_PUBLIC_VALUES, DEMO_VALUES),
  highlights: parseJSON<HighlightItem[]>(process.env.NEXT_PUBLIC_HIGHLIGHTS, DEMO_HIGHLIGHTS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, []),
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@jiwonlee.kr',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
    { platform: 'youtube', url: 'https://youtube.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
  ]),
  gradientFrom: '#ee5b2b',
  gradientTo: '#f59e0b',
  parallaxEnabled: true,
  fontFamily: 'Pretendard',
  galleryColumns: '3',
  designPreset: 'creator',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
