import React from "react";
import Aurora from "./ui/Aurora";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import StarBorder from "./ui/StarBorder";
import Magnet from "./ui/Magnet";
import TextPressure from "./ui/TextPressure";
import Link from "next/link";

const HeroNew = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#000000", background: "#000000 !important" }}
    >
      {/* Aurora background that fills the entire section */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FFFFFF", "#4c0080", "#4c0080"]}
          blend={0.5}
          amplitude={1.5}
          speed={0.3}
        />
      </div>

      {/* Optional semi-transparent overlay to improve text contrast */}
      <div className="absolute inset-0 z-[1] bg-black/50"></div>

      {/* Content positioned above the Aurora background */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-duration="5500"
          className="text-2xl px-4 md:text-4xl lg:text-5xl text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <div className="text-shadow text-shadow-black">
            <TextGenerateEffect
              words="Turning Ideas into Seamless Digital Experiences."
              className="mb-4 text-white"
            />
          </div>

          <div className="md:text-6xl sm:text-4xl font-bold text-shadow-lg text-shadow-black">
            Engineering Innovative
            <br />
            <TextPressure
              text="Solutions"
              className="text-6xl md:text-6xl font-bold"
            />
          </div>

          {/* Personal introduction with animated emojis */}
          <div
            className="text-xl md:text-2xl mt-4 mb-6 tracking-wide flex flex-wrap justify-center items-center gap-2 "
            style={{ opacity: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-tl from-slate-50 to-slate-400">
              Hello, I&apos;m Waruna Udara a Full Stack Developer
            </span>
          </div>          {/* Let's Connect button with StarBorder component and Magnet effect */}
          <div className="mt-12 flex space-x-4 justify-center">
            
              <Link href="#contact">
                <StarBorder
                  as="div"
              
                  speed="6s"
                  className="cursor-pointer transition-transform duration-300"
                >
                  <div className="flex items-center">
                    Let&apos;s Connect
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </StarBorder>
              </Link>
            
            

            <Magnet
              padding={40}
              magnetStrength={10}
              activeTransition="transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1.0)"
            >
              <Link href="/Waruna Udara Sampath - Resume.pdf" download>
                <StarBorder
                  as="div"
                  color="#4338ca"
                  speed="6s"
                  className="cursor-pointer transition-transform duration-300"
                >
                  <div className="flex items-center">
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </StarBorder>
              </Link>
            </Magnet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
