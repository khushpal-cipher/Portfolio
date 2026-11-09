"use client";
import Hero   from "./Hero";
import Nav    from "./Nav";
import About  from "./About";
import Resume from "./Resume";
import Work   from "./Work";
import Motion from "./Motion";

export default function PageController() {
  return (
    <>
      <Motion />
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
        <Work />
      </main>
    </>
  );
}
