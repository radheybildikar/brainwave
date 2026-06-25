const footerLinks = [
  { title: "Features", url: "#features" },
  { title: "Pricing", url: "#pricing" },
  { title: "Roadmap", url: "#roadmap" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/15 py-10 flex justify-center">
      <div className="w-full max-w-7xl px-5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm font-mono text-n-4">
          © {new Date().getFullYear()} BRAINWAVE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-sm font-mono">
          {footerLinks.map(function (link, idx) {
            return (
              <a
                key={idx}
                href={link.url}
                className="text-n-4 hover:text-primary transition-colors"
              >
                {link.title.toUpperCase()}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
