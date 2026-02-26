import { Play, ShieldCheck } from "lucide-react";
import { RetroGrid } from "@/components/ui/RetroGrid";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { AuroraText } from "@/components/ui/AuroraText";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { BlurFade } from "@/components/ui/BlurFade";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background py-20 md:py-32">
      {/* Background */}
      <RetroGrid />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6">
        
        {/* Badge Pill */}
        <BlurFade delay={0.1} yOffset={6} blur="6px" className="mb-6">
          <div className="inline-flex items-center rounded-full border border-[oklch(1_0_0/0.08)] bg-[oklch(0.16_0.02_260/0.8)] px-4 py-1.5 backdrop-blur-md">
            <span className="mr-2 text-lg">✨</span>
            <AnimatedShinyText className="text-[0.8125rem] font-medium tracking-wide">
              AI-Powered Resume Optimization
            </AnimatedShinyText>
          </div>
        </BlurFade>

        {/* Headline */}
        <div className="mx-auto mt-6 mb-4 max-w-4xl text-center font-bold tracking-tight text-primary">
            <h1 className="text-5xl md:text-7xl lg:text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1]">
              <BlurFade delay={0.25} yOffset={8} blur="8px">
                <span className="block mb-2 text-primary">Get Hired with the</span>
              </BlurFade>
              
               {/* Using AuroraText for the highlighted part as per blueprint */}
                <BlurFade delay={0.4} yOffset={8} blur="8px">
                  <AuroraText className="block mt-2 pb-2 drop-shadow-sm text-[1.1em]">
                    Sniper Approach
                  </AuroraText>
                </BlurFade>
            </h1>
        </div>

        {/* Sub-headline */}
        <BlurFade delay={0.5} yOffset={10}>
          <p className="mx-auto mt-4 mb-8 max-w-xl text-center text-lg text-secondary leading-relaxed">
            Your resume goes from ignored to interview-ready in under 60 seconds.
            Precision AI targeting that beats ATS algorithms.
          </p>
        </BlurFade>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <BlurFade delay={0.65} yOffset={10}>
                <ShimmerButton 
                    className="shadow-2xl"
                    background="oklch(0.65 0.25 250 / 0.9)"
                    shimmerColor="var(--accent-primary)"
                    shimmerDuration="3s"
                >
                    <Play className="mr-2 h-4 w-4 fill-current" />
                    <span className="text-white font-medium">Start for Free</span>
                </ShimmerButton>
            </BlurFade>
            
            <BlurFade delay={0.75} yOffset={10}>
                <div className="flex items-center gap-2 text-sm text-tertiary">
                    <ShieldCheck className="h-4 w-4" />
                    <span>No credit card required</span>
                </div>
            </BlurFade>
        </div>
      </div>
    </section>
  );
}
