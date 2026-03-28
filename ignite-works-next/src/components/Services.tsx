import Link from "next/link";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
};

const MonitorIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#10b981]">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#10b981]">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#10b981]">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const servicesData: Service[] = [
  {
    icon: <MonitorIcon />,
    title: "Web制作",
    description:
      "飲食店・個人事業向けに、見やすく・伝わりやすいWebサイトを制作します。",
    items: ["店舗サイト制作", "レスポンシブ対応", "メニュー設計", "更新しやすい構成"],
  },
  {
    icon: <PlayIcon />,
    title: "動画編集",
    description:
      "SNSやYouTube向けに、伝わる動画編集を行います。短尺動画にも対応します。",
    items: ["ショート動画編集", "飲食店動画", "テロップ調整", "導線設計"],
  },
  {
    icon: <SmartphoneIcon />,
    title: "SNS運用",
    description:
      "投稿設計・見せ方・導線を整理し、継続しやすいSNS運用をサポートします。",
    items: ["TikTok運用", "Instagram導線", "投稿改善", "継続運用サポート"],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="bg-white rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 text-center md:text-left">
      <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 mx-auto md:mx-0">
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-[#111]">{service.title}</h3>

      <p className="mt-3 text-[15px] text-[#555] leading-[1.8]">
        {service.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
        {service.items.map((item) => (
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

export default function Services() {
  return (
    <section id="services" className="pt-[100px] pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* ヘッダー */}
        <p className="text-sm font-semibold tracking-wider text-[#0f766e] mb-1 text-center md:text-left">
          できること
        </p>
        <h2 className="text-3xl font-bold m-0 text-center md:text-left">
          Services
        </h2>
        <p className="mt-2 text-[#666] text-center md:text-left">
          Web制作・動画編集・SNS運用を組み合わせ、店舗集客につながる導線を設計します。
        </p>

        {/* カードグリッド */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#555]">
            Web・動画・SNSをまとめて相談したい方は、お気軽にご連絡ください。
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-block bg-[#10b981] text-white rounded-lg px-5 py-3 no-underline text-sm font-semibold hover:bg-[#0d5f59] transition-colors shadow-sm"
          >
            相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
