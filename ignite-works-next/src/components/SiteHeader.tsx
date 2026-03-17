"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[100px] md:h-[150px] flex items-center justify-between px-4 md:px-5 bg-white shadow-[0_1px_10px_rgba(0,0,0,0.15)] z-50">
        <Link href="#top" aria-label="トップへ" onClick={handleScrollTop}>
          <Image
            src="/img/logo/IGNITE-WORKS-512.png"
            alt="Ignite Works ロゴ"
            width={512}
            height={512}
            className="h-[80px] md:h-[130px] w-auto object-contain"
          />
        </Link>

        {/* デスクトップナビ */}
        <nav aria-label="メインメニュー" className="hidden md:block">
          <ul className="flex gap-3.5 list-none m-0 p-0 text-base">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="no-underline text-[#111] px-3 py-2.5 rounded-[10px] hover:bg-black/5 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイル用ハンバーガー */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white shadow-sm"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block w-5 h-4">
            {/* 上の線 */}
            <span
              className={`absolute left-0 w-5 h-[2px] bg-[#111] rounded origin-center transition-all duration-200 ${
                menuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0 translate-y-0 rotate-0"
              }`}
            />
            {/* 真ん中の線 */}
            <span
              className={`absolute left-0 w-5 h-[2px] bg-[#111] rounded origin-center transition-all duration-200 ${
                menuOpen
                  ? "top-1/2 -translate-y-1/2 opacity-0"
                  : "top-1/2 -translate-y-1/2 opacity-100"
              }`}
            />
            {/* 下の線 */}
            <span
              className={`absolute left-0 w-5 h-[2px] bg-[#111] rounded origin-center transition-all duration-200 ${
                menuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0 translate-y-0 rotate-0"
              }`}
            />
          </span>
        </button>
      </header>

      {/* モバイルメニュー（ホシのキッチン風オーバーレイ） */}
      {menuOpen && (
        <nav
          aria-label="モバイルメニュー"
          className="fixed inset-0 z-50 md:hidden bg-white text-[#111]"
        >
          <div className="flex flex-col h-full">
            {/* 上部バー（ロゴ + 閉じるボタン） */}
            <div className="flex items-center justify-between px-4 pt-6 pb-4 border-b border-black/10">
              <Image
                src="/img/logo/IGNITE-WORKS-512.png"
                alt="Ignite Works ロゴ"
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />

              <button
                type="button"
                aria-label="メニューを閉じる"
                className="w-10 h-10 inline-flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative block w-6 h-6">
                  <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[#111] -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[#111] -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </span>
              </button>
            </div>

            {/* メニュー本体 */}
            <ul className="flex-1 flex flex-col justify-center gap-5 px-10 text-center text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block no-underline text-[#111]"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="block mb-1">{item.label}</span>
                    <span className="block mx-auto w-10 h-px bg-black/10" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* 右下のスクロールトップアイコン */}
      <button
        type="button"
        aria-label="ページの先頭へ戻る"
        onClick={handleScrollTop}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] p-1.5 md:p-2 hover:scale-105 transition-transform z-40 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src="/img/logo/IGNITE-WORKS.1024.png"
            alt="Ignite Works ロゴ"
            width={256}
            height={256}
            className="w-8 md:w-10 h-auto object-contain opacity-70"
          />
        </div>
      </button>
    </>
  );
}
