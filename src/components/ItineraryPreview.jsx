import { motion } from "framer-motion";
import Section from "./Section";

const itineraryDays = [
  {
    day: "Day 1",
    title: "Arrival & Backwaters",
    activities: [
      "Check in to houseboat stay",
      "Sunset cruise on Vembanad Lake",
      "Dinner with local seafood thali",
    ],
  },
  {
    day: "Day 2",
    title: "Village & Culture",
    activities: [
      "Village walk through paddy fields",
      "Ayurvedic massage session",
      "Kathakali dance performance",
    ],
  },
  {
    day: "Day 3",
    title: "Hills & Relaxation",
    activities: [
      "Drive up to Munnar tea gardens",
      "Spice plantation tour",
      "Free evening",
    ],
  },
];

export default function ItineraryPreview() {
  return (
    <Section id="itinerary">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tagline block mb-4">See it in action</span>
          <h2 className="h2 mb-6">
            A full itinerary,{" "}
            <span className="text-gradient">built in seconds.</span>
          </h2>
          <p className="body-1 text-n-3 mb-8">
            No more 20 open tabs comparing routes and stays. Brainwave hands you
            a day-by-day plan you can edit and share — matched to your budget
            and travel style.
          </p>
          <ul className="space-y-3">
            {[
              "Curated stays and local pricing",
              "Local guide recommendations",
              "Editable, shareable day plans",
            ].map(function (text, i) {
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-leaf flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-sm text-n-2">{text}</span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h5 className="font-bold">Kerala Backwaters Trip</h5>
            <span className="text-xs px-3 py-1 rounded-full bg-leaf/20 text-leaf">
              5 days planned
            </span>
          </div>

          {itineraryDays.map(function (d, i) {
            return (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="mb-4 last:mb-0 p-4 rounded-xl bg-n-8/60 border border-n-2/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary-light">
                    {d.day}
                  </span>
                  <span className="text-sm font-semibold">{d.title}</span>
                </div>
                <ul className="space-y-1">
                  {d.activities.map(function (act, idx) {
                    return (
                      <li
                        key={idx}
                        className="text-xs text-n-3 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {act}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
