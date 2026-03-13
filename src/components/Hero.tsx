import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-[120px] pb-[120px] max-lg:pt-[100px] max-lg:pb-[80px]">
      {/* 左カラム */}
      <div className="max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/img/logo/IGNITE-WORKS.1024.png"
          alt="Ignite Works ロゴ"
          width={1024}
          height={1024}
          className="w-[240px] h-auto max-lg:mx-auto"
          priority
        />

        <h1 className="mt-4 text-[40px] font-bold tracking-[0.05em] leading-tight text-[#111]">
          IGNITE WORKS
        </h1>

        <p className="mt-2 text-[24px] text-[#111]">
          佐近 和洋（Kazuhiro Sakon）
        </p>

        <p className="mt-6 leading-[1.8] text-[#333] max-w-[520px]">
          日々を積み上げ、ここぞで燃やす。
          <br />
          作って終わらせない、飲食店の&ldquo;売れる仕組み&rdquo;を設計・改善します。
        </p>

        <p className="mt-4 leading-[1.8] text-[#333] max-w-[520px]">
          飲食店のWeb制作・動画制作・SNS運用まで一気通貫。
          <br />
          集客導線を設計し、継続改善まで伴走します。
        </p>

        <div className="mt-8 flex gap-3 flex-wrap max-lg:justify-center">
          <Link
            href="#contact"
            className="inline-block bg-black text-white rounded-lg px-5 py-3 no-underline hover:bg-black/80 transition-colors"
          >
            相談する
          </Link>
          <Link
            href="#works"
            className="inline-block border border-[#ccc] rounded-lg px-5 py-3 no-underline text-[#111] hover:bg-black/5 transition-colors"
          >
            実績を見る
          </Link>
        </div>
      </div>

      {/* 右カラム */}
      <div className="relative max-lg:order-first max-lg:flex max-lg:justify-center">
        <Image
          src="/img/logo/IGNITE-WORKS-512.png"
          alt="Ignite Works アイコン"
          width={512}
          height={512}
          className="max-w-[520px] w-full rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          priority
        />
      </div>
    </section>
  );
}
