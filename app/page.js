import Features from "@/components/features";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import clouds from "@/public/images/hero-clouds.jpg";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features />
    </main>
  );
}
