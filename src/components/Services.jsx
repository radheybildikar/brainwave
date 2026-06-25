import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import Generating from "./Generating";

const services = [
  {
    id: 1,
    title: "Smartest AI",
    description: "Brainwave unlocks the potential of AI-powered applications",
    features: [
      "Semantic search",
      "Smart categorization",
      "Predictive analytics",
    ],
  },
  {
    id: 2,
    title: "Photo Editing",
    description: "Empower your creativity with AI-driven photo enhancements",
    features: ["Auto enhancement", "Background removal", "Style transfer"],
  },
  {
    id: 3,
    title: "Secured Data",
    description:
      "Your data is encrypted and protected with military-grade security",
    features: [
      "End-to-end encryption",
      "Zero-knowledge storage",
      "Compliance ready",
    ],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Heading title="Generative AI made for creators" />
        </motion.div>

        <div className="relative grid gap-6 lg:grid-cols-2 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="relative min-h-96 p-8 bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-2">
                <h4 className="h4 mb-4">{service.title}</h4>
                <p className="body-2 text-n-3 mb-6">{service.description}</p>

                <ul>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 py-3 border-t border-n-6"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Generating className="absolute bottom-6 left-6 right-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
