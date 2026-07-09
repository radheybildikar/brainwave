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
          <p className="body-2 text-white/60 max-w-xs mb-5">
            Designed and developed this project from concept to deployment —
            frontend, animations, and everything in between.
          </p>
          <a
            href="https://www.linkedin.com/in/radhey-bildikar-8632a6266/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
