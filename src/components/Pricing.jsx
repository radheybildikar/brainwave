import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import SignupForm from "./SignupForm";

const pricingPlans = [
  {
    id: 1,
    title: "SOLO",
    description: "For independent freelancers",
    price: "9",
    features: [
      "Up to 10 active clients",
      "Email drafting",
      "Deadline tracking",
      "1 GB storage",
    ],
  },
  {
    id: 2,
    title: "TEAM",
    description: "For small agencies",
    price: "29",
    features: [
      "Unlimited clients",
      "Meeting summaries",
      "Invoice follow-ups",
      "Shared task board",
      "Priority support",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "AGENCY",
    description: "For growing studios",
    price: null,
    features: [
      "Custom workflows",
      "Dedicated support",
      "Unlimited storage",
      "SLA guarantee",
    ],
  },
];

export default function Pricing() {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <Section id="pricing">
      <Heading
        tagline="Simple pricing"
        title="Pay for what you use, nothing else"
      />

      <div className="flex flex-wrap gap-px justify-center items-stretch border border-primary/15 bg-primary/15 max-w-5xl mx-auto">
        {pricingPlans.map(function (plan, i) {
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex-1 min-w-[280px] p-8 flex flex-col ${plan.highlight ? "bg-n-8" : "bg-n-9"}`}
            >
              {plan.highlight && (
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-primary animate-pulse-glow" />
              )}

              <span className="font-mono text-xs tracking-widest text-primary mb-2">
                {plan.title}
              </span>
              <p className="text-n-3 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold font-mono text-n-1">
                      ${plan.price}
                    </span>
                    <span className="text-n-4 font-mono text-sm">/mo</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold font-mono text-primary">
                    CUSTOM
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                {activeForm === plan.id ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 overflow-hidden"
                  >
                    <SignupForm
                      plan={plan.title}
                      onSuccess={function () {
                        setActiveForm(null);
                      }}
                    />
                  </motion.div>
                ) : (
                  <Button
                    onClick={function () {
                      if (plan.price) {
                        setActiveForm(plan.id);
                      } else {
                        window.location.href = "mailto:sales@brainwave.com";
                      }
                    }}
                    className="w-full mb-8 justify-center"
                    variant={plan.highlight ? "primary" : "outline"}
                  >
                    {plan.price ? "Get started" : "Contact sales"}
                  </Button>
                )}
              </AnimatePresence>

              <ul className="mt-auto">
                {plan.features.map(function (feature, idx) {
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 py-3 border-t border-primary/10 text-sm"
                    >
                      <span className="text-primary">›</span>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
