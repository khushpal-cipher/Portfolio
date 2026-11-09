"use client";
import { useState } from "react";
import Footer from "./Footer";

/* ── data ── */
const projects = [
  {
    id: "00",
    title: "ExamEdge AI",
    desc:  "Multi-tenant AI learning platform for coaching institutes. Each institute gets a branded, database-isolated space with notes, a cited AI tutor, ranked tests and study material.",
    category: ["Full-Stack", "ML/AI"],
    tech:     ["TypeScript", "Next.js", "Supabase", "PostgreSQL"],
    github:   "https://github.com/khushpal-cipher/ExamEdge_ai",
    featured: true,
  },
  {
    id: "00b",
    title: "GeM Assistant",
    desc:  "Chat assistant that finds and analyses Government e-Marketplace bid documents against a seller profile, showing page and exact-quote evidence for every value.",
    category: ["Full-Stack", "ML/AI"],
    tech:     ["Python", "Playwright", "Groq", "Docker"],
    github:   "https://github.com/khushpal-cipher/GeM-Government-e-Marketplace-",
  },
  {
    id: "00c",
    title: "PassportPath",
    desc:  "AI-first rebuild of the Passport Seva portal: Gemini Vision pre-checks documents, a multilingual chat fills the form, and SLA breaches auto-draft a grievance. Build What Moves India Hackathon.",
    category: ["Full-Stack", "ML/AI"],
    tech:     ["Next.js", "MongoDB", "Clerk", "Gemini"],
    github:   "https://github.com/khushpal-cipher/Build-What-Moves-India-Hackathon",
  },
  {
    id: "00d",
    title: "Jan Ganana 2027",
    desc:  "Digital Census 2027 platform: self-enumeration simulator, state schedules, demographic charts and a Gemini fact-checking assistant in 22 languages. Google Prompt Wars.",
    category: ["Full-Stack", "ML/AI"],
    tech:     ["Next.js", "TypeScript", "Gemini", "Recharts"],
    github:   "https://github.com/khushpal-cipher/Prompt-Wars-ADYPU-by-Google-Developer-Groups",
  },
  {
    id: "01",
    title: "Crash Detection System",
    desc:  "Real-time crash detection pipeline. MobileNetV2 extracts features, LSTM reads sequences across 10 frames. 99.98% crash confidence on real dashcam footage.",
    category: ["ML/AI"],
    tech:     ["Python", "TensorFlow", "YOLOv8", "OpenCV", "LSTM"],
    github:   "https://github.com/khushpal-cipher/crash-detection-system",
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
    github:   "https://github.com/khushpal-cipher/Weather-app",
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
    <section id="work" className="w-full scroll-mt-16 px-4 md:px-8 py-16 md:py-24 flex flex-col">
      <div data-reveal-group className="max-w-7xl mx-auto flex-1 w-full">

        {/* Header + filters */}
        <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#111111]/15">
          <h2
            className="font-display font-black text-[#111111] tracking-[-0.03em]"
            style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}
          >
            Work{" "}
            <span className="font-semibold text-[#111111]/40">/ Projects</span>
          </h2>

          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`cursor-pointer rounded-full px-5 min-h-11 text-[13px] font-bold uppercase
                            tracking-widest border transition-[background-color,color,border-color,transform] duration-150 active:scale-95
                  ${active === f
                    ? "bg-[#1a1aff] text-white border-[#1a1aff]"
                    : "bg-transparent text-[#111111]/50 border-[#111111]/25 hover:bg-[#1a1aff] hover:text-white hover:border-[#1a1aff]"
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
              data-reveal
              className="group flex gap-4 md:gap-6 py-7 border-b border-[#111111]/10 last:border-b-0"
            >
              {/* Large number */}
              <span
                className="font-display font-black text-[#111111]/20 leading-none shrink-0 select-none
                           group-hover:text-[#1a1aff] transition-colors duration-200"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.05 }}
              >
                {idx + 1}.
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3 pt-1 flex-1 min-w-0 md:group-hover:translate-x-2 transition-transform duration-300">

                {/* Title — underlined, links to GitHub */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-extrabold text-[#111111] underline underline-offset-4 decoration-[#111111]/25
                               hover:text-[#1a1aff] hover:decoration-[#1a1aff] transition-colors duration-100"
                    style={{ fontSize: "clamp(17px, 2vw, 26px)" }}
                  >
                    {p.title}
                  </a>
                  {p.featured && (
                    <span className="inline-flex items-center rounded-full bg-[#1a1aff] text-white
                                     text-[13px] font-bold uppercase tracking-wide px-3 py-1">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-[#111111]/80 leading-relaxed max-w-[65ch]">
                  {p.desc}
                </p>

                {/* Tech stack pills — solid blue as specified */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-[#1a1aff] text-white
                                 text-[13px] font-bold uppercase tracking-wide px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                  {p.category.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full bg-transparent text-[#111111]
                                 border border-[#111111]/25 text-[13px] font-bold uppercase
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
                aria-label={`${p.title} on GitHub`}
                className="hidden md:flex shrink-0 self-start items-center min-h-11 px-2
                           text-[13px] font-bold uppercase tracking-wider
                           text-[#111111]/60 hover:text-[#1a1aff] transition-colors duration-150"
              >
                GitHub ↗
              </a>
            </li>
          ))}
        </ol>
        {filtered.length === 0 && (
          <p className="py-10 text-base text-[#111111]/70">No projects in this category yet.</p>
        )}

      </div>
      <Footer />
    </section>
  );
}
