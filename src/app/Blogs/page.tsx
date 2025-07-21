"use client";
import React, { useState } from "react";
import { blogs } from "@/data/blogs";
import BlogEntry from "./BlogEntry";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  return (
    <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      <div className="flex w-full items-center justify-center p-4">
        <h1 className="text-3xl md:text-7xl font-extrabold text-center">
          {selectedBlog ? selectedBlog.title : "Blogs"}
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20">
        {selectedBlog ? (
          <div>
            <div className="prose dark:prose-invert max-w-none">
              {selectedBlog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            <button
              onClick={handleBackClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Back to Blogs
            </button>
          </div>
        ) : (
          <ul>
            {blogs.map((blog) => (
              <BlogEntry
                key={blog.id}
                id={blog.id}
                title={blog.title}
                date={blog.date}
                onClick={() => handleBlogClick(blog)}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}