"use client";
import { useState } from "react";
import Hero   from "./Hero";
import Nav    from "./Nav";
import About  from "./About";
import Resume from "./Resume";
import Work   from "./Work";
import Footer from "./Footer";

export default function PageController() {
  const [view, setView] = useState("home");

  return (
    <>
      {/* ── Global fixed corner elements — present in every view ── */}
      <button
        onClick={() => setView("home")}
        className="fixed top-6 left-6 z-100
                   text-sm font-black tracking-tight text-[#1a1a1a] uppercase
                   hover:text-[#1a1aff] transition-colors duration-100 cursor-pointer"
      >
        KSC
      </button>
      <a
        href="mailto:khushpal141@gmail.com"
        className="fixed top-6 right-6 z-100
                   inline-flex items-center gap-1 px-4 py-1.5 rounded-full
                   text-[11px] font-black uppercase tracking-wider
                   bg-[#1a1a1a] text-white hover:bg-[#1a1aff] transition-colors duration-100"
      >
        Hire Me →
      </a>

      {/* ── Views ── */}
      {view === "home" && (
        <Hero onSeeMore={() => setView("about")} />
      )}

      {view !== "home" && (
        <div className="min-h-screen flex flex-col bg-[#F5F5F0]">
          <Nav activeView={view} setView={setView} />
          <main className="flex-1">
            {view === "about"  && <About />}
            {view === "resume" && <Resume />}
            {view === "work"   && <Work />}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
