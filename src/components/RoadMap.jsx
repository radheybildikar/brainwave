import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const roadmapData = [
  {
    id: 1,
    title: "Smart inbox triage",
    text: "Auto-categorize and prioritize incoming client emails by urgency",
    date: "06.2026",
    status: "done",
  },
  {
    id: 2,
    title: "Calendar negotiation",
    text: "Brainwave proposes meeting times directly with clients via email",
    date: "07.2026",
    status: "progress",
  },
  {
    id: 3,
    title: "Voice memo to brief",
    text: "Record a voice memo, get a structured client brief in seconds",
    date: "08.2026",
    status: "progress",
  },
  {
    id: 4,
    title: "Mobile app launch",
    text: "Manage every client relationship from your phone",
    date: "09.2026",
    status: "progress",
  },
];

export default function RoadMap() {
  return (
    <Section id="roadmap">
      <Heading
        tagline="What's next"
        title="Roadmap built from real user requests"
      />

      <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4 border border-primary/15 bg-primary/15">
        {roadmapData.map(function (item, i) {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 bg-n-9 hover:bg-n-8 transition-colors"
            >
              <div className="flex items-center justify-between mb-5 font-mono text-xs">
                <span className="text-n-4">{item.date}</span>
                <span
                  className={
                    item.status === "done"
                      ? "text-success"
                      : "text-warn flex items-center gap-1.5"
                  }
                >
                  {item.status === "done" ? (
                    "[ DONE ]"
                  ) : (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="inline-block"
                      >
                        ⚙
                      </motion.span>
                      [ ACTIVE ]
                    </>
                  )}
                </span>
              </div>
              <h4 className="h4 mb-3 text-base">{item.title}</h4>
              <p className="text-sm text-n-3">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
