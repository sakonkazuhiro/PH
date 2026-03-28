import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-14 border-t border-[#0f766e]/12">
      <header className="text-center md:text-left">
        <h2 className="text-[22px] font-bold m-0">About</h2>
        <p className="mt-1.5 text-[#444]">私について</p>
      </header>

      <div className="grid grid-cols-[320px_1fr] gap-6 mt-5 items-start max-md:grid-cols-1 max-md:text-center">
        <div>
          <Image
            src="/img/logo/IGNITE-WORKS.1024.png"
            alt="Ignite Works ロゴ"
            width={320}
            height={320}
            className="rounded-2xl w-full h-auto object-contain bg-gray-50"
          />
        </div>

        <div className="max-md:mt-4">
          <h3 className="text-[20px] font-bold m-0 mb-2 max-md:flex max-md:flex-col max-md:items-center">
            佐近 和洋{" "}
            <span className="font-normal text-[#555] ml-2 text-sm">
              Kazuhiro Sakon
            </span>
          </h3>
          <p className="whitespace-pre-line">
            {`1986年11月、東京都出身。
飲食業に約18年従事（調理・ホール）。
現場で培った「オペレーション」「回転」「メニュー構成」「導線設計」の理解を強みに、2024年6月よりWebデザイン/コーディングを学びました。
現在は飲食店特化でWeb制作・動画制作・SNS運用を一体で設計。
作って終わらせず、継続改善で売上につながる"売れる仕組み"を構築します。`}
          </p>
        </div>
      </div>
    </section>
  );
}
