import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground">
      <Hero />
      <SocialProof />
      <Features />
      <Contact />
    </main>
  );
}
