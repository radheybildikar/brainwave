import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const navigation = [
  { id: 1, title: "Destinations", url: "#destinations" },
  { id: 2, title: "How it works", url: "#how-it-works" },
  { id: 3, title: "Pricing", url: "#pricing" },
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
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center transition-all duration-500 ${scrolled ? "glass" : "bg-transparent"}`}
    >
      <div className="w-full max-w-screen-2xl px-6 lg:px-12 xl:px-20 flex items-center py-5">
        <a href="#hero" className="flex items-center gap-2 mr-auto group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-leaf shadow-glow-sm flex items-center justify-center text-lg"
          >
            ✈️
          </motion.div>
          <span className="font-bold text-lg group-hover:text-primary-light transition-colors">
            Brainwave
          </span>
        </a>

        <nav className="hidden lg:flex gap-8 ml-auto mr-8">
          {navigation.map(function (item) {
            return (
              <a
                key={item.id}
                href={item.url}
                className="text-sm font-medium text-n-2 hover:text-primary-light transition-colors"
                onClick={handleClick}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex gap-4">
          <Button href="#pricing">Plan my trip</Button>
        </div>

        <button
          onClick={toggleNavigation}
          className="lg:hidden p-2 rounded-full glass ml-auto"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-primary-light"
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
            className="lg:hidden absolute top-full left-0 right-0 glass px-5 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 max-w-screen-2xl mx-auto">
              {navigation.map(function (item) {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    className="text-sm text-n-2 hover:text-primary-light transition-colors py-2"
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
