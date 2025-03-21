"use client";

import React from "react";
import Image from "next/image";
import LetterGlitch from "./ui/LetterGlitch";

const techStackItems = [
  {
    quote: "/icons8-react-24.png",
    name: "React",
  },
  {
    quote: "/icons8-spring-boot-48.png",
    name: "Spring Boot",
  },
  {
    quote: "/icons8-java-144.png",
    name: "Java",
  },
  {
    quote: "/aws.png",
    name: "AWS",
  },
  {
    quote: "/ts.png",
    name: "TypeScript",
  },
  {
    quote: "/icons8-nextjs-144.png",
    name: "Next.js",
  },
  {
    quote: "/icons8-tailwind-css-144.png",
    name: "Tailwind CSS",
  },
  {
    quote: "/icons8-docker-144.png",
    name: "Docker",
  },
  {
    quote: "/icons8-bootstrap-144.png",
    name: "Bootstrap",
  },
  {
    quote: "/icons8-postgresql-96.png",
    name: "PostgreSQL",
  },
  {
    quote: "/icons8-mongo-db-96.png",
    name: "MongoDB",
  },
  {
    quote: "/icons8-angular-96.png",
    name: "Angular",
  },
  {
    quote: "/icons8-nodejs-144.png",
    name: "Node.js",
  },
];

export function TechStack() {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* LetterGlitch background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={[
            "#00ff41", // Matrix green
            "#00b4d8", // Cyber blue
            "#0a192f", // Dark navy
            "#7928ca", // Electric purple
            "#38ef7d", // Toxic green
            "#12100e", // Hacker black
            "#00fffb", // Terminal cyan
          ]}
        />
      </div>
      
      {/* Left vignette shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-60 md:w-60 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none opacity-90"></div>
      
      {/* Right vignette shadow */}
      <div className="absolute right-0 top-0 bottom-0 w-60 md:w-60 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-20" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
        </div>
        
        <div className="h-[200px] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <CustomInfiniteMovingCards items={techStackItems} direction="right" speed="fast" />
        </div>
      </div>
    </section>
  );
}

// Custom version of InfiniteMovingCards for tech stack display
const CustomInfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string; // Using quote field for image path
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    addAnimation();
  }, []);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`
        scroller relative z-20 w-full max-w-full overflow-hidden 
        [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
        sm:[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]
        md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]
        ${className}
      `}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 sm:gap-6 md:gap-8 py-2 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
      >
        {items.map((item, idx) => (
          <li
            className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] flex flex-col items-center justify-center rounded-2xl border border-slate-700 px-3 py-4 backdrop-blur-sm bg-opacity-70 bg-white dark:bg-opacity-90 dark:bg-slate-900"
            key={`${item.name}-${idx}`}
          >
            <div className="flex items-center justify-center h-24 w-24 mb-3">
              <Image 
                src={item.quote}
                alt={`${item.name} logo`}
                width={60} 
                height={60}
                className="object-contain" 
              />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                {item.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}