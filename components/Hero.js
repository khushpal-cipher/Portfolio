const HASHTAGS = [
  "COMPUTER_VISION",
  "DEEP_LEARNING",
  "FULL_STACK_DEV",
  "AI_ENGINEERING",
  "OPEN_TO_INTERN",
];

/* Each letter lands at its own angle, like blocks tipped onto a table */
const PORTFOLIO_ROWS = [
  [["P", -6, 0], ["O", 8, -4], ["R", -3, 2]],
  [["T", 10, 0], ["F", -8, 6], ["O", 4, -2]],
  [["L", -12, 2], ["I", 6, -4], ["O", -4, 0]],
];

/* Hollow shapes; data-depth = how far each drifts with the pointer (px) */
const SHAPES = [
  { cls: "-top-14 -right-14 w-[300px] opacity-[0.13]", d: 30, svg: <circle cx="150" cy="150" r="136" strokeWidth="22" />, vb: 300 },
  { cls: "top-[28%] -left-16 w-[200px] opacity-[0.10]", d: -20, svg: <circle cx="100" cy="100" r="88" strokeWidth="16" />, vb: 200 },
  { cls: "top-8 left-8 w-[180px] opacity-[0.15]", d: 40, svg: <circle cx="90" cy="90" r="78" strokeWidth="18" />, vb: 180 },
  { cls: "top-12 left-[38%] w-[110px] opacity-[0.10] rotate-45", d: -35, svg: <rect x="8" y="8" width="94" height="94" strokeWidth="13" />, vb: 110 },
  { cls: "top-[48%] left-[18%] w-[90px] opacity-[0.10] rotate-[22deg]", d: 25, svg: <rect x="6" y="6" width="78" height="78" strokeWidth="12" />, vb: 90 },
  { cls: "top-[14%] left-[56%] w-[70px] opacity-[0.11]", d: -50, svg: <circle cx="35" cy="35" r="28" strokeWidth="11" />, vb: 70 },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-svh flex flex-col px-4 md:px-8 pt-20 pb-4">
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 lg:gap-6">

        {/* ── LEFT: who + arrow + tags ── */}
        <div className="order-2 lg:order-1 flex flex-col justify-between gap-10 lg:py-4">
          <div>
            <h1
              data-hero-in
              className="font-display font-black text-ink leading-[0.95] tracking-[-0.03em]
                         text-[clamp(36px,8vw,60px)] lg:text-[clamp(30px,3.1vw,48px)]"
            >
              Khushpal Singh Chouhan
            </h1>
            <p data-hero-in className="mt-5 text-lg leading-snug text-ink/80 max-w-[34ch]">
              AI and full-stack developer. CS undergrad in Pune, building computer vision and AI-backed apps.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-end pb-4">
              <svg
                data-follow-arrow
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 text-ink"
                aria-hidden="true"
              >
                <path d="M5 5l14 14M10 19h9v-9" />
              </svg>
            </div>
            <ul aria-label="Focus areas">
              {HASHTAGS.map((tag) => (
                <li key={tag} className="hero-tag text-right border-b border-ink/20 py-2.5">
                  <span className="text-lg font-bold text-ink">#</span>
                  <span className="text-lg font-light text-ink tracking-tight">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT: the blue panel ── */}
        <div
          data-hero-panel
          className="order-1 lg:order-2 rounded-4xl bg-accent relative overflow-hidden h-[64svh] min-h-[420px] lg:h-auto lg:min-h-[520px]"
          style={{ containerType: "size" }}
        >
          {SHAPES.map((s, i) => (
            <div key={i} data-depth={s.d} className={`absolute pointer-events-none ${s.cls}`} aria-hidden="true">
              <svg viewBox={`0 0 ${s.vb} ${s.vb}`} fill="none" stroke="white" className="w-full h-auto">{s.svg}</svg>
            </div>
          ))}

          <span
            data-hero-in
            className="absolute top-5 right-5 lg:top-8 lg:right-8 z-10 inline-flex items-center gap-2 rounded-full
                       text-[13px] font-bold uppercase tracking-widest px-4 py-2 bg-white/15 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Available
          </span>

          <p className="sr-only">Portfolio 2026</p>

          {/* PORTFOLIO — sized from the panel, never from the screen */}
          <div
            data-hero-letters
            aria-hidden="true"
            className="absolute bottom-[7%] lg:bottom-[3%] right-[4%] select-none font-display font-black text-white origin-bottom-right
                       text-[min(25cqw,22cqh)] lg:text-[min(16cqw,24cqh)]"
            style={{ lineHeight: 0.84, transform: "rotate(-12deg)" }}
          >
            {PORTFOLIO_ROWS.map((row, r) => (
              <div key={r} className="flex">
                {row.map(([ch, rot, y], j) => (
                  <span
                    key={j}
                    className="hero-letter inline-block"
                    style={{ transform: `rotate(${rot}deg) translateY(${y}%)` }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* 2026 — bottom-left */}
          <div data-hero-in className="absolute top-5 left-5 lg:top-auto lg:bottom-8 lg:left-8 z-10 flex items-end gap-3" aria-hidden="true">
            <span
              className="font-display font-black text-white leading-none tracking-[-0.04em]"
              style={{ fontSize: "min(9cqw, 12cqh)" }}
            >
              2026
            </span>
            <span className="h-[1.6cqh] w-[12cqw] bg-white mb-[1.4cqh]" />
          </div>
        </div>
      </div>

      {/* See More */}
      <div className="flex justify-end pt-4">
        <a
          href="#about"
          data-magnetic
          className="group flex items-center gap-3 min-h-11 text-sm font-bold uppercase tracking-[0.2em] text-ink/70
                     hover:text-ink transition-colors duration-150"
        >
          <span>See More</span>
          <span className="w-11 h-11 rounded-full border border-current flex items-center justify-center text-lg
                           group-hover:bg-accent group-hover:border-accent group-hover:text-white
                           transition-colors duration-150">
            <span className="group-hover:animate-bounce" aria-hidden="true">↓</span>
          </span>
        </a>
      </div>
    </section>
  );
}
