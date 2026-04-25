"use client";

/* ─────────────────────────────────────────────────────────────
   PORTFOLIO is 9 letters → split into three rows of three:
     Row 0: P O R
     Row 1: T F O
     Row 2: L I O
   The entire block is rotated as a unit and centered in the
   blue card; overflow-hidden clips the edges cleanly.
───────────────────────────────────────────────────────────── */

const HASHTAGS = [
  "COMPUTER_VISION",
  "DEEP_LEARNING",
  "FULL_STACK_DEV",
  "AI_ENGINEERING",
  "OPEN_TO_INTERN",
];

const PORTFOLIO_ROWS = ["POR", "TFO", "LIO"];

export default function Hero({ onSeeMore }) {
  return (
    /*
     * h-screen + overflow-hidden locks the entire hero to exactly
     * one viewport height so nothing bleeds through.
     * relative is needed so the absolute "See More" btn can anchor here.
     */
    <section className="h-screen overflow-hidden relative bg-[#F5F5F0]">

      {/* ── 2-column bento grid ─────────────────────────────── */}
      {/*
       * pb-20 keeps the grid from overlapping the absolute See-More btn.
       * h-full makes both cards fill the remaining viewport height.
       */}
      <div className="h-full px-4 md:px-6 pt-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* ── LEFT COLUMN: hashtag pills ─────────────────── */}
        <div className="rounded-4xl border border-[#1a1a1a]/20 bg-white
                        flex flex-col justify-between p-8 md:p-10 overflow-hidden">

          {/* Subtle top label */}
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/25">
            Portfolio / 2026
          </p>

          {/* Hashtag pills — white bg, thin black wireframe border */}
          <ul className="flex flex-col gap-2.5">
            {HASHTAGS.map((tag) => (
              <li key={tag}>
                <span
                  className="inline-flex items-center rounded-full
                             bg-white border border-black/20
                             px-4 py-2 text-[13px] font-bold text-[#1a1a1a]
                             tracking-tight whitespace-nowrap"
                >
                  #dark{tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT COLUMN: giant blue box ───────────────── */}
        <div className="rounded-4xl bg-[#1a1aff] relative overflow-hidden
                        flex flex-col justify-between p-8 md:p-10">

          {/* Top row: white arrow (top-left) + availability badge (top-right) */}
          <div className="relative z-10 flex items-start justify-between">

            {/* Chunky diagonal arrow — white, moved from left col */}
            <svg
              width="72"
              height="72"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="18" y1="18" x2="125" y2="125"
                stroke="white" strokeWidth="22" strokeLinecap="square"
              />
              <polyline
                points="62,125 125,125 125,62"
                stroke="white" strokeWidth="22"
                strokeLinecap="square" strokeLinejoin="miter"
                fill="none"
              />
            </svg>

            {/* Availability badge */}
            <span className="rounded-full text-[10px] font-black uppercase tracking-widest
                             px-3 py-1.5 bg-white/15 text-white border border-white/25">
              Available
            </span>
          </div>

          {/* ── PORTFOLIO typography ────────────────────────
              3 rows (POR / TFO / LIO) stacked with tight line-height
              so the rows visibly overlap. The entire block is rotated
              −22 ° and centered in the card. overflow-hidden clips edges.
          ─────────────────────────────────────────────────── */}
          <div
            className="absolute inset-0 flex items-center justify-center
                        pointer-events-none select-none"
          >
            <div
              style={{
                transform: "rotate(-22deg)",
                lineHeight: 0.80,
                letterSpacing: "-0.04em",
              }}
            >
              {PORTFOLIO_ROWS.map((chunk, rowIdx) => (
                <div
                  key={rowIdx}
                  className="flex"
                  style={{ marginTop: rowIdx > 0 ? "-0.12em" : 0 }}
                >
                  {chunk.split("").map((letter, j) => (
                    <span
                      key={`${rowIdx}-${j}`}
                      className="font-black text-white"
                      style={{ fontSize: "clamp(72px, 8.5vw, 118px)" }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: 2026 heavy text (bottom-left) */}
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

      {/* ── See More — anchored absolute bottom-right ──────── */}
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
