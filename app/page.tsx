"use client";
import Footer from "@/components/Footer";
import HeroNew from "@/components/HeroNew";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsData } from "@/data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="">
      <FloatingNav navItems={navItemsData} />
      <HeroNew/>
      <TechStack/>
      <Footer/>
    </div>
  );
}
