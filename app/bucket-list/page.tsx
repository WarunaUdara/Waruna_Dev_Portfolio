"use client";

import BucketList from "@/components/BucketList";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsData } from "@/data/data";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BucketListPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <FloatingNav navItems={navItemsData} />
      <BucketList />
      <Footer />
    </div>
  );
}