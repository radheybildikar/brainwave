import { motion } from "framer-motion";

const Team = () => {
  return (
    <section
      id="team"
      className="relative py-20 px-6 lg:px-16 overflow-hidden bg-n-9"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="tagline mb-4"
        >
          Who's behind this
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h2 mb-4"
        >
          Meet the <span className="text-gradient">Creator</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="body-1 text-white/60 max-w-xl mx-auto mb-14"
        >
          Built, designed, and maintained end-to-end by a single developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass inline-flex flex-col items-center rounded-2xl px-10 py-10 hover:border-white/20 transition-colors duration-300"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-2xl font-bold text-white mb-5">
            R
          </div>
          <h3 className="h5 mb-1">Radhey</h3>
          <p className="tagline mb-3">Fullstack Developer</p>
          <p className="body-2 text-white/60 max-w-xs">
            Designed and developed this project from concept to deployment —
            frontend, animations, and everything in between.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
