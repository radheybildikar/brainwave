import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import SignupForm from "./SignupForm";

const pricingPlans = [
  {
    id: 1,
    title: "Explorer",
    description: "For solo trips",
    price: "700",
    features: [
      "1 itinerary per month",
      "Basic AI planning",
      "Price alerts",
      "Community support",
    ],
  },
  {
    id: 2,
    title: "Voyager",
    description: "For frequent travelers",
    price: "1200",
    features: [
      "Unlimited itineraries",
      "Advanced AI planning",
      "Real-time re-planning",
      "Priority support",
      "Group trip planning",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Agency",
    description: "For travel agencies",
    price: null,
    features: [
      "White-label option",
      "Bulk itinerary generation",
      "Dedicated support",
      "API access",
    ],
  },
];

export default function Pricing() {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <Section id="pricing">
      <Heading tagline="Simple pricing" title="Plan your next trip for free" />

      <div className="flex flex-wrap gap-6 justify-center items-stretch max-w-6xl mx-auto">
        {pricingPlans.map(function (plan, i) {
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative flex-1 min-w-[280px] p-8 lg:p-10 rounded-3xl flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-primary/20 to-n-8 border-2 border-primary shadow-glow"
                  : "bg-n-8 border border-n-2/10"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-leaf text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h4 className="h4 mb-2">{plan.title}</h4>
              <p className="text-n-3 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gradient">
                      ${plan.price}
                    </span>
                    <span className="text-n-4">/month</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gradient">
                    Custom pricing
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
                      if (plan.price !== null) {
                        setActiveForm(plan.id);
                      } else {
                        window.location.href = "mailto:sales@wayfare.com";
                      }
                    }}
                    className="w-full mb-8 justify-center"
                    variant={plan.highlight ? "primary" : "outline"}
                  >
                    {plan.price !== null ? "Get Started" : "Contact Sales"}
                  </Button>
                )}
              </AnimatePresence>

              <ul className="mt-auto">
                {plan.features.map(function (feature, idx) {
                  return (
                    <li
                      key={idx}
                      className="flex items-center gap-3 py-3 border-t border-n-2/10 text-sm"
                    >
                      <span className="text-primary font-bold">✓</span>
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
