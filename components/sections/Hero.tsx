import { Play, ShieldCheck } from "lucide-react";
import { RetroGrid } from "@/components/ui/RetroGrid";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { BlurFade } from "@/components/ui/BlurFade";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background py-20 md:py-32">
      {/* Background */}
      <RetroGrid />

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6">
        
        {/* Badge Pill */}
        <BlurFade delay={0.1} yOffset={6} blur="6px" className="mb-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
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
              
               {/* Using accent color instead of clip-text gradient for stability during animation */}
                <TextAnimate 
                    text="Sniper Approach" 
                    type="blurInUp" 
                    by="word" 
                    delay={0.4} 
                    className={cn(
                        "block mt-2 pb-2 drop-shadow-sm",
                        // Gradient fallback if needed, but solid accent is safer for animation visibility
                    )}
                    // Force color via style to ensure it overrides inherited text-primary
                    style={{ color: "var(--accent-primary)" }}
                />
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
                    background="var(--accent-primary)"
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
