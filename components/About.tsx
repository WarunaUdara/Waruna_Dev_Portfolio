"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-20"
    >
      {/* Dark background for the about section */}
      <div className="absolute inset-0 bg-black z-0"></div>

      

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h3 className="uppercase text-gray-300 text-sm font-semibold tracking-widest mb-2">
            KNOW ABOUT ME
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text content - takes 3 columns on large screens */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Full-Stack Developer and <br className="hidden md:block" />
              <span className="inline-flex">
                a little bit of{" "}
                <motion.span
                  className="bg-clip-text text-transparent mx-2 pb-1 inline-block"
                  style={{ lineHeight: "1.2", paddingBottom: "5px" }}
                  animate={{
                    backgroundImage: [
                      "linear-gradient(to right, #8a2be2, #ff69b4)",
                      "linear-gradient(to right, #7928ca, #ff0080)",
                      "linear-gradient(to right, #4338ca, #c026d3)",
                      "linear-gradient(to right, #8a2be2, #ff69b4)",
                      
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  everything
                </motion.span>
              </span>
            </h1>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I&apos;m Waruna Udara Sampath, a proactive full-stack developer
                passionate about creating dynamic web experiences. From frontend
                to backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans Java, Spring Boot, React,
                Next.js and I&apos;m always eager to learn more.
              </p>

              <p className="text-lg leading-relaxed">
                When I&apos;m not immersed in work, I&apos;m exploring new ideas
                and staying curious. Life&apos;s about balance, and I love
                embracing every part of it.
              </p>

              <p className="text-lg leading-relaxed">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/waruna-udara/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/WarunaUdara"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="mailto:warunaudarasam2003@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image - takes 2 columns on large screens */}
          <div
            className="lg:col-span-2 flex justify-center"
            data-aos="fade-left"
          >
            <div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500"
              style={{
                background: "linear-gradient(145deg, #7928ca, #4c0080)",
              }}
            >
              <Image
                src="/Picsart_my propic.jpg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
