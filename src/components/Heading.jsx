import { motion } from "framer-motion";

export default function Heading({ title, tagline, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center text-center mb-16 ${className}`}
    >
      {tagline && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tagline mb-4"
        >
          {tagline}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h2 max-w-3xl lg:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
