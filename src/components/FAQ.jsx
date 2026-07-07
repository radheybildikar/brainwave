import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/faqs")
      .then((res) => res.json())
      .then(setFaqs)
      .catch((err) => console.error("Failed to fetch FAQs:", err));
  }, []);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-20 px-6 lg:px-16 bg-n-9">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="tagline mb-4">Questions?</p>
          <h2 className="h2 mb-4">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="h6">{faq.question}</span>
                <span className="text-cyan-400 text-xl">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 overflow-hidden"
                  >
                    <p className="body-2 text-white/60 pb-5">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
