import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, worksData } from "@/data/works";

export function generateStaticParams() {
  return worksData
    .filter((work) => !work.externalUrl && !work.mapUrl)
    .map((work) => ({ slug: work.slug }));
}

export default function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-[110px] pb-20 px-5">
      <div className="max-w-[900px] mx-auto">
        <p className="text-sm font-semibold tracking-wider text-[#0f766e] mb-1">
          制作実績
        </p>
        <span className="inline-block text-xs font-semibold text-[#0f766e] bg-emerald-50 px-2.5 py-1 rounded-md">
          {work.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-[#111]">{work.title}</h1>
        <p className="mt-4 text-[#666] leading-relaxed">{work.description}</p>
        <p className="mt-3 text-sm text-[#999]">{work.scope}</p>

        {work.images && work.images.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {work.images.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-white"
              >
                <Image
                  src={src}
                  alt={work.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}

        <Link
          href="/#works"
          className="mt-10 inline-block text-sm font-semibold text-white bg-[#10b981] rounded-lg px-5 py-2.5 no-underline hover:bg-[#0d5f59] transition-colors shadow-sm"
        >
          ← 制作物一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
