"use client";
import { useState, useEffect } from "react";

const links = ["about", "resume", "work"];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = links.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{
        background: "var(--bg-base)",
        borderBottom: "1.5px solid var(--border)",
      }}
    >
      {/* Logo */}
      <a
        href="#about"
        className="text-xl font-black tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        KSC
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="relative pb-1 text-sm font-medium uppercase tracking-widest transition-colors duration-150"
            style={{
              color: active === section ? "var(--text-primary)" : "var(--text-muted)",
            }}
          >
            {section}
            <span
              className="absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-150"
              style={{
                background: "var(--accent)",
                opacity: active === section ? 1 : 0,
              }}
            />
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:khushpal141@gmail.com"
        className="hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-100"
        style={{
          background: "var(--text-primary)",
          color: "#fff",
          border: "1.5px solid var(--text-primary)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--text-primary)";
          e.currentTarget.style.color = "#fff";
        }}
      >
        Hire Me →
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-lg font-black w-8 h-8 flex items-center justify-center"
        style={{ color: "var(--text-primary)" }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 right-0 flex flex-col gap-8 p-10 md:hidden"
          style={{ background: "#0D0D0D" }}
        >
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-widest"
              style={{ color: "#fff" }}
            >
              {section}
            </a>
          ))}
          <a
            href="mailto:khushpal141@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  );
}
