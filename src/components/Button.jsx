import { motion } from "framer-motion";

export default function Button({
  className = "",
  href,
  onClick,
  children,
  px = "px-8",
  variant = "primary",
}) {
  const base = `relative inline-flex items-center justify-center h-12 font-semibold rounded-full transition-all duration-300 ${px}`;

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white shadow-glow-sm hover:shadow-glow",
    outline:
      "border border-n-2/20 text-n-1 hover:border-primary hover:text-primary-light",
    ghost: "text-n-3 hover:text-primary-light",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        {...motionProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} onClick={onClick} {...motionProps}>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
