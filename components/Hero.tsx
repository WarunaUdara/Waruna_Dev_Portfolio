"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderButton } from "./ui/MovingBorderButton";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: [20, -5, 0],
  }}
  transition={{
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1],
  }}
  className="text-2xl px-4 md:text-4xl lg:text-5xl  text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
> <div data-aos="fade-up" data-aos-duration="5500">
  <TextGenerateEffect words="Turning Ideas into Seamless Digital Experiences." className="mb-4" />
  <div className="md:text-6xl sm:text-4xl font-bold mb-4 ">Engineering Innovative</div>
  <Highlight className=" text-black dark:text-white text-6xl md:text-6xl font-bold">
    Solutions
  </Highlight><br />
  </div>
  <MovingBorderButton
    duration={2000}
    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    borderClassName="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
    containerClassName="bg-white dark:bg-black mt-10"
    borderRadius="1rem"
  >
    Download CV
  </MovingBorderButton>
</motion.h1>
     
    </HeroHighlight>
  );
}
