const SKILLS = [
  {
    num: "01",
    title: "Web Design",
    desc: "Webサイト、バナーなどのデザイン制作。飲食店の導線を意識した設計を重視します。",
    tools: "Illustrator / Photoshop / XD",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "HTML/CSS/JavaScriptで再現。更新しやすい構造と規則性あるコーディングを心がけます。",
    tools: "VS Code",
  },
  {
    num: "03",
    title: "Video / SNS運用",
    desc: "短尺動画と運用設計。投稿→Web→来店の流れを整え、継続改善できる型を作ります。",
    tools: "Premiere Pro ほか",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-[#0f766e]/12">
      <header className="text-center md:text-left">
        <h2 className="text-[22px] font-bold m-0">Skills</h2>
        <p className="mt-1.5 text-[#444]">できること</p>
      </header>

      <div className="grid grid-cols-3 gap-4 mt-5 max-md:grid-cols-1 max-md:text-center">
        {SKILLS.map((s) => (
          <article
            key={s.num}
            className="border border-[#0f766e]/12 rounded-2xl p-4 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
          >
            <h3 className="font-bold m-0 mb-2">
              ({s.num}) {s.title}
            </h3>
            <p>{s.desc}</p>
            <p className="text-[#444] mt-2.5 text-sm">Tools：{s.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
