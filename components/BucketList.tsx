"use client";

import React from "react";
import { AuroraText } from "./magicui/AuroraText";
import Aurora from "./ui/Aurora";
import { motion } from "framer-motion";

// Interface for bucket list item
interface BucketListItem {
  task: string;
  completed: boolean;
  date?: string;
  note?: string;
}

export default function BucketList() {
  // Bucket list data
  const bucketListItems: BucketListItem[] = [
    {
      task: "Skydiving",
      completed: false
    },
    {
      task: "Find my first job",
      completed: false
    },
    {
      task: "Solo travel to another country",
      completed: true
    },
    {
      task: "Create portfolio website",
      completed: true,
      date: "May 2025",
      note: "https://warunaudara.vercel.app/"
    },
    {
      task: "Certified Kubernetes Administrator",
      completed: false
    },
    {
      task: "First OpenSource contribution",
      completed: false,
      date: "Before December 2025"
    },
    {
      task: "Parents trip to india",
      completed: false,
    },
    {
      task: "Remote working with client from abroad",
      completed: false
    },
    {
      task: "Certifed AWS Solutions Architect Associate",
      completed: false,
      date: "Before December 2025"
    },
    {
      task: "Write 10 articles",
      completed: false
    },
    {
      task: "Get 1,000 organic LinkedIn follower",
      completed: true,
      date: "May 2023"
    },
    {
      task: "Get a muscular body",
      completed: false
    },
    {
      task: "University degree",
      completed: true
    },
    {
      task: "Sport Car",
      completed: false
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-black relative">
      {/* Black background base layer */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Aurora effect */}
      <div className="absolute inset-0 z-1">
        <Aurora
          colorStops={["#000000", "#4c0080", "#000000"]}
          blend={0.3}
          amplitude={0.7}
          speed={0.2}
        />
      </div>
      
      {/* Dotted background pattern */}
      <div className="absolute inset-0 bg-dot-thick-neutral-800/20 pointer-events-none z-2"></div>
      
      {/* Content container with higher z-index */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-16 md:py-24 ">
        <div className="text-center mb-16">
          <h1 className="uppercase text-gray-300 text-sm font-semibold tracking-widest mb-2">
              THE BUCKET LIST
          </h1>
          
          <div className="mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Things I&apos;ll Do
            </h2>
            <AuroraText
              colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
              speed={2}
              className="text-3xl md:text-4xl font-bold"
            >
              Before I&apos;m Done
            </AuroraText>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {bucketListItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${item.completed ? 'border-green-500 bg-green-500/20' : 'border-gray-500'}`}>
                    {item.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h3 className={`text-xl font-medium ${item.completed ? 'text-green-400' : 'text-white'}`}>{item.task}</h3>
                    {item.date && (
                      <div className="mt-2 md:mt-0 text-sm px-3 py-1 rounded-full bg-purple-900/30 border border-purple-600/30 text-purple-300">
                        {item.date}
                      </div>
                    )}
                  </div>
                  
                  {item.note && (
                    <p className="mt-2 text-gray-400 text-sm">{item.note}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}