"use client";
import { useState } from "react";

const LINKS = [
  { id: "about",  label: "About Me" },
  { id: "resume", label: "Resume"   },
  { id: "work",   label: "Work"     },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0] border-b border-[#1a1a1a]/20">
      <div className="max-w-7xl mx-auto h-14 flex items-center justify-center px-5 md:px-8">

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[11px] font-black uppercase tracking-[0.14em]
                         pb-0.5 text-[#1a1a1a]/45 hover:text-[#1a1a1a] transition-colors duration-100"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-black text-[#1a1a1a] w-8 h-8 flex items-center justify-center ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#1a1a1a]/20 flex flex-col gap-6 px-8 py-10">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-white
                         hover:text-[#1a1aff] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
