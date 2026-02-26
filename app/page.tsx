import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background text-foreground">
      <Hero />
      <SocialProof />
    </main>
  );
}
