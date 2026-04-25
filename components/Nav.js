"use client";
import { useState } from "react";

const LINKS = [
  { id: "about",  label: "About Me" },
  { id: "resume", label: "Resume"   },
  { id: "work",   label: "Work"     },
];

/* KSC logo and Hire Me are globally fixed in PageController — Nav holds only section links */
export default function Nav({ activeView, setView }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F5F0] border-b border-[#1a1a1a]/20">
      <div className="max-w-7xl mx-auto h-14 flex items-center justify-center px-5 md:px-8">

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={`cursor-pointer text-[11px] font-black uppercase tracking-[0.14em]
                          pb-0.5 transition-colors duration-100 ${
                activeView === id
                  ? "text-[#1a1aff] border-b-2 border-[#1a1aff]"
                  : "text-[#1a1a1a]/45 hover:text-[#1a1a1a]"
              }`}
            >
              {label}
            </button>
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
            <button
              key={id}
              onClick={() => { setView(id); setOpen(false); }}
              className="text-2xl font-black uppercase tracking-widest text-white
                         hover:text-[#1a1aff] transition-colors text-left cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
