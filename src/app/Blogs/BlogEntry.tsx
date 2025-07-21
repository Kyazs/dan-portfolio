// components/BlogEntry.tsx
import React from 'react';
import Image from 'next/image';

interface BlogEntryProps {
  id: number;
  title: string;
  date: string;
  image: string;
  onClick: (id: number) => void;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ id, title, date, image, onClick }) => {
  return (
    <li
      key={id}
      onClick={() => onClick(id)}
      className="cursor-pointer p-4 border-b border-white/[.15] last:border-b-0 hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-4"
    >
      <div className="flex-shrink-0">
        <Image src={image} alt={title} width={100} height={100} className="rounded-md object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </li>
  );
};

export default BlogEntry;
