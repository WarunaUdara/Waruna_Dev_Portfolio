/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconCode,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DynamicIconCloud } from "./DynamicIconCloud";
import { Globe } from "./magicui/Globe";

// Define the tech stack icons to use in the cloud
const techIcons = [
  "/icons8-java-144.png",
  "/icons8-spring-boot-48.png",
  "/icons8-python-144.png", 
  "/icons8-javascript-144.png",
  "/ts.png",
  "/icons8-react-24.png",
  "/icons8-nextjs-144.png",
  "/icons8-angular-96.png",
  "/icons8-tailwind-css-144.png",
  "/icons8-postgresql-96.png",
  "/icons8-mysql-144.png",
  "/icons8-docker-144.png",
  "/aws.png",
  "/icons8-git-144.png",
  "/icons8-github-50.png",
  "/hibernate.png",
  "/icons8-vs-code-96.png",
  "/icons8-intellij-idea-96.png",
];

export function BentoGridImpl() {
  return (
    <div className="container mx-auto px-4 sm:px-8 mb-8">
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  // Predefined widths for a deterministic rendering
  const predefinedWidths = useMemo(() => [
    "90%", "85%", "65%", "75%", "60%", "80%"
  ], []);

  const arr = new Array(6).fill(0);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: predefinedWidths[i],
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height={40}
          width={40}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height={40}
          width={40}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height={40}
          width={40}
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const TechStackCloud = () => {
  return (
    <div 
      className="flex flex-col w-full h-full dark:bg-black bg-opacity-80 overflow-hidden relative cursor-pointer"
      onClick={() => {
        // Smooth scroll to tech stack section
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <DynamicIconCloud images={techIcons} />
      </div>
      {/* Subtle gradient overlay for better visual integration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 pointer-events-none"></div>
      
      {/* Small indicator to show it's clickable */}
      <div className="absolute bottom-2 right-2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-white/80 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 mr-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        View All
      </div>
    </div>
  );
};

const InteractiveGlobe = () => {
  return (
    <div className="flex flex-col w-full h-full dark:bg-black bg-black rounded-lg overflow-hidden relative">
      {/* Top text */}
      <div className="absolute top-0 left-0 right-0 z-10 p-5">
        <h3 className="text-lg md:text-xl text-center bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent font-medium">
          I&apos;m very flexible with time zone communications
        </h3>
      </div>

      {/* This container properly sizes and positions the globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full scale-125 translate-y-4">
          <Globe />
        </div>
      </div>

      {/* Bottom location indicator */}
      <div className="absolute bottom-4 left-5 z-10 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400 fill-current">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-gray-300 text-sm">Remote</span>
        </div>
        <h4 className="text-gray-100 text-xl font-medium">Sri Lanka</h4>
        <div className="flex items-center gap-1 mt-2 text-blue-400 text-sm">
          <span>Connect now</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Tech Enthusiast",
    description: (
      <span className="text-sm">
        Passionate about cutting edge development technologies.
      </span>
    ),
    header: <TechStackCloud />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "", // Empty title
    description: "", // Empty description
    header: <InteractiveGlobe />,
    className: "md:col-span-1",
    icon: null, // Remove icon
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  }
];
