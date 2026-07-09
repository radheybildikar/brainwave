import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/destinations`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="destinations" className="relative py-20 px-6 lg:px-16 bg-n-9">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="tagline mb-4">Where to next</p>
          <h2 className="h2 mb-4">
            Popular <span className="text-gradient">Destinations</span>
          </h2>
          <p className="body-1 text-white/60 max-w-xl mx-auto">
            Handpicked places our travelers keep coming back to.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-white/50">Loading destinations...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/destinations/${dest.id}`}
                  className="glass block rounded-2xl overflow-hidden group hover:border-white/20 transition-colors duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${dest.image})`,
                      backgroundColor: "#111827",
                    }}
                  />
                  <div className="p-6">
                    <p className="tagline mb-2">{dest.tagline}</p>
                    <h3 className="h5 mb-2">{dest.name}</h3>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{dest.duration}</span>
                      <span className="text-primary font-semibold">
                        {dest.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
