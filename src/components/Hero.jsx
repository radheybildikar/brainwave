import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Section from "./Section";
import Button from "./Button";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [query, setQuery] = useState("");

  return (
    <Section
      id="hero"
      className="pt-32 md:pt-40 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-ocean-glow pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest text-primary-light font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
          AI trip planning, in seconds
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h1 mb-6 max-w-5xl lg:text-6xl xl:text-7xl"
        >
          Tell us your dream trip.
          <br />
          We'll <span className="text-gradient">plan every detail.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-d1 max-w-2xl mb-10 text-n-3 lg:text-xl"
        >
          Describe your trip in plain language. Wayfare builds a full itinerary,
          finds the best prices, and adjusts in real time as plans change.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-2xl mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-2xl">
            <input
              type="text"
              value={query}
              onChange={function (e) {
                setQuery(e.target.value);
              }}
              placeholder="7 days in Japan, mid-range budget, love food and temples..."
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-n-4"
            />
            <Button href="#pricing" className="sm:w-auto">
              Plan it
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-card"
        >
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80"
            alt="Santorini Greece travel destination"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-n-9 via-n-9/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4"
          >
            <p className="text-sm font-semibold mb-1">📍 Santorini, Greece</p>
            <p className="text-xs text-n-3">
              5-day itinerary generated · $890 avg
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute top-6 right-6 glass rounded-2xl px-4 py-3"
          >
            <p className="text-xs text-n-3">Best time to book</p>
            <p className="text-lg font-bold text-gradient">Next 3 days</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
