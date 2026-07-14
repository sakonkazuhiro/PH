const RAKUTEN_AD_URL =
  "https://rpx.a8.net/svt/ejp?a8mat=4B7UT7+E22GZ6+2HOM+6GJWZ&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa26070732933_4B7UT7_E22GZ6_2HOM_6GJWZ%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F";

export default function Footer() {
  return (
    <footer className="pt-10 mt-10 border-t border-white/15 text-white/95 pb-10 text-center bg-[#0f766e]">
      <small className="text-sm tracking-wide">&copy; Ignite Works</small>
      <p className="mt-4 px-5">
        <a
          href={RAKUTEN_AD_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="text-sm text-white/90 underline underline-offset-2 hover:text-white transition-colors"
        >
          日本最大級ショッピングサイト！お買い物なら楽天市場
        </a>
      </p>
    </footer>
  );
}
