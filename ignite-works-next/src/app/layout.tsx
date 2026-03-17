import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "佐近 和洋 | Ignite Works ポートフォリオ",
  description:
    "飲食店のWeb制作・動画制作・SNS運用まで一気通貫。集客導線を設計し、継続改善まで伴走します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {/* 桜背景レイヤー（サイト全体） */}
        <div className="sakura-area" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`sakura sakura-${i + 1}`} />
          ))}
        </div>

        {/* 実コンテンツ */}
        <div className="app-root">{children}</div>
      </body>
    </html>
  );
}
