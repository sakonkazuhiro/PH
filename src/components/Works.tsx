import Image from "next/image";
import Link from "next/link";

type Work = {
  slug: string;
  category: string;
  title: string;
  description: string;
  scope: string;
  thumbnail: string | null;
  featured?: boolean;
  badge?: string;
  externalUrl?: string;
};

const worksData: Work[] = [
  {
    slug: "hoshi-no-kitchen",
    category: "飲食店Web制作",
    title: "ホシのキッチン 公式サイト",
    description:
      "洋食レストランの公式サイトを制作。料理写真・導線設計・スマホ最適化を重視。",
    scope: "Web制作 / メニュー設計 / レスポンシブ対応",
    thumbnail: "/img/hoshi-screenshot.png",
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
  },
  {
    slug: "store-flow",
    category: "運用・改善",
    title: "店舗集客導線の改善",
    description:
      "Web・動画・SNSを組み合わせ、来店につながる導線を改善。",
    scope: "導線改善 / 情報整理 / 継続運用",
    thumbnail: null,
  },
];

function Placeholder({ tall }: { tall?: boolean }) {
  return (
    <div
      className={`w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${
        tall ? "h-[320px]" : "h-[200px]"
      }`}
    >
      <Image
        src="/img/logo/IGNITE-WORKS-512.png"
        alt="Ignite Works ロゴ"
        width={256}
        height={256}
        className="w-[120px] h-auto object-contain opacity-80"
      />
    </div>
  );
}

function WorkCard({ work }: { work: Work }) {
  const isFeatured = work.featured;
  const href = work.externalUrl ?? `/works/${work.slug}`;
  const isExternal = !!work.externalUrl;
  const cardClass = `group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 no-underline text-inherit block ${
    isFeatured ? "md:col-span-2 lg:col-span-2" : ""
  }`;

  const cardContent = (
    <>
      {/* バッジ */}
      {work.badge && (
        <span className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {work.badge}
        </span>
      )}

      {/* サムネイル */}
      <div className="overflow-hidden">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            width={800}
            height={isFeatured ? 520 : 400}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isFeatured ? "h-[320px]" : "h-[200px]"
            }`}
          />
        ) : (
          <Placeholder tall={isFeatured} />
        )}
      </div>

      {/* コンテンツ */}
      <div className="p-5 text-center md:text-left">
        <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
          {work.category}
        </span>

        <h3 className="mt-3 text-lg font-bold leading-snug text-[#111]">
          {work.title}
        </h3>

        <p className="mt-2 text-sm text-[#666] leading-relaxed">
          {work.description}
        </p>

        <p className="mt-3 text-xs text-[#999]">{work.scope}</p>

        <span className="mt-4 inline-block text-sm font-semibold text-white bg-black rounded-lg px-4 py-2 group-hover:bg-black/80 transition-colors">
          詳細を見る →
        </span>
      </div>
    </>
  );

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      {cardContent}
    </a>
  ) : (
    <Link href={href} className={cardClass}>
      {cardContent}
    </Link>
  );
}

export default function Works() {
  return (
    <section id="works" className="pt-[100px] pb-[100px]">
      {/* セクションヘッダー */}
      <div className="max-w-[1200px] mx-auto px-5 text-center md:text-left">
        <p className="text-sm font-semibold tracking-wider text-red-600 mb-1">
          制作実績
        </p>
        <h2 className="text-3xl font-bold m-0">Works</h2>
        <p className="mt-2 text-[#666]">
          制作したサイト・運用中の案件・改善実績を掲載しています。
        </p>
      </div>

      {/* カードグリッド */}
      <div className="max-w-[1200px] mx-auto px-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {worksData.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
