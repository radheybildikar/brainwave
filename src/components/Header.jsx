import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const navigation = [
  { id: 1, title: "Features", url: "#features" },
  { id: 2, title: "Pricing", url: "#pricing" },
  { id: 3, title: "Roadmap", url: "#roadmap" },
];

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavigation = () => setOpenNavigation((prev) => !prev);
  const handleClick = () => setOpenNavigation(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center transition-all duration-500 ${scrolled ? "glass border-b border-primary/10" : "bg-transparent"}`}
    >
      <div className="w-full max-w-7xl px-5 flex items-center py-4">
        <a href="#hero" className="flex items-center gap-2 mr-auto group">
          <div
            className="relative w-9 h-9 border border-primary/50 flex items-center justify-center"
            style={{
              clipPath:
                "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)",
            }}
          >
            <span className="font-mono font-bold text-primary text-sm">B</span>
          </div>
          <span className="font-mono font-bold text-lg hidden sm:inline group-hover:text-primary transition-colors">
            BRAINWAVE
          </span>
        </a>

        <nav className="hidden lg:flex gap-8 ml-auto mr-8">
          {navigation.map(function (item) {
            const linkClasses =
              "relative text-sm uppercase font-mono tracking-wider text-n-3 hover:text-primary transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-[1px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300";
            return (
              <a
                key={item.id}
                href={item.url}
                className={linkClasses}
                onClick={handleClick}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex gap-4">
          <Button href="#signup">Get Started</Button>
        </div>

        <button
          onClick={toggleNavigation}
          className="lg:hidden p-2 border border-primary/30 ml-auto"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                openNavigation
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3 6h18M3 12h18M3 18h18"
              }
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {openNavigation && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-primary/10 px-5 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
              {navigation.map(function (item) {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    className="text-sm font-mono uppercase text-n-3 hover:text-primary transition-colors py-2"
                    onClick={handleClick}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
