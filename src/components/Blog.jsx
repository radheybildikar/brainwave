import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/blog`)
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

  return (
    <section id="blog" className="py-20 px-6 lg:px-16 bg-n-9">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="tagline mb-4">Read up before you go</p>
          <h2 className="h2 mb-4">
            Travel <span className="text-gradient">Guides</span>
          </h2>
          <p className="body-1 text-white/60 max-w-xl mx-auto">
            Tips and insights from our own trips and our travelers' experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="glass block rounded-2xl overflow-hidden group hover:border-white/20 transition-colors duration-300"
              >
                <div
                  className="h-44 bg-cover bg-center bg-n-8"
                  style={{ backgroundImage: `url(${post.cover_image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-white/50 text-xs mb-3">
                    <span>{post.author}</span>
                    <span>{post.read_time}</span>
                  </div>
                  <h3 className="h6 mb-2">{post.title}</h3>
                  <p className="body-2 text-white/60 mb-4">{post.excerpt}</p>
                  <span className="body-2 text-cyan-400 group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
