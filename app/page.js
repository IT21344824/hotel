import Features from "@/components/features";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import clouds from "@/public/images/hero-clouds.jpg";

export default function Home() {
  return (
    <main>
      <Hero
        title="Next.js + Shadcn Starter"
        description="Responsive Shadcn starter template with Next.js 14, App Router, Dark Mode, React Icons, Navbar and Footer, and all Shadcn components. And a fun blob."
        image={clouds}
      >
        <div className="flex gap-2">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Hero>
      <Features/>
    </main>
  );
}
