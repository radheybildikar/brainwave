import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    travel_date: "",
    num_travelers: 1,
    notes: "",
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetch(`http://localhost:8000/destinations/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setDestination(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:8000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          destination_id: id,
          num_travelers: Number(form.num_travelers),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        travel_date: "",
        num_travelers: 1,
        notes: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (notFound) return <Navigate to="/" replace />;
  if (loading)
    return <p className="text-center text-white/50 py-32">Loading...</p>;
  if (!destination) return null;

  return (
    <section className="relative py-20 px-6 lg:px-16 bg-n-9 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/#destinations"
          className="body-2 text-cyan-400 hover:underline inline-block mb-8"
        >
          ← Back to destinations
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="h-72 md:h-96 rounded-2xl bg-cover bg-center bg-n-8 mb-8"
            style={{ backgroundImage: `url(${destination.image})` }}
          />

          <p className="tagline mb-3">{destination.tagline}</p>
          <h1 className="h1 mb-6">{destination.name}</h1>

          <div className="flex flex-wrap gap-6 mb-8 body-2 text-white/70">
            <span>Duration: {destination.duration}</span>
            <span>Price: from {destination.price}</span>
            <span>Rating: {destination.rating}</span>
            <span>Best time: {destination.best_time}</span>
          </div>

          <p className="body-1 text-white/70 mb-10 max-w-2xl">
            {destination.description}
          </p>

          <div className="glass rounded-2xl p-8 mb-10">
            <h3 className="h5 mb-4">Highlights</h3>
            <ul className="space-y-3">
              {destination.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 body-2 text-white/80"
                >
                  <span className="text-cyan-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Plan This Trip
            </button>
          )}

          <AnimatePresence>
            {showForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 mt-2 space-y-5 overflow-hidden"
              >
                <h3 className="h5 mb-2">
                  Plan your trip to {destination.name}
                </h3>

                <div>
                  <label className="block body-2 text-white/60 mb-2">
                    Name
                  </label>
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
                  <label className="block body-2 text-white/60 mb-2">
                    Email
                  </label>
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block body-2 text-white/60 mb-2">
                      Travel date
                    </label>
                    <input
                      type="date"
                      name="travel_date"
                      value={form.travel_date}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block body-2 text-white/60 mb-2">
                      Travelers
                    </label>
                    <input
                      type="number"
                      name="num_travelers"
                      min="1"
                      value={form.num_travelers}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block body-2 text-white/60 mb-2">
                    Notes (optional)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Any preferences or special requests"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === "sending" ? "Submitting..." : "Confirm Plan"}
                </button>

                {status === "sent" && (
                  <p className="body-2 text-green-400 text-center">
                    Trip request received! We'll get back to you shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="body-2 text-red-400 text-center">
                    Something went wrong. Try again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationDetail;
