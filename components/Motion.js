"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/* Page-wide motion layer: smooth scroll, entrances, scroll scenes and pointer effects.
   Content is visible without JS; every animation is skipped under prefers-reduced-motion. */
export default function Motion() {
  const dot = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // In-page links scroll through Lenis, clearing the fixed header
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target); // Lenis honours each section's scroll-margin-top (clears the fixed header)
      history.replaceState(null, "", a.getAttribute("href"));
    };
    document.addEventListener("click", onClick);

    const fine = window.matchMedia("(pointer: fine)").matches;
    const cleanups = [];

    const ctx = gsap.context(() => {
      /* ── Hero: letters tumble in and land ── */
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });
      tl.from(".hero-letter", {
        yPercent: -260,
        rotation: () => gsap.utils.random(-70, 70),
        opacity: 0,
        duration: 0.9,
        stagger: { each: 0.07, from: "random" },
      })
        .from("[data-hero-in]", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }, 0.15)
        .from(".hero-tag", { x: 40, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }, 0.3)
        .from("[data-follow-arrow]", { scale: 0, rotation: -90, duration: 0.8 }, 0.25);

      /* ── Signature scroll move: the blue panel recedes, letters lift away ── */
      gsap.to("[data-hero-panel]", {
        scale: 0.9,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-letters]", {
        yPercent: -35,
        rotation: -22,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
      });

      /* ── Staggered entrances for every section ── */
      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        gsap.from(group.querySelectorAll("[data-reveal]"), {
          y: 32,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      if (!fine) return;

      /* ── Pointer: cursor dot ── */
      const dx = gsap.quickTo(dot.current, "x", { duration: 0.25, ease: "power3" });
      const dy = gsap.quickTo(dot.current, "y", { duration: 0.25, ease: "power3" });

      /* ── Pointer: arrow turns toward the cursor ── */
      const arrow = document.querySelector("[data-follow-arrow]");
      const rot = arrow && gsap.quickTo(arrow, "rotation", { duration: 0.6, ease: "power3" });

      /* ── Pointer: hero shapes drift with depth ── */
      const shapes = gsap.utils.toArray("[data-depth]").map((el) => ({
        d: parseFloat(el.dataset.depth),
        x: gsap.quickTo(el, "x", { duration: 1, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 1, ease: "power3" }),
      }));

      const onMove = (e) => {
        dx(e.clientX);
        dy(e.clientY);
        if (rot) {
          const r = arrow.getBoundingClientRect();
          const a = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2));
          rot((a * 180) / Math.PI - 45); // the drawn arrow already points at 45°
        }
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        shapes.forEach((s) => { s.x(nx * s.d); s.y(ny * s.d); });
        dot.current.classList.toggle("is-hover", !!e.target.closest("a, button"));
      };
      window.addEventListener("pointermove", onMove);
      cleanups.push(() => window.removeEventListener("pointermove", onMove));

      /* ── Pointer: magnetic buttons ── */
      gsap.utils.toArray("[data-magnetic]").forEach((el) => {
        const mx = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const my = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
        const move = (e) => {
          const r = el.getBoundingClientRect();
          mx((e.clientX - (r.left + r.width / 2)) * 0.3);
          my((e.clientY - (r.top + r.height / 2)) * 0.3);
        };
        const leave = () => { mx(0); my(0); };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    });

    return () => {
      cleanups.forEach((f) => f());
      ctx.revert();
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <div ref={dot} className="cursor-dot" aria-hidden="true" />;
}
