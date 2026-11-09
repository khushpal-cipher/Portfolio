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
    <header className="fixed top-0 left-0 right-0 z-50 bg-ground/90 border-b border-ink/15">
      <nav aria-label="Main" className="h-16 px-4 md:px-8 grid grid-cols-[1fr_auto_1fr] items-center">
        <a
          href="#home"
          className="justify-self-start font-display text-base font-black tracking-tight text-ink
                     hover:text-accent transition-colors duration-150"
          aria-label="Khushpal Singh Chouhan, back to top"
        >
          KSC
        </a>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-2">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink/60
                         hover:text-ink transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="md:hidden" />

        <div className="justify-self-end flex items-center gap-2">
          <a
            href="mailto:khushalsinghchouhan4@gmail.com"
            data-magnetic
            className="inline-flex items-center gap-1.5 min-h-11 px-5 rounded-full
                       text-[13px] font-bold uppercase tracking-wider
                       bg-ink text-white hover:bg-accent active:scale-95 transition-[background-color,transform] duration-150"
          >
            Hire Me <span aria-hidden="true">→</span>
          </a>

          {/* Mobile menu button — sits beside Hire Me, never under it */}
          <button
            className="md:hidden w-11 h-11 rounded-full border border-ink/20 flex flex-col items-center justify-center gap-1.5
                       active:scale-95 transition-transform"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform duration-200 ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-ink flex flex-col px-6 py-8">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-black uppercase text-white py-3
                         hover:text-accent active:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
