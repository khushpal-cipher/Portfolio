"use client";
const stack = ["Python", "JavaScript", "React", "FastAPI", "TensorFlow", "Java"];

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-28 pb-16 px-6 md:px-12">
      <div
        className="max-w-7xl mx-auto grid gap-3"
        style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
      >

        {/* ── Bio card (7 cols) ── */}
        <div
          className="bento-card fade-in flex flex-col gap-5 col-span-12 md:col-span-7"
          style={{ animationDelay: "0ms" }}
        >
          <span className="pill pill-accent self-start">Available for Internships</span>

          <h1
            className="font-black leading-none"
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Khushpal<br />Singh<br />Chouhan.
          </h1>

          <div className="flex flex-col gap-3 max-w-lg">
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
              I&apos;m a CS undergrad at Ajeenkya DY Patil University, Pune, specialising in AI.
              I don&apos;t have a job title yet — but I do have a crash detection system that
              identifies rear-end collisions at 99.98% confidence, running at 13 fps on a CPU.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
              I build things that feel like actual engineering: computer vision pipelines,
              AI-backed APIs, full-stack apps. Most of it started because I was curious,
              not because it was assigned.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
              Currently looking for an internship where I can stop building alone.
            </p>
          </div>

          <a
            href="#work"
            className="self-start px-6 py-3 rounded-full text-sm font-semibold transition-all duration-100"
            style={{ background: "var(--accent)", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            View My Work →
          </a>
        </div>

        {/* ── GitHub card (5 cols, dark) ── */}
        <a
          href="https://github.com/khushpal-cipher"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card bento-card-dark fade-in col-span-12 md:col-span-5 flex flex-col justify-between group"
          style={{ minHeight: 280, animationDelay: "40ms" }}
        >
          <div className="flex items-start justify-between">
            <span
              className="text-xs font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--text-muted)" }}
            >
              GitHub
            </span>
            <span
              className="text-xl transition-colors duration-150"
              style={{ color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            >
              ↗
            </span>
          </div>

          <div>
            <div
              className="font-black leading-none mb-2"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#fff", letterSpacing: "-0.02em" }}
            >
              khushpal-<br />cipher
            </div>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              5 public repos &nbsp;·&nbsp; Pull Shark
            </div>
          </div>

          <div className="text-xs uppercase tracking-widest" style={{ color: "#444" }}>
            github.com/khushpal-cipher
          </div>
        </a>

        {/* ── Location card (3 cols) ── */}
        <div
          className="bento-card fade-in col-span-6 md:col-span-3 flex flex-col gap-2"
          style={{ animationDelay: "80ms" }}
        >
          <span
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            Based In
          </span>
          <div className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Pune, India
          </div>
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>
            Open to remote
          </div>
        </div>

        {/* ── Stack snapshot (4 cols) ── */}
        <div
          className="bento-card fade-in col-span-6 md:col-span-4 flex flex-col gap-3"
          style={{ animationDelay: "120ms" }}
        >
          <span
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            Core Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </div>

        {/* ── LinkedIn card (2 cols, dark) ── */}
        <a
          href="https://www.linkedin.com/in/khushpal-singh-chouhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card bento-card-dark fade-in col-span-6 md:col-span-2 flex flex-col justify-between group"
          style={{ animationDelay: "160ms" }}
        >
          <span
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            LinkedIn
          </span>
          <span
            className="text-2xl self-end transition-colors duration-150 group-hover:text-[#0052FF]"
            style={{ color: "#fff" }}
          >
            ↗
          </span>
        </a>

        {/* ── Email card (3 cols) ── */}
        <a
          href="mailto:khushpal141@gmail.com"
          className="bento-card fade-in col-span-6 md:col-span-3 flex flex-col gap-2 group"
          style={{ animationDelay: "200ms" }}
        >
          <span
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--text-muted)" }}
          >
            Say Hello
          </span>
          <span
            className="font-semibold text-sm break-all transition-colors duration-150 group-hover:text-[#0052FF]"
            style={{ color: "var(--text-primary)" }}
          >
            khushpal141@gmail.com
          </span>
        </a>

      </div>
    </section>
  );
}
