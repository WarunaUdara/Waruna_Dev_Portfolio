"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LetterGlitch from "./ui/LetterGlitch";
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform, useMotionValue } from "framer-motion";

const techStackItems = [
  // Languages & Core
  { quote: "/icons8-java-144.png", name: "Java" },
  { quote: "/icons8-spring-boot-48.png", name: "Spring Boot" },
  { quote: "/icons8-python-144.png", name: "Python" },
  { quote: "/icons8-c-144.png", name: "C" },
  { quote: "/icons8-javascript-144.png", name: "JavaScript" },
  { quote: "/ts.png", name: "TypeScript" },
  { quote: "/icons8-html5-144.png", name: "HTML" },
  { quote: "/icons8-css3-144.png", name: "CSS" },
  
  // Frontend
  { quote: "/icons8-react-24.png", name: "React.js" },
  { quote: "/icons8-nextjs-144.png", name: "Next.js" },
  { quote: "/icons8-angular-96.png", name: "Angular" },
  { quote: "/icons8-bootstrap-144.png", name: "Bootstrap" },
  { quote: "/icons8-tailwind-css-144.png", name: "Tailwind CSS" },
  { quote: "/icons8-figma-96.png", name: "Figma" },
  
  // Backend
  { quote: "/hibernate.png", name: "Hibernate" },
  { quote: "/icons8-apache-kafka-64.png", name: "Kafka" },
  { quote: "/icons8-swagger-144.png", name: "Swagger" },
  
  // Database
  { quote: "/icons8-postgresql-96.png", name: "PostgreSQL" },
  { quote: "/icons8-mysql-144.png", name: "MySQL" },
  
  // DevOps & Tools
  { quote: "/icons8-docker-144.png", name: "Docker" },
  { quote: "/aws.png", name: "AWS" },
  { quote: "/icons8-postman-inc-96.png", name: "Postman" },
  { quote: "/icons8-git-144.png", name: "Git" },
  { quote: "/icons8-github-50.png", name: "GitHub" },
  { quote: "/icons8-gitlab-96.png", name: "GitLab" },
  { quote: "/icons8-vs-code-96.png", name: "VS Code" },
  { quote: "/icons8-intellij-idea-96.png", name: "IntelliJ IDEA" },
  { quote: "/vercel.png", name: "Vercel" },
];

// Group by category for rows
const categories = [
  ["Java", "Spring Boot", "Python", "C", "JavaScript", "TypeScript"],
  ["React.js", "Next.js", "Angular", "Bootstrap", "Tailwind CSS", "HTML", "CSS"],
  ["PostgreSQL", "MySQL", "Hibernate", "Kafka", "Swagger"],
  ["Git", "GitHub", "GitLab", "Docker", "AWS", "Postman"],
  ["VS Code", "IntelliJ IDEA", "Vercel", "Figma"]
];

export function TechStack() {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  
  // Track scroll direction explicitly
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  
  // MotionValue for rotation with independent control
  const rotationValue = useMotionValue(0);
  
  // Create a spring animation for smooth rotation
  const smoothRotation = useSpring(rotationValue, {
    stiffness: 15,     // Lower value for more fluid rotation
    damping: 30,       // Higher value for less oscillation
    mass: 3,           // Higher mass for more inertial feeling
    restDelta: 0.001   // Small value for precision
  });

  // Update rotation based on scroll direction
  useMotionValueEvent(scrollY, "change", (current) => {
    if (sectionRef.current && sectionInView) {
      const prevScrollY = lastScrollY.current;
      const direction = current > prevScrollY ? "down" : "up";
      
      // Update direction state for potential UI feedback
      setScrollDirection(direction);
      
      // Calculate rotation increment based on scroll amount and direction
      const scrollDelta = Math.abs(current - prevScrollY);
      // Scale factor for rotation (adjust for sensitivity)
      const rotationFactor = 0.5; 
      
      // Apply rotation in correct direction: clockwise for down, counter-clockwise for up
      if (direction === "down") {
        rotationValue.set(rotationValue.get() + (scrollDelta * rotationFactor));
      } else {
        rotationValue.set(rotationValue.get() - (scrollDelta * rotationFactor));
      }
      
      lastScrollY.current = current;
    }
  });

  // Track when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "100px" } // Increased margin to start animation earlier
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Reset scroll tracking when section comes into view
  useEffect(() => {
    if (sectionInView) {
      lastScrollY.current = window.scrollY;
    }
  }, [sectionInView]);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef} 
      className="py-5 pt-16 md:pt-15 relative overflow-hidden"
    >
      {/* Dark background with subtle texture - z-index lowered */}
      <div className="absolute inset-0 bg-black z-0 opacity-95">
        <div className="absolute inset-0 bg-dot-thick-neutral-800/20 pointer-events-none"></div>
      </div>
      
      {/* LetterGlitch background with enhanced styling - z-index lowered */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-10">
        <LetterGlitch
          glitchSpeed={40}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={[
            "#00ff41", // Matrix green
            "#00b4d8", // Cyber blue
            "#7928ca", // Electric purple
          ]}
        />
      </div>
      
      {/* Container with improved animations */}
      <div 
        className="container mx-auto px-4 relative z-10 max-w-5xl" 
        data-aos="fade-up"
      >
        <div className="text-center mb-16 relative">
          {/* Flower with increased z-index to appear above masked layers */}
          <div className="absolute inset-0 flex items-center justify-center overflow-visible z-[5]">
            <motion.div
              ref={flowerRef}
              style={{ 
                rotate: smoothRotation,
                width: "350px",
                height: "350px",
                position: "absolute",
                willChange: "transform",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
            >
              <Image 
                src="/flower.png" 
                alt="" 
                fill
                className="object-contain opacity-35"
                priority
              />
            </motion.div>
          </div>

          {/* Enhanced text animation with higher z-index to stay on top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-[10] py-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm uppercase tracking-wider mb-3 font-medium"
            >
              I CONSTANTLY TRY TO IMPROVE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-5xl sm:text-6xl font-bold text-white"
            >
              My Tech Stack
            </motion.h2>
          </motion.div>
        </div>
        
        {/* Tech stack categories with enhanced animations */}
        <div className="space-y-3">
          {categories.map((rowTechs, rowIndex) => (
            <motion.div 
              key={`row-${rowIndex}`} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: rowIndex * 0.15,
                ease: "easeOut"
              }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {rowTechs.map((techName, itemIndex) => {
                const tech = techStackItems.find(item => item.name === techName);
                if (!tech) return null;
                
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: rowIndex * 0.1 + (itemIndex * 0.05),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="transition-all duration-300"
                  >
                    <motion.div 
                      className="flex items-center gap-2 bg-[#111111] border border-[#333333] rounded-full py-2 px-4 h-10"
                      whileHover={{ 
                        backgroundColor: "rgba(30, 30, 30, 0.8)",
                        borderColor: "rgba(80, 80, 80, 0.8)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 relative">
                        <Image 
                          src={tech.quote} 
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-200 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
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