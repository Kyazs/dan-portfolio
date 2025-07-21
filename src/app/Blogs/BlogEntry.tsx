// components/BlogEntry.tsx
import React from 'react';

interface BlogEntryProps {
  id: number;
  title: string;
  date: string;
  onClick: (id: number) => void;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ id, title, date, onClick }) => {
  return (
    <li
      key={id}
      onClick={() => onClick(id)}
      className="cursor-pointer p-4 border-b border-white/[.15] last:border-b-0 hover:bg-gray-800 transition-colors duration-200"
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 text-sm">{date}</p>
    </li>
  );
};

export default BlogEntry;