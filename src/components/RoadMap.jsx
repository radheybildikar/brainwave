import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const roadmapData = [
  {
    id: 1,
    title: "Smart inbox triage",
    text: "Auto-categorize and prioritize incoming client emails by urgency",
    date: "June 2026",
    status: "done",
  },
  {
    id: 2,
    title: "Calendar negotiation",
    text: "Brainwave proposes meeting times directly with clients via email",
    date: "July 2026",
    status: "progress",
  },
  {
    id: 3,
    title: "Voice memo to brief",
    text: "Record a voice memo, get a structured client brief in seconds",
    date: "August 2026",
    status: "progress",
  },
  {
    id: 4,
    title: "Mobile app launch",
    text: "Manage every client relationship from your phone",
    date: "September 2026",
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {roadmapData.map(function (item, i) {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl bg-n-8 border border-n-2/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-accent2" />
              <div className="flex items-center justify-between mb-4 text-xs font-bold">
                <span className="text-n-4">{item.date}</span>
                <span
                  className={
                    item.status === "done" ? "text-success" : "text-gold"
                  }
                >
                  {item.status === "done" ? "✓ DONE" : "⚙ IN PROGRESS"}
                </span>
              </div>
              <h4 className="h4 mb-3">{item.title}</h4>
              <p className="text-sm text-n-3">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
