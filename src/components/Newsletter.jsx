import { useState } from "react";
import { motion } from "framer-motion";
import { API_URL } from "../config";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-6 lg:px-16 bg-n-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass rounded-2xl p-10 text-center"
      >
        <h3 className="h3 mb-3">
          Get travel tips in your <span className="text-gradient">inbox</span>
        </h3>
        <p className="body-2 text-white/60 mb-6">
          No spam, just useful guides and destination drops.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "..." : "Subscribe"}
          </button>
        </form>

        {status === "sent" && (
          <p className="body-2 text-green-400 mt-4">
            Subscribed! Check your inbox.
          </p>
        )}
        {status === "error" && (
          <p className="body-2 text-red-400 mt-4">
            Something went wrong. Try again.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Newsletter;
