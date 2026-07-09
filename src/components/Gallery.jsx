import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_URL } from "../config";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then((res) => res.json())
      .then(setImages)
      .catch((err) => console.error("Failed to fetch gallery:", err));
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 lg:px-16 bg-n-9">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="tagline mb-4">Wander through</p>
          <h2 className="h2 mb-4">
            Travel <span className="text-gradient">Gallery</span>
          </h2>
          <p className="body-1 text-white/60 max-w-xl mx-auto">
            Moments captured from trips we've helped plan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group h-56 bg-n-8"
            >
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url(${img.image_url})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="body-2 text-white font-semibold">
                    {img.caption}
                  </p>
                  <p className="text-xs text-white/70">{img.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
