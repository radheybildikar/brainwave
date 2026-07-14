import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h1 mb-4"
      >
        <span className="text-gradient">404</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="body-1 text-white/60 mb-8 max-w-sm"
      >
        Looks like this trip doesn't exist. Let's get you back on the map.
      </motion.p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </section>
  );
}
