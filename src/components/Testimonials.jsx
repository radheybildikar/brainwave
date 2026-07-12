import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    trip: "Kerala, 6 days",
    quote:
      "Planned my entire honeymoon in 10 minutes. The itinerary felt like it was made by a friend who actually knew Kerala.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 2,
    name: "Marcus Chen",
    trip: "Rajasthan, 7 days",
    quote:
      "Caught a price drop alert and saved Rs 8,000. The re-planning feature saved my trip when my train got rescheduled.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    trip: "Himachal Pradesh, 4 days",
    quote:
      "I'm not a planner type at all, so this was perfect. Just described what I wanted and got a full plan back.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Heading tagline="Real travelers" title="Trips planned, memories made" />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map(function (t, i) {
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-2xl bg-n-8 border border-n-2/10"
            >
              <p className="body-2 text-n-2 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-n-4">{t.trip}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
