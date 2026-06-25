export default function Generating({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 bg-n-8/80 backdrop-blur rounded-lg ${className}`}
    >
      <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      <span className="text-sm text-n-1">AI is generating</span>
    </div>
  );
}
