const experiences = [
  {
    title: "Hackathon Participant",
    org: "Alta School of Technology",
    date: "April 2026",
    desc: "Built an AI credit risk evaluation system in a team. Scored corporate credit 0–100 using weighted financial, compliance, and cash-flow signals.",
    pills: ["Hackathon", "Full-Stack", "AI"],
  },
  {
    title: "Independent Builder",
    org: "Personal Project",
    date: "2025 – 2026",
    desc: "Engineered a real-time crash detection pipeline from scratch using computer vision and deep learning. Runs at 13 fps on CPU.",
    pills: ["ML / CV", "Python", "Solo"],
  },
];

const hardSkills = ["Python", "JavaScript", "React", "FastAPI", "TensorFlow", "Java", "HTML", "CSS"];
const aiSkills   = ["Computer Vision", "Deep Learning", "LSTM", "YOLOv8", "MobileNetV2", "OpenCV", "Keras"];
const tools      = ["Git", "Google Colab", "Vercel", "VS Code"];
const softSkills = [
  "Builds first, documents after",
  "Comfortable working solo end-to-end",
  "Learns by shipping, not by studying",
  "Asks why before asking how",
];
const coursework = ["Machine Learning", "Data Structures", "Computer Vision", "Algorithms", "Neural Networks"];

function SectionLabel({ children }) {
  return (
    <span
      className="text-xs font-medium uppercase tracking-[0.12em]"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </span>
  );
}

function SubLabel({ children }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-[0.1em]"
      style={{ color: "var(--text-primary)" }}
    >
      {children}
    </span>
  );
}

function PillRow({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="pill">{s}</span>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div
          className="flex items-baseline gap-4 mb-10 pb-4"
          style={{ borderBottom: "1.5px solid var(--border)" }}
        >
          <h2
            className="font-black"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Resume
          </h2>
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            / Experience &amp; Skills
          </span>
        </div>

        {/* 3-column bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* ── LEFT: Experience ── */}
          <div className="flex flex-col gap-3">
            <div className="bento-card">
              <SectionLabel>Experience</SectionLabel>
            </div>

            {experiences.map((exp, i) => (
              <div key={i} className="bento-card relative">
                {/* Timeline line */}
                <div
                  className="absolute left-8 top-0 bottom-0 w-[1.5px]"
                  style={{ background: "var(--border)", opacity: 0.2 }}
                />
                {/* Dot */}
                <span
                  className="absolute left-[26px] top-8 w-3 h-3 rounded-full"
                  style={{ background: "var(--text-primary)", zIndex: 1 }}
                />

                <div className="pl-8">
                  <div
                    className="text-xs mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.date}
                  </div>
                  <div
                    className="font-bold mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </div>
                  <div
                    className="text-sm mb-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.org}
                  </div>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.pills.map((p) => (
                      <span key={p} className="pill">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── MIDDLE: Skills ── */}
          <div className="flex flex-col gap-3">
            <div className="bento-card">
              <SectionLabel>Expertise</SectionLabel>
            </div>

            <div className="bento-card flex flex-col gap-3">
              <SubLabel>Technical</SubLabel>
              <PillRow items={hardSkills} />
            </div>

            <div className="bento-card flex flex-col gap-3">
              <SubLabel>AI &amp; ML</SubLabel>
              <PillRow items={aiSkills} />
            </div>

            <div className="bento-card flex flex-col gap-3">
              <SubLabel>Tools</SubLabel>
              <PillRow items={tools} />
            </div>

            <div className="bento-card flex flex-col gap-3">
              <SubLabel>How I Work</SubLabel>
              <ul className="flex flex-col gap-2">
                {softSkills.map((s) => (
                  <li
                    key={s}
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    — {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Education ── */}
          <div className="flex flex-col gap-3">
            <div className="bento-card">
              <SectionLabel>Education</SectionLabel>
            </div>

            <div className="bento-card flex flex-col gap-4">
              <div>
                <div
                  className="text-xl font-bold leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  B.Tech — Computer Science (AI)
                </div>
                <div className="text-sm mb-0.5" style={{ color: "var(--text-muted)" }}>
                  Ajeenkya DY Patil University
                </div>
                <div className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  Pune &nbsp;·&nbsp; 2025 — Present
                </div>
                <span className="pill pill-accent">Pursuing · 1st Year</span>
              </div>

              <div
                className="pt-4 flex flex-col gap-3"
                style={{ borderTop: "1.5px solid var(--border)" }}
              >
                <SubLabel>Relevant Coursework</SubLabel>
                <PillRow items={coursework} />
              </div>
            </div>

            {/* Quote card */}
            <div
              className="bento-card"
              style={{ background: "var(--bg-base)" }}
            >
              <p
                className="text-base font-semibold italic leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;Building things outside the curriculum since year one.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
