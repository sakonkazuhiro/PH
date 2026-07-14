import Image from "next/image";
import Link from "next/link";
import { worksData, type Work } from "@/data/works";

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
  const href = work.externalUrl ?? work.mapUrl ?? `/works/${work.slug}`;
  const isExternal = !!(work.externalUrl || work.mapUrl);
  const cardClass = `group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 no-underline text-inherit block ${
    isFeatured ? "md:col-span-2 lg:col-span-2" : ""
  }`;

  const cardContent = (
    <>
      {/* バッジ */}
      {work.badge && (
        <span className="absolute top-4 left-4 z-10 bg-[#10b981] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
        <span className="inline-block text-xs font-semibold text-[#0f766e] bg-emerald-50 px-2.5 py-1 rounded-md">
          {work.category}
        </span>

        <h3 className="mt-3 text-lg font-bold leading-snug text-[#111]">
          {work.title}
        </h3>

        <p className="mt-2 text-sm text-[#666] leading-relaxed">
          {work.description}
        </p>

        <p className="mt-3 text-xs text-[#999]">{work.scope}</p>

        {work.mapUrl && (
          <div className="mt-4 w-full overflow-hidden rounded-xl border border-[#0f766e]/15">
            <iframe
              src="https://maps.google.com/maps?q=%E3%83%9B%E3%82%B7%E3%81%AE%E3%82%AD%E3%83%83%E3%83%81%E3%83%B3&hl=ja&z=15&output=embed"
              title="ホシのキッチン Googleマップ"
              className="w-full h-[220px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}

        <span className="mt-4 inline-block text-sm font-semibold text-white bg-[#10b981] rounded-lg px-4 py-2 group-hover:bg-[#0d5f59] transition-colors shadow-sm">
          {work.mapUrl ? "地図を見る →" : work.externalUrl?.includes("instagram") ? "Instagramを見る →" : "詳細を見る →"}
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
        <p className="text-sm font-semibold tracking-wider text-[#0f766e] mb-1">
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
