import { Hero } from "@/components/component/hero";
import { Refic } from "@/components/component/refic";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Refic/>
      
    </main>
  );
}
