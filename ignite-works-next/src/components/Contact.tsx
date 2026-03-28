const SNS_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kazuhiro.sakon/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gakuoni35",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@GokudouOnigiri",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-[#0f766e]/12">
      <header className="text-center md:text-left">
        <h2 className="text-[22px] font-bold m-0">Contact</h2>
        <p className="mt-1.5 text-[#444]">お問い合わせ</p>
      </header>

      <div className="mt-5 max-md:text-center">
        <p>ご相談は以下のいずれかからお願いします。</p>

        <div className="mt-6 flex flex-col gap-5">
          {/* Mail */}
          <div className="max-md:inline-block">
            <p className="text-xs font-semibold tracking-wider text-[#999] uppercase mb-1">
              Mail
            </p>
            <a
              href="mailto:lunatic5273@gmail.com"
              className="text-[#111] hover:text-[#10b981] transition-colors no-underline hover:underline"
            >
              lunatic5273@gmail.com
            </a>
          </div>

          {/* SNS */}
          <div className="max-md:inline-block">
            <p className="text-xs font-semibold tracking-wider text-[#999] uppercase mb-1">
              SNS
            </p>
            <div className="flex gap-4 flex-wrap max-md:justify-center">
              {SNS_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] hover:text-[#10b981] transition-colors no-underline hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
