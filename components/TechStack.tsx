/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Aurora from "./ui/Aurora";

// Only include technologies with icons in the public folder
const techStackData = [
  // Languages & Core
  { icon: "/icons8-java-144.png", name: "Java" },
  { icon: "/icons8-python-144.png", name: "Python" },
  { icon: "/icons8-c-144.png", name: "C" },
  { icon: "/icons8-javascript-144.png", name: "JavaScript" },
  { icon: "/ts.png", name: "TypeScript" },
  { icon: "/icons8-html5-144.png", name: "HTML" },
  { icon: "/icons8-css3-144.png", name: "CSS" },
  
  // Frameworks & Libraries
  { icon: "/icons8-react-24.png", name: "React" },
  { icon: "/icons8-nextjs-144.png", name: "Next.js" },
  { icon: "/icons8-angular-96.png", name: "Angular" },
  { icon: "/icons8-bootstrap-144.png", name: "Bootstrap" },
  { icon: "/icons8-tailwind-css-144.png", name: "Tailwind CSS" },
  { icon: "/icons8-nodejs-144.png", name: "Node.js" },
  
  // Database & Backend
  { icon: "/icons8-postgresql-96.png", name: "PostgreSQL" },
  { icon: "/icons8-mysql-144.png", name: "MySQL" },
  { icon: "/hibernate.png", name: "Hibernate" },
  { icon: "/icons8-spring-boot-48.png", name: "Spring Boot" },
  { icon: "/icons8-swagger-144.png", name: "Swagger" },
  { icon: "/icons8-apache-kafka-64.png", name: "Kafka" },
  
  // DevOps & Tools
  { icon: "/icons8-docker-144.png", name: "Docker" },
  { icon: "/aws.png", name: "AWS" },
  { icon: "/icons8-git-144.png", name: "Git" },
  { icon: "/icons8-github-50.png", name: "GitHub" },
  { icon: "/icons8-gitlab-96.png", name: "GitLab" },
  { icon: "/vercel.png", name: "Vercel" },
  { icon: "/icons8-postman-inc-96.png", name: "Postman" },
  { icon: "/icons8-vs-code-96.png", name: "VS Code" },
  { icon: "/icons8-intellij-idea-96.png", name: "IntelliJ IDEA" },
  { icon: "/icons8-figma-96.png", name: "Figma" },
];

// Group by category for rows - only using icons present in public folder
const categories = [
  ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  ["Tailwind CSS", "Bootstrap", "Angular", "Node.js", "Spring Boot"],
  ["Java", "Python", "C", "PostgreSQL", "MySQL", "MongoDB"],
  ["Git", "GitHub", "GitLab", "Docker", "AWS", "Vercel"],
  ["VS Code", "IntelliJ IDEA", "Figma", "Postman", "Swagger", "Hibernate", "Kafka"]
];

export function TechStack() {
  const sectionRef = useRef(null);
  // Removed the unused useEffect hook

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef} // sectionRef is kept as it might be used for other purposes like navigation
      className="py-16 md:py-20 relative overflow-hidden bg-black"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/30 z-0"></div>
      
      {/* Aurora effect overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Aurora
          colorStops={["#000000", "#000011", "#000011"]}
          blend={0.2}
          amplitude={0.5}
          speed={0.1}
        />
      </div>
      
      {/* Container */}
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-2"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base"
          >
            Technologies I&apos;ve been working with <br />and i constantly try to improve
          </motion.p>
        </div>
        
        {/* Tech stack items in dark pill format similar to the image */}
        <div className="flex flex-col gap-3 items-center justify-center max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              // Animation for category rows can be kept or simplified if individual items have complex animations
              initial={{ opacity: 0, y: 10 }} // Keeping row animation for now
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.05 * categoryIndex, ease: "easeInOut" }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {category.map((tech, techIndex) => {
                const techData = techStackData.find(t => t.name === tech);
                // Only render if we have the icon data
                if (!techData) return null;
                
                return (
                  <motion.div
                    key={techIndex}
                    className="bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center gap-2 hover:border-zinc-700 transition-all duration-300"
                    initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.05 * (techIndex + categoryIndex * 0.5), // Adjusted delay slightly for category rows
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(39, 39, 42, 0.9)" }}
                  >
                    <div className="w-5 h-5 relative flex-shrink-0">
                      <Image 
                        src={techData.icon} 
                        alt={tech} 
                        width={20} 
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-200 font-medium">{tech}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}