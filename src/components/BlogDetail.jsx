import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { API_URL } from "../config";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (notFound) return <Navigate to="/" replace />;
  if (loading)
    return <p className="text-center text-white/50 py-32">Loading...</p>;
  if (!post) return null;

  return (
    <section className="relative py-20 px-6 lg:px-16 bg-n-9 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#blog"
          className="body-2 text-cyan-400 hover:underline inline-block mb-8"
        >
          ← Back to guides
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="h-64 md:h-80 rounded-2xl bg-cover bg-center bg-n-8 mb-8"
            style={{ backgroundImage: `url(${post.cover_image})` }}
          />

          <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.read_time}</span>
          </div>

          <h1 className="h1 mb-6">{post.title}</h1>

          <p className="body-1 text-white/80 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetail;
