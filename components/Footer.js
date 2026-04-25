export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{ borderTop: "1.5px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>
          © 2026 Khushpal Singh Chouhan
        </span>
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>
          Built by hand. No templates.
        </span>
      </div>
    </footer>
  );
}
