import { useState } from "react";
import { motion } from "framer-motion";
import { API_URL } from "../config";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 lg:px-16 overflow-hidden bg-n-9"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="tagline mb-4">Get in touch</p>
          <h2 className="h2 mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="body-1 text-white/60 mb-8 max-w-sm">
            Have a question, project idea, or just want to connect? Reach out
            directly or drop a message.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full glass text-cyan-400">
                @
              </span>
              <a
                href="mailto:radheybildikar007@gmail.com"
                className="body-2 text-white/80 hover:text-cyan-400 transition-colors"
              >
                radheybildikar007@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full glass text-cyan-400">
                #
              </span>
              <a
                href="tel:+918888284107"
                className="body-2 text-white/80 hover:text-cyan-400 transition-colors"
              >
                +91 8888284107
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="block body-2 text-white/60 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block body-2 text-white/60 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block body-2 text-white/60 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="body-2 text-green-400 text-center">
              Message sent! We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="body-2 text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
