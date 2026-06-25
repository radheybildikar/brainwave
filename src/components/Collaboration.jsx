import { motion } from "framer-motion";
import Section from "./Section";

const collabContent = [
  {
    id: 1,
    title: "Shared task board",
    text: "Everyone on the team sees the same priorities, no status-update meetings needed",
  },
  {
    id: 2,
    title: "Client-safe by default",
    text: "Drafts stay internal until someone on your team approves and sends",
  },
  {
    id: 3,
    title: "Audit trail included",
    text: "See exactly what Brainwave drafted vs what a human edited, always",
  },
];

const orbitItems = ["EMAIL", "CALENDAR", "INVOICES", "NOTES"];

export default function Collaboration() {
  return (
    <Section id="collaboration" className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline block mb-4">Team workflow</span>
          <h2 className="h2 mb-6">
            One assistant, your{" "}
            <span className="text-gradient">whole team.</span>
          </h2>
          <p className="body-1 text-n-3 mb-8">
            Stop re-explaining context to teammates. Brainwave keeps every
            client's history, preferences, and open tasks in one place everyone
            can see.
          </p>

          <ul>
            {collabContent.map(function (item, i) {
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex gap-4 py-4 border-t border-primary/15"
                >
                  <span className="font-mono text-primary text-sm pt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h6 className="font-semibold mb-1">{item.title}</h6>
                    <p className="text-sm text-n-4">{item.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/20 rounded-full" />
            <div className="absolute inset-8 border border-dashed border-primary/15 rounded-full" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {orbitItems.map(function (label, i) {
                const angle = i * 90;
                return (
                  <div
                    key={label}
                    className="absolute w-20 h-12 -ml-10 -mt-6 border border-primary/40 bg-n-9 flex items-center justify-center font-mono text-[10px] tracking-wider text-primary"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(150px) rotate(-${angle}deg)`,
                      clipPath:
                        "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 30%)",
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </motion.div>

            <div
              className="relative w-36 h-36 border border-primary flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
              }}
            >
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary/5"
              />
              <span className="font-mono font-bold text-4xl text-primary relative z-10">
                B
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
