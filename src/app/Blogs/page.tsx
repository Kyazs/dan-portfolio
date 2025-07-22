"use client";
import React from "react";
import { blogs } from "@/data/blogs";
import BlogEntry from "./BlogEntry";
import Link from "next/link";

export default function Blogs() {

  return (
    <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      <div className="flex w-full items-center justify-center p-4">
        <h1 className="text-3xl md:text-7xl font-extrabold text-center">
          Tour Blogs
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/Blogs/${blog.id}`}>
                <BlogEntry
                  id={blog.id}
                  title={blog.name}
                  date={blog.date}
                  image={blog.image}
                  summary={blog.excerpt}
                  readTime={blog.readTime}
                  onClick={() => {}}
                />
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}