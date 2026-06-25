import { motion } from "framer-motion";

export default function Button({
  className = "",
  href,
  onClick,
  children,
  px = "px-7",
  variant = "primary",
}) {
  const base = `relative inline-flex items-center justify-center h-11 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${px}`;

  const variants = {
    primary:
      "bg-primary text-n-10 font-bold shadow-glow-sm hover:shadow-glow clip-corners",
    outline:
      "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary",
    ghost: "text-n-3 hover:text-primary",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        {...motionProps}
        style={{
          clipPath:
            "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
        }}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      {...motionProps}
      style={{
        clipPath:
          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
