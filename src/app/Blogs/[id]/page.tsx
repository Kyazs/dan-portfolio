"use client";
import { useRouter, useParams } from "next/navigation";
import { blogs } from "@/data/blogs";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const blogId = params?.id;
    const blog = blogs.find((b) => String(b.id) === String(blogId));

    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold mb-4">Blog Not Found</h2>
                <button
                    onClick={() => router.push("/Blogs")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center h-full relative pt-20">
            <div className="flex flex-col w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
                {/* Blog Card */}
                <div className="bg-gray-900 p-0 md:p-0 rounded-lg shadow-lg text-white overflow-hidden">
                    {/* Cover Image */}
                    <div className="relative w-full" style={{ aspectRatio: "16/9", minHeight: 200 }}>
                        <Image
                            src={blog.image}
                            alt={blog.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                            priority
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                {/* Meta Info */}
                <div className="px-8 md:px-12 pt-8 pb-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg font-bold">
                            <span role="img" aria-label="author">📝</span>
                        </div>
                        <div>
                            <div className="font-semibold text-base">Daniela Marie Alpez</div>
                            <div className="text-xs text-gray-400">{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} | <span className="font-medium"> {blog.readTime} min read</span></div>
                        </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        {blog.tags && blog.tags.map((tag, idx) => (
                            <span
                                key={tag + idx}
                                className="bg-green-700/30 text-green-300 px-2 py-1 rounded text-xs font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Title */}
                <div className="px-8 md:px-12 pb-2">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                        {blog.name}
                    </h1>
                </div>
                {/* Content */}
                <div className="px-8 md:px-12 pb-8">
                    <article className="prose prose-lg dark:prose-invert max-w-3xl text-2xl w-full markdown-content leading-relaxed !prose-headings:font-bold !prose-headings:mb-4 !prose-p:leading-relaxed !prose-img:rounded-lg !prose-img:shadow-lg !prose-a:text-blue-600 dark:!prose-a:text-blue-400"                    >

                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            components={{
                                img: ({ alt = '', src = '', }) => {
                                    // Detect alignment from alt text
                                    let alignment = 'default';
                                    let cleanedAlt = alt;

                                    if (alt.startsWith('right:')) {
                                        alignment = 'right';
                                        cleanedAlt = alt.replace('right:', '').trim();
                                    } else if (alt.startsWith('left:')) {
                                        alignment = 'left';
                                        cleanedAlt = alt.replace('left:', '').trim();
                                    } else if (alt.startsWith('center:')) {
                                        alignment = 'center';
                                        cleanedAlt = alt.replace('center:', '').trim();
                                    }

                                    // Tailwind alignment classes
                                    const classMap: Record<string, string> = {
                                        right: 'float-right ml-4 mb-4 w-80 rounded-lg shadow-lg',
                                        left: 'float-left mr-4 mb-4 w-80 rounded-lg shadow-lg',
                                        center: 'mx-auto my-4 w-max block rounded-lg shadow-lg',
                                        default: 'my-4 w-full max-w-md rounded-lg shadow-lg',
                                    };

                                    return (
                                        <span className={classMap[alignment]}>
                                            <Image
                                                src={typeof src === "string" ? src : ""}
                                                alt={cleanedAlt}
                                                width={500}
                                                height={300}
                                                className="rounded-lg shadow-lg object-cover"
                                            />
                                        </span>
                                    );
                                },
                            }}
                        >
                            {blog.content()}
                        </ReactMarkdown>

                    </article>
                    <button
                        onClick={() => router.push("/Blogs")}
                        className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium"
                    >
                        Back to Blogs
                    </button>
                </div>
            </div>
        </main>
    );
}
