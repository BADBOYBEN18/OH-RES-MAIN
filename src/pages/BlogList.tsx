// src/components/BlogList.tsx
import React, { useEffect, useState } from 'react';
import axiosClient from '../api';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axiosClient.get('/blogs/');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 rounded border border-stone-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Blogs</h3>
        <Link
          to="/blogs/create"
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-violet-500 text-white rounded hover:bg-violet-600"
        >
          <FiPlus /> New Blog
        </Link>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-300">
            <th className="p-2">Title</th>
            <th className="p-2">Author</th>
            <th className="p-2">Published</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog: any) => (
            <tr key={blog.id} className="border-b border-stone-200 hover:bg-stone-50">
              <td className="p-2">{blog.title}</td>
              <td className="p-2">{blog.author.username}</td>
              <td className="p-2">{new Date(blog.published_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
