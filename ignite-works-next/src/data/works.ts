export type Work = {
  slug: string;
  category: string;
  title: string;
  description: string;
  scope: string;
  thumbnail: string | null;
  images?: string[];
  featured?: boolean;
  badge?: string;
  externalUrl?: string;
  mapUrl?: string;
};

export const worksData: Work[] = [
  {
    slug: "hoshi-no-kitchen",
    category: "飲食店Web制作",
    title: "ホシのキッチン 公式サイト",
    description:
      "洋食レストランの公式サイトを制作。料理写真・導線設計・スマホ最適化を重視。",
    scope: "Web制作 / メニュー設計 / レスポンシブ対応",
    thumbnail: "/img/logo/hoshi-screenshot.png",
    featured: true,
    badge: "現在制作・運用中",
    externalUrl: "https://srm-rho.vercel.app/",
  },
  {
    slug: "sns-support",
    category: "SNS運用・動画",
    title: "飲食店向けSNS運用サポート",
    description:
      "TikTok・YouTube・Instagram向けに動画導線と投稿設計を実施。",
    scope: "動画編集 / 投稿設計 / SNS運用",
    thumbnail: null,
    externalUrl: "https://www.instagram.com/hoshinokitchen2286",
  },
  {
    slug: "store-flow",
    category: "運用・改善",
    title: "店舗集客導線の改善",
    description:
      "ホシのキッチンを対象に、Web・動画・SNSを組み合わせ来店につながる導線を改善。",
    scope: "導線改善 / 情報整理 / 継続運用",
    thumbnail: null,
    mapUrl: "https://www.google.com/maps/place/ホシのキッチン/",
  },
  {
    slug: "production-images",
    category: "制作画像",
    title: "制作画像",
    description: "制作した画像・LPデザインなどの一部を掲載しています。",
    scope: "画像制作 / LPデザイン",
    thumbnail: null,
    images: ["/img/logo/100.png", "/img/logo/hosiLP.png"],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return worksData.find((work) => work.slug === slug);
}
