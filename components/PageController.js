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

  /* ── View 1: Hero only ── */
  if (view === "home") {
    return <Hero onSeeMore={() => setView("about")} />;
  }

  /* ── View 2: isolated tab views ── */
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Nav activeView={view} setView={setView} />
      <main>
        {view === "about"  && <About />}
        {view === "resume" && <Resume />}
        {view === "work"   && <Work />}
      </main>
      <Footer />
    </div>
  );
}
