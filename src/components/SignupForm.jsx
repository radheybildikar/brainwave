import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupForm({ plan = null, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, plan }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Signup failed");
      }

      const data = await response.json();
      setStatus("success");
      setName("");
      setEmail("");
      if (onSuccess) onSuccess(data);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 border border-success/40 bg-success/10 font-mono text-sm text-success text-center"
      >
        ✓ Signed up successfully. Check your email.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
        required
        className="bg-n-9 border border-primary/20 px-4 py-3 font-mono text-sm text-white focus:border-primary outline-none transition-colors"
      />
      <input
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={function (e) {
          setEmail(e.target.value);
        }}
        required
        className="bg-n-9 border border-primary/20 px-4 py-3 font-mono text-sm text-white focus:border-primary outline-none transition-colors"
      />

      {status === "error" && (
        <p className="text-warn text-xs font-mono">{errorMsg}</p>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-primary text-n-10 font-bold font-mono text-sm uppercase py-3 disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Get started"}
      </motion.button>
    </form>
  );
}
