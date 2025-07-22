import React from 'react';
import { motion } from 'framer-motion'; // Import motion if you want Framer animations

interface SkillTagProps {
  skillName: string;
  // Add other props if needed, like 'onClick' etc.
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName }) => {
  // You can use Tailwind hover classes directly, or use Framer Motion
  // Let's use Tailwind hover classes for simplicity as they are already effective
  /*const tagClassNames = "bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600 " +
                         "hover:scale-105 hover:border-pink-400 hover:text-pink-400 " + // Added hover effects
                         "transition duration-200 ease-in-out"; // Added transition */

  return (
    // Using a standard span with Tailwind hover utilities
    /*<span className={tagClassNames}>
      {skillName}
    </span> */

    // OR, using Framer Motion for potentially more complex animations (optional)
    <motion.span
      className="bg-transparent text-gray-300 py-1 px-4 rounded-full md:text-sm text-xs font-medium border border-gray-600"
      whileHover={{ scale: 1.05, borderColor: '#ec4899', color: '#ec4899' }} // Framer Motion hover animation (pink-500)
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {skillName}
    </motion.span>
  );
};

export default SkillTag;