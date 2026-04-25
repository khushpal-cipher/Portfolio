"use client";

/* ── Inline SVG icons ── */
function MailIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ── main ── */
export default function About() {
  return (
    <section id="about" className="py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* LEFT 1/3 — dark card */}
        <div className="rounded-4xl border border-[#1a1a1a]/20 bg-[#1a1a1a]
                        flex flex-col justify-between p-8 min-h-80">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-6">
              Hello, My name is
            </p>
            <h2
              className="font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(26px, 3.2vw, 44px)" }}
            >
              Khushpal<br />Singh<br />Chouhan.
            </h2>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <p className="text-sm text-white/50 leading-relaxed">
              CS undergrad at Ajeenkya DY Patil University, Pune — specialising in AI.
              I build computer vision pipelines, AI-backed APIs, and full-stack apps.
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Looking for an internship where I can stop building alone.
            </p>
            <span className="pill self-start">Open to Intern</span>
          </div>
        </div>

        {/* RIGHT 2/3 — stacked */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Introduction card */}
          <div className="rounded-4xl border border-[#1a1a1a]/20 bg-white p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/30 mb-4">
              Introduction
            </p>
            <p
              className="font-black text-[#1a1a1a] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(19px, 2.5vw, 34px)" }}
            >
              I don&apos;t have a job title yet — but I do have a crash
              detection system that identifies rear-end collisions at
              99.98% confidence, running at 13 fps on a CPU.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]/30 mb-2 px-1">
              Get In Touch
            </p>

            <div className="grid grid-cols-3 gap-4">

              {/* Card 1 — Email (solid black) */}
              <a
                href="mailto:khushpal141@gmail.com"
                className="rounded-4xl border border-[#1a1a1a]/20 bg-[#1a1a1a]
                           flex flex-col justify-between p-5 aspect-square group"
              >
                <MailIcon className="w-6 h-6 text-white" />
                <div>
                  <div className="border-t border-white/20 mb-3" />
                  <p className="text-[11px] font-bold text-white/60 leading-snug break-all
                                group-hover:text-white transition-colors duration-100">
                    khushpal141<br />@gmail.com
                  </p>
                </div>
              </a>

              {/* Card 2 — LinkedIn (solid blue) */}
              <a
                href="https://www.linkedin.com/in/khushpal-singh-chouhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-4xl border border-[#1a1aff] bg-[#1a1aff]
                           flex flex-col justify-between p-5 aspect-square group"
              >
                <LinkedInIcon className="w-6 h-6 text-white" />
                <div>
                  <div className="border-t border-white/20 mb-3" />
                  <p className="text-[11px] font-bold text-white/60 leading-snug
                                group-hover:text-white transition-colors duration-100">
                    khushpal-singh-<br />chouhan
                  </p>
                </div>
              </a>

              {/* Card 3 — GitHub (solid white) */}
              <a
                href="https://github.com/khushpal-cipher"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-4xl border border-[#1a1a1a]/20 bg-white
                           flex flex-col justify-between p-5 aspect-square group"
              >
                <GitHubIcon className="w-6 h-6 text-[#1a1a1a]" />
                <div>
                  <div className="border-t border-[#1a1a1a]/15 mb-3" />
                  <p className="text-[11px] font-bold text-[#1a1a1a]/50 leading-snug
                                group-hover:text-[#1a1a1a] transition-colors duration-100">
                    khushpal-<br />cipher
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
