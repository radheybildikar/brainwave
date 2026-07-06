import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import destinations from "../data/destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) return <Navigate to="/" replace />;

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
            className="h-72 md:h-96 rounded-2xl bg-cover bg-center mb-8"
            style={{
              backgroundImage: `url(${destination.image})`,
              backgroundColor: "#111827",
            }}
          />

          <p className="tagline mb-3">{destination.tagline}</p>
          <h1 className="h1 mb-6">{destination.name}</h1>

          <div className="flex flex-wrap gap-6 mb-8 body-2 text-white/70">
            <span>📅 {destination.duration}</span>
            <span>💰 from {destination.price}</span>
            <span>⭐ {destination.rating} rating</span>
            <span>🌤 Best time: {destination.bestTime}</span>
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

          <Link
            to="/#contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Plan This Trip
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationDetail;
