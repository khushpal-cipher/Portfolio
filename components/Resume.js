/* ── Resume — 3-column editorial bento ── */

const experiences = [
  {
    title: "Hackathon Participant",
    org:   "Alta School of Technology",
    date:  "April 2026",
    desc:  "Built an AI credit risk evaluation system in a team. Scored corporate credit 0–100 using weighted financial, compliance, and cash-flow signals.",
    tags:  ["Hackathon", "Full-Stack", "AI"],
  },
  {
    title: "Independent Builder",
    org:   "Personal Project",
    date:  "2025 – 2026",
    desc:  "Engineered a real-time crash detection pipeline from scratch using computer vision and deep learning. Runs at 13 fps on CPU.",
    tags:  ["ML / CV", "Python", "Solo"],
  },
];

const technical  = ["Python", "JavaScript", "React", "FastAPI", "TensorFlow", "Java", "HTML", "CSS"];
const aiSkills   = ["Computer Vision", "Deep Learning", "LSTM", "YOLOv8", "MobileNetV2", "OpenCV", "Keras"];
const tools      = ["Git", "Google Colab", "Vercel", "VS Code"];
const softSkills = [
  "Builds first, documents after",
  "Comfortable working solo end-to-end",
  "Learns by shipping, not by studying",
  "Asks why before asking how",
];
const coursework = ["Machine Learning", "Data Structures", "Computer Vision", "Algorithms", "Neural Networks"];

const LB = "text-sm font-bold uppercase tracking-[0.14em] text-[#111111]/60";
const SL = "text-sm font-bold uppercase tracking-[0.1em] text-[#111111]";
const C  = "rounded-4xl bg-white";

function BluePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#1a1aff] text-white
                     text-[13px] font-bold uppercase tracking-wide px-3 py-1 whitespace-nowrap">
      {children}
    </span>
  );
}

function GhostPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-transparent text-[#111111]
                     border border-[#111111]/25 text-[13px] font-bold uppercase tracking-wide
                     px-3 py-1 whitespace-nowrap">
      {children}
    </span>
  );
}

function DatePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#111111]/6 text-[#111111]/60
                     border border-[#111111]/12 text-[13px] font-bold uppercase tracking-wide
                     px-3 py-1 whitespace-nowrap">
      {children}
    </span>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="w-full scroll-mt-16 px-4 md:px-8 py-16 md:py-24">
      <div data-reveal-group className="max-w-7xl mx-auto">

        {/* Section header */}
        <div data-reveal className="flex flex-wrap items-baseline gap-3 mb-8 pb-4 border-b border-[#111111]/15">
          <h2
            className="font-display font-black text-[#111111] tracking-[-0.03em]"
            style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}
          >
            Resume
          </h2>
          <span className={LB}>/ Experience &amp; Skills</span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── LEFT: Experience ── */}
          <div data-reveal className="flex flex-col gap-4">
            <h3 className={`${LB} px-2`}>Experience</h3>

            {experiences.map((exp, i) => (
              <div key={i} className={`${C} p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200`}>
                {/* Pill row — date + org */}
                <div className="flex flex-wrap gap-2">
                  <DatePill>{exp.date}</DatePill>
                  <DatePill>{exp.org}</DatePill>
                </div>

                <div>
                  <p className="font-display font-extrabold text-[#111111] text-lg mb-2">{exp.title}</p>
                  <p className="text-base text-[#111111]/80 leading-relaxed">{exp.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => <BluePill key={t}>{t}</BluePill>)}
                </div>
              </div>
            ))}
          </div>

          {/* ── MIDDLE: Expertise ── */}
          <div data-reveal className="flex flex-col gap-4">
            <h3 className={`${LB} px-2`}>Expertise</h3>

            <div className={`${C} p-5 flex flex-col gap-3`}>
              <span className={SL}>Technical</span>
              <div className="flex flex-wrap gap-1.5">
                {technical.map((s) => <GhostPill key={s}>{s}</GhostPill>)}
              </div>
            </div>

            <div className={`${C} p-5 flex flex-col gap-3`}>
              <span className={SL}>AI &amp; ML</span>
              <div className="flex flex-wrap gap-1.5">
                {aiSkills.map((s) => <GhostPill key={s}>{s}</GhostPill>)}
              </div>
            </div>

            <div className={`${C} p-5 flex flex-col gap-3`}>
              <span className={SL}>Tools</span>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((s) => <GhostPill key={s}>{s}</GhostPill>)}
              </div>
            </div>

            <div className={`${C} p-5 flex flex-col gap-3`}>
              <span className={SL}>How I Work</span>
              <ul className="flex flex-col gap-2">
                {softSkills.map((s) => (
                  <li key={s} className="text-base text-[#111111]/80">— {s}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Education ── */}
          <div data-reveal className="flex flex-col gap-4">
            <h3 className={`${LB} px-2`}>Education</h3>

            <div className={`${C} p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200`}>
              {/* Degree pills */}
              <div className="flex flex-wrap gap-2">
                <BluePill>Pursuing · 2nd Year</BluePill>
                <DatePill>2025 — Present</DatePill>
              </div>

              <div>
                <p className="font-display text-xl font-extrabold text-[#111111] leading-snug mb-1">
                  B.Tech — Computer Science (AI)
                </p>
                <p className="text-base text-[#111111]/75">Ajeenkya DY Patil University</p>
                <p className="text-base text-[#111111]/75">Pune, India</p>
              </div>

              <div className="pt-3 border-t border-[#111111]/10 flex flex-col gap-3">
                <span className={SL}>Relevant Coursework</span>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((c) => <GhostPill key={c}>{c}</GhostPill>)}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-4xl bg-[#111111] p-6">
              <p className="font-display text-lg font-extrabold leading-snug text-white">
                &ldquo;Building things outside the curriculum since year one.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
