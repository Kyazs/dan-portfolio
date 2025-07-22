'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// Removed unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  {
    id: 1,
    title: 'Freelance Graphics Editor',
    company: 'Freelance',
    year: '2018 - Present',
    description: 'Working as a freelance graphics editor on a project-based approach, creating visual content and designs for various clients and projects.',
    logo: '/exp_logos/datacom.svg', // You may want to create a freelance logo
  },
  {
    id: 2,
    title: 'Freelance Photographer',
    company: 'Freelance',
    year: '2018 - Present',
    description: 'Providing professional photography services for weddings, debuts, birthdays, and other special events, capturing memorable moments with creativity and expertise.',
    logo: '/exp_logos/datacom.svg', // You may want to create a photography logo
  },
  {
    id: 3,
    title: 'SOCCOM Head',
    company: 'St. Ignatius of Loyola',
    year: '2018 - Present',
    description: 'Leading the Social Communications committee, responsible for managing and coordinating communication strategies and social media presence for the organization.',
    logo: '/exp_logos/datacom.svg', // You may want to create a specific logo
  },
  {
    id: 4,
    title: 'Freelance UI/UX Designer',
    company: 'Freelance',
    year: '2022 - 2024',
    description: 'Provided UI/UX design services on a project-based approach, creating user-centered designs and improving user experiences for various digital products and applications.',
    logo: '/exp_logos/datacom.svg', // You may want to create a design-specific logo
  },
  {
    id: 5,
    title: 'President',
    company: 'Unbound Zamboanga Tetuan',
    year: '2022 - 2024',
    description: 'Led the organization as President, overseeing operations, strategic planning, and team management while driving initiatives to achieve organizational goals and community impact.',
    logo: '/exp_logos/datacom.svg', // You may want to create an Unbound logo
  },
  {
    id: 6,
    title: 'Cashier',
    company: 'Berry Sam',
    year: '2022 - 2024',
    description: 'Worked as a cashier, handling customer transactions, managing cash flow, and ensuring excellent customer service in a fast-paced retail environment.',
    logo: '/exp_logos/datacom.svg', // You may want to create a Berry Sam logo
  },
  {
    id: 7,
    title: 'SK Member',
    company: 'Sangguniang Kabataan of Tetuan',
    year: '2023 - Present',
    description: 'Serving as a member of the Sangguniang Kabataan, contributing to youth-focused initiatives and community development programs in Tetuan.',
    logo: '/exp_logos/datacom.svg', // You may want to create an SK logo
  },
  {
    id: 8,
    title: 'Project Manager',
    company: 'TORCH',
    year: '2023 - Present',
    description: 'Managing projects from conception to completion, coordinating with team members, ensuring timely delivery, and maintaining quality standards throughout the project lifecycle.',
    logo: '/exp_logos/datacom.svg', // You may want to create a TORCH logo
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-500 to-fuchsia-700 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_15px_5px_rgba(232,121,249,0.5)] transform -translate-x-1/2"
        style={{ top: dotTop }}
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-pink-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              {/* <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5"> {/* Added flex centering for logos */}
              {/*  <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div> */}
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;