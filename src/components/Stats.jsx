import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_URL } from "../config";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/stats`)
      .then((res) => res.json())
      .then(setStats)
      .catch((err) => console.error("Failed to fetch stats:", err));
  }, []);

  return (
    <section className="py-14 px-6 lg:px-16 bg-n-9">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 text-center"
          >
            <p className="h3 text-gradient mb-1">{stat.value}</p>
            <p className="body-2 text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
