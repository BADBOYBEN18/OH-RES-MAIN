// src/pages/BlogPage.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/components/variants';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image?: string;
  created_at: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<BlogPost[]>('http://localhost:8000/api/blog/posts/')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <section className="py-20 px-4 md:px-8 bg-secondary text-white">
        <motion.div
          className="max-w-7xl mx-auto scale-98"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-maingreen mb-12 text-center"
            variants={fadeInUp}
          >
            OH-RES Blog
          </motion.h1>

          {loading ? (
            <p className="text-center text-white">Loading posts...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-white text-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-maingreen mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-maingreen font-semibold hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </Layout>
  );
};

export default BlogPage;

