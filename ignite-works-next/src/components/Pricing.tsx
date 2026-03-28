import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  description: string;
  bullets: string[];
  recommended?: boolean;
};

const plans: Plan[] = [
  {
    name: "シンプル",
    price: "from JPY 30,000",
    description:
      "まずは形にしたい方向け。1ページ構成や小規模サイトなど、必要最小限でスピーディに立ち上げます。",
    bullets: ["LP・小規模サイト", "スマホ対応", "お問い合わせ導線"],
  },
  {
    name: "スタンダード",
    price: "from JPY 50,000",
    description:
      "店舗の魅力をしっかり伝える標準プラン。複数ページ構成や写真・文言の整理まで含めた制作に対応します。",
    bullets: ["複数ページ構成", "コンテンツ整理", "更新しやすい設計"],
    recommended: true,
  },
  {
    name: "運用・管理",
    price: "JPY 10,000 / month",
    description:
      "公開後の更新・SNS連携・軽微な修正など、継続的にサイトを育てるための伴走プランです。",
    bullets: ["定期更新", "軽微な修正", "相談しやすい窓口"],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 text-center md:text-left flex flex-col h-full ${
        plan.recommended
          ? "ring-2 ring-red-600 ring-offset-2 ring-offset-[#fafafa]"
          : ""
      }`}
    >
      {plan.recommended && (
        <span className="absolute top-4 right-4 md:left-auto md:right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          おすすめ
        </span>
      )}

      <p className="text-xs font-semibold tracking-wider text-red-600 uppercase mb-1">
        Plan
      </p>
      <h3 className="text-xl font-bold text-[#111] pr-16 md:pr-0">{plan.name}</h3>
      <p className="mt-3 text-2xl font-bold text-[#111] tracking-tight">
        {plan.price}
      </p>

      <p className="mt-4 text-[15px] text-[#555] leading-[1.8] flex-1">
        {plan.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
        {plan.bullets.map((item) => (
          <span
            key={item}
            className="text-xs text-[#555] bg-gray-100 rounded-md px-2.5 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="pt-[100px] pb-[100px] border-t border-black/10">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-sm font-semibold tracking-wider text-red-600 mb-1 text-center md:text-left">
          料金の目安
        </p>
        <h2 className="text-3xl font-bold m-0 text-center md:text-left">
          料金プラン
        </h2>
        <p className="mt-2 text-[#666] text-center md:text-left">
          ご予算・ご要望に合わせて柔軟にご提案します。まずはお気軽にご相談ください。
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center md:text-left space-y-2">
          <p className="text-sm text-[#666]">
            ※内容・規模によりお見積りいたします
          </p>
          <p className="text-[15px] font-medium text-[#111]">
            まずはご相談ください
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-block bg-black text-white rounded-lg px-5 py-3 no-underline text-sm font-semibold hover:bg-black/80 transition-colors"
          >
            お問い合わせへ
          </Link>
        </div>
      </div>
    </section>
  );
}
