const footerLinks = [
  { title: "Destinations", url: "#destinations" },
  { title: "How it works", url: "#how-it-works" },
  { title: "Pricing", url: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-n-2/10 py-10 flex justify-center">
      <div className="w-full max-w-screen-2xl px-6 lg:px-12 xl:px-20 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-n-4">
          © {new Date().getFullYear()} Brainwave. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm">
          {footerLinks.map(function (link, idx) {
            return (
              <a
                key={idx}
                href={link.url}
                className="text-n-4 hover:text-primary-light transition-colors"
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
