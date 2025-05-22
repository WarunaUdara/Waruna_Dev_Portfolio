/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/lib/utils";
import React, { useMemo, useState, useEffect } from "react"; // Added useState, useEffect
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
import { DynamicIconCloud } from "./DynamicIconCloud";
import { Globe } from "./magicui/Globe";
import BlurText from "./ui/BlurText";

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
  return (
    <div 
      className="flex flex-col w-full h-full overflow-hidden relative cursor-pointer min-h-[230px] bg-gradient-to-br from-blue-50/5 to-purple-100/5 dark:from-blue-900/10 dark:to-purple-900/10"
    >
      <div className="absolute inset-0 flex items-center justify-center transform scale-125"> {/* Increased scale */}
        <DynamicIconCloud images={techIcons} />
      </div>
      
      {/* Content shown on hover - removed pointer-events-none from parent container */}
      <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4"> {/* Centered button */}
        <div 
          className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm text-white flex items-center gap-2 cursor-pointer transform group-hover/bento:translate-y-0 transition-transform duration-300 z-20" // Removed mb-3 and -translate-y-4
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>View Tech Stack</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const InteractiveGlobe = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeInColombo = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeInColombo);
    };

    updateTime(); // Initial call to set time immediately
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

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
        </div>

        {/* Bottom location indicator - improved positioning and spacing for mobile */}
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
            {currentTime && (
              <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5">{currentTime}</p>
            )}
          </div>
          <div 
            className="bg-black/40 hover:bg-black/50 backdrop-blur-md rounded-lg px-2 py-1 cursor-pointer transition-colors flex items-center gap-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span className="text-blue-400 text-[10px] sm:text-xs">Connect now</span>
            <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogShowcase = () => {
  const handleBlogClick = () => {
    if (window.innerWidth < 768) {
      window.open('https://medium.com/@warunaudarasampath', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="flex flex-col w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 cursor-pointer md:cursor-default"
      onClick={handleBlogClick}
      role="button" // Added for accessibility since it's clickable
      tabIndex={0} // Added for accessibility
      onKeyDown={(e) => { // Added for accessibility
        if ((e.key === 'Enter' || e.key === ' ') && window.innerWidth < 768) {
          handleBlogClick();
        }
      }}
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
            
            <a 
              href="https://medium.com/@warunaudarasampath"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click handler when button is clicked on desktop
              className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium items-center gap-2 transition-all duration-300 ease-in-out opacity-0 transform scale-95 group-hover/bento:opacity-100 group-hover/bento:scale-100 hidden md:flex"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12h7l-4 4m0-8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Read on Medium</span>
            </a>
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
          <div className="relative z-10 flex flex-col justify-between h-full w-full">
            {/* Title and description at the top */}
            <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 max-w-xs mx-auto mt-8">
              <h3 className="text-xl font-medium text-white mb-2">Recent Projects</h3>
              <p className="text-sm text-gray-200">
                Explore my portfolio of web and application development projects
              </p>
            </div>
            
            {/* Buttons positioned at the bottom but move up on hover */}
            <div className="w-full flex justify-center">
              <div className="flex gap-3 mt-auto mb-6 transform opacity-0 translate-y-10 group-hover/bento:opacity-100 group-hover/bento:translate-y-[-16px] transition-all duration-300 ease-in-out">
                <a 
                  href="https://github.com/WarunaUdara" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs rounded-full px-3 py-1.5 flex items-center gap-1"
                >
                  <IconBrandGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-500/80 hover:bg-blue-500 text-white text-xs rounded-full px-3 py-1.5"
                >
                  View All
                </button>
              </div>
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
