/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconBrandGithub,
  IconCode,
  IconHeartHandshake,
  IconSignature,
  IconTableColumn,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "./magicui/Globe";
import BlurText from "./ui/BlurText";

export function BentoGridImpl() {
  return (
    <div className="container mx-auto px-4 sm:px-8 mb-8 py-8" id="showcase">
      <div className="text-center mb-12">
        
        
      </div>
      <BentoGrid className="w-full mx-auto">
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

const TechStackCloud = () => {
  // Tech stack data organized by categories for different marquee rows
  const techCategories = {
    frontend: [
      { icon: "/icons8-react-24.png", name: "React" },
      { icon: "/icons8-nextjs-144.png", name: "Next.js" },
      { icon: "/icons8-javascript-144.png", name: "JavaScript" },
      { icon: "/ts.png", name: "TypeScript" },
      { icon: "/icons8-tailwind-css-144.png", name: "Tailwind" },
      { icon: "/icons8-html5-144.png", name: "HTML5" },
      { icon: "/icons8-css3-144.png", name: "CSS3" },
      { icon: "/icons8-angular-96.png", name: "Angular" },
    ],
    backend: [
      { icon: "/icons8-java-144.png", name: "Java" },
      { icon: "/icons8-python-144.png", name: "Python" },
      { icon: "/icons8-nodejs-144.png", name: "Node.js" },
      { icon: "/icons8-spring-boot-48.png", name: "Spring" },
      { icon: "/icons8-postgresql-96.png", name: "PostgreSQL" },
      { icon: "/icons8-mysql-144.png", name: "MySQL" },
      { icon: "/icons8-mongo-db-96.png", name: "MongoDB" },
      { icon: "/icons8-apache-kafka-64.png", name: "Kafka" },
    ],
    tools: [
      { icon: "/icons8-docker-144.png", name: "Docker" },
      { icon: "/aws.png", name: "AWS" },
      { icon: "/icons8-git-144.png", name: "Git" },
      { icon: "/icons8-github-50.png", name: "GitHub" },
      { icon: "/icons8-vs-code-96.png", name: "VS Code" },
      { icon: "/vercel.png", name: "Vercel" },
      { icon: "/icons8-postman-inc-96.png", name: "Postman" },
      { icon: "/icons8-figma-96.png", name: "Figma" },
    ]
  };

  const MarqueeRow = ({ 
    items, 
    direction = "left", 
    speed = 40,
    className = ""
  }: {
    items: { icon: string; name: string }[];
    direction?: "left" | "right";
    speed?: number;
    className?: string;
  }) => {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];
    
    return (
      <div className={`flex overflow-hidden ${className}`}>
        <motion.div
          className="flex gap-3 will-change-transform"
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 bg-zinc-900/60 backdrop-blur-sm border border-zinc-700/40 rounded-full px-3 py-1.5 flex-shrink-0 hover:bg-zinc-800/60 transition-all duration-300 shadow-sm"
            >
              <div className="w-4 h-4 relative flex-shrink-0">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-200 font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };  return (
    <div className="flex flex-col w-full h-full overflow-hidden relative min-h-[280px] bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-purple-950/40">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Three marquee rows - positioned in the middle */}
      <div className="flex-1 flex flex-col justify-center gap-4 py-8">
        {/* Row 1 - Frontend */}
        <MarqueeRow 
          items={techCategories.frontend} 
          direction="right" 
          speed={50}
          className="opacity-85"
        />
        
        {/* Row 2 - Backend */}
        <MarqueeRow 
          items={techCategories.backend} 
          direction="left" 
          speed={42}
          className="opacity-90"
        />
        
        {/* Row 3 - Tools */}
        <MarqueeRow 
          items={techCategories.tools} 
          direction="right" 
          speed={46}
          className="opacity-85"
        />
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-blue-400/20 rounded-tl-lg"></div>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-purple-400/20 rounded-br-lg"></div>
    </div>
  );
};

const InteractiveGlobe = () => {
  return (
    <div className="flex flex-col w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-b from-blue-950/40 via-blue-900/30 to-black/60">
      {/* Container with proper aspect ratio for all device sizes */}
      <div className="pb-[100%] w-full relative">
        {/* Top text overlay - improved mobile spacing with better background for readability */}
        <div className="absolute top-0 left-0 right-0 z-30 p-2 sm:p-4">
          <div className="bg-black/30 backdrop-blur-md rounded-lg py-1.5 px-2 mx-auto inline-block">
            <h3 className="text-[10px] sm:text-sm md:text-base text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 font-medium rounded-3xl">
              I&apos;m very flexible with time zone communications
            </h3>
          </div>
        </div>

        {/* Improved globe container with better overflow handling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Added padding to prevent globe edges from showing */}
            <div className="absolute inset-[-20%] sm:inset-[-10%] flex items-center justify-center">
              <Globe />
            </div>
          </div>
        </div>        {/* Bottom location indicator - improved positioning and spacing for mobile */}
        <div className="absolute bottom-1 left-1 sm:bottom-3 sm:left-3 z-30 flex flex-col max-w-[120px] sm:max-w-none">
          <div className="flex items-center gap-1 mb-1">
            <div className="bg-black/40 backdrop-blur-md rounded-full p-1 flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-blue-400 fill-current flex-shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
              </svg>
              <span className="text-gray-300 text-[10px] sm:text-xs whitespace-nowrap">Remote</span>
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-lg px-2 py-1 mb-1">
            <h4 className="text-gray-100 text-xs sm:text-sm font-medium">Sri Lanka</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogShowcase = () => {
  return (
    <div 
      className="flex flex-col w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Medium logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="140" height="140" viewBox="0 0 1043.63 592.71" className="text-white fill-current">
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">My Blog</h3>
            <p className="text-sm text-gray-200 mb-6 max-w-sm">
              Thoughts, tutorials, and insights on software development and tech innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-100/5 to-gray-200/5 dark:from-gray-900/20 dark:to-gray-800/20 flex flex-col">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <Image 
            src="/portfolio-project.png"
            alt="Project Showcase"
            fill
            className="object-cover absolute inset-0 opacity-30 hover:opacity-50 transition-opacity duration-300"
          />
            {/* Content container with improved structure */}
          <div className="relative z-10 flex flex-col justify-center h-full w-full">
            {/* Title and description centered */}
            <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 max-w-xs mx-auto">
              <h3 className="text-xl font-medium text-white mb-2">Recent Projects</h3>
              <p className="text-sm text-gray-200">
                Explore my portfolio of web and application development projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const items = [
  {
    title: "Tech Enthusiast",
    description: (
      <span>
        Passionate about cutting edge development technologies and always learning new frameworks and languages.
      </span>
    ),
    header: <TechStackCloud />,
    className: "md:row-span-1 lg:col-span-2",
    icon: <IconCode className="h-4 w-4 text-white/80" />,
  },
  {
    title: "Global Reach",
    description: (
      <span>
        Working remotely with clients across different time zones, ensuring seamless communication and collaboration.
      </span>
    ),
    header: <InteractiveGlobe />,
    className: "md:row-span-1 lg:row-span-2 lg:col-span-1",
    icon: <IconWorld className="h-4 w-4 text-white/80" />,
  },
  {
    title: "My Blog",
    description: (
      <span>
        Dive into my articles on Medium covering web development, tech trends, and coding tutorials.
      </span>
    ),
    header: <BlogShowcase />,
    className: "md:row-span-1 lg:col-span-1",
    icon: <IconBrandGithub className="h-4 w-4 text-white/80" />,
  },
  {
    title: "Projects",
    description: (
      <span>
        Explore my portfolio of projects showcasing a range of technical skills and creative solutions.
      </span>
    ),
    header: <ProjectShowcase />,
    className: "md:row-span-1 lg:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-white/80" />,
  }
];

