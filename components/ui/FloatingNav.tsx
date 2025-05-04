"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // NavItem being hovered (for animation)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-white/5 dark:bg-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          // Adjust padding for better mobile responsiveness
          "px-2 sm:pr-2 sm:pl-8 py-2",
          // Reduce spacing between items on mobile
          "space-x-1 sm:space-x-4",
          // Add overflow handling to prevent items from popping out
          "overflow-hidden",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        <div className="flex items-center justify-center overflow-x-auto px-1 sm:px-0 no-scrollbar">
          {navItems.map((navItem: NavItem, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 rounded-full transition-colors whitespace-nowrap",
                // Adjust padding for mobile
                "py-1 sm:py-2 px-2 sm:px-3"
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav-item-highlight"
                  className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/[0.05] -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.3 }}
                />
              )}
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs sm:text-sm font-medium">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}