import Link from "next/link";

export default function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <p className="text-sm text-[#999] mb-2">Works</p>
      <h1 className="text-2xl font-bold mb-4">{params.slug}</h1>
      <p className="text-[#666] mb-8">詳細ページは準備中です。</p>
      <Link
        href="/#works"
        className="text-sm font-semibold text-white bg-black rounded-lg px-5 py-2.5 no-underline hover:bg-black/80 transition-colors"
      >
        ← 戻る
      </Link>
    </div>
  );
}
