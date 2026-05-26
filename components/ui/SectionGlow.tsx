/** Ambient radial glow behind sections */
export default function SectionGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute left-1/2 top-0 h-[480px] w-[min(100%,900px)] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,255,255,0.06) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
