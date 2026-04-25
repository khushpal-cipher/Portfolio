"use client";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Crash Detection System",
    description:
      "Real-time crash detection pipeline. MobileNetV2 extracts features, LSTM reads sequences across 10 frames. 99.98% crash confidence on real dashcam footage.",
    category: ["ML/AI"],
    tech: ["Python", "TensorFlow", "YOLOv8", "OpenCV", "LSTM"],
    github: "https://github.com/khushpal-cipher/crash-detection-system",
    featured: true,
  },
  {
    id: "02",
    title: "AI Credit Risk Evaluator",
    description:
      "Ingests financial CSV data, scores corporate credit risk 0–100 using weighted signals, generates explainable reports. Built at Alta School of Technology hackathon.",
    category: ["Full-Stack", "ML/AI"],
    tech: ["React", "FastAPI", "Python", "OpenRouter"],
    github: "https://github.com/khushpal-cipher/AltaHackathon_backend",
  },
  {
    id: "03",
    title: "Drum Stick",
    description:
      "Browser-based drum machine built with vanilla JS. Deployed and live on Vercel.",
    category: ["Frontend"],
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/khushpal-cipher/drum-stick",
    live: "https://drum-stick-chi.vercel.app",
  },
  {
    id: "04",
    title: "Portfolio v1",
    description:
      "First portfolio site, hand-built from scratch with no frameworks. The one that started it all.",
    category: ["Frontend"],
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/khushpal-cipher/Project",
  },
];

const filters = ["All", "ML/AI", "Full-Stack", "Frontend"];

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="work" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-4"
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
            Work{" "}
            <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>
              / Projects
            </span>
          </h2>

          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`pill cursor-pointer ${active === f ? "pill-accent" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {filtered.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col md:flex-row md:items-start gap-4 py-6 transition-all duration-150 cursor-default"
      style={{
        borderBottom: "1.5px solid var(--border)",
        background: hovered ? "var(--bg-base)" : "transparent",
        paddingLeft: hovered ? "16px" : "0px",
        paddingRight: "12px",
        borderLeft: hovered ? `4px solid var(--accent)` : "4px solid transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Index number */}
      <span
        className="font-black leading-none transition-colors duration-150 min-w-[64px]"
        style={{
          fontSize: "clamp(36px, 4vw, 52px)",
          color: hovered ? "var(--accent)" : "#E0E0E0",
        }}
      >
        {project.id}
      </span>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3
            className="font-bold"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          {project.featured && (
            <span className="pill pill-accent" style={{ fontSize: 10 }}>
              Featured
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
          {project.category.map((c) => (
            <span key={c} className="pill pill-outline">{c}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-5 md:ml-4 items-start pt-1 shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors duration-150"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          GitHub ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  );
}
