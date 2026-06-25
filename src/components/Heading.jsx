import { motion } from "framer-motion";

export default function Heading({ title, tagline, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center text-center mb-16 ${className}`}
    >
      {tagline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-primary/50" />
          <span className="tagline">{tagline}</span>
          <span className="w-8 h-px bg-primary/50" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h2 max-w-2xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
