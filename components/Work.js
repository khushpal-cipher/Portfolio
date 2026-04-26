"use client";
import { useState } from "react";
import Footer from "./Footer";

/* ── data ── */
const projects = [
  {
    id: "01",
    title: "Crash Detection System",
    desc:  "Real-time crash detection pipeline. MobileNetV2 extracts features, LSTM reads sequences across 10 frames. 99.98% crash confidence on real dashcam footage.",
    category: ["ML/AI"],
    tech:     ["Python", "TensorFlow", "YOLOv8", "OpenCV", "LSTM"],
    github:   "https://github.com/khushpal-cipher/crash-detection-system",
    featured: true,
  },
  {
    id: "02",
    title: "AI Credit Risk Evaluator",
    desc:  "Ingests financial CSV data, scores corporate credit risk 0–100 using weighted signals, generates explainable reports. Built at Alta School hackathon.",
    category: ["Full-Stack", "ML/AI"],
    tech:     ["React", "FastAPI", "Python", "OpenRouter"],
    github:   "https://github.com/khushpal-cipher/AltaHackathon_backend",
  },
  {
    id: "03",
    title: "Weather App",
    desc:  "Browser-based weather application that fetches and displays real-time conditions using a public weather API. Built with vanilla JavaScript.",
    category: ["Frontend"],
    tech:     ["JavaScript", "HTML", "CSS", "API"],
    github:   "https://github.com/khushpal-cipher/Project",
  },
];

const FILTERS = ["All", "ML/AI", "Full-Stack", "Frontend"];

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="work" className="min-h-screen snap-start snap-always w-full scroll-mt-14 py-6 px-4 md:px-8 pt-20 flex flex-col">
      <div className="max-w-7xl mx-auto flex-1">

        {/* Header + filters */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-4 pb-3 border-b border-[#1a1a1a]/15">
          <h2
            className="font-black text-[#1a1a1a] tracking-tight"
            style={{ fontSize: "clamp(26px, 3.8vw, 46px)" }}
          >
            Work{" "}
            <span className="font-light text-[#1a1a1a]/35">/ Projects</span>
          </h2>

          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-[10px] font-black uppercase
                            tracking-widest border transition-colors duration-100
                  ${active === f
                    ? "bg-[#1a1aff] text-white border-[#1a1aff]"
                    : "bg-transparent text-[#1a1a1a]/50 border-[#1a1a1a]/25 hover:bg-[#1a1aff] hover:text-white hover:border-[#1a1aff]"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Table of Contents list ── */}
        <ol className="flex flex-col">
          {filtered.map((p, idx) => (
            <li
              key={p.id}
              className="group flex gap-6 py-7 border-b border-[#1a1a1a]/10 last:border-b-0"
            >
              {/* Large number */}
              <span
                className="font-black text-[#1a1a1a]/15 leading-none shrink-0 select-none
                           group-hover:text-[#1a1aff] transition-colors duration-150"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05 }}
              >
                {idx + 1}.
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3 pt-1 flex-1">

                {/* Title — underlined, links to GitHub */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-[#1a1a1a] underline underline-offset-4 decoration-[#1a1a1a]/25
                               hover:text-[#1a1aff] hover:decoration-[#1a1aff] transition-colors duration-100"
                    style={{ fontSize: "clamp(17px, 2vw, 26px)" }}
                  >
                    {p.title}
                  </a>
                  {p.featured && (
                    <span className="inline-flex items-center rounded-full bg-[#1a1aff] text-white
                                     text-[10px] font-bold uppercase tracking-wide px-3 py-1">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#1a1a1a]/50 leading-relaxed max-w-2xl">
                  {p.desc}
                </p>

                {/* Tech stack pills — solid blue as specified */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-[#1a1aff] text-white
                                 text-[10px] font-bold uppercase tracking-wide px-4 py-1"
                    >
                      {t}
                    </span>
                  ))}
                  {p.category.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full bg-transparent text-[#1a1a1a]
                                 border border-[#1a1a1a]/25 text-[10px] font-bold uppercase
                                 tracking-wide px-4 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>

              </div>

              {/* GitHub link — right-aligned */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex shrink-0 self-start pt-2
                           text-[11px] font-black uppercase tracking-wider
                           text-[#1a1a1a]/30 hover:text-[#1a1aff] transition-colors duration-100"
              >
                GitHub ↗
              </a>
            </li>
          ))}
        </ol>

      </div>
      <Footer />
    </section>
  );
}
