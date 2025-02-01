import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsData } from "@/data/data";

export default function Home() {
  return (
    <div className="">
      <FloatingNav navItems={navItemsData} />
      <Hero/>
    </div>
  );
}
