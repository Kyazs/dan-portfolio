// components/BlogEntry.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface BlogEntryProps {
  id: number;
  title: string;
  date: string;
  image: any;
  summary: string;
  readTime: string;
  url: string;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ id, title, date, image, summary, readTime, url }) => {
  const router = useRouter();
  return (
    <li
      key={id}
      tabIndex={0}
      role="button"
      onClick={() => router.push(url)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(url); }}
      className="relative cursor-pointer bg-gray-900/60 backdrop-blur-2xl border border-pink-300/10 hover:border-pink-400/80 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40 hover:shadow-2xl hover:ring-2 hover:ring-pink-400/60 flex flex-col md:flex-row gap-0 md:gap-6 min-h-[180px] group focus:outline-none focus:ring-2 focus:ring-pink-400/80"
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-300 via-pink-500 to-fuchsia-700 rounded-l-3xl shadow-[0_0_16px_4px_rgba(232,121,249,0.25)]" />
      {/* Blog image */}
      <div className="relative w-full md:w-1/3 h-56 md:h-56 flex-shrink-0 rounded-3xl overflow-hidden m-0 md:my-6 md:ml-4 shadow-xl">
        <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-3xl shadow-lg scale-100 group-hover:scale-110 group-hover:shadow-pink-400/30 transition-transform duration-300" />
      </div>
      {/* Blog content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight drop-shadow-xl tracking-tight uppercase">{title}</h2>
          <p className="text-pink-200 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase opacity-80">{date} • {readTime} min read</p>
          <p className="text-gray-200 text-base md:text-lg mt-2 line-clamp-3 font-medium opacity-90">{summary}</p>
        </div>
      </div>
    </li>
  );
};

export default BlogEntry;
