"use client";

const HASHTAGS = [
  "COMPUTER_VISION",
  "DEEP_LEARNING",
  "FULL_STACK_DEV",
  "AI_ENGINEERING",
  "OPEN_TO_INTERN",
];

const PORTFOLIO_ROWS = ["POR", "TFO", "LIO"];

/* KSC and Hire Me are fixed globally in PageController — Hero owns only the bento layout */
export default function Hero({ onSeeMore }) {
  return (
    <section className="h-screen overflow-hidden relative bg-[#F5F5F0]">

      {/* pt-16 clears the globally-fixed KSC / Hire Me labels */}
      <div className="h-full px-4 md:px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* ── LEFT COLUMN ─────────────────────────────────── */}
        <div className="rounded-4xl border border-[#1a1a1a]/20 bg-white
                        flex flex-col justify-between p-8 md:p-10 overflow-hidden relative">

          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/25">
            Portfolio / 2026
          </p>

          {/* Arrow — scaled down, stem raised to merge cleanly with arrowhead */}
          <div className="absolute top-[44%] right-6 -translate-y-full pointer-events-none">
            <svg
              width="155"
              height="155"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Single path: stem + arrowhead share the corner point at (122,122) */}
              <path
                d="M 8 8 L 122 122 M 62 122 L 122 122 L 122 62"
                stroke="#1a1a1a"
                strokeWidth="20"
                strokeLinecap="square"
                strokeLinejoin="miter"
                fill="none"
              />
            </svg>
          </div>

          {/* Hashtags — right-aligned, bold '#' + light body, lined-paper borders */}
          <ul className="flex flex-col">
            {HASHTAGS.map((tag) => (
              <li key={tag} className="w-full text-right border-b border-[#1a1a1a]/20 py-2.5">
                <span className="text-[16px] font-bold text-[#1a1a1a]">#</span>
                <span className="text-[16px] font-light text-[#1a1a1a] tracking-tight">
                  dark{tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT COLUMN: giant blue box ───────────────── */}
        <div className="rounded-4xl bg-[#1a1aff] relative overflow-hidden
                        flex flex-col justify-between p-8 md:p-10">

          {/* ── Geometric background texture ─────────────── */}
          {/* Large hollow circle — bleeds off the top-right corner */}
          <svg
            className="absolute -top-14 -right-14 opacity-[0.13] pointer-events-none"
            width="300" height="300" viewBox="0 0 300 300" fill="none"
          >
            <circle cx="150" cy="150" r="136" stroke="white" strokeWidth="22" />
          </svg>

          {/* Medium hollow circle — bleeds off the left edge, mid-height */}
          <svg
            className="absolute top-[28%] -left-16 opacity-[0.10] pointer-events-none"
            width="200" height="200" viewBox="0 0 200 200" fill="none"
          >
            <circle cx="100" cy="100" r="88" stroke="white" strokeWidth="16" />
          </svg>

          {/* Open triangle — center-right, tilted */}
          <svg
            className="absolute top-[18%] right-[12%] opacity-[0.09] pointer-events-none"
            style={{ transform: "rotate(12deg)" }}
            width="170" height="150" viewBox="0 0 170 150" fill="none"
          >
            <polygon points="85,8 162,142 8,142" stroke="white" strokeWidth="14" fill="none" />
          </svg>

          {/* Thick diagonal slash — lower-left region */}
          <svg
            className="absolute bottom-[22%] left-[8%] opacity-[0.11] pointer-events-none"
            style={{ transform: "rotate(-20deg)" }}
            width="140" height="20" viewBox="0 0 140 20" fill="none"
          >
            <line x1="0" y1="10" x2="140" y2="10" stroke="white" strokeWidth="14" strokeLinecap="square" />
          </svg>

          {/* Small hollow square — mid-left, rotated */}
          <svg
            className="absolute top-[48%] left-[18%] opacity-[0.10] pointer-events-none"
            style={{ transform: "rotate(22deg)" }}
            width="90" height="90" viewBox="0 0 90 90" fill="none"
          >
            <rect x="6" y="6" width="78" height="78" stroke="white" strokeWidth="12" fill="none" />
          </svg>

          {/* Availability badge — top-right, above decorations */}
          <div className="relative z-10 flex items-start justify-end">
            <span className="rounded-full text-[10px] font-black uppercase tracking-widest
                             px-3 py-1.5 bg-white/15 text-white border border-white/25">
              Available
            </span>
          </div>

          {/* PORTFOLIO — anchored bottom-right, chaotic overlapping letters */}
          <div
            className="absolute bottom-0 right-4 pointer-events-none select-none"
            style={{
              transform: "rotate(-15deg)",
              lineHeight: 0.75,
              letterSpacing: "-0.06em",
            }}
          >
            {PORTFOLIO_ROWS.map((chunk, rowIdx) => (
              <div key={rowIdx} className="flex">
                {chunk.split("").map((letter, j) => (
                  <span
                    key={`${rowIdx}-${j}`}
                    className="font-black text-white"
                    style={{ fontSize: "clamp(96px, 12vw, 160px)" }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* 2026 — bottom-left, z-10 floats above everything */}
          <div className="relative z-10">
            <span
              className="font-black text-white leading-none"
              style={{
                fontSize: "clamp(38px, 5vw, 72px)",
                letterSpacing: "-0.05em",
                opacity: 0.92,
              }}
            >
              2026
            </span>
          </div>
        </div>

      </div>

      {/* See More — anchored absolute bottom-right */}
      <button
        onClick={onSeeMore}
        className="absolute bottom-8 right-8 flex items-center gap-3 cursor-pointer
                   text-[11px] font-black uppercase tracking-[0.22em] text-[#1a1a1a]/55
                   hover:text-[#1a1a1a] transition-colors duration-100"
      >
        <span>See More</span>
        <span className="w-8 h-8 rounded-full border border-current
                          flex items-center justify-center text-base leading-none">
          ↓
        </span>
      </button>

    </section>
  );
}
