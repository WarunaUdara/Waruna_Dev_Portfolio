/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Patient Management System",
    description: "Engineered a microservices-based hospital management system using Spring Boot, Docker, Kafka, and gRPC. Developed independent services for Patient Management, Billing, and Analytics with robust field-level validations.",
    technologies: [
      { name: "Spring Boot", icon: "/icons8-spring-boot-48.png" },
      { name: "Docker", icon: "/icons8-docker-144.png" },
      { name: "Kafka", icon: "/icons8-apache-kafka-64.png" }
    ],
    image: "/file.svg",
    color: "#3b82f6", // Blue
    bulletPoints: [
      "Microservices architecture with Spring Boot",
      "Real-time updates via Kafka event streams",
      "Containerized with Docker for deployment consistency",
      "Secure RESTful and gRPC APIs for integration",
      "Field-level validation for data integrity"
    ]
  },
  {
    title: "Hardware Inventory Management",
    description: "Developed a full-stack application using Angular, Spring Boot, and MySQL. Implemented comprehensive CRUD operations and advanced search functionalities with pagination and filtering.",
    technologies: [
      { name: "Angular", icon: "/icons8-angular-96.png" },
      { name: "Spring Boot", icon: "/icons8-spring-boot-48.png" },
      { name: "MySQL", icon: "/icons8-mysql-144.png" }
    ],
    image: "/window.svg",
    color: "#ec4899", // Pink
    bulletPoints: [
      "Monolithic architecture with clean separation of concerns",
      "Role-based access control system",
      "CRUD operations",
      
    ]
  },
  {
    title: "POS System",
    description: "Created a desktop application with Java, MySQL, and Jasper Report. Features include user authentication, real-time email notifications, and comprehensive reporting tools.",
    technologies: [
      { name: "Java", icon: "/icons8-java-144.png" },
      { name: "MySQL", icon: "/icons8-mysql-144.png" }
    ],
    image: "/file.svg",
    color: "#10b981", // Emerald
    bulletPoints: [
      "Java desktop application for point-of-sale operations",
      "Real-time inventory and sales tracking",
      "Automated email notifications for orders and alerts",
      "Jasper Report integration for detailed reporting",
      "User authentication and role management"
    ]
  },
  {
    title: "Military Defence System Simulation",
    description: "Simulated defense units management using Java, Java Swing, and the Observer Design Pattern.",
    technologies: [
      { name: "Java", icon: "/icons8-java-144.png" }
    ],
    image: "/globe.svg",
    color: "#f97316", // Orange
    bulletPoints: [
      "Observer Design Pattern for real-time updates",
      "Interactive Java Swing GUI for visualization",
      "Automated response coordination system",
      "Real-time tracking of defensive units",
    ]
  },
  {
    title: "Weather Web Application",
    description: "Built a responsive weather application using HTML, CSS, and vanilla JavaScript. Integrated with a free weather API to provide real-time weather data and forecasts.",
    technologies: [
      { name: "HTML", icon: "/icons8-html5-144.png" },
      { name: "CSS", icon: "/icons8-css3-144.png" },
      { name: "JavaScript", icon: "/icons8-javascript-144.png" }
    ],
    image: "/weather-web-app-project.png",
    color: "#0ea5e9", // Sky blue
    bulletPoints: [
      "Responsive design for all device sizes",
      "Real-time weather data via API integration",
      "Dynamic UI updates based on weather conditions",
      "Search functionality for global locations",
      "3-day weather forecast display",
      "current location weather display"
    ]
  },
  {
    title: "Personal Portfolio",
    description: "Built a website using React.js and Next.js to showcase projects and skills.",
    technologies: [
      { name: "React", icon: "/icons8-react-24.png" },
      { name: "Next.js", icon: "/icons8-nextjs-144.png" },
      { name: "Tailwind CSS", icon: "/icons8-tailwind-css-144.png" }
    ],
    image: "/portfolio-project.png",
    color: "#8b5cf6", // Purple
    bulletPoints: [
      "Next.js framework for optimized performance",
      "React components for interactive UI elements",
      "Tailwind CSS for responsive styling",
      "Framer Motion animations for enhanced UX"
    ]
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to handle scroll and update active project using useCallback
  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const scrollPosition = window.scrollY;
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Only activate scroll effects if user is within the projects section
    if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition <= sectionTop + sectionHeight) {
      // Calculate which project should be active based on scroll position
      const adjustedScrollPosition = Math.max(0, scrollPosition - sectionTop + viewportHeight / 2);
      const projectHeight = viewportHeight * 0.9; // Each project takes approximately 90% of viewport height
      const projectIndex = Math.min(
        Math.floor(adjustedScrollPosition / projectHeight),
        projects.length - 1
      );

      if (projectIndex !== activeProject) {
        setActiveProject(projectIndex);
      }
    }
  }, [activeProject]);

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (    <section id="projects" className="relative w-full py-24" ref={sectionRef}>
      {/* Black background with Aurora effect */}
      <div className="absolute inset-0 bg-black"></div>

      <div data-aos="fade-up" data-aos-duration="1000" className="container mx-auto px-4 mb-16 text-center relative" style={{ zIndex: 10 }}>
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-3 font-medium">MY RECENT WORK</p>
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">Projects</h2>
      </div>

      {/* Desktop Layout */}
      <div data-aos="fade-up" data-aos-duration="1000" className="hidden lg:block relative" style={{ zIndex: 10 }}>
        {/* Fixed project details container */}
        <div className="sticky top-32 h-[calc(100vh-200px)] overflow-hidden">
          <div className="container mx-auto px-4 h-full">
            <div className="flex h-full items-center">
              {/* Left side: Project details */}
              <div className="w-1/2 pr-12">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-left"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="h-1 w-8 mr-4 rounded-full"
                      style={{ backgroundColor: projects[activeProject].color }}
                    ></div>
                    <h3 className="text-4xl font-bold text-white">{projects[activeProject].title}</h3>
                  </div>
                  <p className="text-gray-300 mb-8 text-lg">{projects[activeProject].description}</p>

                  <div className="space-y-3 mb-10">
                    {projects[activeProject].bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start">
                        <span
                          className="mr-3 mt-1.5 flex-shrink-0"
                          style={{ color: projects[activeProject].color }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L16.6569 7.07107L18.0711 8.48528L10.2426 16.3137Z" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {projects[activeProject].technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center bg-gray-800/40 backdrop-blur-sm px-3 py-1.5 rounded-full"
                      >
                        <Image
                          src={tech.icon}
                          width={16}
                          height={16}
                          alt={tech.name}
                          className="mr-2"
                        />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right side: Project images */}
              <div className="w-1/2 pl-12 flex justify-center items-center">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="absolute w-full max-w-lg aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
                    style={{
                      borderColor: project.color,
                      borderWidth: "1px",
                      backgroundColor: `${project.color}10`,
                      boxShadow: `0 20px 40px -10px ${project.color}30`,
                      opacity: activeProject === index ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      pointerEvents: activeProject === index ? "auto" : "none",
                      minHeight: "240px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10 opacity-60"></div>
                    <Image
                      src={project.image}
                      fill
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      alt={project.title}
                      className={
                        project.image.includes(".png")
                          ? "object-contain z-20"
                          : "object-contain filter brightness-150 z-20"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer elements to allow scrolling to trigger project changes */}
        <div>
          {projects.map((_, index) => (
            <div key={index} className="h-screen" />
          ))}
        </div>
        
        {/* Add extra space at the bottom to allow scrolling through all projects */}
        <div className="h-[30vh]"></div>
      </div>

      {/* Mobile Layout - Regular scrolling card style */}
      <div className="lg:hidden relative z-10">
        <div className="container mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="mb-16 pb-16 border-b border-gray-800 last:border-0"
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div
                className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-8"
                style={{
                  borderColor: project.color,
                  borderWidth: '1px',
                  backgroundColor: `${project.color}10`,
                  boxShadow: `0 20px 40px -10px ${project.color}30`,
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10 opacity-60"></div>
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  alt={project.title}
                  className={project.image.includes(".png") ? "object-contain z-20" : "object-contain filter brightness-150 z-20"}
                />
              </div>

              <div className="text-left">
                <div className="flex items-center mb-4">
                  <div
                    className="h-1 w-6 mr-3 rounded-full"
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="space-y-3 mb-6">
                  {project.bulletPoints.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <span
                        className="mr-3 mt-1 flex-shrink-0"
                        style={{ color: project.color }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L16.6569 7.07107L18.0711 8.48528L10.2426 16.3137Z" />
                        </svg>
                      </span>
                      <span className="text-gray-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center bg-gray-800/40 px-2 py-1 rounded-full">
                      <Image
                        src={tech.icon}
                        width={12}
                        height={12}
                        alt={tech.name}
                        className="mr-1.5"
                      />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
