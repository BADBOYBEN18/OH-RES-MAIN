// src/pages/BlogDetailPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    axios
      .get<BlogPost[]>(`http://localhost:8000/api/blog/posts/?slug=${slug}`)
      .then((res) => {
        if (res.data.length > 0) {
          setPost(res.data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <Layout>
      <section className="px-4 py-16 md:px-8 bg-secondary text-white">
        <div className="max-w-3xl mx-auto scale-98">
          {!post ? (
            <p className="text-center">Loading...</p>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold text-maingreen mb-4"
              >
                {post.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-sm text-gray-300 mb-8"
              >
                Published on {new Date(post.created_at).toLocaleDateString()}
              </motion.p>
              {post.image && (
                <motion.img
                  variants={fadeInUp}
                  src={post.image}
                  alt={post.title}
                  className="mb-8 rounded w-full"
                />
              )}
              <motion.div
                variants={fadeInUp}
                className="prose prose-lg max-w-none prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetailPage;


