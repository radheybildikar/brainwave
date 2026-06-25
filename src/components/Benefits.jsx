import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const benefits = [
  {
    id: "01",
    title: "Never miss a deadline",
    text: "Brainwave tracks every project deadline across all your clients and nudges you before things slip.",
    icon: "⏰",
  },
  {
    id: "02",
    title: "Inbox zero, actually",
    text: "Auto-drafts replies to client emails in your voice. You just review and hit send.",
    icon: "📥",
  },
  {
    id: "03",
    title: "Meetings into action items",
    text: "Drop in a call recording or notes — get a clean summary with next steps, automatically.",
    icon: "📝",
  },
  {
    id: "04",
    title: "Get paid on time",
    text: "Brainwave flags overdue invoices and drafts polite-but-firm follow-up messages for you.",
    icon: "💸",
  },
  {
    id: "05",
    title: "One view of every project",
    text: "Stop juggling Notion, Slack, and email. See what is due, for who, and what is blocking it.",
    icon: "🗂️",
  },
  {
    id: "06",
    title: "Works solo or with your team",
    text: "Whether it is just you or a 10-person team, everyone sees the same priorities.",
    icon: "🤝",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i) {
    return { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } };
  },
};

export default function Benefits() {
  return (
    <Section id="features">
      <Heading
        tagline="Why teams switch"
        title="Built for the work that eats your day"
      />

      <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 border border-primary/15 bg-primary/15">
        {benefits.map(function (item, i) {
          return (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative p-8 bg-n-9 hover:bg-n-8 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-mono text-xs text-primary/50 group-hover:text-primary transition-colors">
                  {item.id}
                </span>
              </div>
              <h5 className="h5 mb-3">{item.title}</h5>
              <p className="body-2 text-n-3">{item.text}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
