import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const steps = [
  {
    id: 1,
    title: "Tell us your trip",
    text: "Describe your dates, budget, and vibe — beach relaxation, city exploring, food tours, anything.",
    icon: "💬",
  },
  {
    id: 2,
    title: "AI builds your itinerary",
    text: "Wayfare generates a day-by-day plan with flights, stays, and activities matched to you.",
    icon: "🤖",
  },
  {
    id: 3,
    title: "You travel, stress-free",
    text: "Real-time price alerts, local tips, and instant re-planning if something changes.",
    icon: "🧳",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Heading
        tagline="Simple by design"
        title="From idea to itinerary in 3 steps"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map(function (step, i) {
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center p-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-leaf/20 border border-primary/30 flex items-center justify-center text-4xl">
                {step.icon}
              </div>
              <span className="absolute top-4 right-4 lg:right-auto lg:left-1/2 lg:translate-x-12 font-bold text-3xl text-primary/20">
                0{i + 1}
              </span>
              <h4 className="h4 mb-3">{step.title}</h4>
              <p className="body-2 text-n-3">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
