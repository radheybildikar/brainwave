export default function Notification({ className = "", title }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-lg ${className}`}
    >
      <div className="flex-1">
        <h6 className="font-semibold text-sm">{title}</h6>
        <p className="text-xs text-n-4">Just now</p>
      </div>
    </div>
  );
}
