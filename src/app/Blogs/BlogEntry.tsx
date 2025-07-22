// components/BlogEntry.tsx
import React from 'react';
import Image from 'next/image';


interface BlogEntryProps {
  id: number;
  title: string;
  date: string;
  image: any;
  summary: string;
  readTime: string;
  onClick: (id: number) => void;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ id, title, date, image, summary, readTime, onClick }) => {
  return (
    <li
      key={id}
      onClick={() => onClick(id)}
      className="cursor-pointer bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-1/3 h-48 md:h-40">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h2>
          <p className="text-gray-400 text-sm mb-1">{date} • {readTime} min read</p>
          <p className="text-gray-300 text-base mt-2 line-clamp-2">{summary}</p>
        </div>
      </div>
    </li>
  );
};

export default BlogEntry;
