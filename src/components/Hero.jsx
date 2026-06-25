import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

  return (
    <Section
      id="hero"
      className="pt-32 md:pt-40 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-hero-glow pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="flex flex-col items-center text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            System status: built for freelancers &amp; teams
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h1 mb-6 max-w-4xl"
        >
          Stop drowning in admin work.
          <br />
          Start <span className="text-gradient">finishing client work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-d1 max-w-2xl mb-8 text-n-3"
        >
          Brainwave drafts client replies, tracks deadlines, summarizes
          meetings, and chases late invoices — so you spend your billable hours
          actually billing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Button href="#pricing">Start free trial</Button>
          <Button href="#features" variant="outline">
            See how it works
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="hud-corners relative glass p-1">
            <div className="relative overflow-hidden border border-primary/20">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
              </div>

              <div className="flex items-center gap-2 px-5 py-3 border-b border-primary/15 bg-n-9/60">
                <span className="w-2.5 h-2.5 bg-primary/60" />
                <span className="w-2.5 h-2.5 bg-accent/60" />
                <span className="w-2.5 h-2.5 bg-success/60" />
                <span className="ml-4 font-mono text-xs text-n-4 tracking-wider">
                  BRAINWAVE_TASKQUEUE.exe
                </span>
              </div>

              <div className="p-5 text-left">
                {[
                  {
                    icon: "✓",
                    color: "text-success",
                    text: "Drafted follow-up email to 3 overdue clients",
                    delay: 0.7,
                  },
                  {
                    icon: "✓",
                    color: "text-success",
                    text: "Summarized 45-min client call into 4 action items",
                    delay: 0.9,
                  },
                  {
                    icon: "⏳",
                    color: "text-primary",
                    text: "Generating this week's invoice summary...",
                    delay: 1.1,
                  },
                ].map(function (task, i) {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: task.delay }}
                      className="flex items-center gap-3 p-3 bg-n-9/60 border-l-2 border-primary/30 mb-3 last:mb-0 font-mono text-sm"
                    >
                      <span className={task.color}>{task.icon}</span>
                      <span className="text-n-2">{task.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
