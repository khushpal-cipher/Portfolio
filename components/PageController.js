"use client";
import Hero   from "./Hero";
import Nav    from "./Nav";
import About  from "./About";
import Resume from "./Resume";
import Work   from "./Work";

export default function PageController() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* ── Global fixed corner elements ── */}
      <a
        href="#home"
        className="fixed top-6 left-6 z-100
                   text-sm font-black tracking-tight text-[#1a1a1a] uppercase
                   hover:text-[#1a1aff] transition-colors duration-100"
      >
        KSC
      </a>
      <a
        href="mailto:khushpal141@gmail.com"
        className="fixed top-6 right-6 z-100
                   inline-flex items-center gap-1 px-4 py-1.5 rounded-full
                   text-[11px] font-black uppercase tracking-wider
                   bg-[#1a1a1a] text-white hover:bg-[#1a1aff] transition-colors duration-100"
      >
        Hire Me →
      </a>

      {/* ── Fixed nav bar ── */}
      <Nav />

      {/* ── Snap sections ── */}
      <Hero />
      <About />
      <Resume />
      <Work />
    </div>
  );
}
