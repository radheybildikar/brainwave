export default function Tagline({ className = "", children }) {
  return (
    <div className={`flex items-center justify-center gap-3 mb-8 ${className}`}>
      <span className="w-6 h-px bg-gradient-to-r from-primary to-transparent" />
      <span className="tagline">{children}</span>
      <span className="w-6 h-px bg-gradient-to-l from-primary to-transparent" />
    </div>
  );
}
